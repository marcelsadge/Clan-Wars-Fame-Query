import { wn8Formula } from "./util";

const api_key = 'a1ade2adb0a147e81c3115c498bbb1c7';
const event_id = 'we_2023';
const front_id = 'we_2023_bg';

export async function getTankNameById() {
    const vehicleInfo = await fetch(`https://api.worldoftanks.com/wot/encyclopedia/vehicles/?application_id=${api_key}`, {
            method: 'GET'
        }).then((response) => response.json())
            .then((result) => {
                return result.data;
            });
    for (const tank in vehicleInfo) {
        localStorage.setItem(tank, vehicleInfo[tank]['short_name']);
    }
}

export async function getClanMapData(id) {
    let adjMap = new Map();
    let uniqueClans = [];
    let clanData = [];
    const clanInfo = await fetch(`https://api.worldoftanks.com/wot/clans/info/?application_id=${api_key}&clan_id=${id}`, {
        method: 'GET'
    }).then((response) => response.json())
        .then((result) => {
            return result.data;
        });
    const clanMembers = clanInfo[id]['members'];
    for (const member of clanMembers) {
        const member_id = member.account_id;
        const clanHistory = await fetch(`https://api.worldoftanks.com/wot/clans/memberhistory/?application_id=${api_key}&account_id=${member_id}`, {
            method: 'GET'
        }).then((response) => response.json())
            .then((result) => {
                return result.data;
            });
        let currClan = id;
        for (const clan of clanHistory[member_id]) {
            const clan_id = clan.clan_id;
            const arr = [clan_id, currClan];
            if (!uniqueClans.includes(clan_id)) {
                uniqueClans.push(clan_id);
                const query = await fetch(`https://api.worldoftanks.com/wot/clans/info/?application_id=${api_key}&clan_id=${clan_id}`, {
                    method: 'GET'
                }).then((response) => response.json())
                    .then((result) => {
                        return result.data;
                    });
                clanData.push(query[clan_id.toString()]);
            }
            if (!(arr in adjMap)) {
                adjMap.set([clan_id, currClan], 1);
                currClan = clan_id;
            } else {
                let count = adjMap.get([clan_id, currClan]);
                count += 1;
                adjMap.set([clan_id, currClan], count);
            }
        }
    }
    return [adjMap, clanData];
}

export async function getPlayerStatistics(player_id) {
    const expectedValues = await fetch(`https://static.modxvm.com/wn8-data-exp/json/wn8exp.json`, {
        method: 'GET'
    }).then((response) => response.json())
        .then((result) => {
            return result.data;
        });
    const valuesMap = new Map();
    for (const value in expectedValues) {
        valuesMap.set(expectedValues[value]['IDNum'], expectedValues[value]);
    }
    const playerStats = await fetch(`https://api.worldoftanks.com/wot/tanks/stats/?application_id=${api_key}&account_id=${player_id}`, {
        method: 'GET'
    }).then((response) => response.json())
        .then((result) => {
            return result.data;
        });
    return calculateOverallWN8(player_id, valuesMap, playerStats);;
}

export async function calculateOverallWN8(player_id, valuesMap, playerStats) {
    let res = {};
    let tankList = [];
    let totalDamage = 0;
    let totalFrags = 0;
    let totalSpots = 0;
    let totalDef = 0;
    let totalWr = 0;
    let totalExpDamage = 0;
    let totalExpFrag = 0;
    let totalExpSpot = 0;
    let totalExpDef = 0;
    let totalExpWr = 0;
    const vehicles = playerStats[player_id];
    for (const element in vehicles) {
        const tank = vehicles[element]['all'];
        if (tank['battles'] !== 0) {
            let currVehicle = {};
            const vehicleExp = valuesMap.get(vehicles[element]['tank_id']);
            if (vehicleExp) {
                currVehicle['avg_dmg'] = tank['damage_dealt'] / tank['battles'];
                currVehicle['avg_spots'] = tank['spotted'] / tank['battles'];
                currVehicle['avg_frag'] = tank['frags'] / tank['battles'];
                currVehicle['avg_def'] = tank['dropped_capture_points'] / tank['battles'];
                currVehicle['wr'] = tank['wins'] / tank['battles'];

                totalDamage += tank['damage_dealt'];
                totalFrags += tank['frags'];
                totalSpots += tank['spotted'];
                totalDef += tank['dropped_capture_points'];
                totalWr += (currVehicle['wr'] * 100) * tank['battles'];

                totalExpDamage += vehicleExp.expDamage * tank['battles'];
                totalExpFrag += vehicleExp.expFrag * tank['battles'];
                totalExpSpot += vehicleExp.expSpot * tank['battles'];
                totalExpDef += vehicleExp.expDef * tank['battles'];
                totalExpWr += vehicleExp.expWinRate * tank['battles'];

                if (vehicleExp) {
                    const WN8 = wn8Formula(currVehicle['avg_dmg'], currVehicle['avg_spots'], currVehicle['avg_frag'], 
                        currVehicle['avg_def'], currVehicle['wr'] * 100, vehicleExp.expDamage, vehicleExp.expSpot,
                            vehicleExp.expFrag, vehicleExp.expDef, vehicleExp.expWinRate);
                    tankList.push({
                        'tank_id': vehicles[element]['tank_id'],
                        'name': localStorage.getItem(vehicles[element]['tank_id']),
                        'wn8': WN8, 
                        'avg_dmg': currVehicle['avg_dmg'],
                        'avg_spots': currVehicle['avg_spots'],
                        'avg_frag': currVehicle['avg_frag'],
                        'avg_def': currVehicle['avg_def'],
                        'wr': currVehicle['wr'],
                    })
                }
            }
        }
        
    }
    const overallWN8 = wn8Formula(totalDamage, totalSpots, totalFrags, totalDef, totalWr,
            totalExpDamage, totalExpSpot, totalExpFrag, totalExpDef, totalExpWr);
    res['tankData'] = tankList;
    res['overallWn8'] = overallWN8;
    return res;
}

