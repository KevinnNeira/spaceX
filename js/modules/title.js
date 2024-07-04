export const nameRockets = async(name)=>{
    let header__title = document.querySelector("#header__title");
    header__title.innerHTML = "";
    header__title.textContent = name;
    let logo = document.createElement("img");
    logo.src = "storage/img/logo.svg";
    logo.style.width = "5%";
    logo.style.margin = "50px"
    logo.style.height = "100%";
    header__title.appendChild(logo);
}