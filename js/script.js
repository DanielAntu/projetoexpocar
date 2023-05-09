const menubtn = document.querySelector(".bi-three-dots-vertical");
const menu = document.querySelector(".menu");
const navbar = document.querySelector("#navbar");
const attraction = document.querySelector(".attraction");

// lista de carro
const cars = [
    { name: "carro1", img: "./img/carro1.jpg", year: 1980 },
    { name: "carro2", img: "./img/carro2.jpg", year: 1990 },
    { name: "carro3", img: "./img/carro3.jpg", year: 1940 },
    { name: "carro4", img: "./img/carro4.jpg", year: 1970 },
    { name: "carro5", img: "./img/carro5.jpg", year: 1950 },
    { name: "carro6", img: "./img/carro6.jpg", year: 1930 },
    { name: "carro7", img: "./img/carro7.jpg", year: 1910 },
];

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

const cardCar = (car) => {
    const { name, img, year } = car;

    // div card
    const div = document.createElement("div");
    div.classList.add("card");

    // image
    const image = document.createElement("img");
    image.src = img;
    image.alt = name;
    div.appendChild(image);

    // name do carro
    const nameCar = document.createElement("p");
    nameCar.innerText = name;
    div.appendChild(nameCar);

    // year car
    const yearCar = document.createElement("p");
    yearCar.innerText = year;
    div.appendChild(yearCar);

    return div;
};

const renderCar = () => {
    cars.forEach((car) => {
        const div = cardCar(car);
        attraction.appendChild(div);
    });
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

// incializar
verifywidth();
renderCar();
