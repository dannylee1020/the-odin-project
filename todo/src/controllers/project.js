const Project = () => {
    // callback when add project button is clicked
    const addForm = () => {
        let addProject = document.querySelector("#add-project");
        let formHTML = `
            <div id="form-container">
                <textarea id="project-input"></textarea>
                <div id="project-bttns">
                    <button id="add-bttn">Add Project</button>
                    <button id='cancel-bttn'>Cancel</button>
                </div>
            </div>
        `;

        addProject.insertAdjacentHTML("beforebegin", formHTML);

        // toggle add project button
        addProject.style.display = "none";
    };

    // callback when add project in the form is clicked
    const addProject = (pr) => {
        let addProject = document.querySelector("#add-project");

        // create new project element
        let project = document.createElement("div");
        let projectIcon = document.createElement("i");
        projectIcon.setAttribute("class", "fas fa-list-check");
        let projectName = document.createElement("div");
        projectName.textContent = pr;

        // add new project to the list
        project.append(projectIcon, projectName);
        project.before(addProject);

        // style elements
    };

    const submitProject = () => {
        let submit = document.querySelector("#add-bttn");
        submit.addEventListener("click", addProject);
    };

    const cancelProject = () => {
        let cancel = document.querySelector("#cancel-bttn");
        cancel.addEventListener("click", function () {
            document.querySelector("#add-project").style.display = "flex";
            document.querySelector("#form-container").style.display = "none";
        });
    };

    const initProjectLogic = () => {
        let addProject = document.querySelector("#add-project");
        addProject.addEventListener("click", function () {
            addForm();
            submitProject();
            cancelProject();
        });

        // submitProject();
        // cancelProject();
    };

    return { initProjectLogic };
};

export { Project };
