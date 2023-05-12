import { pageLayout, updateListArray } from "./layout.js";
import {
  mainContent,
  emptyIndicator,
  createForm,
  changeButton,
  newListForm,
  addTimeOption,
  addListOption,
  processForm,
  modifyTask,
  backButtonController,
} from "./main-content.js";
import {
  mainMenu,
  projectList,
  favoritesList,
  taskCount,
  changeFavoritesImage,
  changeProjectsImage,
} from "./menu.js";
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
          changeFavoritesImage();
        } else {
          favorites.textContent = "";
          changeFavoritesImage();
        }
      }

      const display = document.querySelector(".task-display");
      const form = document.querySelector(".task-form");

      if (e.target.className === "projects-btn") {
        const projects = document.querySelector(".projects");

        if (projects.textContent === "") {
          projectList();
          taskCount();
          changeProjectsImage();
        } else {
          projects.textContent = "";
          changeProjectsImage();
        }

        if (display.contains(form)) {
        } else {
          taskBars();
        }
      }

      const wrapper = document.querySelector(".wrapper");
      const listForm = document.querySelector(".pop-up");

      // create, submit and process forms
      if (e.target.className === "form-btn") {
        removeDeleteOption();
        createForm();
        changeButton(e.target);
      }

      if (e.target.className === "submit-btn") {
        const isFormValid = form.checkValidity();

        if (!isFormValid) {
          form.reportValidity();
        } else {
          if (listForm) {
            wrapper.removeChild(listForm);
          }

          e.preventDefault();
          processForm();
          backButtonController();
          taskBars();
          taskCount();
          changeButton(e.target);
        }
      }

      if (e.target.className === "save-btn") {
        const form = document.querySelector(".full-task-form");
        const isFormValid = form.checkValidity();

        if (!isFormValid) {
          form.reportValidity();
        } else {
          modifyTask();
          backButtonController();
          taskBars();
          taskCount();
          changeButton(e.target);
        }
      }

      // Add time input option
      if (e.target.id === "date" && e.target.name === "date") {
        addTimeOption();
      }

      // Remove form display or full-task display
      if (e.target.className === "back-btn") {
        if (listForm) {
          wrapper.removeChild(listForm);
        }

        backButtonController();
        taskBars();
        changeButton(e.target);
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

      // Add new list option
      if (e.target.className === "add-list-btn") {
        const listForm = document.querySelector(".pop-up");
        const isFormValid = listForm.checkValidity();

        if (!isFormValid) {
          listForm.reportValidity();
        } else {
          e.preventDefault();
          updateListArray();

          if (display.contains(form)) {
            addListOption();
            projectList();
            changeProjectsImage();
            wrapper.removeChild(wrapper.lastChild);
          } else {
            projectList();
            changeProjectsImage();
            taskCount();
            wrapper.removeChild(wrapper.lastChild);
          }
        }
      }

      // Sort tasks according to the clicked project or priority list
      if (e.target.id === "task-btn" || e.target.id === "priority-btn") {
        const btn = e.target;

        sortTaskBars(btn);
      }

      // Display all task details
      if (e.target.className === "task") {
        const index = e.target.dataset.num;

        removeDeleteOption();
        taskPage(index);
        changeButton(e.target);
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
