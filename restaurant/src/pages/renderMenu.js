import { tastingMenu } from "../components/buildMenu";
import { createBeverageSection } from "../components/builders/createMenuItems";

const aboutMenu = function () {
    const menuPageContainer = document.createElement("div");
    const tastingContainer = tastingMenu();
    const bevContainer = createBeverageSection();

    menuPageContainer.append(tastingContainer, bevContainer);
    return menuPageContainer;
};

export { aboutMenu };
