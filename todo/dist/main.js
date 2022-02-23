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


const loadPage = (0,_controllers_pages__WEBPACK_IMPORTED_MODULE_0__.Pages)();
loadPage.initTabButton();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUEsYUFBYTtBQUNiOztBQUVpQjs7Ozs7OztVQ3REakI7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7OztBQ040Qzs7QUFFNUMsaUJBQWlCLHlEQUFLO0FBQ3RCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kby8uL3NyYy9jb250cm9sbGVycy9wYWdlcy5qcyIsIndlYnBhY2s6Ly90b2RvL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvZG8vd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvZG8vd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2RvL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9kby8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBUT0RPIFN0eWxlIGVhY2ggcGFnZSB0byB2aXogb24gdGhlIFVJXG5cbmNvbnN0IFBhZ2VzID0gKCkgPT4ge1xuICAgIGNvbnN0IHJlbW92ZUNvbnRlbnQgPSBmdW5jdGlvbiAocGFyZW50KSB7XG4gICAgICAgIHdoaWxlIChwYXJlbnQuZmlyc3RDaGlsZCkge1xuICAgICAgICAgICAgcGFyZW50LnJlbW92ZUNoaWxkKHBhcmVudC5maXJzdENoaWxkKTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICBjb25zdCBsb2FkQ29udGVudCA9IGZ1bmN0aW9uIChwYWdlTmFtZSkge1xuICAgICAgICBjb25zdCB0YXNrUGFnZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdGFzay1wYWdlXCIpO1xuICAgICAgICBpZiAocGFnZU5hbWUgPT09IFwiSW5ib3hcIikge1xuICAgICAgICAgICAgcmVtb3ZlQ29udGVudCh0YXNrUGFnZSk7XG4gICAgICAgICAgICB0YXNrUGFnZS5pbm5lckhUTUwgKz0gYFxuICAgICAgICAgICAgICA8ZGl2IGlkPSdpbmJveC1wYWdlJz4gSW5ib3ggPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgaWQ9J3Rhc2stY29udGFpbmVyJz5cbiAgICAgICAgICAgICAgICAgIDxpIGNsYXNzPSdmYXMgZmEtcGx1cyc+PC9pPlxuICAgICAgICAgICAgICAgICAgPGRpdiBpZD0nYWRkLXRhc2snPiBBZGQgVGFzazwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICBgO1xuICAgICAgICB9IGVsc2UgaWYgKHBhZ2VOYW1lID09PSBcIlRvZGF5XCIpIHtcbiAgICAgICAgICAgIHJlbW92ZUNvbnRlbnQodGFza1BhZ2UpO1xuICAgICAgICAgICAgdGFza1BhZ2UuaW5uZXJIVE1MICs9IGBcbiAgICAgICAgICAgICAgPGRpdiBpZD0ndG9kYXktcGFnZSc+VG9kYXk8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBpZD0ndG9kYXktdGFzayc+PC9kaXY+XG4gICAgICAgICAgYDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJlbW92ZUNvbnRlbnQodGFza1BhZ2UpO1xuICAgICAgICAgICAgdGFza1BhZ2UuaW5uZXJIVE1MICs9IGBcbiAgICAgICAgICAgICAgPGRpdiBpZD0nd2Vlay1wYWdlJz5UaGlzIFdlZWs8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBpZD0nd2Vlay10YXNrJz48L2Rpdj5cbiAgICAgICAgICBgO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIGNvbnN0IGluaXRUYWJCdXR0b24gPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IGluYm94VGFiID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNpbmJveC1jb250YWluZXJcIik7XG4gICAgICAgIGNvbnN0IHRvZGF5VGFiID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0b2RheS1jb250YWluZXJcIik7XG4gICAgICAgIGNvbnN0IHVwY29taW5nVGFiID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN1cGNvbWluZy1jb250YWluZXJcIik7XG5cbiAgICAgICAgaW5ib3hUYWIuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGxvYWRDb250ZW50KFwiSW5ib3hcIik7XG4gICAgICAgIH0pO1xuICAgICAgICB0b2RheVRhYi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgbG9hZENvbnRlbnQoXCJUb2RheVwiKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHVwY29taW5nVGFiLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBsb2FkQ29udGVudChcIlVwY29taW5nXCIpO1xuICAgICAgICB9KTtcbiAgICB9O1xuXG4gICAgcmV0dXJuIHsgaW5pdFRhYkJ1dHRvbiB9O1xufTtcblxuZXhwb3J0IHsgUGFnZXMgfTtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHsgUGFnZXMgfSBmcm9tIFwiLi9jb250cm9sbGVycy9wYWdlc1wiO1xuXG5jb25zdCBsb2FkUGFnZSA9IFBhZ2VzKCk7XG5sb2FkUGFnZS5pbml0VGFiQnV0dG9uKCk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=