import { layout, mainContent } from "./initial.js";
import { updateContent, form, processForm } from "./main-content.js";
import {
  mainMenu,
  showPersonalTodo,
  showWorkTodo,
  showShoppingTodo,
} from "./menu.js";
import { projectList } from "./projects.js";

function component() {
  // Generates initial page layout
  layout();
  mainContent();

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
        mainContent();
      }
    });

    // Toggles Favorites and Projects menu choices
    main.addEventListener("click", function (e) {
      if (e.target.className == "favorites-btn") {
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
        } else {
          projects.textContent = "";
        }
      }

      if (e.target.className === "create-form-btn") {
        form();
      }

      if (e.target.className === "form-btn") {
        e.preventDefault();
        processForm();
        displayAddedTask();
        // add form details to specific project
        // update main menu projects option to display added task
        // then remove form and display added task
      }

      if (e.target.className === "personal-btn") {
        const personalList = document.querySelector(".personal-list");

        if (personalList.textContent === "") {
          showPersonalTodo();
        } else {
          personalList.textContent = "";
        }
      }
      if (e.target.className === "work-btn") {
        const workList = document.querySelector(".work-list");

        if (workList.textContent === "") {
          showWorkTodo();
        } else {
          workList.textContent = "";
        }
      }
      if (e.target.className === "shopping-btn") {
        const shoppingList = document.querySelector(".shopping-list");

        if (shoppingList.textContent === "") {
          showShoppingTodo();
        } else {
          shoppingList.textContent = "";
        }
      }
    });
  }
  eventHandler();
}
component();
