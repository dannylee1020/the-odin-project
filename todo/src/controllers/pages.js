const Pages = () => {
    // ? instead of switching tab contents, make function for individual page?
    // ! refactor code to more modules

    const addPage = function (page) {
        let taskPage = document.querySelector("#task-page");

        if (page === "Inbox") {
            let inboxHTML = `
            <div id='inbox-content' data-content='inbox'>
                <div id='inbox-title'> Inbox </div>
                <div id='task-container'>
                    <i class='fas fa-plus'></i>
                    <div id='add-task'> Add Task</div>
                </div>
            <div>
            `;

            taskPage.insertAdjacentHTML("afterbegin", inboxHTML);
        } else if (page === "Today") {
            let todayHTML = `
            <div id='today-content' data-content='today'>
                <div id='today-title'>Today </div>
                <div id='today-task'></div>
            </div>
            `;

            taskPage.insertAdjacentHTML("afterbegin", todayHTML);
        } else {
            let upcomingHTML = `
            <div id='upcoming-content' data-content='upcoming'>
                <div id='upcoming-title'>This Week</div>
                <div id='upcoming-task'></div>
            </div>
            `;

            taskPage.insertAdjacentHTML("afterbegin", upcomingHTML);
        }
    };

    const togglePage = function (page) {
        const contentPage = document.querySelectorAll("[data-content]");

        contentPage.forEach((item) => {
            item.style.display = "none";
        });

        if (page === "Inbox") {
            document.querySelector("#inbox-content").style.display = "block";
        } else if (page === "Today") {
            document.querySelector("#today-content").style.display = "block";
        } else {
            document.querySelector("#upcoming-content").style.display = "block";
        }
    };

    const loadContent = function (page) {
        let taskPage = document.querySelector("#task-page");
        if (page === "Inbox") {
            if (taskPage.querySelector("#inbox-content") === null) {
                addPage("Inbox");
                togglePage("Inbox");
            } else {
                togglePage("Inbox");
            }
        } else if (page === "Today") {
            if (taskPage.querySelector("#today-content") === null) {
                addPage("Today");
                togglePage("Today");
            } else {
                togglePage("Today");
            }
        } else {
            if (taskPage.querySelector("#upcoming-content") === null) {
                addPage("Upcoming");
                togglePage("Upcoming");
            } else {
                togglePage("Upcoming");
            }
        }
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

    const initTabButton = () => {
        const inboxTab = document.querySelector("#inbox-container");
        const todayTab = document.querySelector("#today-container");
        const upcomingTab = document.querySelector("#upcoming-container");

        inboxTab.addEventListener("click", function () {
            loadContent("Inbox");
            initActiveTab(this);
        });

        todayTab.addEventListener("click", function () {
            loadContent("Today");
            initActiveTab(this);
        });
        upcomingTab.addEventListener("click", function () {
            loadContent("Upcoming");
            initActiveTab(this);
        });
    };

    return { initTabButton };
};

export { Pages };
