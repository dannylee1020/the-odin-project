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
    const listContainer = document.createElement("div");
    const listTitle = document.createElement("div");
    listTitle.textContent = title;

    listContainer.appendChild(listTitle);

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

        itemPrice.append(item, price);
        itemContainer.append(itemPrice, hr, profile);
        listContainer.appendChild(itemContainer);
    }

    return listContainer;
};

const createBeverageSection = function () {
    const bevContainer = document.createElement("div");
    bevContainer.setAttribute("id", "bevContainer");
    // bevContainer.style.backgroundColor = "#E2DAC7";

    const beerObj = {
        first: ["Peroni", "$6", "Lager (325ml)"],
        second: ["Angelo Poretti", "$7", "Premium Lager (325ml.)"],
    };

    const beerList = createBeverageList("Beer", beerObj);
    bevContainer.appendChild(beerList);

    return bevContainer;
};

export { createCourse, createBeverageSection };
