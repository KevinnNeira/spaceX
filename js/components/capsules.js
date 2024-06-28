export const getAllCapsules = async (page,limit)=>{
    let config = {
        headers:{
            "content-type": "application/json"
        },
        method: "POST",
        body: JSON.stringify({
            "options": {
                page,
                limit
            }
        })
    }
    let res = await fetch("https://api.spacexdata.com/v4/capsules/query", config)
    let data = await res.json();
    console.log(data);
    return data;
}
export const getReuseCount  = async() =>{
    let config = {
        headers:{
            "content-type": "application/json"
        },
        method: "POST",
        body: JSON.stringify({
            "options": {
                "select": {
                    "serial": 1,
                    "reuse_count": 1
                },
            }
        })
    }
    let res = await fetch("https://api.spacexdata.com/v4/capsules/query", config);
    return res;
}

export const getWaterLandings = async()=>{
    let config = {
        headers:{
            "content-type": "application/json"
        },
        method: "POST",
        body: JSON.stringify({
            "options": {
                "select": {
                    "serial": 1,
                    "water_landings": 1
                },
            }  
        })  
    }
    let res = await fetch("https://api.spacexdata.com/v4/capsules/query", config);
    return res;
}
export const getLandLandings = async()=>{
    let config = {
        headers:{
            "content-type": "application/json"
        },
        method: "POST",
        body: JSON.stringify({
            "options": {
                "select": {
                    "serial": 1,
                    "land_landings": 1
                },
            }  
        })  
    }
    let res = await fetch("https://api.spacexdata.com/v4/capsules/query", config);
    return res;
}
export const getLastUpdate = async()=>{
    let config = {
        headers:{
            "content-type": "application/json"
        },
        method: "POST",
        body: JSON.stringify({
            "options": {
                "select": {
                    "serial": 1,
                    "last_update": 1
                },
            }  
        })  
    }
    let res = await fetch("https://api.spacexdata.com/v4/capsules/query", config);
    return res;
}
export const getLaunches = async()=>{
    let config = {
        headers:{
            "content-type": "application/json"
        },
        method: "POST",
        body: JSON.stringify({
            "options": {
                "select": {
                    "serial": 1,
                    "launches": [
                        "5eb87cdeffd86e000604b330"
                    ],
                },
            }  
        })  
    }
    let res = await fetch("https://api.spacexdata.com/v4/capsules/query", config);
    return res;
}
export const getSerial = async()=>{
    let config = {
        headers:{
            "content-type": "application/json"
        },
        method: "POST",
        body: JSON.stringify({
            "options": {
                "select": {
                    "serial": 1,
                },
            }  
        })  
    }
    let res = await fetch("https://api.spacexdata.com/v4/capsules/query", config);
    return res;
}
export const getStatus = async()=>{
    let config = {
        headers:{
            "content-type": "application/json"
        },
        method: "POST",
        body: JSON.stringify({
            "options": {
                "select": {
                    "serial": 1,
                    "status": 1
                },
            }  
        })  
    }
    let res = await fetch("https://api.spacexdata.com/v4/capsules/query", config);
    return res;
}
export const getType = async()=>{
    let config = {
        headers:{
            "content-type": "application/json"
        },
        method: "POST",
        body: JSON.stringify({
            "options": {
                "select": {
                    "serial": 1,
                    "type": 1
                },
            }  
        })  
    }
    let res = await fetch("https://api.spacexdata.com/v4/capsules/query", config);
    return res;
}
export const getId = async()=>{
    let config = {
        headers:{
            "content-type": "application/json"
        },
        method: "POST",
        body: JSON.stringify({
            "options": {
                "select": {
                    "serial": 1,
                    "id": 1
                },
            }  
        })  
    }
    let res = await fetch("https://api.spacexdata.com/v4/capsules/query", config);
    return res;
}