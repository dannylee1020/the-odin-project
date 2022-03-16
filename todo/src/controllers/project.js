// TODO adding project to the list not working
// TODO callback functions executing only once
// TODO style project textarea

const Project = () => {
    // callback when add project button is clicked
    const addForm = (e) => {
        // let addProjectElement = document.querySelector("#add-project");
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
        let addProjectElement = document.querySelector("#add-project");
        let projectInput = document.querySelector("#project-input");

        // create new project element
        let project = document.createElement("div");
        let projectIcon = document.createElement("i");
        projectIcon.setAttribute("class", "fas fa-list-check");
        let projectName = document.createElement("div");
        projectName.textContent = projectInput.select();

        // add new project to the list
        project.append(projectIcon, projectName);
        addProjectElement.before(project);
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
