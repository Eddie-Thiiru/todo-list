import { layout, mainContent } from "./initial.js";
import { updateContent, form } from "./main-content.js";
import { mainMenu } from "./menu.js";
import { projectList } from "./projects.js";

function component() {
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
      const favorites = document.querySelector(".favorites");
      const projects = document.querySelector(".projects");

      if (e.target.className == "favorites-btn") {
        if (favorites.textContent === "") {
        } else {
          favorites.textContent = "";
        }
      }

      if (e.target.className === "projects-btn") {
        if (projects.textContent === "") {
          projectList();
        } else {
          projects.textContent = "";
        }
      }

      if (e.target.className === "todo-btn") {
        form();
      }

      if (e.target.className === "form-btn") {
        e.preventDefault();
        // add form details to specific project
        // update main menu projects option to display added task
        // then remove form and display added task
        //
      }
    });
  }
  eventHandler();
}
component();
