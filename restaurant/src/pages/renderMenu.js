import {
    createBeverageSection,
    createCourse,
} from "../components/createMenuItems";

const aboutMenu = function () {
    const menuPageContainer = document.createElement("div");
    const menuContainer = document.createElement("div");
    const tastingMenu = document.createElement("div");
    tastingMenu.setAttribute("class", "menu");

    const title = document.createElement("div");
    title.setAttribute("class", "title");
    title.textContent = "Every noodle handmade by us in Italy";
    title.style.textAlign = "center";
    title.style.fontSize = "40px";
    title.style.fontWeight = "500";
    title.style.margin = "25px 0px 0px 0px";

    const subtitle = document.createElement("div");
    subtitle.textContent = "Shippped overnight | Nothing extruded";
    subtitle.style.textAlign = "center";
    subtitle.style.fontSize = "25px";
    subtitle.style.margin = "20px 0px 10px 0px";

    const hr = document.createElement("hr");
    hr.style.color = "#CCCCCC";
    hr.style.margin = "60px 0px 30px 0px";

    // tasting menu section
    const menuTitle = document.createElement("div");
    menuTitle.setAttribute("class", "menuTitle");
    menuTitle.textContent = "- TASTING MENUS -";
    menuTitle.style.textAlign = "center";
    menuTitle.style.fontSize = "35px";
    menuTitle.style.color = "#CD4A3A";

    // create course list
    const courses = document.createElement("div");

    const classic = createCourse(
        "The Classic",
        "32 | Person",
        "Yellowtail Crudo",
        "PomoDorini e Basilico",
        " Vongole",
        "Pomodoro",
        "Tiramisu al cucchiaio"
    );

    const cheese = createCourse(
        "Cheese & Truffle",
        "37 | Person",
        "Yellowtail Crudo",
        "Tagliatelle in truffle sauce",
        "Pomodoro",
        "Cacio e Pepe",
        "Tiramisu al cucchiaio"
    );

    const regional = createCourse(
        "The Regional",
        "32 | Person",
        "Battuta di carne",
        "Ragú",
        "Tortellini",
        "Amatriciana",
        "Tramisu al cucchiaio"
    );

    courses.append(classic, cheese, regional);
    courses.style.display = "flex";
    courses.style.justifyContent = "space-around";
    courses.style.marginTop = "60px";

    // add child to parent

    tastingMenu.appendChild(title);
    tastingMenu.appendChild(subtitle);
    tastingMenu.appendChild(hr);
    tastingMenu.appendChild(menuTitle);

    menuContainer.appendChild(tastingMenu);
    menuContainer.appendChild(courses);
    menuContainer.setAttribute("id", "menu");

    const bevContainer = createBeverageSection();
    menuPageContainer.append(menuContainer, bevContainer);

    return menuPageContainer;
};

export { aboutMenu };
