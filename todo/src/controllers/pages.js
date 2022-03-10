// ? make module for each page
// ! refactor code to have more modules

const Pages = () => {
    const addInbox = () => {
        let taskPage = document.querySelector("#task-page");
        let inboxHTML = `
            <div id='inbox-content' data-content='inbox'>
                <div id='inbox-title'> Inbox </div>
                <div id='task-container'>
                    <i class='fas fa-plus'></i>
                    <div id='add-task'> Add Task</div>
                </div>
            <div>
        `;
        if (taskPage.querySelector("#inbox-content") === null) {
            taskPage.insertAdjacentHTML("afterbegin", inboxHTML);
        }
    };

    const addToday = () => {
        let taskPage = document.querySelector("#task-page");
        let todayHTML = `
            <div id='today-content' data-content='today'>
                <div id='today-title'>Today </div>
                <div id='today-task'></div>
            </div>
            `;
        if (taskPage.querySelector("#today-content") === null) {
            taskPage.insertAdjacentHTML("afterbegin", todayHTML);
        }
    };

    const addUpcoming = () => {
        let taskPage = document.querySelector("#task-page");
        let upcomingHTML = `
            <div id='upcoming-content' data-content='upcoming'>
                <div id='upcoming-title'>This Week</div>
                <div id='upcoming-task'></div>
            </div>
            `;
        if (taskPage.querySelector("#upcoming-content") === null) {
            taskPage.insertAdjacentHTML("afterbegin", upcomingHTML);
        }
    };

    const addProject = () => {};

    const togglePage = (page) => {
        const contentPage = document.querySelectorAll("[data-content");

        contentPage.forEach((item) => {
            item.style.display = "none";
        });

        let tabName = page.querySelector("#tab-name").textContent.toLowerCase();
        let content = document.querySelector(`[data-content=${tabName}]`);
        content.style.display = "block";
    };

    const loadContent = (tab) => {
        // if already added then the function is going to do nothing
        addInbox();
        addToday();
        addUpcoming();

        // toggle tab page
        togglePage(tab);
    };

    const initActiveTab = (tab) => {
        const allTabs = document.querySelectorAll("[data-id]");

        if (!tab.classList.contains("active")) {
            allTabs.forEach((item) => {
                item.classList.remove("active");
            });
        }

        tab.classList.add("active");
    };

    const initTab = () => {
        let tabs = document.querySelectorAll("[data-tab]");
        tabs.forEach((tab) => {
            tab.addEventListener("click", function () {
                loadContent(this);
                initActiveTab(this);
            });
        });
    };

    return { initTab };
};

export { Pages };
