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
                    "name": 1,
                    "mass": 1
                },
                "sort":{
                    "mass.kg": "desc"
                },
                "limit": 1
            }
        })
    }
    let res = await fetch("https://api.spacexdata.com/v4/capsules/query", config);
    let {docs:[{mass} = maxMassRocket]} = await res.json();
    return mass;
}