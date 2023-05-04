import { pageLayout, updateListArray } from "./layout.js";
import {
  mainContent,
  emptyIndicator,
  form,
  newListForm,
  addTimeOption,
  addListOption,
  processForm,
} from "./main-content.js";
import { mainMenu, projectList, favoritesList, taskCount } from "./menu.js";
import { taskBars, sortTaskBars } from "./task-display.js";

function component() {
  // Generate initial page layout
  pageLayout();
  mainContent();
  emptyIndicator();

  function eventHandler() {
    const menuBtn = document.querySelector(".menu-button");
    const main = document.querySelector(".main-section");

    // Toggle the Main Menu
    menuBtn.addEventListener("click", () => {
      const menu = document.querySelector(".main-menu");

      if (main.contains(menu)) {
        main.removeChild(menu);
      } else {
        mainMenu();
      }
    });

    main.addEventListener("click", function (e) {
      if (e.target.className === "today-btn") {
        const heading = document.querySelector("h2");
        heading.textContent = "Today";
      }

      if (e.target.className === "upcoming-btn") {
        const heading = document.querySelector("h2");
        heading.textContent = "Upcoming";
      }

      // Toggle Favorites and Projects menu choices
      if (e.target.className === "favorites-btn") {
        const favorites = document.querySelector(".favorites");

        if (favorites.textContent === "") {
          favoritesList();
          taskCount();
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

      // Create new list form
      if (
        e.target.className === "add-project-btn" ||
        e.target.className === "create-list-btn"
      ) {
        newListForm();
      }

      // Add new list option
      if (e.target.className === "add-list-btn") {
        const wrapper = document.querySelector(".wrapper");
        const display = document.querySelector(".task-display");
        const form = document.querySelector("form");

        e.preventDefault();
        updateListArray();

        if (display.contains(form)) {
          addListOption();
        }

        wrapper.removeChild(wrapper.lastChild);
      }

      if (e.target.id === "date") {
        const input = e.target;
        addTimeOption(input);
      }

      // Submit and process form
      if (e.target.className === "form-btn") {
        e.preventDefault();
        processForm();
        taskBars();
        taskCount();
      }

      // Sort tasks according to the clicked project or priority list
      if (e.target.id === "task-btn" || e.target.id === "priority-btn") {
        const btn = e.target;
        sortTaskBars(btn);
      }
    });
  }
  eventHandler();
}
component();
