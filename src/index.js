import {
  storageAvailable,
  populateStorage,
  setArrayValues,
  removeItems,
} from "./data.js";
import { pageLayout, updateListArray } from "./layout.js";
import {
  mainContent,
  emptyIndicator,
  createForm,
  displayBtnController,
  newListForm,
  addTimeOption,
  addListOption,
  processForm,
  modifyTask,
  backBtnController,
  deleteBtnController,
  listDisplayController,
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
  deleteTask,
} from "./task-display.js";

function component() {
  // Generate initial page layout
  pageLayout();
  mainContent();
  emptyIndicator();

  // Test if localStorage is available
  if (storageAvailable("localStorage")) {
    console.log("localStorage available");

    // localStorage.clear();

    if (!localStorage.getItem("listArray")) {
      populateStorage();
    } else {
      setArrayValues().setLists();
      setArrayValues().setTasks();
      sortTaskBars().todayStoredTasks();
    }
  } else {
    console.log("localStorage unavailable");
  }

  function eventHandler() {
    const menuBtn = document.querySelector(".menu-btn");
    const viewListBtn = document.querySelector(".view-lists-btn");
    const content = document.querySelector(".content");

    // Toggle the Main Menu
    menuBtn.addEventListener("click", () => {
      const menu = document.querySelector(".main-menu");

      if (content.contains(menu)) {
        content.removeChild(menu);
      } else {
        mainMenu();
        taskCount();
      }
    });

    viewListBtn.addEventListener("click", () => {
      listDisplayController().listsView();
    });

    content.addEventListener("click", function (e) {
      // Toggle Today or Upcoming projects
      if (e.target.className === "today-btn") {
        const btn = e.target;

        backBtnController();
        deleteBtnController().checkDeleteBtn();
        displayBtnController(btn);
        sortTaskBars().menuChoice(btn);

        return;
      }

      if (e.target.className === "upcoming-btn") {
        const btn = e.target;

        backBtnController();
        deleteBtnController().checkDeleteBtn();
        sortTaskBars().menuChoice(btn);
        displayBtnController(btn);

        return;
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

        return;
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

        backBtnController();
        deleteBtnController().checkDeleteBtn();
        displayBtnController(e.target);
        taskBars();

        return;
      }

      const listForm = document.querySelector(".pop-up");

      // create, submit and process forms
      if (e.target.className === "form-btn") {
        deleteBtnController().checkDeleteBtn();
        createForm();
        backBtnController();
        displayBtnController(e.target);

        return;
      }

      if (e.target.className === "submit-btn") {
        const isFormValid = form.checkValidity();

        if (!isFormValid) {
          form.reportValidity();
        } else {
          if (listForm) {
            display.removeChild(listForm);
          }

          e.preventDefault();
          processForm();
          populateStorage();
          backBtnController();
          displayBtnController(e.target);
          taskBars();
          taskCount();
        }

        return;
      }

      if (e.target.className === "save-btn") {
        const form = document.querySelector(".full-task-form");
        const isFormValid = form.checkValidity();

        if (!isFormValid) {
          form.reportValidity();
        } else {
          modifyTask();
          populateStorage();
          backBtnController();
          displayBtnController(e.target);
          taskBars();
          taskCount();
        }

        return;
      }

      // Add time input option
      if (e.target.id === "date" && e.target.name === "date") {
        addTimeOption();

        return;
      }

      // Remove form display or full-task display
      if (e.target.className === "back-btn") {
        if (listForm) {
          display.removeChild(listForm);
        }

        backBtnController();
        taskBars();
        displayBtnController(e.target);

        return;
      }

      // Create new list form
      if (
        e.target.className === "add-project-btn" ||
        e.target.className === "create-list-btn"
      ) {
        newListForm();

        document.body.classList.toggle("modal-open");

        return;
      }

      // Cancel new list form
      if (e.target.className === "cancel-list-btn") {
        document.body.classList.toggle("modal-open");

        display.removeChild(listForm);

        return;
      }

      // Add new list option
      if (e.target.className === "add-list-btn") {
        const isFormValid = listForm.checkValidity();

        document.body.classList.toggle("modal-open");

        if (!isFormValid) {
          listForm.reportValidity();
        } else {
          e.preventDefault();
          updateListArray();
          populateStorage();

          if (display.contains(form)) {
            addListOption();
            projectList();
            changeProjectsImage();
            display.removeChild(listForm);
          } else {
            projectList();
            changeProjectsImage();
            taskCount();
            display.removeChild(listForm);
          }
        }

        return;
      }

      // Sort tasks according to the clicked project or priority list
      if (e.target.id === "task-btn" || e.target.id === "priority-btn") {
        const btn = e.target;

        backBtnController();
        deleteBtnController().checkDeleteBtn();
        displayBtnController(btn);
        sortTaskBars().menuChoice(btn);

        return;
      }

      // Display full task details
      if (e.target.className === "task") {
        const index = e.target.dataset.num;

        taskPage(index);
        displayBtnController(e.target);

        return;
      }

      // Add delete btn
      if (e.target.className === "checkbox" && e.target.checked === true) {
        deleteBtnController().addDeleteBtn();
      } else if (
        e.target.className === "checkbox" &&
        e.target.checked === false
      ) {
        deleteBtnController().removeDeleteBtn();
      }

      // Delete tasks
      if (e.target.className === "del-btn") {
        deleteTask();
        taskCount();
        removeItems();
        populateStorage();
      }

      // Delete projects/lists
      if (e.target.className === "remove-project-btn") {
        const menu = document.querySelector(".main-menu");

        listDisplayController().removeList(e.target);

        if (menu) {
          projectList();
          taskCount();
        }
      }
    });
  }
  eventHandler();
}
component();
