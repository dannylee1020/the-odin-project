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
        let task = document.createElement("div");
        task.textContent = input.value;
        let taskIcon = document.createElement("i");
        taskIcon.setAttribute("class", "far fa-circle");
        let date = document.createElement("div");
        date.textContent = "No Date";
        date.style.fontSize = "15px";
        date.style.marginLeft = "70%";
        let cancel = document.createElement("i");
        cancel.setAttribute("class", "fas fa-xmark");
        // cancel.style.fontSize = "15px";

        // add event listener to allow date setting
        date.addEventListener("click", (e) => {
            setDate(e);
        });

        // TODO: style circle
        taskIcon.style.fontSize = "20px";
        taskIcon.style.border;

        // style container
        container.append(taskIcon, task, date, cancel);
        container.style.display = "flex";
        container.style.gap = "15px";
        container.style.marginTop = "15px";
        container.style.marginBottom = "15px";

        // display task list
        taskContainer.before(container);

        // display add task tab again once task is added
        taskContainer.style.display = "flex";

        // toggle form to hide
        document.querySelector("#form-container").style.display = "None";
    };

    return { initTaskLogic };
};

export { Task };
