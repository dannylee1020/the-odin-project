const homePage = function () {
    const content = document.querySelector("#content");

    const name = document.createElement("div");
    name.setAttribute("id", "name");

    const description = document.createElement("div");
    description.setAttribute("id", "description");

    const origin = document.createElement("div");
    origin.setAttribute("id", "origin");

    // const backgroudImage = new Image();
    // backgroundImage.src = "path/to/image";

    // set textContent
    name.textContent = "UOVO";
    description.textContent =
        "the one place outside of Italy that serrves fresh pasta mader in Italy";
    origin.textContent = "- by hand daily, by our team in Bologna.";

    content.appendChild(name);
    content.appendChild(description);
    content.appendChild(origin);
};

export { homePage };
