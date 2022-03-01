const Task = () => {
    const addForm = function () {
        const form = `
          <div id='form-container'>
            <input id='task-input'>
            <div id='task-buttons'>
              <div id='submit-task'>Add</div>
              <div id='cancel-task'>Cancel</div>
            </div>
          </div>
          `;

        const inboxContent = document.querySelector("#inbox-content");
        const taskContainer = document.querySelector("#task-container");
        const taskButtons = document.querySelector("#task-buttons");
        // taskButtons.style.display = "flex";

        taskContainer.addEventListener("click", (e) => {
            e.currentTarget.style.display = "None";
            const formContainer = document.querySelector("#form-container");

            if (!inboxContent.contains(formContainer)) {
                taskContainer.insertAdjacentHTML("afterend", form);
            } else {
                formContainer.style.display = "flex";
            }

            submitTask();
        });
    };

    //TODO: style form

    const submitTask = function () {
        const submit = document.querySelector("#submit-task");
        submit.addEventListener("click", taskToList);
    };

    const cancelTask = function () {};

    const taskToList = function () {
        let taskContainer = document.querySelector("#task-container");
        let input = document.querySelector("#task-input");

        let container = document.createElement("div");
        let task = document.createElement("div");
        task.textContent = input.value;
        let taskIcon = document.createElement("i");
        taskIcon.setAttribute("class", "far fa-circle");

        // TODO: style circle

        // style container
        container.append(taskIcon, task);
        container.style.display = "flex";
        container.style.gap = "15px";
        container.style.marginBottom = "15px";

        // display task list
        taskContainer.before(container);

        // display add task tab again once task is added
        taskContainer.style.display = "flex";
        // toggle form to hide
        document.querySelector("#form-container").style.display = "None";
    };

    return { addForm };
};

export { Task };
