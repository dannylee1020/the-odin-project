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

        taskContainer.addEventListener("click", (e) => {
            e.currentTarget.style.display = "None";
            inboxContent.innerHTML += form;
        });
    };

    //TODO: style form with DOM strings
    //

    const addTask = function () {
        //* when add in the form is clicked, add the task to the list
    };

    return { addForm };
};

export { Task };
