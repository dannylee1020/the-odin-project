// TODO: add logic for hovering tabs
// TODO: add logic for clicking on each tab to show the corresponding page

const buildSideBar = function () {
    const container = document.createElement("div");
    container.style.display = "flex";
    container.style.flexDirection = "column";
    container.style.gap = "35px";
    container.style.width = "28%";
    container.style.height = "100vh";
    container.style.backgroundColor = "#FAFAFA";

    // create inbox tab
    const inboxContainer = document.createElement("div");
    inboxContainer.style.display = "flex";
    inboxContainer.style.marginTop = "60px";

    const inboxEmoji = document.createElement("i");
    inboxEmoji.setAttribute("class", "fas fa-inbox");
    inboxEmoji.style.margin = "0px 15px 0px 20px";
    const inbox = document.createElement("div");
    inbox.textContent = "Inbox";
    inbox.style.fontFamily = "Ubuntu";

    inboxContainer.append(inboxEmoji, inbox);

    // create today tab
    const todayContainer = document.createElement("div");
    todayContainer.style.display = "flex";

    const todayEmoji = document.createElement("i");
    todayEmoji.setAttribute("class", "fas fa-calendar-day");
    todayEmoji.style.margin = "0px 15px 0px 20px";
    const today = document.createElement("div");
    today.textContent = "Today";
    today.style.fontFamily = "Ubuntu";

    todayContainer.append(todayEmoji, today);

    // create upcoming tab
    const upcomingContainer = document.createElement("div");
    upcomingContainer.style.display = "flex";

    const upcomingEmoji = document.createElement("i");
    upcomingEmoji.setAttribute("class", "fas fa-calendar-week");
    upcomingEmoji.style.margin = "0px 15px 0px 20px";
    const upcoming = document.createElement("div");
    upcoming.textContent = "Upcoming";
    upcoming.style.fontFamily = "Ubuntu";

    upcomingContainer.append(upcomingEmoji, upcoming);

    // Project section
    const projectContainer = document.createElement("div");
    const header = document.createElement("div");
    header.textContent = "Projects";
    header.style.marginLeft = "15px";
    header.style.marginTop = "20px";
    header.style.fontFamily = "Ubuntu";
    header.style.fontSize = "25px";

    // TODO: add logic for adding and removing projects
    const projectSection = document.createElement("div");

    const addContainer = document.createElement("div");
    addContainer.style.display = "flex";
    const addIcon = document.createElement("i");
    addIcon.setAttribute("class", "fas fa-plus");
    addIcon.style.margin = "0px 15px 0px 20px";
    const addProject = document.createElement("div");
    addProject.textContent = "Add Project";
    addProject.style.fontFamily = "Ubuntu";

    addContainer.append(addIcon, addProject);
    projectSection.append(addContainer);

    container.append(
        inboxContainer,
        todayContainer,
        upcomingContainer,
        header,
        projectSection
    );
    return container;
};

export { buildSideBar };
