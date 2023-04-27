import "./menu.css";

const mainMenu = () => {
  const main = document.querySelector(".main-section");

  main.textContent = "";

  const container = document.createElement("div");
  const menu = document.createElement("div");

  container.classList.add("new-content");
  menu.classList.add("main-menu");

  container.appendChild(menu);
  main.appendChild(container);
};

export { mainMenu };
