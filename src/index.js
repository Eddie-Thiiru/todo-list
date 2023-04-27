import { layout, defaultContent, updateContent } from "./initial.js";
import { mainMenu } from "./menu.js";

function component() {
  layout();
  defaultContent();

  const button = document.querySelector(".menu-button");
  button.addEventListener("click", () => {
    const element = document.querySelector(".new-content");

    if (!element) {
      mainMenu();
      updateContent();
    } else {
      defaultContent();
    }
  });
}
component();
