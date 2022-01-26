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

export { createList, createBeverage };
