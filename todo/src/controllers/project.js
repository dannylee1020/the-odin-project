import "../style/project.css";

// TODO adding project to the list not working
// TODO style project textarea

const Project = () => {
    // callback when add project button is clicked
    const addForm = (e) => {
        let formHTML = `
            <div id="project-form">
                <textarea id="project-input"></textarea>
                <div id="project-bttns">
                    <button id="project-add">Add Project</button>
                    <button id='project-cancel'>Cancel</button>
                </div>
            </div>
        `;

        if (document.querySelector("#project-form") === null) {
            e.insertAdjacentHTML("beforebegin", formHTML);
        } else {
            toggleElement(
                document.querySelector("#project-form"),
                "on",
                "block"
            );
            document.querySelector("#project-input").value = " ";
        }

        // toggle add project button
        toggleElement(e, "off");
    };

    const toggleElement = (el, toggle = "on", type) => {
        if (toggle != "on") {
            el.style.display = "none";
        }
        el.style.display = type;
    };

    // callback when add project in the form is clicked
    const addProject = () => {
        let projectForm = document.querySelector("#project-form");
        let projectInput = document.querySelector("#project-input");

        // create new project element
        let project = document.createElement("div");
        project.style.display = "flex";
        project.style.gap = "15px";
        project.style.marginLeft = "15px";
        project.style.marginBottom = "20px";

        let projectIcon = document.createElement("i");
        projectIcon.setAttribute("class", "fas fa-list");
        projectIcon.style.fontSize = "20px";

        let projectName = document.createElement("div");
        projectName.textContent = projectInput.value;

        // add new project to the list
        project.append(projectIcon, projectName);
        projectForm.before(project);
    };

    const submitProject = () => {
        let submit = document.querySelector("#project-add");
        let addProjectElement = document.querySelector("#add-project");
        let projectForm = document.querySelector("#project-form");

        submit.addEventListener("click", function () {
            addProject();
            toggleElement(addProjectElement, "on", "flex");
            toggleElement(projectForm, "off");
        });
    };

    const cancelProject = () => {
        let cancel = document.querySelector("#project-cancel");
        let addProjectElement = document.querySelector("#add-project");
        let projectForm = document.querySelector("#project-form");

        cancel.addEventListener("click", function () {
            toggleElement(addProjectElement, "on", "flex");
            toggleElement(projectForm, "off");
        });
    };

    const initProjectLogic = () => {
        let addProjectElement = document.querySelector("#add-project");

        addProjectElement.addEventListener("click", function () {
            addForm(this);
            submitProject();
            cancelProject();
        });
    };

    return { initProjectLogic };
};

export { Project };
