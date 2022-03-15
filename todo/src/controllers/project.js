// TODO adding project to the list not working
// TODO callback functions executing only once
// TODO style project textarea

const Project = () => {
    // callback when add project button is clicked
    const addForm = () => {
        let addProject = document.querySelector("#add-project");
        let formHTML = `
            <div id="project-form">
                <textarea id="project-input"></textarea>
                <div id="project-bttns">
                    <button id="project-add">Add Project</button>
                    <button id='project-cancel'>Cancel</button>
                </div>
            </div>
        `;

        addProject.insertAdjacentHTML("beforebegin", formHTML);

        // toggle add project button
        toggleElement(addProject, "off");
    };

    const toggleElement = (el, toggle, type) => {
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

        // style elements
        // toggleElement(project, "on", "flex");
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
        let addProject = document.querySelector("#add-project");
        addProject.addEventListener("click", function () {
            addForm();
            submitProject();
            cancelProject();
        });
    };

    return { initProjectLogic };
};

export { Project };
