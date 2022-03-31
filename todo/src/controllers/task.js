import "../style/tasks.css";
import { format, compareAsc } from "date-fns";

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
        submit.addEventListener("click", addTask);
    };

    const cancelTask = function () {
        const cancel = document.querySelector("#cancel-bttn");
        cancel.addEventListener("click", () => {
            document.querySelector("#form-container").style.display = "None";
            document.querySelector("#task-container").style.display = "flex";
        });
    };

    const setDate = (form, callback) => {
        let date = document.createElement("div");
        date.setAttribute("id", "set-date");
        date.addEventListener("click", (e) => {
            getDate(e);
        });

        form.addEventListener("change", () => {
            var input = form.value;
            date.textContent = input;
            form.replaceWith(date);
            callback();
        });
    };

    const getDate = (e) => {
        let form = document.createElement("input");
        form.setAttribute("id", "date-input");
        form.setAttribute("type", "date");
        form.setAttribute("min", "2018-01-01");
        form.style.marginLeft = "55%";
        e.target.replaceWith(form);

        // callback to make sure assignTask executes only after date is set
        setDate(form, function () {
            assignTask();
        });
    };

    const assignTask = function () {
        let todayPage = document.querySelector("#today-content");
        let upcomingPage = document.querySelector("#upcoming-content");
        let taskDate = document.querySelector("#set-date");
        let taskParent = taskDate.parentNode.cloneNode(true);

        if (taskDate === (new Date(), "yyyy-MM-dd")) {
            todayPage.append(taskParent);
        } else {
            upcomingPage.append(taskParent);
        }

        // manually adding eventlistener to copied DOM
        let taskChild = taskParent.childNodes;
        taskChild[0].addEventListener("click", (e) => {
            deleteTask(e.currentTarget);
        });

        taskChild[2].addEventListener("click", (e) => {
            getDate(e);
        });

        taskChild[3].addEventListener("click", (e) => {
            deleteTask(e.currentTarget);
        });
    };

    const deleteTask = function (el) {
        var parent = el.parentNode;
        parent.remove();
    };

    const makeTask = function () {
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
        cancel.setAttribute("class", "fa-solid fa-x");
        cancel.setAttribute("id", "project-delete");
        cancel.style.fontSize = "15px";

        container.append(taskIcon, task, date, cancel);

        // add event listener to allow date setting
        date.addEventListener("click", (e) => {
            getDate(e, assignTask);
        });

        // delete task when x button is clicked
        cancel.addEventListener("click", (e) => {
            deleteTask(e.currentTarget);
        });

        // when task is done, remove it from the list
        taskIcon.addEventListener("click", (e) => {
            deleteTask(e.currentTarget);
        });

        return container;
    };

    const addTask = function () {
        let taskContainer = document.querySelector("#task-container");
        // create task
        let container = makeTask();
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
