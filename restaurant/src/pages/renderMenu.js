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

    // course list
    const courses = document.createElement("div");

    const classic = document.createElement("div");
    const classicTitle = document.createElement("div");
    classicTitle.textContent = "The Classic";
    // // make list
    var ul = document.createElement("ul");
    var li1 = document.createElement("li");
    var li2 = document.createElement("li");
    var li3 = document.createElement("li");
    var li4 = document.createElement("li");
    var li5 = document.createElement("li");

    var price = document.createElement("div");
    price.setAttribute("id", "coursePrice");
    price.textContent = "32|Per Person";

    li1.textContent = "Yellowtail Crudo";
    li2.textContent = "Pomodorini e Basilico";
    li3.textContent = "Vongole";
    li4.textContent = "Pomodoro";
    li5.textContent = "Tiramisu al cucchiaio";

    ul.append(li1, li2, li3, li4, li5);
    classic.append(classicTitle, ul, price);
    courses.appendChild(classic);

    // add child to parent
    const container = document.querySelector("#container");
    tastingMenu.appendChild(title);
    tastingMenu.appendChild(subtitle);
    tastingMenu.appendChild(hr);
    tastingMenu.appendChild(menuTitle);

    container.appendChild(tastingMenu);
    container.appendChild(courses);
};

export { aboutMenu };
