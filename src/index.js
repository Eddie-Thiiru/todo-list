import { pageLayout, updateListArray } from "./layout.js";
import {
  mainContent,
  emptyIndicator,
  createForm,
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
      const heading = document.querySelector("h2");

      // Toggle Today or Upcoming projects
      if (e.target.className === "today-btn") {
        const btn = e.target;

        heading.textContent = "Today";

        sortTaskBars(btn);
      }

      if (e.target.className === "upcoming-btn") {
        const btn = e.target;

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

      const wrapper = document.querySelector(".wrapper");
      const taskBtn = document.querySelector(".form-btn");
      const form = document.querySelector(".task-form");
      const listForm = document.querySelector(".list-form");

      // create, submit and process forms
      if (
        e.target.className === "form-btn" &&
        e.target.textContent === "Add Task"
      ) {
        createForm();
      } else if (
        e.target.className === "form-btn" &&
        e.target.textContent === "Submit"
      ) {
        const isFormValid = form.checkValidity();

        if (!isFormValid) {
          form.reportValidity();
        } else {
          if (listForm) {
            wrapper.removeChild(listForm);
          }

          taskBtn.textContent = "Add Task";

          e.preventDefault();
          processForm();
          taskBars();
          taskCount();
        }
      } else if (
        e.target.className === "form-btn" &&
        e.target.textContent === "Save Changes"
      ) {
        const form = document.querySelector(".full-task-form");
        const isFormValid = form.checkValidity();

        if (!isFormValid) {
          form.reportValidity();
        } else {
          taskBtn.textContent = "Add Task";

          modifyTask();
          taskBars();
          taskCount();
        }
      }

      // Add time input option
      if (e.target.id === "date" && e.target.name === "date") {
        addTimeOption();
      }

      // Remove form display or full-task display
      if (e.target.className === "back-btn") {
        taskBtn.textContent = "Add Task";

        if (listForm) {
          wrapper.removeChild(listForm);
        }

        taskBars();
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
        wrapper.removeChild(wrapper.lastChild);
      }

      const display = document.querySelector(".task-display");

      // Add new list option
      if (e.target.className === "add-list-btn") {
        e.preventDefault();
        updateListArray();

        if (display.contains(form)) {
          addListOption();
        }

        wrapper.removeChild(wrapper.lastChild);
      }

      // Sort tasks according to the clicked project or priority list
      if (e.target.id === "task-btn" || e.target.id === "priority-btn") {
        const btn = e.target;

        sortTaskBars(btn);
      }

      // Display all task details
      if (e.target.className === "task") {
        const header = document.querySelector(".task-header");
        const delBtnContainer = document.querySelector(".del-btn-container");
        const index = e.target.dataset.num;

        if (header.contains(delBtnContainer)) {
          header.removeChild(delBtnContainer);
        }

        taskPage(index);
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
