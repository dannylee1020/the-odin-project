const createList = function (title, price, menu1, menu2, menu3, menu4, menu5) {
    const course = document.createElement("div");
    const courseTitle = document.createElement("div");
    courseTitle.textContent = title;
    courseTitle.style.fontSize = "25px";
    courseTitle.style.fontWeight = "bold";

    var menu = document.createElement("div");
    var item1 = document.createElement("div");
    var item2 = document.createElement("div");
    var item3 = document.createElement("div");
    var item4 = document.createElement("div");
    var item5 = document.createElement("div");

    var coursePrice = document.createElement("div");
    coursePrice.setAttribute("id", "coursePrice");
    coursePrice.textContent = price;
    coursePrice.style.fontSize = "14px";

    var hr = document.createElement("hr");
    hr.style.color = "#CCCCCC";
    hr.style.width = "130%";
    hr.style.marginTop = "30px";
    hr.style.marginLeft = "-20px";

    // style ul
    menu.style.display = "flex";
    menu.style.flexDirection = "column";
    menu.style.gap = "12px";
    menu.style.margin = "30px 0px 30px 0px";

    item1.textContent = menu1;
    item2.textContent = menu2;
    item3.textContent = menu3;
    item4.textContent = menu4;
    item5.textContent = menu5;

    // append child to parent
    menu.append(item1, item2, item3, item4, item5);
    course.append(courseTitle, menu, coursePrice, hr);

    // style course div
    course.style.display = "flex";
    course.style.flexDirection = "column";
    course.style.justifyContent = "center";
    course.style.textAlign = "center";

    return course;
};

const createBeverage = function () {
    const bevContainer = document.createElement("div");
    bevContainer.setAttribute("id", "bevContainer");
    // bevContainer.style.backgroundColor = "#FFFBF6";

    return bevContainer;
};

const aboutMenu = function () {
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

    const classic = createList(
        "The Classic",
        "32 | Person",
        "Yellowtail Crudo",
        "PomoDorini e Basilico",
        " Vongole",
        "Pomodoro",
        "Tiramisu al cucchiaio"
    );

    const cheese = createList(
        "Cheese & Truffle",
        "37 | Person",
        "Yellowtail Crudo",
        "Tagliatelle in truffle sauce",
        "Pomodoro",
        "Cacio e Pepe",
        "Tiramisu al cucchiaio"
    );

    const regional = createList(
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
    const container = document.querySelector("#container");
    // container.style.backgroundColor = "#FFFFFF";
    tastingMenu.appendChild(title);
    tastingMenu.appendChild(subtitle);
    tastingMenu.appendChild(hr);
    tastingMenu.appendChild(menuTitle);

    container.appendChild(tastingMenu);
    container.appendChild(courses);

    const bevContainer = createBeverage();
    document.body.appendChild(bevContainer);
};

export { aboutMenu };
