import "../style/project.css";

// TODO turn each project list to page
// TODO why background still there when delete project?

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
        }
        document.querySelector("#project-input").value = " ";
        // toggle add project button
        toggleElement(e, "off");
    };

    const toggleElement = (el, toggle = "on", type) => {
        if (toggle != "on") {
            el.style.display = "none";
        }
        el.style.display = type;
    };

    const deleteProject = function (el) {
        var parent = el.parentNode;
        parent.remove();
    };

    // callback when add project in the form is clicked
    const addProject = () => {
        let projectForm = document.querySelector("#project-form");
        let projectInput = document.querySelector("#project-input");

        // create new project element
        let projectContainer = document.createElement("div");
        projectContainer.setAttribute("id", "project-container");
        projectContainer.setAttribute("data-project", "project-tab");
        let project = document.createElement("div");
        project.setAttribute("id", "ind-project");

        let projectIcon = document.createElement("i");
        projectIcon.setAttribute("class", "fas fa-list");
        projectIcon.style.fontSize = "20px";

        let projectName = document.createElement("div");
        projectName.setAttribute("class", "project-name");
        projectName.textContent = projectInput.value;

        let cancel = document.createElement("i");
        cancel.setAttribute("class", "fa-solid fa-xmark");
        cancel.setAttribute("id", "project-x");
        cancel.style.marginLeft = "45%";

        // add new project to the list
        project.append(projectIcon, projectName, cancel);
        projectContainer.append(project);
        projectForm.before(projectContainer);

        // add delete functionality
        cancel.addEventListener("click", (e) => {
            deleteProject(e.currentTarget);
        });

        projectContainer.addEventListener("click", () => {
            initProjectPage();
        });
    };

    const makeProjectPage = (tab) => {
        let taskPage = document.querySelector("#task-page");
        let projectName = tab
            .querySelector(".project-name")
            .textContent.replace(/ /g, "-");
        let projectHTML = `
                <div id='${projectName}-content' data-content='${projectName}' data-tab='project-tab'>
                    <div id='${projectName}-title'> Inbox </div>
                    <div id='task-container'>
                        <i class='fas fa-plus'></i>
                        <div id='add-task'> Add Task</div>
                    </div>
                <div>
           `;

        taskPage.insertAdjacentHTML("beforeend", projectHTML);

        document.querySelector(`#${projectName}-content`).style.display =
            "none";
    };

    const initProjectPage = () => {
        let projectTabs = document.querySelectorAll("[data-project]");
        projectTabs.forEach((tab) => {
            tab.addEventListener("click", (e) => {
                makeProjectPage(e.currentTarget);
            });
        });
    };

    const submitProject = () => {
        let submit = document.querySelector("#project-add");
        let addProjectElement = document.querySelector("#add-project");
        let projectForm = document.querySelector("#project-form");

        submit.addEventListener("click", addProject);
        submit.addEventListener("click", function (e) {
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
            cancelProject();
            submitProject();
        });
    };

    return { initProjectLogic };
};

export { Project };
