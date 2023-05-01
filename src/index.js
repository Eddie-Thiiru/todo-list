import { layout, mainSection } from "./initial.js";
import { updateContent, form, processForm } from "./main-content.js";
import { mainMenu, projectList, taskCount } from "./menu.js";
import { taskBars } from "./main-display.js";

function component() {
  // Generates initial page layout
  layout();
  mainSection();

  function eventHandler() {
    const menuBtn = document.querySelector(".menu-button");
    const main = document.querySelector(".main-section");

    // Toggles the Main Menu
    menuBtn.addEventListener("click", () => {
      const element = document.querySelector(".new-content");

      if (!element) {
        mainMenu();
        updateContent();
      } else {
        mainSection();
      }
    });

    main.addEventListener("click", function (e) {
      // Toggles Favorites and Projects menu choices
      if (e.target.className === "favorites-btn") {
        const favorites = document.querySelector(".favorites");
        if (favorites.textContent === "") {
        } else {
          favorites.textContent = "";
        }
      }

      if (e.target.className === "projects-btn") {
        const projects = document.querySelector(".projects");
        if (projects.textContent === "") {
          projectList();
          taskCount();
        } else {
          projects.textContent = "";
        }
      }

      // Creates form for new task additions
      if (e.target.className === "create-form-btn") {
        form();
      }

      // Submits and processes forms
      if (e.target.className === "form-btn") {
        e.preventDefault();
        processForm();
        taskBars();
        taskCount();
      }
    });
  }
  eventHandler();
}
component();
