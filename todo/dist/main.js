/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/controllers/pages.js":
/*!**********************************!*\
  !*** ./src/controllers/pages.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Pages": () => (/* binding */ Pages)
/* harmony export */ });
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




/***/ }),

/***/ "./src/controllers/task.js":
/*!*********************************!*\
  !*** ./src/controllers/task.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Task": () => (/* binding */ Task)
/* harmony export */ });
// ? add toogle function toggle between form and task list?
// ? create separate task.css to handle styling instead of DOM?

const Task = () => {
    const addForm = function () {
        const form = `
          <div id='form-container'>
            <input id='task-input'>
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




/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _controllers_pages__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./controllers/pages */ "./src/controllers/pages.js");
/* harmony import */ var _controllers_task__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./controllers/task */ "./src/controllers/task.js");



const pages = (0,_controllers_pages__WEBPACK_IMPORTED_MODULE_0__.Pages)();
const tasks = (0,_controllers_task__WEBPACK_IMPORTED_MODULE_1__.Task)();

pages.initTabButton();
tasks.addForm();

// TODO add logic for adding tasks and projects

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYztBQUNkO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0EsY0FBYztBQUNkO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0EsY0FBYztBQUNkO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBLGFBQWE7QUFDYjs7QUFFaUI7Ozs7Ozs7Ozs7Ozs7OztBQ3JIakI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxhQUFhO0FBQ2I7O0FBRWdCOzs7Ozs7O1VDM0doQjtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7OztBQ040QztBQUNGOztBQUUxQyxjQUFjLHlEQUFLO0FBQ25CLGNBQWMsdURBQUk7O0FBRWxCO0FBQ0E7O0FBRUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLy4vc3JjL2NvbnRyb2xsZXJzL3BhZ2VzLmpzIiwid2VicGFjazovL3RvZG8vLi9zcmMvY29udHJvbGxlcnMvdGFzay5qcyIsIndlYnBhY2s6Ly90b2RvL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvZG8vd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvZG8vd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2RvL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9kby8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBQYWdlcyA9ICgpID0+IHtcbiAgICAvLyA/IGluc3RlYWQgb2Ygc3dpdGNoaW5nIHRhYiBjb250ZW50cywgbWFrZSBmdW5jdGlvbiBmb3IgaW5kaXZpZHVhbCBwYWdlP1xuICAgIC8vICEgcmVmYWN0b3IgY29kZSB0byBtb3JlIG1vZHVsZXNcblxuICAgIGNvbnN0IGFkZFBhZ2UgPSBmdW5jdGlvbiAocGFnZSkge1xuICAgICAgICBsZXQgdGFza1BhZ2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Rhc2stcGFnZVwiKTtcblxuICAgICAgICBpZiAocGFnZSA9PT0gXCJJbmJveFwiKSB7XG4gICAgICAgICAgICBsZXQgaW5ib3hIVE1MID0gYFxuICAgICAgICAgICAgPGRpdiBpZD0naW5ib3gtY29udGVudCcgZGF0YS1jb250ZW50PSdpbmJveCc+XG4gICAgICAgICAgICAgICAgPGRpdiBpZD0naW5ib3gtdGl0bGUnPiBJbmJveCA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGlkPSd0YXNrLWNvbnRhaW5lcic+XG4gICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzPSdmYXMgZmEtcGx1cyc+PC9pPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGlkPSdhZGQtdGFzayc+IEFkZCBUYXNrPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgYDtcblxuICAgICAgICAgICAgdGFza1BhZ2UuaW5zZXJ0QWRqYWNlbnRIVE1MKFwiYWZ0ZXJiZWdpblwiLCBpbmJveEhUTUwpO1xuICAgICAgICB9IGVsc2UgaWYgKHBhZ2UgPT09IFwiVG9kYXlcIikge1xuICAgICAgICAgICAgbGV0IHRvZGF5SFRNTCA9IGBcbiAgICAgICAgICAgIDxkaXYgaWQ9J3RvZGF5LWNvbnRlbnQnIGRhdGEtY29udGVudD0ndG9kYXknPlxuICAgICAgICAgICAgICAgIDxkaXYgaWQ9J3RvZGF5LXRpdGxlJz5Ub2RheSA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGlkPSd0b2RheS10YXNrJz48L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgYDtcblxuICAgICAgICAgICAgdGFza1BhZ2UuaW5zZXJ0QWRqYWNlbnRIVE1MKFwiYWZ0ZXJiZWdpblwiLCB0b2RheUhUTUwpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbGV0IHVwY29taW5nSFRNTCA9IGBcbiAgICAgICAgICAgIDxkaXYgaWQ9J3VwY29taW5nLWNvbnRlbnQnIGRhdGEtY29udGVudD0ndXBjb21pbmcnPlxuICAgICAgICAgICAgICAgIDxkaXYgaWQ9J3VwY29taW5nLXRpdGxlJz5UaGlzIFdlZWs8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGlkPSd1cGNvbWluZy10YXNrJz48L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgYDtcblxuICAgICAgICAgICAgdGFza1BhZ2UuaW5zZXJ0QWRqYWNlbnRIVE1MKFwiYWZ0ZXJiZWdpblwiLCB1cGNvbWluZ0hUTUwpO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIGNvbnN0IHRvZ2dsZVBhZ2UgPSBmdW5jdGlvbiAocGFnZSkge1xuICAgICAgICBjb25zdCBjb250ZW50UGFnZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCJbZGF0YS1jb250ZW50XVwiKTtcblxuICAgICAgICBjb250ZW50UGFnZS5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgICAgICAgICBpdGVtLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgaWYgKHBhZ2UgPT09IFwiSW5ib3hcIikge1xuICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNpbmJveC1jb250ZW50XCIpLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG4gICAgICAgIH0gZWxzZSBpZiAocGFnZSA9PT0gXCJUb2RheVwiKSB7XG4gICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3RvZGF5LWNvbnRlbnRcIikuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdXBjb21pbmctY29udGVudFwiKS5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIGNvbnN0IGxvYWRDb250ZW50ID0gZnVuY3Rpb24gKHBhZ2UpIHtcbiAgICAgICAgbGV0IHRhc2tQYWdlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0YXNrLXBhZ2VcIik7XG4gICAgICAgIGlmIChwYWdlID09PSBcIkluYm94XCIpIHtcbiAgICAgICAgICAgIGlmICh0YXNrUGFnZS5xdWVyeVNlbGVjdG9yKFwiI2luYm94LWNvbnRlbnRcIikgPT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICBhZGRQYWdlKFwiSW5ib3hcIik7XG4gICAgICAgICAgICAgICAgdG9nZ2xlUGFnZShcIkluYm94XCIpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0b2dnbGVQYWdlKFwiSW5ib3hcIik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAocGFnZSA9PT0gXCJUb2RheVwiKSB7XG4gICAgICAgICAgICBpZiAodGFza1BhZ2UucXVlcnlTZWxlY3RvcihcIiN0b2RheS1jb250ZW50XCIpID09PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgYWRkUGFnZShcIlRvZGF5XCIpO1xuICAgICAgICAgICAgICAgIHRvZ2dsZVBhZ2UoXCJUb2RheVwiKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdG9nZ2xlUGFnZShcIlRvZGF5XCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaWYgKHRhc2tQYWdlLnF1ZXJ5U2VsZWN0b3IoXCIjdXBjb21pbmctY29udGVudFwiKSA9PT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIGFkZFBhZ2UoXCJVcGNvbWluZ1wiKTtcbiAgICAgICAgICAgICAgICB0b2dnbGVQYWdlKFwiVXBjb21pbmdcIik7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRvZ2dsZVBhZ2UoXCJVcGNvbWluZ1wiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH07XG5cbiAgICBjb25zdCBpbml0QWN0aXZlVGFiID0gKHRhYikgPT4ge1xuICAgICAgICBjb25zdCBhbGxUYWJzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIltkYXRhLWlkXVwiKTtcblxuICAgICAgICBpZiAoIXRhYi5jbGFzc0xpc3QuY29udGFpbnMoXCJhY3RpdmVcIikpIHtcbiAgICAgICAgICAgIGFsbFRhYnMuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgICAgICAgICAgICAgIGl0ZW0uY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgdGFiLmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIik7XG4gICAgfTtcblxuICAgIGNvbnN0IGluaXRUYWJCdXR0b24gPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IGluYm94VGFiID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNpbmJveC1jb250YWluZXJcIik7XG4gICAgICAgIGNvbnN0IHRvZGF5VGFiID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0b2RheS1jb250YWluZXJcIik7XG4gICAgICAgIGNvbnN0IHVwY29taW5nVGFiID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN1cGNvbWluZy1jb250YWluZXJcIik7XG5cbiAgICAgICAgaW5ib3hUYWIuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGxvYWRDb250ZW50KFwiSW5ib3hcIik7XG4gICAgICAgICAgICBpbml0QWN0aXZlVGFiKHRoaXMpO1xuICAgICAgICB9KTtcblxuICAgICAgICB0b2RheVRhYi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgbG9hZENvbnRlbnQoXCJUb2RheVwiKTtcbiAgICAgICAgICAgIGluaXRBY3RpdmVUYWIodGhpcyk7XG4gICAgICAgIH0pO1xuICAgICAgICB1cGNvbWluZ1RhYi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgbG9hZENvbnRlbnQoXCJVcGNvbWluZ1wiKTtcbiAgICAgICAgICAgIGluaXRBY3RpdmVUYWIodGhpcyk7XG4gICAgICAgIH0pO1xuICAgIH07XG5cbiAgICByZXR1cm4geyBpbml0VGFiQnV0dG9uIH07XG59O1xuXG5leHBvcnQgeyBQYWdlcyB9O1xuIiwiLy8gPyBhZGQgdG9vZ2xlIGZ1bmN0aW9uIHRvZ2dsZSBiZXR3ZWVuIGZvcm0gYW5kIHRhc2sgbGlzdD9cbi8vID8gY3JlYXRlIHNlcGFyYXRlIHRhc2suY3NzIHRvIGhhbmRsZSBzdHlsaW5nIGluc3RlYWQgb2YgRE9NP1xuXG5jb25zdCBUYXNrID0gKCkgPT4ge1xuICAgIGNvbnN0IGFkZEZvcm0gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGNvbnN0IGZvcm0gPSBgXG4gICAgICAgICAgPGRpdiBpZD0nZm9ybS1jb250YWluZXInPlxuICAgICAgICAgICAgPGlucHV0IGlkPSd0YXNrLWlucHV0Jz5cbiAgICAgICAgICAgIDxkaXYgaWQ9J3Rhc2stYnV0dG9ucyc+XG4gICAgICAgICAgICAgIDxidXR0b24gaWQ9J2FkZC1idHRuJz5BZGQgVGFzazwvYnV0dG9uPlxuICAgICAgICAgICAgICA8YnV0dG9uIGlkPSdjYW5jZWwtYnR0bic+Q2FuY2VsPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICBgO1xuXG4gICAgICAgIGNvbnN0IGluYm94Q29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjaW5ib3gtY29udGVudFwiKTtcbiAgICAgICAgY29uc3QgdGFza0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdGFzay1jb250YWluZXJcIik7XG5cbiAgICAgICAgdGFza0NvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICAgICAgICAgIGUuY3VycmVudFRhcmdldC5zdHlsZS5kaXNwbGF5ID0gXCJOb25lXCI7XG4gICAgICAgICAgICBjb25zdCBmb3JtQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNmb3JtLWNvbnRhaW5lclwiKTtcblxuICAgICAgICAgICAgaWYgKCFpbmJveENvbnRlbnQuY29udGFpbnMoZm9ybUNvbnRhaW5lcikpIHtcbiAgICAgICAgICAgICAgICB0YXNrQ29udGFpbmVyLmluc2VydEFkamFjZW50SFRNTChcImFmdGVyZW5kXCIsIGZvcm0pO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBmb3JtQ29udGFpbmVyLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBzdHlsZUZvcm0oKTtcbiAgICAgICAgICAgIHN1Ym1pdFRhc2soKTtcbiAgICAgICAgICAgIGNhbmNlbFRhc2soKTtcbiAgICAgICAgfSk7XG4gICAgfTtcblxuICAgIGNvbnN0IHN0eWxlRm9ybSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgbGV0IGlucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0YXNrLWlucHV0XCIpO1xuICAgICAgICBpbnB1dC5zdHlsZS53aWR0aCA9IFwiMTAwJVwiO1xuICAgICAgICBpbnB1dC5zdHlsZS5oZWlnaHQgPSBcIjgwcHhcIjtcblxuICAgICAgICBsZXQgdGFza0J1dHRvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Rhc2stYnV0dG9uc1wiKTtcbiAgICAgICAgdGFza0J1dHRvbnMuc3R5bGUuZGlzcGxheSA9IFwiZmxleFwiO1xuICAgICAgICB0YXNrQnV0dG9ucy5zdHlsZS5nYXAgPSBcIjEwcHhcIjtcbiAgICAgICAgdGFza0J1dHRvbnMuc3R5bGUubWFyZ2luVG9wID0gXCIyMHB4XCI7XG5cbiAgICAgICAgLy8gc3R5bGUgZWFjaCBidXR0b25cbiAgICAgICAgbGV0IGFkZEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYWRkLWJ0dG5cIik7XG4gICAgICAgIGFkZEJ1dHRvbi5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcIiNFMjcwNjVcIjtcbiAgICAgICAgYWRkQnV0dG9uLnN0eWxlLmNvbG9yID0gXCJ3aGl0ZVwiO1xuICAgICAgICBhZGRCdXR0b24uc3R5bGUuZm9udFdlaWdodCA9IFwiYm9sZFwiO1xuICAgICAgICBhZGRCdXR0b24uc3R5bGUuYm9yZGVyID0gXCJub25lXCI7XG4gICAgICAgIGFkZEJ1dHRvbi5zdHlsZS5ib3JkZXJSYWRpdXMgPSBcIjVweFwiO1xuICAgICAgICBhZGRCdXR0b24uc3R5bGUucGFkZGluZyA9IFwiMTBweCAyMHB4XCI7XG5cbiAgICAgICAgbGV0IGNhbmNlbEJ0dG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NhbmNlbC1idHRuXCIpO1xuICAgICAgICBjYW5jZWxCdHRuLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwid2hpdGVcIjtcbiAgICAgICAgY2FuY2VsQnR0bi5zdHlsZS5jb2xvciA9IFwiYmxhY2tcIjtcbiAgICAgICAgY2FuY2VsQnR0bi5zdHlsZS5mb250V2VpZ2h0ID0gXCJib2xkXCI7XG4gICAgICAgIGNhbmNlbEJ0dG4uc3R5bGUuYm9yZGVyUmFkaXVzID0gXCI1cHhcIjtcbiAgICAgICAgY2FuY2VsQnR0bi5zdHlsZS5ib3JkZXIgPSBcIjJweCBzb2xpZCBibGFja1wiO1xuICAgICAgICBjYW5jZWxCdHRuLnN0eWxlLnBhZGRpbmcgPSBcIjEwcHggMTVweFwiO1xuICAgIH07XG5cbiAgICBjb25zdCBzdWJtaXRUYXNrID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBjb25zdCBzdWJtaXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2FkZC1idHRuXCIpO1xuICAgICAgICBzdWJtaXQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHRhc2tUb0xpc3QpO1xuICAgIH07XG5cbiAgICBjb25zdCBjYW5jZWxUYXNrID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBjb25zdCBjYW5jZWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NhbmNlbC1idHRuXCIpO1xuICAgICAgICBjYW5jZWwuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZm9ybS1jb250YWluZXJcIikuc3R5bGUuZGlzcGxheSA9IFwiTm9uZVwiO1xuICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0YXNrLWNvbnRhaW5lclwiKS5zdHlsZS5kaXNwbGF5ID0gXCJmbGV4XCI7XG4gICAgICAgIH0pO1xuICAgIH07XG5cbiAgICBjb25zdCB0YXNrVG9MaXN0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBsZXQgdGFza0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdGFzay1jb250YWluZXJcIik7XG4gICAgICAgIGxldCBpbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdGFzay1pbnB1dFwiKTtcblxuICAgICAgICBsZXQgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgbGV0IHRhc2sgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICB0YXNrLnRleHRDb250ZW50ID0gaW5wdXQudmFsdWU7XG4gICAgICAgIGxldCB0YXNrSWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpXCIpO1xuICAgICAgICB0YXNrSWNvbi5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcImZhciBmYS1jaXJjbGVcIik7XG5cbiAgICAgICAgLy8gVE9ETzogc3R5bGUgY2lyY2xlXG4gICAgICAgIHRhc2tJY29uLnN0eWxlLmZvbnRTaXplID0gXCIyMHB4XCI7XG4gICAgICAgIHRhc2tJY29uLnN0eWxlLmJvcmRlcjtcblxuICAgICAgICAvLyBzdHlsZSBjb250YWluZXJcbiAgICAgICAgY29udGFpbmVyLmFwcGVuZCh0YXNrSWNvbiwgdGFzayk7XG4gICAgICAgIGNvbnRhaW5lci5zdHlsZS5kaXNwbGF5ID0gXCJmbGV4XCI7XG4gICAgICAgIGNvbnRhaW5lci5zdHlsZS5nYXAgPSBcIjE1cHhcIjtcbiAgICAgICAgY29udGFpbmVyLnN0eWxlLm1hcmdpblRvcCA9IFwiMTVweFwiO1xuICAgICAgICBjb250YWluZXIuc3R5bGUubWFyZ2luQm90dG9tID0gXCIxMHB4XCI7XG5cbiAgICAgICAgLy8gZGlzcGxheSB0YXNrIGxpc3RcbiAgICAgICAgdGFza0NvbnRhaW5lci5iZWZvcmUoY29udGFpbmVyKTtcblxuICAgICAgICAvLyBkaXNwbGF5IGFkZCB0YXNrIHRhYiBhZ2FpbiBvbmNlIHRhc2sgaXMgYWRkZWRcbiAgICAgICAgdGFza0NvbnRhaW5lci5zdHlsZS5kaXNwbGF5ID0gXCJmbGV4XCI7XG4gICAgICAgIC8vIHRvZ2dsZSBmb3JtIHRvIGhpZGVcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNmb3JtLWNvbnRhaW5lclwiKS5zdHlsZS5kaXNwbGF5ID0gXCJOb25lXCI7XG4gICAgfTtcblxuICAgIHJldHVybiB7IGFkZEZvcm0gfTtcbn07XG5cbmV4cG9ydCB7IFRhc2sgfTtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHsgUGFnZXMgfSBmcm9tIFwiLi9jb250cm9sbGVycy9wYWdlc1wiO1xuaW1wb3J0IHsgVGFzayB9IGZyb20gXCIuL2NvbnRyb2xsZXJzL3Rhc2tcIjtcblxuY29uc3QgcGFnZXMgPSBQYWdlcygpO1xuY29uc3QgdGFza3MgPSBUYXNrKCk7XG5cbnBhZ2VzLmluaXRUYWJCdXR0b24oKTtcbnRhc2tzLmFkZEZvcm0oKTtcblxuLy8gVE9ETyBhZGQgbG9naWMgZm9yIGFkZGluZyB0YXNrcyBhbmQgcHJvamVjdHNcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==