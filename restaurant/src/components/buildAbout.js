import first_src from "../img/fresh_pasta_1.jpeg";
import second_src from "../img/fresh_pasta_2.jpeg";
import third_src from "../img/fresh_pasta_3.jpeg";

const buildContent = function () {
    const content = document.createElement("div");
    content.setAttribute("id", "content");

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

    // add elements to parent
    content.appendChild(name);
    content.appendChild(description);
    content.appendChild(origin);

    return content;
};

const buildBody = function () {
    // generate intro
    const introDiv = document.createElement("div");
    introDiv.setAttribute("id", "intro-div");
    introDiv.style.backgroundColor = "#F5F3F1";
    introDiv.style.textAlign = "center";
    introDiv.style.display = "flex";
    introDiv.style.flexDirection = "column";
    introDiv.style.alignItems = "center";

    const title = document.createElement("h2");
    title.style.color = "#CB7152";
    title.style.paddingTop = "20px";
    title.style.fontSize = "50px";
    title.textContent = "Our pasta";

    const intro = document.createElement("p");
    intro.style.wordBreak = "break-word";
    intro.style.color = "black";
    intro.style.fontWeight = "10px";
    intro.style.fontSize = "45px";
    intro.style.width = "45%";
    intro.textContent = `is handmade in our kitchen in Bologna, Italy by "sfogline" who use traditional methods of sheeting
         and cutting -- none of our pasta is extruded. It's prepared fresh daily, using a type of egg
         that's available only in Italy and is specially produced for pasta. The result is a superior noodle
         that is the foundation for our classic Italian dishes.`;

    // add images at the bottom
    const imgContainer = document.createElement("div");
    const foodImage1 = new Image(150, 150);
    const foodImage2 = new Image(150, 150);
    const foodImage3 = new Image(150, 150);

    // add image source
    foodImage1.src = first_src;
    foodImage2.src = second_src;
    foodImage3.src = third_src;

    // add image style
    foodImage1.style.borderRadius = "50%";
    foodImage2.style.borderRadius = "50%";
    foodImage3.style.borderRadius = "50%";
    foodImage2.style.margin = "30px 50px 0px 50px";

    imgContainer.style.marginBottom = "30px";

    // adding child to parent
    imgContainer.appendChild(foodImage1);
    imgContainer.appendChild(foodImage2);
    imgContainer.appendChild(foodImage3);

    // append all child to parent
    introDiv.appendChild(title);
    introDiv.appendChild(intro);
    introDiv.appendChild(imgContainer);

    return introDiv;
};

export { buildContent, buildBody };
