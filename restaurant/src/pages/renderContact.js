import "../style/styleTabs.css";
import "../style/styleContact.css";

const aboutContact = function () {
    const contactContainer = document.createElement("div");
    contactContainer.setAttribute("id", "contactContainer");
    const contactHeader = document.createElement("div");
    contactHeader.setAttribute("id", "contactHeader");
    const contactBody = document.createElement("div");
    contactBody.setAttribute("id", "contactBody");
    const contactForm = document.createElement("div");

    // const headerImage = new Image(50, 50);
    // headerImage.src = header_img;

    // working on header
    let headerTitle = document.createElement("div");
    let hr = document.createElement("hr");
    let headerSub = document.createElement("div");

    headerTitle.textContent = "Contact";
    headerTitle.style.color = "white";
    headerTitle.style.fontSize = "30px";
    headerTitle.style.fontWeight = "bold";
    headerTitle.style.marginTop = "35px";

    hr.style.border = "2px solid #CB7152";
    hr.style.width = "15%";
    hr.style.margin = "20px 0 20px 0";

    headerSub.textContent = "Do not hesitate to get in touch at any time.";
    headerSub.style.color = "white";
    headerSub.style.margin = "10px 0 15px 0 ";
    headerSub.style.fontSize = "20px";

    // working on body
    contactBody.style.backgroundColor = "#F5F3F1";
    contactBody.style.height = "600px";

    contactHeader.append(headerTitle, hr, headerSub);
    contactContainer.append(contactHeader, contactBody);

    document.querySelector("#container").appendChild(contactContainer);
};

export { aboutContact };
