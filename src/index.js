import { layout, defaultContent, updateContent } from "./initial.js";
import { mainMenu } from "./menu.js";
import { projectList } from "./projects.js";

function component() {
  layout();
  defaultContent();

  function eventHandler() {
    const button = document.querySelector(".menu-button");
    const main = document.querySelector(".main-section");

    // Toggles the Main Menu
    button.addEventListener("click", () => {
      const element = document.querySelector(".new-content");

      if (!element) {
        mainMenu();
        updateContent();
      } else {
        defaultContent();
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
    });
  }
  eventHandler();
}
component();
