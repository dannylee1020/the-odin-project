const createCourse = function (
    title,
    price,
    menu1,
    menu2,
    menu3,
    menu4,
    menu5
) {
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

const createBeverageList = function (title, obj) {
    const container = document.createElement("div");
    const listContainer = document.createElement("div");
    const listTitle = document.createElement("div");

    listTitle.textContent = title;
    listTitle.style.fontSize = "30px";
    listTitle.style.fontWeight = "bold";
    listTitle.style.textAlign = "center";
    listTitle.style.margin = "40px 0px 30px 0px";

    container.appendChild(listTitle);

    for (let p in obj) {
        let itemContainer = document.createElement("div");
        let itemPrice = document.createElement("div");
        let item = document.createElement("div");
        let price = document.createElement("div");
        let hr = document.createElement("div");
        let profile = document.createElement("div");

        item.textContent = obj[p][0];
        price.textContent = obj[p][1];
        profile.textContent = obj[p][2];

        item.style.fontSize = "17px";
        price.style.color = "#CB7152";
        price.style.fontSize = "14px";
        itemPrice.style.display = "flex";
        itemPrice.style.justifyContent = "space-between";
        hr.style.border = "dotted 2px";
        hr.style.color = "#D3D3D3";
        profile.style.fontSize = "12px";
        profile.style.color = "#99A3A4";

        listContainer.style.display = "flex";
        listContainer.style.flexDirection = "column";
        listContainer.style.gap = "25px";
        listContainer.style.alignItems = "left";

        itemPrice.append(item, price);
        itemContainer.append(itemPrice, hr, profile);
        listContainer.appendChild(itemContainer);
    }
    container.style.width = "25%";
    container.appendChild(listContainer);

    return container;
};

const createBeverageSection = function () {
    const bevContainer = document.createElement("div");
    bevContainer.setAttribute("id", "bevContainer");
    const listContainer = document.createElement("div");
    bevContainer.style.backgroundColor = "#FFFBF6";

    const beerObj = {
        first: ["Peroni", "$6", "Lager (325 ml.)"],
        second: ["Angelo Poretti", "$7", "Premium Lager (325 ml.)"],
        third: ["Angelo Poretti", "$7", "Red (325 ml.)"],
    };

    const whiteObj = {
        first: ["Vermentino", "$ 10 | 40", "Olianas"],
        second: ["Pinot Grigio", "$ 11 | 44", "Teriato"],
        third: ["Sauvignon Blanc", "$ 13 | 52", "Torre Rosazza"],
        fourth: ["Chardonnay", "$ 15 | 60", "Vie di Romans"],
        fifth: ["Ca' BRIONE", "$69", "Nino Negri"],
    };

    const redObj = {
        first: ["Chianti Superiore", "$ 11 | 44", "Castel Trebbio"],
        second: ["Barbera D'Alba", "$ 12 | 48", "Pio Cesare"],
        third: ["Montepulciano D'Abruzzo", "$ 14 | 56", "Yume, Caldora"],
        fourth: ["Super Tuscan", "$ 16 | 64", "Bolgheri, Argentieria"],
        fifth: ["Barbaresco", "$75", "Fontanabianca"],
    };

    const beerList = createBeverageList("Beer", beerObj);
    const whiteList = createBeverageList("White", whiteObj);
    const redList = createBeverageList("Red", redObj);

    listContainer.append(beerList, whiteList, redList);
    listContainer.style.display = "flex";
    listContainer.style.justifyContent = "space-around";
    listContainer.style.marginTop = "40px";

    bevContainer.appendChild(listContainer);
    bevContainer.style.paddingBottom = "50px";

    return bevContainer;
};

export { createCourse, createBeverageSection };
