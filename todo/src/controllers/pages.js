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
              <div id='inbox-content'>
                  <div id='inbox-title'> Inbox </div>
                  <div id='task-container'>
                      <i class='fas fa-plus'></i>
                      <div id='add-task'> Add Task</div>
                  </div>
              <div>
          `;
        } else if (pageName === "Today") {
            removeContent(taskPage);
            taskPage.innerHTML += `
              <div id='today-content'>
                <div id='today-title'>Today </div>
                <div id='today-task'></div>
              </div>
          `;
        } else {
            removeContent(taskPage);
            taskPage.innerHTML += `
            <div id='upcoming-content'>
              <div id='upcoming-title'>This Week</div>
              <div id='upcoming-task'></div>
            </div>
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