export async function getPlayerOverallStats(player_id) {
    const overallStats = await fetch(`https://api.worldoftanks.com/wot/account/info/?application_id=${api_key}&account_id=${player_id}`, {
        method: 'GET'
    }).then((response) => response.json())
        .then((result) => {
            return result.data;
        });
    return overallStats;
}

export async function getFameCutoff(cutoff) {
    const page = Math.ceil(cutoff / 100);
    const fameCutoffPage = await fetch(`https://api.worldoftanks.com/wot/globalmap/eventaccountratings/?application_id=${api_key}&event_id=${event_id}&front_id=${front_id}&limit=100&page_no=${page}`, {
        method: 'GET'
    })
    .then((response) => response.json())
    .then((result) => {
        return result.data;
    });
    let prev = {};
    for (const elem in fameCutoffPage) {
        if (fameCutoffPage[elem]["award_level"] > cutoff) {
            return [prev["fame_points"], prev["updated_at"]];
        }
        prev = fameCutoffPage[elem];
    }
    return "";
}

export async function getPlayersFamePoints(cutoff) {
    const count = 100;
    let pageNum = 0;
    let arrayOfPlayers = [];
    while (pageNum < count) {
        const fameLeaderboard = await fetch(`https://api.worldoftanks.com/wot/globalmap/eventaccountratings/?application_id=${api_key}&event_id=${event_id}&front_id=${front_id}&limit=100&page_no=${pageNum}`, {
            method: 'GET'
        })
        .then((response) => response.json())
        .then((result) => {
            return result.data;
        });
        arrayOfPlayers.push(fameLeaderboard);
        pageNum++;
    }
    const result = arrayOfPlayers.flat(1);
    for (const elem in result) {
        if (result[elem]) {
            if (result[elem]["award_level"] == cutoff) {
                return result[elem]["fame_points"];
            }
        }
    }
    return "";
}

export async function getPlayerFamePoints(account_id) {
    const playerCampaignStats = await fetch(`https://api.worldoftanks.com/wot/globalmap/eventaccountinfo/?application_id=${api_key}&account_id=${account_id}&front_id=${front_id}&event_id=${event_id}`, {
        method: 'GET'
    })
    .then((response) => response.json())
    .then((result) => {
        return result.data;
    });
    let result = {};
    result.rank = playerCampaignStats[account_id]["events"][event_id][0]["award_level"];
    result.fame = playerCampaignStats[account_id]["events"][event_id][0]["fame_points"];
    result.battles = playerCampaignStats[account_id]["events"][event_id][0]["battles"];
    return result;
}

export async function getPlayerId(player) {
    const id = await fetch(`https://api.worldoftanks.com/wot/account/list/?application_id=${api_key}&search=${player}`, {
        method: 'GET'
    }).then((response) => response.json())
        .then((result) => {
            return result.data;
        });
    for (const element in id) {
        if (id[element]['nickname'].toLowerCase() === player.toLowerCase()) {
            return [id[element]['account_id'], id[element]['nickname']];
        }
    }
    return '';
}

export async function getClanId(clan) {
    const data = await fetch(`https://api.worldoftanks.com/wot/clans/list/?application_id=${api_key}&search=${clan}`, {
        method: 'GET'
    }).then((response) => response.json())
        .then((result) => {
            return result.data;
        });
    for (const element in data) {
        if (data[element]['tag'] === clan) {
            return data[element]['clan_id'];
        }
    }
    return '';
}

export async function getAllClanMemberIds(clan_id) {
    let result = [];
    let names = [];
    const data = await fetch(`https://api.worldoftanks.com/wot/clans/info/?application_id=${api_key}&clan_id=${clan_id}`, {
        method: 'GET'
    }).then((response) => response.json())
        .then((result) => {
            return result.data;
        });
    const members = data[clan_id]["members"];
    for (const element in members) {
        result.push(members[element]["account_id"]);
        names.push(members[element]["account_name"]);
    }
    return [result, names];
}

export async function getAllPlayersFameFromClan(player_ids) {
    let allPlayersJson = [];
    let count = 0;
    const playerList = player_ids[0];
    for (const elem in playerList) {
        const playerFame = await getPlayerFamePoints(playerList[elem]);
        playerFame.player = player_ids[1][count];
        allPlayersJson.push(playerFame);
        count++;
    }
    return allPlayersJson;
};

