import { pageLayout } from "./layout.js";
import { mainContent, form, processForm } from "./main-content.js";
import { mainMenu, projectList, taskCount } from "./menu.js";
import { taskBars, sortTaskBars } from "./task-display.js";

function component() {
  // Generate initial page layout
  pageLayout();
  mainContent();

  function eventHandler() {
    const menuBtn = document.querySelector(".menu-button");
    const main = document.querySelector(".main-section");

    // Toggle the Main Menu
    menuBtn.addEventListener("click", () => {
      const element = document.querySelector(".main");

      if (!element) {
        mainMenu();
        mainContent();
      } else {
        main.textContent = "";
        mainContent();
      }
    });

    main.addEventListener("click", function (e) {
      // Toggle Favorites and Projects menu choices
      if (e.target.className === "favorites-btn") {
        const favorites = document.querySelector(".favorites");
        if (favorites.textContent === "") {
        } else {
          favorites.textContent = "";
        }
      }

      if (e.target.className === "projects-btn") {
        const projects = document.querySelector(".projects");

        taskBars();

        if (projects.textContent === "") {
          projectList();
          taskCount();
        } else {
          projects.textContent = "";
        }
      }

      // Create form for new task addition
      if (e.target.className === "create-form-btn") {
        form();
      }

      // Submit and process form
      if (e.target.className === "form-btn") {
        e.preventDefault();
        processForm();
        taskBars();
        taskCount();
      }

      // Sort tasks according to the clicked project list
      if (e.target.id === "task-btn") {
        const btn = e.target;
        sortTaskBars(btn);
        // Add empty image when list has no projects
      }
    });
  }
  eventHandler();
}
component();
