const buildHeader = function () {
    const container = document.createElement("div");
    const header = document.createElement("div");
    const name = document.createElement("div");
    const icon = document.createElement("i");

    container.style.margin = "-20px";
    container.style.position = "relative";

    header.style.display = "flex";
    header.style.width = "100%";
    header.style.justifyContent = "left";
    header.style.alignItems = "center";
    header.style.backgroundColor = "#DB4C3F";
    header.style.height = "100px";

    icon.setAttribute("class", "fas fa-check-double");
    icon.style.fontSize = "40px";
    icon.style.color = "white";
    icon.style.marginLeft = "50px";

    name.textContent = "ToDo";
    name.style.fontFamily = "Ubuntu";
    name.style.marginLeft = "20px";
    name.style.color = "white";
    name.style.fontSize = "30px";

    header.append(icon, name);
    container.appendChild(header);

    return container;
};

export { buildHeader };
