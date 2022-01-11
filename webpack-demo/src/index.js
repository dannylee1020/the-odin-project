import _ from "lodash";
import myName from "./myName";
import "./style.css";
import Icon from "./icon.png";
import Data from "./data.xml";
import Notes from "./data.csv";
import toml from "./data.toml";
import yaml from "./data.yaml";
import json from "./data.json5";

console.log(toml.title);
console.log(toml.owner.name);

console.log(yaml.title);
console.log(yaml.owner.name);

console.log(json.title);
console.log(json.owner.name);

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
