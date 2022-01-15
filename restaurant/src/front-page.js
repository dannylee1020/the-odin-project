import "./style.css";
// import background from "./img/pastas.jpeg";
const background = require("./img/pastas.jpeg");

const homePage = function () {
    const content = document.querySelector("#content");

    const name = document.createElement("div");
    name.setAttribute("id", "name");

    const description = document.createElement("div");
    description.setAttribute("id", "description");

    const origin = document.createElement("div");
    origin.setAttribute("id", "origin");

    const backgroundImage = new Image(100, 200);
    backgroundImage.src = background;

    // set textContent
    name.textContent = "UOVO";
    description.textContent =
        "the one place outside of Italy that serrves fresh pasta mader in Italy";
    origin.textContent = "- by hand daily, by our team in Bologna.";

    content.appendChild(name);
    content.appendChild(description);
    content.appendChild(origin);
    content.appendChild(backgroundImage);
};

export { homePage };
