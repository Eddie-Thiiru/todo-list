import { pageLayout, updateListArray } from "./layout.js";
import {
  mainContent,
  emptyIndicator,
  form,
  newListForm,
  addTimeOption,
  addListOption,
  processForm,
  modifyTask,
} from "./main-content.js";
import { mainMenu, projectList, favoritesList, taskCount } from "./menu.js";
import {
  taskBars,
  taskPage,
  sortTaskBars,
  addDeleteOption,
  removeDeleteOption,
  deleteTask,
} from "./task-display.js";

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
        taskCount();
      }
    });

    main.addEventListener("click", function (e) {
      if (e.target.className === "today-btn") {
        const btn = e.target;
        const heading = document.querySelector("h2");
        heading.textContent = "Today";
        sortTaskBars(btn);
      }

      if (e.target.className === "upcoming-btn") {
        const btn = e.target;
        const heading = document.querySelector("h2");
        heading.textContent = "Upcoming";
        sortTaskBars(btn);
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

      // create, submit and process forms
      if (
        e.target.className === "form-btn" &&
        e.target.textContent === "Add Task"
      ) {
        form();
      } else if (
        e.target.className === "form-btn" &&
        e.target.textContent === "Submit"
      ) {
        const taskBtn = document.querySelector(".form-btn");

        taskBtn.textContent = "Add Task";
        taskBtn.type = "submit";

        e.preventDefault();
        processForm();
        taskBars();
        taskCount();
      } else if (
        e.target.className === "form-btn" &&
        e.target.textContent === "Save Changes"
      ) {
        const taskBtn = document.querySelector(".form-btn");

        taskBtn.textContent = "Add Task";

        modifyTask();
        taskBars();
        taskCount();
      }

      // Create new list form
      if (
        e.target.className === "add-project-btn" ||
        e.target.className === "create-list-btn"
      ) {
        newListForm();
      }

      // Cancel new list form
      if (e.target.className === "cancel-list-btn") {
        const wrapper = document.querySelector(".wrapper");

        wrapper.removeChild(wrapper.lastChild);
      }

      // Add new list option
      if (e.target.className === "add-list-btn") {
        const wrapper = document.querySelector(".wrapper");
        const display = document.querySelector(".task-display");
        const form = document.querySelector(".task-form");

        e.preventDefault();
        updateListArray();

        if (display.contains(form)) {
          addListOption();
        }

        wrapper.removeChild(wrapper.lastChild);
      }

      // Add time input option
      if (e.target.id === "date" && e.target.name === "date") {
        addTimeOption();
      }

      // Sort tasks according to the clicked project or priority list
      if (e.target.id === "task-btn" || e.target.id === "priority-btn") {
        const btn = e.target;
        sortTaskBars(btn);
      }

      // Display all task details
      if (e.target.className === "task") {
        const index = e.target.dataset.num;

        taskPage(index);
      }

      if (e.target.className === "back-btn") {
        const taskBtn = document.querySelector(".form-btn");

        taskBtn.textContent = "Add Task";

        taskBars();
      }

      // Delete tasks
      if (e.target.className === "checkbox" && e.target.checked === true) {
        addDeleteOption();
      } else if (
        e.target.className === "checkbox" &&
        e.target.checked === false
      ) {
        removeDeleteOption();
      }

      if (e.target.className === "del-btn") {
        deleteTask();
        taskCount();
      }
    });
  }
  eventHandler();
}
component();
