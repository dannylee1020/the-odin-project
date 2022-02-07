import { tastingMenu } from "../components/buildMenu";
import { createBeverageSection } from "../components/builders/createMenuItems";
import { buildFooter } from "../components/builders/createFooter";

const aboutMenu = function () {
    const menuPageContainer = document.createElement("div");
    const tastingContainer = tastingMenu();
    const bevContainer = createBeverageSection();
    const footer = buildFooter();

    menuPageContainer.append(tastingContainer, bevContainer, footer);
    return menuPageContainer;
};

export { aboutMenu };
