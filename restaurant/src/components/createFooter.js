const buildFooter = function () {
    const container = document.createElement("div");
    const resName = document.createElement("div");
    const author = document.createElement("div");

    resName.textContent = "© Pasta Uovo. All rights reserved";
    resName.style.marginLeft = "15px";
    resName.style.color = "white";
    author.textContent = "Created by dannylee1020";
    author.style.marginRight = "15px";
    author.style.color = "white";

    container.style.backgroundColor = "#23282F";

    container.style.display = "flex";
    container.style.justifyContent = "space-between";
    container.style.alignItems = "center";
    container.style.height = "40px";
    container.setAttribute("id", "footer");
    container.append(resName, author);

    return container;
};

export { buildFooter };
