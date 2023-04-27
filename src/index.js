import { homePage } from "./initial.js";
import { mainMenu } from "./menu.js";

function component() {
  homePage();

  const button = document.querySelector(".menu-button");

  button.addEventListener("click", () => {
    mainMenu();
  });
}
component();
