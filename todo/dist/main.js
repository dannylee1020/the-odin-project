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

    container.append(inboxContainer, todayContainer, upcomingContainer, header);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRXVCOzs7Ozs7Ozs7Ozs7Ozs7QUNqQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUV3Qjs7Ozs7OztVQ2pFeEI7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7QUNOdUQ7QUFDRTs7QUFFekQsZUFBZSxvRUFBVztBQUMxQixnQkFBZ0Isc0VBQVk7O0FBRTVCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kby8uL3NyYy9jb21wb25lbnRzL2J1aWxkSGVhZGVyLmpzIiwid2VicGFjazovL3RvZG8vLi9zcmMvY29tcG9uZW50cy9idWlsZFNpZGVCYXIuanMiLCJ3ZWJwYWNrOi8vdG9kby93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9kby93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG8vLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgYnVpbGRIZWFkZXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNvbnN0IG5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNvbnN0IGljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaVwiKTtcblxuICAgIGNvbnRhaW5lci5zdHlsZS5tYXJnaW4gPSBcIi0yMHB4XCI7XG4gICAgY29udGFpbmVyLnN0eWxlLnBvc2l0aW9uID0gXCJyZWxhdGl2ZVwiO1xuXG4gICAgaGVhZGVyLnN0eWxlLmRpc3BsYXkgPSBcImZsZXhcIjtcbiAgICBoZWFkZXIuc3R5bGUud2lkdGggPSBcIjEwMCVcIjtcbiAgICBoZWFkZXIuc3R5bGUuanVzdGlmeUNvbnRlbnQgPSBcImxlZnRcIjtcbiAgICBoZWFkZXIuc3R5bGUuYWxpZ25JdGVtcyA9IFwiY2VudGVyXCI7XG4gICAgaGVhZGVyLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwiI0RCNEMzRlwiO1xuICAgIGhlYWRlci5zdHlsZS5oZWlnaHQgPSBcIjEwMHB4XCI7XG5cbiAgICBpY29uLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwiZmFzIGZhLWNoZWNrLWRvdWJsZVwiKTtcbiAgICBpY29uLnN0eWxlLmZvbnRTaXplID0gXCI0MHB4XCI7XG4gICAgaWNvbi5zdHlsZS5jb2xvciA9IFwid2hpdGVcIjtcbiAgICBpY29uLnN0eWxlLm1hcmdpbkxlZnQgPSBcIjUwcHhcIjtcblxuICAgIG5hbWUudGV4dENvbnRlbnQgPSBcIlRvRG9cIjtcbiAgICBuYW1lLnN0eWxlLmZvbnRGYW1pbHkgPSBcIlVidW50dVwiO1xuICAgIG5hbWUuc3R5bGUubWFyZ2luTGVmdCA9IFwiMjBweFwiO1xuICAgIG5hbWUuc3R5bGUuY29sb3IgPSBcIndoaXRlXCI7XG4gICAgbmFtZS5zdHlsZS5mb250U2l6ZSA9IFwiMzBweFwiO1xuXG4gICAgaGVhZGVyLmFwcGVuZChpY29uLCBuYW1lKTtcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoaGVhZGVyKTtcblxuICAgIHJldHVybiBjb250YWluZXI7XG59O1xuXG5leHBvcnQgeyBidWlsZEhlYWRlciB9O1xuIiwiY29uc3QgYnVpbGRTaWRlQmFyID0gZnVuY3Rpb24gKCkge1xuICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY29udGFpbmVyLnN0eWxlLmRpc3BsYXkgPSBcImZsZXhcIjtcbiAgICBjb250YWluZXIuc3R5bGUuZmxleERpcmVjdGlvbiA9IFwiY29sdW1uXCI7XG4gICAgY29udGFpbmVyLnN0eWxlLmdhcCA9IFwiMzVweFwiO1xuICAgIGNvbnRhaW5lci5zdHlsZS53aWR0aCA9IFwiMjglXCI7XG4gICAgY29udGFpbmVyLnN0eWxlLmhlaWdodCA9IFwiMTAwdmhcIjtcbiAgICBjb250YWluZXIuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCIjRkFGQUZBXCI7XG5cbiAgICAvLyBjcmVhdGUgaW5ib3ggdGFiXG4gICAgY29uc3QgaW5ib3hDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGluYm94Q29udGFpbmVyLnN0eWxlLmRpc3BsYXkgPSBcImZsZXhcIjtcbiAgICBpbmJveENvbnRhaW5lci5zdHlsZS5tYXJnaW5Ub3AgPSBcIjYwcHhcIjtcblxuICAgIGNvbnN0IGluYm94RW1vamkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaVwiKTtcbiAgICBpbmJveEVtb2ppLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwiZmFzIGZhLWluYm94XCIpO1xuICAgIGluYm94RW1vamkuc3R5bGUubWFyZ2luID0gXCIwcHggMTVweCAwcHggMjBweFwiO1xuICAgIGNvbnN0IGluYm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBpbmJveC50ZXh0Q29udGVudCA9IFwiSW5ib3hcIjtcbiAgICBpbmJveC5zdHlsZS5mb250RmFtaWx5ID0gXCJVYnVudHVcIjtcblxuICAgIGluYm94Q29udGFpbmVyLmFwcGVuZChpbmJveEVtb2ppLCBpbmJveCk7XG5cbiAgICAvLyBjcmVhdGUgdG9kYXkgdGFiXG4gICAgY29uc3QgdG9kYXlDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHRvZGF5Q29udGFpbmVyLnN0eWxlLmRpc3BsYXkgPSBcImZsZXhcIjtcblxuICAgIGNvbnN0IHRvZGF5RW1vamkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaVwiKTtcbiAgICB0b2RheUVtb2ppLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwiZmFzIGZhLWNhbGVuZGFyLWRheVwiKTtcbiAgICB0b2RheUVtb2ppLnN0eWxlLm1hcmdpbiA9IFwiMHB4IDE1cHggMHB4IDIwcHhcIjtcbiAgICBjb25zdCB0b2RheSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgdG9kYXkudGV4dENvbnRlbnQgPSBcIlRvZGF5XCI7XG4gICAgdG9kYXkuc3R5bGUuZm9udEZhbWlseSA9IFwiVWJ1bnR1XCI7XG5cbiAgICB0b2RheUNvbnRhaW5lci5hcHBlbmQodG9kYXlFbW9qaSwgdG9kYXkpO1xuXG4gICAgLy8gY3JlYXRlIHVwY29taW5nIHRhYlxuICAgIGNvbnN0IHVwY29taW5nQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICB1cGNvbWluZ0NvbnRhaW5lci5zdHlsZS5kaXNwbGF5ID0gXCJmbGV4XCI7XG5cbiAgICBjb25zdCB1cGNvbWluZ0Vtb2ppID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlcIik7XG4gICAgdXBjb21pbmdFbW9qaS5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcImZhcyBmYS1jYWxlbmRhci13ZWVrXCIpO1xuICAgIHVwY29taW5nRW1vamkuc3R5bGUubWFyZ2luID0gXCIwcHggMTVweCAwcHggMjBweFwiO1xuICAgIGNvbnN0IHVwY29taW5nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICB1cGNvbWluZy50ZXh0Q29udGVudCA9IFwiVXBjb21pbmdcIjtcbiAgICB1cGNvbWluZy5zdHlsZS5mb250RmFtaWx5ID0gXCJVYnVudHVcIjtcblxuICAgIHVwY29taW5nQ29udGFpbmVyLmFwcGVuZCh1cGNvbWluZ0Vtb2ppLCB1cGNvbWluZyk7XG5cbiAgICAvLyBQcm9qZWN0IHNlY3Rpb25cbiAgICBjb25zdCBwcm9qZWN0Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGhlYWRlci50ZXh0Q29udGVudCA9IFwiUHJvamVjdHNcIjtcbiAgICBoZWFkZXIuc3R5bGUubWFyZ2luTGVmdCA9IFwiMTVweFwiO1xuICAgIGhlYWRlci5zdHlsZS5tYXJnaW5Ub3AgPSBcIjIwcHhcIjtcbiAgICBoZWFkZXIuc3R5bGUuZm9udEZhbWlseSA9IFwiVWJ1bnR1XCI7XG4gICAgaGVhZGVyLnN0eWxlLmZvbnRTaXplID0gXCIyNXB4XCI7XG5cbiAgICAvLyBUT0RPOiBhZGQgbG9naWMgZm9yIGFkZGluZyBhbmQgcmVtb3ZpbmcgcHJvamVjdHNcbiAgICBjb25zdCBwcm9qZWN0U2VjdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cbiAgICBjb250YWluZXIuYXBwZW5kKGluYm94Q29udGFpbmVyLCB0b2RheUNvbnRhaW5lciwgdXBjb21pbmdDb250YWluZXIsIGhlYWRlcik7XG4gICAgcmV0dXJuIGNvbnRhaW5lcjtcbn07XG5cbmV4cG9ydCB7IGJ1aWxkU2lkZUJhciB9O1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgeyBidWlsZEhlYWRlciB9IGZyb20gXCIuL2NvbXBvbmVudHMvYnVpbGRIZWFkZXJcIjtcbmltcG9ydCB7IGJ1aWxkU2lkZUJhciB9IGZyb20gXCIuL2NvbXBvbmVudHMvYnVpbGRTaWRlQmFyXCI7XG5cbmNvbnN0IGhlYWRlciA9IGJ1aWxkSGVhZGVyKCk7XG5jb25zdCBzaWRlQmFyID0gYnVpbGRTaWRlQmFyKCk7XG5cbmRvY3VtZW50LmJvZHkuYXBwZW5kKGhlYWRlciwgc2lkZUJhcik7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=