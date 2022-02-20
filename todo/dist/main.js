/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/components/buildHeader.js":
/*!***************************************!*\
  !*** ./src/components/buildHeader.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "buildHeader": () => (/* binding */ buildHeader)
/* harmony export */ });
const buildHeader = function () {
    const container = document.createElement("div");
    const header = document.createElement("div");
    const name = document.createElement("div");
    const icon = document.createElement("i");

    container.style.margin = "-20px";
    container.style.position = "relative";

    header.style.display = "flex";
    header.style.width = "100%";
    header.style.justifyContent = "left";
    header.style.alignItems = "center";
    header.style.backgroundColor = "#DB4C3F";
    header.style.height = "100px";

    icon.setAttribute("class", "fas fa-check-double");
    icon.style.fontSize = "40px";
    icon.style.color = "white";
    icon.style.marginLeft = "50px";

    name.textContent = "ToDo";
    name.style.fontFamily = "Ubuntu";
    name.style.marginLeft = "20px";
    name.style.color = "white";
    name.style.fontSize = "30px";

    header.append(icon, name);
    container.appendChild(header);

    return container;
};




/***/ }),

/***/ "./src/components/buildSideBar.js":
/*!****************************************!*\
  !*** ./src/components/buildSideBar.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "buildSideBar": () => (/* binding */ buildSideBar)
/* harmony export */ });
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
/* harmony import */ var _components_buildHeader__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/buildHeader */ "./src/components/buildHeader.js");
/* harmony import */ var _components_buildSideBar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/buildSideBar */ "./src/components/buildSideBar.js");



const header = (0,_components_buildHeader__WEBPACK_IMPORTED_MODULE_0__.buildHeader)();
const sideBar = (0,_components_buildSideBar__WEBPACK_IMPORTED_MODULE_1__.buildSideBar)();

