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
        console.log(result.data);
        return result.data;
    });
    let prev = {};
    for (const elem in fameCutoffPage) {
        if (fameCutoffPage[elem]["award_level"] > cutoff) {
            console.log( prev["fame_points"]);
            return prev["fame_points"];
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
        console.log(result.data);
        return result.data;
    });
    console.log(playerCampaignStats);
    let result = {};
    result.rank = playerCampaignStats[account_id]["events"][event_id][0]["award_level"];
    result.fame = playerCampaignStats[account_id]["events"][event_id][0]["fame_points"];
    console.log(result);
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