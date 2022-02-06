import { aboutPage } from "../pages/renderAbout.js";
import { aboutMenu } from "../pages/renderMenu.js";
import { aboutContact } from "../pages/renderContact";

const updateContent = function () {
    const aboutTab = document.querySelector("#about");
    const menuTab = document.querySelector("#menu");
    const contactTab = document.querySelector("#contact");

    let homePage = aboutPage();
    let container = document.querySelector("#container");
    container.append(homePage);

    aboutTab.addEventListener("click", function () {
        let container = document.querySelector("#container");
        let about = aboutPage();
        container.replaceChildren(about);
    });

    menuTab.addEventListener("click", function () {
        let container = document.querySelector("#container");
        let menu = aboutMenu();
        container.replaceChildren(menu);
    });

    contactTab.addEventListener("click", function () {
        let container = document.querySelector("#container");
        let contact = aboutContact();
        container.replaceChildren(contact);
    });
};

export { updateContent };
