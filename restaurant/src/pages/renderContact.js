import "../style/styleTabs.css";
import "../style/styleContact.css";

const aboutContact = function () {
    const contactContainer = document.createElement("div");
    contactContainer.setAttribute("id", "contactContainer");
    const contactHeader = document.createElement("div");
    contactHeader.setAttribute("id", "contactHeader");
    const contactBody = document.createElement("div");
    const contactForm = document.createElement("div");

    // const headerImage = new Image(50, 50);
    // headerImage.src = header_img;

    // working on header
    let headerTitle = document.createElement("div");
    let hr = document.createElement("hr");
    let headerSub = document.createElement("div");

    headerTitle.textContent = "Contact";
    headerTitle.style.color = "white";
    headerTitle.style.fontSize = "20px";
    headerTitle.style.fontWeight = "bold";
    hr.style.color = "#CB7152";
    hr.style.width = "20%";
    headerSub.textContent = "Do not hesitate to get in touch at any time.";

    contactHeader.append(headerTitle, hr, headerSub);
    contactContainer.append(contactHeader);
    document.querySelector("#container").append(contactContainer);
};

export { aboutContact };
