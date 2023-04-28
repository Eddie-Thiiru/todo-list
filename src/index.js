import { layout, defaultContent, updateContent } from "./initial.js";
import { mainMenu } from "./menu.js";

function component() {
  layout();
  defaultContent();

  function eventHandler() {
    const button = document.querySelector(".menu-button");
    const main = document.querySelector(".main-section");

    button.addEventListener("click", () => {
      const element = document.querySelector(".new-content");

      if (!element) {
        mainMenu();
        // menuItems();
        updateContent();
      } else {
        defaultContent();
      }
    });

    main.addEventListener("click", function (e) {
      if (e.target.className == "favorites-btn") {
        console.log("favorites clicked");
      } else if (e.target.className === "projects-btn") {
        console.log("projects clicked");
      }
    });
  }
  eventHandler();
}
component();
