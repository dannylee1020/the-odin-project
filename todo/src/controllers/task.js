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

        taskContainer.addEventListener("click", (e) => {
            e.currentTarget.style.display = "None";
            const formContainer = document.querySelector("#form-container");

            if (!inboxContent.contains(formContainer)) {
                taskContainer.insertAdjacentHTML("beforebegin", form);
            } else {
                formContainer.style.display = "flex";
            }

            submitTask();
        });
    };

    //TODO: style form

    const submitTask = function () {
        const submit = document.querySelector("#submit-task");
        submit.addEventListener("click", function () {
            taskToList();
        });
    };

    const taskToList = function () {
        let inboxTitle = document.querySelector("#inbox-title");
        let taskContainer = document.querySelector("#task-container");
        let input = document.querySelector("#task-input");
        let container = document.createElement("div");
        let task = document.createElement("div");
        task.textContent = input.value;
        let taskIcon = document.createElement("i");
        taskIcon.setAttribute("class", "far fa-circle");

        // TODO: add logic for adding tasks into the list
        // TODO: style circle

        container.append(taskIcon, task);
        container.style.display = "flex";
        inboxTitle.after(container);

        // display add task tab again
        taskContainer.style.display = "flex";
        // hide form
        document.querySelector("#form-container").style.display = "None";
    };

    return { addForm };
};

export { Task };
