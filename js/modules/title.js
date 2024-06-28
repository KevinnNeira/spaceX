export const nameRockets = async(name)=>{
    let header__title = document.querySelector("#header__title");
    header__title.innerHTML = "";
    header__title.textContent = name;
}
export const serialCapsule = async (serial) => {
    let header__title = document.querySelector("#header__title");

    if (header__title) {
        header__title.innerHTML = "";
        header__title.textContent = serial;
    } else {
        console.error("Element with ID 'header__title' not found.");
    }
}
