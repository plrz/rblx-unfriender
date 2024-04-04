const users = [
  {
    "isDeleted": false,
    "friendFrequentScore": 0,
    "friendFrequentRank": 201,
    "hasVerifiedBadge": false,
    "description": null,
    "created": "0001-01-01T05:51:00Z",
    "isBanned": false,
    "externalAppDisplayName": null,
    "id": 1,
    "name": "Roblox",
    "displayName": "Roblox"
  }
]
// replace above variable contents with the result you get from the API, then remove the people you aren't willing to unfriend

const hideusers = false
try {
    users.forEach(async user => {
      const request = fetch(`https://friends.roblox.com/v1/users/${user.id}/unfriend`, {"headers": { 
        "cache-control": "no-cache",
        "content-length": 2,
        "content-type": "application/json; charset=utf-8",
        "nel": {"report_to":"network-errors","max_age":604800,"success_fraction":0.001,"failure_fraction":1},
        "report-to": {"group":"network-errors","max_age":604800,"endpoints":[{"url":"https://ncs.roblox.com/upload"}]},
        "server": "Kestrel",
        "strict-transport-security": "max-age=3600",
        "x-firefox-spdy": "h2",
        "x-frame-options": "SAMEORIGIN",
        "x-roblox-edge": "lga2",
        "x-roblox-region": "us-central"
        },"method": "POST"})

        if (hideusers === true) {
            console.log(`Succefully unfriended a user! (hideusers is ON)`)
        } else {
            console.log(`Succefully unfriended ${user.displayName} (@${user.name})! (UID: ${user.id})`)
        }
    });
    console.log('Successfully unfriended everyone.')
} catch(error) {
    console.error(error)
}
