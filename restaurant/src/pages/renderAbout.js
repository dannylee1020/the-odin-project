import "../style/styleTabs.css";
import "../style/styleAbout.css";
import { buildContent, buildBody } from "../components/buildAbout";

const aboutPage = function () {
    const pageContainer = document.createElement("div");
    const content = buildContent();
    const introDiv = buildBody();

    // adding all elements to pageContainer
    pageContainer.append(content, introDiv);

    return pageContainer;
};

export { aboutPage };
