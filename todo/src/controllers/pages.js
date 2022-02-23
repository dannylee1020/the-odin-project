// TODO Style each page to viz on the UI

const Pages = () => {
    const removeContent = function (parent) {
        while (parent.firstChild) {
            parent.removeChild(parent.firstChild);
        }
    };

    const loadContent = function (pageName) {
        const taskPage = document.querySelector("#task-page");
        if (pageName === "Inbox") {
            removeContent(taskPage);
            taskPage.innerHTML += `
              <div id='inbox-page'> Inbox </div>
              <div id='task-container'>
                  <i class='fas fa-plus'></i>
                  <div id='add-task'> Add Task</div>
              </div>
          `;
        } else if (pageName === "Today") {
            removeContent(taskPage);
            taskPage.innerHTML += `
              <div id='today-page'>Today</div>
              <div id='today-task'></div>
          `;
        } else {
            removeContent(taskPage);
            taskPage.innerHTML += `
              <div id='week-page'>This Week</div>
              <div id='week-task'></div>
          `;
        }
    };

    const initTabButton = () => {
        const inboxTab = document.querySelector("#inbox-container");
        const todayTab = document.querySelector("#today-container");
        const upcomingTab = document.querySelector("#upcoming-container");

        inboxTab.addEventListener("click", function () {
            loadContent("Inbox");
        });
        todayTab.addEventListener("click", function () {
            loadContent("Today");
        });
        upcomingTab.addEventListener("click", function () {
            loadContent("Upcoming");
        });
    };

    return { initTabButton };
};

export { Pages };
