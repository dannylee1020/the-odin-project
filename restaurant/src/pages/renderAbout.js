import "../style/styleTabs.css";
import "../style/styleAbout.css";
import { buildContent, buildBody } from "../components/buildAbout";
import { buildFooter } from "../components/builders/createFooter";

const aboutPage = function () {
    const pageContainer = document.createElement("div");
    pageContainer.setAttribute("id", "page-container");
    const content = buildContent();
    const introDiv = buildBody();
    const footer = buildFooter();

    // adding all elements to pageContainer
    pageContainer.append(content, introDiv, footer);

    return pageContainer;
};

export { aboutPage };
