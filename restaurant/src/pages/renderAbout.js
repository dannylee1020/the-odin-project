import "../style/style.css";

const homePage = function () {
    const content = document.querySelector("#content");

    const name = document.createElement("div");
    name.setAttribute("id", "name");
    name.style.fontSize = "60px";
    name.style.margin = "100px";

    const description = document.createElement("div");
    description.setAttribute("id", "description");
    description.style.width = "550px";
    description.style.fontSize = "40px";
    description.style.marginBottom = "20px";
    description.style.textAlign = "center";

    const origin = document.createElement("div");
    origin.setAttribute("id", "origin");
    origin.style.fontSize = "25px";

    // set textContent
    name.textContent = "UOVO";
    description.textContent =
        "the one place outside of Italy that serves fresh pasta made in Italy";
    origin.textContent = "- by hand daily, by our team in Bologna.";

    // generate intro
    const introDiv = document.createElement("div");
    introDiv.style.backgroundColor = "#F5F3F1";
    introDiv.style.textAlign = "center";
    introDiv.style.height = "100%";
    introDiv.style.border = "None";
    introDiv.style.position = "absolute";

    const title = document.createElement("h2");
    title.style.color = "#CB7152";
    title.textContent = "Our pasta";

    const intro = document.createElement("p");
    intro.style.wordBreak = "break-all";
    intro.style.color = "black";
    intro.style.fontWeight = "10px";
    intro.textContent = `is handmade in our kitchen in Bologna, Italy by "sfogline" who use traditional methods of sheeting
         and cutting -- none of our pasta is extruded. It's prepared fresh daily, using a type of egg
         that's available only in Italy and is specially produced for pasta. The reuslt is a superior noodle
         that is the foundation for our classic Italian dishes.`;

    introDiv.appendChild(title);
    introDiv.appendChild(intro);

    // add elements to parent
    content.appendChild(name);
    content.appendChild(description);
    content.appendChild(origin);

    document.body.appendChild(introDiv);
};

export { homePage };
