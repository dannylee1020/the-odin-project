import _ from "lodash";
import myName from "./myName";
import "./style.css";
import Icon from "./icon.png";
import Data from "./data.xml";
import Notes from "./data.csv";

function component() {
    const element = document.createElement("div");

    element.innerHTML = myName("Danny");
    element.classList.add("hello");

    //add the image to existing div
    const myIcon = new Image(); // equivalent to document.createElement('img')
    myIcon.src = Icon;

    element.appendChild(myIcon);

    console.log(Data);
    console.log(Notes);

    return element;
}

document.body.appendChild(component());
