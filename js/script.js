const menubtn = document.querySelector(".bi-three-dots-vertical");
const menu = document.querySelector(".menu");
const navbar = document.querySelector("#navbar");

// funções
const togleMenu = () => {
    menu.classList.toggle("hide");

    if (!menu.classList.contains("hide")) {
        navbar.style.borderBottom = "none";
        menubtn.style.color = "#ff4a4a";
    } else {
        navbar.style.borderBottom = "1px solid #615c5c";
        menubtn.style.color = "#615c5c";
    }
};

const verifywidth = () => {
    if (window.innerWidth >= 768) {
        menu.classList.remove("hide");
    } else {
        menu.classList.add("hide");
        navbar.style.borderBottom = "1px solid #615c5c";
        menubtn.style.color = "#615c5c";
    }
};

// eventos
menubtn.addEventListener("click", () => togleMenu());
