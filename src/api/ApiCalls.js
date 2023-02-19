const api_key = 'a1ade2adb0a147e81c3115c498bbb1c7';
const event_id = 'we_2023';
const front_id = 'we_2023_bg';

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
    console.log(final_tank_counts);
    return final_tank_counts;
};