export async function getTankClanCount(cutoff) {
    const count = 100;
    let pageNum = 0;
    let arrayOfPlayers = [];
    while (pageNum < count) {
        const fameLeaderboard = await fetch(`https://api.worldoftanks.com/wot/globalmap/eventaccountratings/?application_id=${api_key}&event_id=${event_id}&front_id=${front_id}&limit=100&page_no=${pageNum}`, {
            method: 'GET'
        })
        .then((response) => response.json())
        .then((result) => {
            return result.data;
        });
        arrayOfPlayers.push(fameLeaderboard);
        pageNum++;
    }
    const result = arrayOfPlayers.flat(1);
    let tankCount = {};
    for (const elem in result) {
        if (result[elem]) {
            if (result[elem]["fame_points"] > cutoff) {
                if (tankCount[result[elem]["clan_id"]]) {
                    tankCount[result[elem]["clan_id"]] = tankCount[result[elem]["clan_id"]] + 1;
                } else {
                    tankCount[result[elem]["clan_id"]] = 1;
                }
            }
        }
    }
    const clans = Object.keys(tankCount);
    const tank_count = Object.values(tankCount);
    let clanNames = [];
    for (const clan in clans) {
        const clan_id = clans[clan];
        const clanInfo = await fetch(`https://api.worldoftanks.com/wot/clans/info/?application_id=${api_key}&clan_id=${clan_id}`, {
            method: 'GET'
        })
        .then((response) => response.json())
        .then((result) => {
            return result.data;
        });
        if (clanInfo) {
            if (clanInfo[clan_id]["tag"]) {
                clanNames.push(clanInfo[clan_id]["tag"]);
            } else {
                clanNames.push("Error");
            }
        }
    }
    let final_tank_counts = [];
    let i = 0;
    while (i < clans.length) {
        let store_info = {};
        store_info["clan_name"] = clanNames[i];
        store_info["tank_count"] = tank_count[i];
        final_tank_counts.push(store_info);
        i++;
    }
    final_tank_counts.sort((a,b) => a.tank_count - b.tank_count);
    final_tank_counts.reverse();
    return final_tank_counts;
};

export async function getAllClanIds() {
    const count = 308;
    let pageNum = 1;
    let arrayOfPlayers = [];
    while (pageNum < count) {
        const clanDetails = await fetch(`https://api.worldoftanks.com/wot/clans/list/?application_id=${api_key}&limit=100&page_no=${pageNum}`, {
            method: 'GET'
        })
        .then((response) => response.json())
        .then((result) => {
            return result.data;
        });
        for (const clan in clanDetails) {
            console.log(clanDetails[clan]["clan_id"]);
            arrayOfPlayers.push(clanDetails[clan]["clan_id"]);
        }
        pageNum++;
    }
    console.log(arrayOfPlayers);
    return arrayOfPlayers;
};

export async function getAvailableClans(clan_ids) {
    let count = 0;
    for (const id in clan_ids) {
        const clanDetails = await fetch(`https://api.worldoftanks.com/wot/globalmap/eventclaninfo/?application_id=${api_key}&clan_id=${clan_ids[id]}&event_id=we_2023&front_id=we_2023_bg`, {
            method: 'GET'
        })
        .then((response) => response.json())
        .then((result) => {
            return result.data;
        });
        if (clanDetails[clan_ids[id]]["events"]["we_2023"][0]["battles"] != 0) {
            console.log(clanDetails);
            count++;
            console.log(count);
        }
    }
    return count;
};

export async function getPlayerTankStats(player_id) {
    return await fetch(`https://api.worldoftanks.com/wot/account/tanks/?application_id=${api_key}&account_id=${player_id}`, {
        method: 'GET'})
    .then((response) => response.json())
    .then((result) => {
        return result['data'][player_id.toString()];
    });
}

export async function calculateOverallWinRate(player_id) {
    const tankStats = await getPlayerTankStats(player_id);
    let wins = 0;
    let battles = 0;
    for (const item in tankStats) {
        wins += tankStats[item]["statistics"]["wins"];
        battles += tankStats[item]["statistics"]["battles"];
    }
    return ((wins / battles) * 100).toFixed(2) + '%';
}

export async function getClanFromPlayer(player_id) {
    return await fetch(`https://api.worldoftanks.com/wot/account/info/?application_id=${api_key}&account_id=${player_id}`, {
        method: 'GET'
    })
    .then((response) => response.json())
    .then((result) => {
        console.log(result['data'][player_id.toString()]['clan_id']);
        return result['data'][player_id.toString()]['clan_id'];
    });
}

export async function getClanEmblem(clan_id) {
    return await fetch(`https://api.worldoftanks.com/wot/clans/info/?application_id=${api_key}&clan_id=${clan_id}`, {
        method: 'GET'
    })
    .then((response) => response.json())
    .then((result) => {
        return result['data'][clan_id.toString()]['emblems']['x195']['portal'];
    });
}