document.body.append(header, sideBar);

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRXVCOzs7Ozs7Ozs7Ozs7Ozs7QUNqQ3ZCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUV3Qjs7Ozs7OztVQ3RGeEI7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7QUNOdUQ7QUFDRTs7QUFFekQsZUFBZSxvRUFBVztBQUMxQixnQkFBZ0Isc0VBQVk7O0FBRTVCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kby8uL3NyYy9jb21wb25lbnRzL2J1aWxkSGVhZGVyLmpzIiwid2VicGFjazovL3RvZG8vLi9zcmMvY29tcG9uZW50cy9idWlsZFNpZGVCYXIuanMiLCJ3ZWJwYWNrOi8vdG9kby93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9kby93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG8vLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgYnVpbGRIZWFkZXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNvbnN0IG5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNvbnN0IGljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaVwiKTtcblxuICAgIGNvbnRhaW5lci5zdHlsZS5tYXJnaW4gPSBcIi0yMHB4XCI7XG4gICAgY29udGFpbmVyLnN0eWxlLnBvc2l0aW9uID0gXCJyZWxhdGl2ZVwiO1xuXG4gICAgaGVhZGVyLnN0eWxlLmRpc3BsYXkgPSBcImZsZXhcIjtcbiAgICBoZWFkZXIuc3R5bGUud2lkdGggPSBcIjEwMCVcIjtcbiAgICBoZWFkZXIuc3R5bGUuanVzdGlmeUNvbnRlbnQgPSBcImxlZnRcIjtcbiAgICBoZWFkZXIuc3R5bGUuYWxpZ25JdGVtcyA9IFwiY2VudGVyXCI7XG4gICAgaGVhZGVyLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwiI0RCNEMzRlwiO1xuICAgIGhlYWRlci5zdHlsZS5oZWlnaHQgPSBcIjEwMHB4XCI7XG5cbiAgICBpY29uLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwiZmFzIGZhLWNoZWNrLWRvdWJsZVwiKTtcbiAgICBpY29uLnN0eWxlLmZvbnRTaXplID0gXCI0MHB4XCI7XG4gICAgaWNvbi5zdHlsZS5jb2xvciA9IFwid2hpdGVcIjtcbiAgICBpY29uLnN0eWxlLm1hcmdpbkxlZnQgPSBcIjUwcHhcIjtcblxuICAgIG5hbWUudGV4dENvbnRlbnQgPSBcIlRvRG9cIjtcbiAgICBuYW1lLnN0eWxlLmZvbnRGYW1pbHkgPSBcIlVidW50dVwiO1xuICAgIG5hbWUuc3R5bGUubWFyZ2luTGVmdCA9IFwiMjBweFwiO1xuICAgIG5hbWUuc3R5bGUuY29sb3IgPSBcIndoaXRlXCI7XG4gICAgbmFtZS5zdHlsZS5mb250U2l6ZSA9IFwiMzBweFwiO1xuXG4gICAgaGVhZGVyLmFwcGVuZChpY29uLCBuYW1lKTtcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoaGVhZGVyKTtcblxuICAgIHJldHVybiBjb250YWluZXI7XG59O1xuXG5leHBvcnQgeyBidWlsZEhlYWRlciB9O1xuIiwiLy8gVE9ETzogYWRkIGxvZ2ljIGZvciBob3ZlcmluZyB0YWJzXG4vLyBUT0RPOiBhZGQgbG9naWMgZm9yIGNsaWNraW5nIG9uIGVhY2ggdGFiIHRvIHNob3cgdGhlIGNvcnJlc3BvbmRpbmcgcGFnZVxuXG5jb25zdCBidWlsZFNpZGVCYXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjb250YWluZXIuc3R5bGUuZGlzcGxheSA9IFwiZmxleFwiO1xuICAgIGNvbnRhaW5lci5zdHlsZS5mbGV4RGlyZWN0aW9uID0gXCJjb2x1bW5cIjtcbiAgICBjb250YWluZXIuc3R5bGUuZ2FwID0gXCIzNXB4XCI7XG4gICAgY29udGFpbmVyLnN0eWxlLndpZHRoID0gXCIyOCVcIjtcbiAgICBjb250YWluZXIuc3R5bGUuaGVpZ2h0ID0gXCIxMDB2aFwiO1xuICAgIGNvbnRhaW5lci5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcIiNGQUZBRkFcIjtcblxuICAgIC8vIGNyZWF0ZSBpbmJveCB0YWJcbiAgICBjb25zdCBpbmJveENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgaW5ib3hDb250YWluZXIuc3R5bGUuZGlzcGxheSA9IFwiZmxleFwiO1xuICAgIGluYm94Q29udGFpbmVyLnN0eWxlLm1hcmdpblRvcCA9IFwiNjBweFwiO1xuXG4gICAgY29uc3QgaW5ib3hFbW9qaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpXCIpO1xuICAgIGluYm94RW1vamkuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJmYXMgZmEtaW5ib3hcIik7XG4gICAgaW5ib3hFbW9qaS5zdHlsZS5tYXJnaW4gPSBcIjBweCAxNXB4IDBweCAyMHB4XCI7XG4gICAgY29uc3QgaW5ib3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGluYm94LnRleHRDb250ZW50ID0gXCJJbmJveFwiO1xuICAgIGluYm94LnN0eWxlLmZvbnRGYW1pbHkgPSBcIlVidW50dVwiO1xuXG4gICAgaW5ib3hDb250YWluZXIuYXBwZW5kKGluYm94RW1vamksIGluYm94KTtcblxuICAgIC8vIGNyZWF0ZSB0b2RheSB0YWJcbiAgICBjb25zdCB0b2RheUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgdG9kYXlDb250YWluZXIuc3R5bGUuZGlzcGxheSA9IFwiZmxleFwiO1xuXG4gICAgY29uc3QgdG9kYXlFbW9qaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpXCIpO1xuICAgIHRvZGF5RW1vamkuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJmYXMgZmEtY2FsZW5kYXItZGF5XCIpO1xuICAgIHRvZGF5RW1vamkuc3R5bGUubWFyZ2luID0gXCIwcHggMTVweCAwcHggMjBweFwiO1xuICAgIGNvbnN0IHRvZGF5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICB0b2RheS50ZXh0Q29udGVudCA9IFwiVG9kYXlcIjtcbiAgICB0b2RheS5zdHlsZS5mb250RmFtaWx5ID0gXCJVYnVudHVcIjtcblxuICAgIHRvZGF5Q29udGFpbmVyLmFwcGVuZCh0b2RheUVtb2ppLCB0b2RheSk7XG5cbiAgICAvLyBjcmVhdGUgdXBjb21pbmcgdGFiXG4gICAgY29uc3QgdXBjb21pbmdDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHVwY29taW5nQ29udGFpbmVyLnN0eWxlLmRpc3BsYXkgPSBcImZsZXhcIjtcblxuICAgIGNvbnN0IHVwY29taW5nRW1vamkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaVwiKTtcbiAgICB1cGNvbWluZ0Vtb2ppLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwiZmFzIGZhLWNhbGVuZGFyLXdlZWtcIik7XG4gICAgdXBjb21pbmdFbW9qaS5zdHlsZS5tYXJnaW4gPSBcIjBweCAxNXB4IDBweCAyMHB4XCI7XG4gICAgY29uc3QgdXBjb21pbmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHVwY29taW5nLnRleHRDb250ZW50ID0gXCJVcGNvbWluZ1wiO1xuICAgIHVwY29taW5nLnN0eWxlLmZvbnRGYW1pbHkgPSBcIlVidW50dVwiO1xuXG4gICAgdXBjb21pbmdDb250YWluZXIuYXBwZW5kKHVwY29taW5nRW1vamksIHVwY29taW5nKTtcblxuICAgIC8vIFByb2plY3Qgc2VjdGlvblxuICAgIGNvbnN0IHByb2plY3RDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgaGVhZGVyLnRleHRDb250ZW50ID0gXCJQcm9qZWN0c1wiO1xuICAgIGhlYWRlci5zdHlsZS5tYXJnaW5MZWZ0ID0gXCIxNXB4XCI7XG4gICAgaGVhZGVyLnN0eWxlLm1hcmdpblRvcCA9IFwiMjBweFwiO1xuICAgIGhlYWRlci5zdHlsZS5mb250RmFtaWx5ID0gXCJVYnVudHVcIjtcbiAgICBoZWFkZXIuc3R5bGUuZm9udFNpemUgPSBcIjI1cHhcIjtcblxuICAgIC8vIFRPRE86IGFkZCBsb2dpYyBmb3IgYWRkaW5nIGFuZCByZW1vdmluZyBwcm9qZWN0c1xuICAgIGNvbnN0IHByb2plY3RTZWN0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblxuICAgIGNvbnN0IGFkZENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgYWRkQ29udGFpbmVyLnN0eWxlLmRpc3BsYXkgPSBcImZsZXhcIjtcbiAgICBjb25zdCBhZGRJY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlcIik7XG4gICAgYWRkSWNvbi5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcImZhcyBmYS1wbHVzXCIpO1xuICAgIGFkZEljb24uc3R5bGUubWFyZ2luID0gXCIwcHggMTVweCAwcHggMjBweFwiO1xuICAgIGNvbnN0IGFkZFByb2plY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGFkZFByb2plY3QudGV4dENvbnRlbnQgPSBcIkFkZCBQcm9qZWN0XCI7XG4gICAgYWRkUHJvamVjdC5zdHlsZS5mb250RmFtaWx5ID0gXCJVYnVudHVcIjtcblxuICAgIGFkZENvbnRhaW5lci5hcHBlbmQoYWRkSWNvbiwgYWRkUHJvamVjdCk7XG4gICAgcHJvamVjdFNlY3Rpb24uYXBwZW5kKGFkZENvbnRhaW5lcik7XG5cbiAgICBjb250YWluZXIuYXBwZW5kKFxuICAgICAgICBpbmJveENvbnRhaW5lcixcbiAgICAgICAgdG9kYXlDb250YWluZXIsXG4gICAgICAgIHVwY29taW5nQ29udGFpbmVyLFxuICAgICAgICBoZWFkZXIsXG4gICAgICAgIHByb2plY3RTZWN0aW9uXG4gICAgKTtcbiAgICByZXR1cm4gY29udGFpbmVyO1xufTtcblxuZXhwb3J0IHsgYnVpbGRTaWRlQmFyIH07XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCB7IGJ1aWxkSGVhZGVyIH0gZnJvbSBcIi4vY29tcG9uZW50cy9idWlsZEhlYWRlclwiO1xuaW1wb3J0IHsgYnVpbGRTaWRlQmFyIH0gZnJvbSBcIi4vY29tcG9uZW50cy9idWlsZFNpZGVCYXJcIjtcblxuY29uc3QgaGVhZGVyID0gYnVpbGRIZWFkZXIoKTtcbmNvbnN0IHNpZGVCYXIgPSBidWlsZFNpZGVCYXIoKTtcblxuZG9jdW1lbnQuYm9keS5hcHBlbmQoaGVhZGVyLCBzaWRlQmFyKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==