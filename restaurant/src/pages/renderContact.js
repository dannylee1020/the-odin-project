import "../style/styleTabs.css";
import "../style/styleContact.css";
// import { createMap, addScript } from "../components/createMap";
import { buildMap } from "../components/createMap";

const aboutContact = function () {
    const contactContainer = document.createElement("div");
    contactContainer.setAttribute("id", "contactContainer");
    const contactHeader = document.createElement("div");
    contactHeader.setAttribute("id", "contactHeader");
    const contactBody = document.createElement("div");
    contactBody.setAttribute("id", "contactBody");
    const mapContainer = document.createElement("div");
    const mapFrame = document.createElement("div");
    mapFrame.setAttribute("id", "map");
    const contactForm = document.createElement("div");

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
    contactHeader.append(headerTitle, hr, headerSub);

    // working on body
    contactBody.style.backgroundColor = "#F5F3F1";
    contactBody.style.height = "600px";

    // hour section
    let hourContainer = document.createElement("div");
    let days = document.createElement("div");
    let hour = document.createElement("div");
    let clock = document.createElement("i");
    clock.setAttribute("class", "far fa-clock");

    clock.style.color = "#AD5845";
    clock.style.fontSize = "60px";
    clock.style.marginBottom = "20px";

    days.textContent = "Mon - Sat";
    days.style.fontSize = "20px";
    hour.textContent = "11:30am - 10:00pm";
    hour.style.fontSize = "20px";
    hour.style.margin = "10px 0 10px 0";
    hourContainer.style.display = "flex";
    hourContainer.style.flexDirection = "column";
    hourContainer.style.alignItems = "center";
    hourContainer.style.marginTop = "40px";
    hourContainer.append(clock, days, hour);

    // rule section
    let ruleContainer = document.createElement("div");
    let warning = document.createElement("div");
    warning.setAttribute("class", "fas fa-exclamation-triangle");

    let rules = document.createElement("div");
    let holidays = document.createElement("div");

    warning.style.color = "#AD5845";
    warning.style.fontSize = "60px";
    warning.style.marginBottom = "20px";

    rules.textContent = `We DO NOT take reservations. Guests will be seated on a first-come,
                         first-served basis.`;
    rules.style.margin = "10px 0 10px 0";
    rules.style.fontSize = "20px";
    holidays.textContent = `We will be CLOSED on Labor Day, Thanksgiving,
                            Christmas and New Years Day`;
    holidays.style.fontSize = "20px";

    ruleContainer.style.width = "230px";
    ruleContainer.style.wordBreak = "break-word";
    ruleContainer.style.textAlign = "center";
    ruleContainer.style.display = "flex";
    ruleContainer.style.flexDirection = "column";
    ruleContainer.style.alignItems = "center";
    ruleContainer.style.marginTop = "40px";
    ruleContainer.append(warning, rules, holidays);

    // media inquiries
    let mediaContainer = document.createElement("div");
    let inquiries = document.createElement("div");
    let media = document.createElement("i");
    media.setAttribute("class", "far fa-newspaper");
    let email = document.createElement("div");
    let number = document.createElement("div");

    media.style.color = "#AD5845";
    media.style.fontSize = "60px";
    media.style.marginBottom = "20px";
    inquiries.textContent = "Inquiries";
    inquiries.style.marginBottom = "10px";
    inquiries.style.fontSize = "30px";
    email.textContent = "uovola@example.com";
    email.style.fontSize = "20px";
    email.style.marginBottom = "5px";
    number.textContent = "213-999-9999";
    number.style.fontSize = "20px";

    mediaContainer.style.display = "flex";
    mediaContainer.style.flexDirection = "column";
    mediaContainer.style.alignItems = "center";
    mediaContainer.style.marginTop = "40px";
    mediaContainer.append(media, inquiries, email, number);

    contactBody.style.display = "flex";
    contactBody.style.justifyContent = "space-around";
    contactBody.append(hourContainer, ruleContainer, mediaContainer);

    // adding map section
    // let apiKey = "AIzaSyDHbrkqTmxNmG0a1o5ht5TId-u37Ph4tRA";
    // let src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}&callback=${createMap}`;
    // let s = document.createElement("script");
    // s.setAttribute("src", src);
    // s.setAttribute("async", "async");

    let s = buildMap();
    mapFrame.style.height = "400px";
    mapFrame.style.width = "100%";
    mapContainer.append(mapFrame, s);

    contactContainer.append(contactHeader, contactBody, mapContainer);
    document.querySelector("#container").appendChild(contactContainer);
};

export { aboutContact };
