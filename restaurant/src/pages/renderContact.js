import "../style/styleTabs.css";
import "../style/styleContact.css";
import { buildFooter } from "../components/builders/createFooter";
import { header, body, location } from "../components/buildContact";

const aboutContact = function () {
    const contactContainer = document.createElement("div");
    contactContainer.setAttribute("id", "contactContainer");

    const contactHeader = header();
    const contactBody = body();
    const map = location();
    const footer = buildFooter();

    contactContainer.append(contactHeader, contactBody, map, footer);
    return contactContainer;
};

export { aboutContact };
