// ? create separate task.css to handle styling instead of DOM?

const Task = () => {
    const addForm = function () {
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
            // document.querySelector("#task-input").value = "";

            if (!inboxContent.contains(formContainer)) {
                taskContainer.insertAdjacentHTML("afterend", form);
            } else {
                formContainer.style.display = "block";
                // reset text area
                document.querySelector("#task-input").value = " ";
            }
            styleForm();
            submitTask();
            cancelTask();
        });
    };

    const styleForm = function () {
        let input = document.querySelector("#task-input");
        input.style.width = "100%";
        input.style.height = "80px";
        input.style.textAlign = "left";

        let taskButtons = document.querySelector("#task-buttons");
        taskButtons.style.display = "flex";
        taskButtons.style.gap = "10px";
        taskButtons.style.marginTop = "20px";

        // style each button
        let addButton = document.querySelector("#add-bttn");
        addButton.style.backgroundColor = "#E27065";
        addButton.style.color = "white";
        addButton.style.fontWeight = "bold";
        addButton.style.border = "none";
        addButton.style.borderRadius = "5px";
        addButton.style.padding = "10px 20px";

        let cancelBttn = document.querySelector("#cancel-bttn");
        cancelBttn.style.backgroundColor = "white";
        cancelBttn.style.color = "black";
        cancelBttn.style.fontWeight = "bold";
        cancelBttn.style.borderRadius = "5px";
        cancelBttn.style.border = "2px solid black";
        cancelBttn.style.padding = "10px 15px";
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

    const taskToList = function () {
        let taskContainer = document.querySelector("#task-container");
        let input = document.querySelector("#task-input");

        let container = document.createElement("div");
        let task = document.createElement("div");
        task.textContent = input.value;
        let taskIcon = document.createElement("i");
        taskIcon.setAttribute("class", "far fa-circle");

        // TODO: style circle
        taskIcon.style.fontSize = "20px";
        taskIcon.style.border;

        // style container
        container.append(taskIcon, task);
        container.style.display = "flex";
        container.style.gap = "15px";
        container.style.marginTop = "15px";
        container.style.marginBottom = "10px";

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
