import "../style/tasks.css";

// TODO add setting date to task functionaliy
// TODO add x to each task for deletion

const Task = () => {
    const initTaskLogic = function () {
        const form = `
          <div id='form-container'>
            <textarea id='task-input'></textarea>
            <div id='task-buttons'>
              <button id='add-bttn'>Add Task</button>
              <button id='cancel-bttn'>Cancel</div>
            </div>
          </div>
          `;

        const inboxContent = document.querySelector("#inbox-content");
        const taskContainer = document.querySelector("#task-container");

        taskContainer.addEventListener("click", (e) => {
            e.currentTarget.style.display = "None";
            const formContainer = document.querySelector("#form-container");

            if (!inboxContent.contains(formContainer)) {
                taskContainer.insertAdjacentHTML("afterend", form);
            } else {
                formContainer.style.display = "block";
                // reset text area
                document.querySelector("#task-input").value = " ";
            }
            submitTask();
            cancelTask();
        });
    };

    const submitTask = function () {
        const submit = document.querySelector("#add-bttn");
        submit.addEventListener("click", taskToList);
    };

    const cancelTask = function () {
        const cancel = document.querySelector("#cancel-bttn");
        cancel.addEventListener("click", () => {
            document.querySelector("#form-container").style.display = "None";
            document.querySelector("#task-container").style.display = "flex";
        });
    };

    const setDate = (e) => {
        let form = document.createElement("input");
        form.setAttribute("type", "date");
        form.setAttribute("min", "2018-01-01");
        form.style.marginLeft = "60%";
        e.target.replaceWith(form);
    };

    const taskToList = function () {
        let taskContainer = document.querySelector("#task-container");
        let input = document.querySelector("#task-input");

        let container = document.createElement("div");
        container.setAttribute("id", "each-task-container");

        let task = document.createElement("div");
        task.setAttribute("id", "each-task");
        task.textContent = input.value;

        let taskIcon = document.createElement("i");
        taskIcon.setAttribute("class", "far fa-circle");
        taskIcon.setAttribute("id", "task-icon");

        let date = document.createElement("div");
        date.setAttribute("id", "task-date");
        date.textContent = "No Date";

        let cancel = document.createElement("i");
        cancel.setAttribute("class", "fas fa-xmark");

        // display task list
        taskContainer.before(container);
        // display add task tab again once task is added
        taskContainer.style.display = "flex";
        // toggle form to hide
        document.querySelector("#form-container").style.display = "None";

        // add event listener to allow date setting
        date.addEventListener("click", (e) => {
            setDate(e);
        });

        container.append(taskIcon, task, date, cancel);
    };

    return { initTaskLogic };
};

export { Task };
