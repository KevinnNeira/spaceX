export const getAllRockets = async () => {
    const response = await fetch("https://api.spacexdata.com/v4/rockets");
    
    if (!response.ok) {
        throw new Error(`${response.status}`);
    }
    const data = await response.json();
    return data;
};

export const getRocketsId = async () => {
    const response =await fetch(`https://api.spacexdata.com/v4/rockets/${id}`)
    if (!response.ok) {
        throw new Error(`${response.status}`);
    }
    const data = await response.json();
    return data
};