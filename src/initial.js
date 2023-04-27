import "./mainstyles.css";

const homePage = () => {
  const content = document.querySelector(".content");
  const header = document.createElement("div");
  const main = document.createElement("div");
  const footer = document.createElement("div");
  const menuButton = document.createElement("button");
  const defaultContainer = document.createElement("div");

  header.classList.add("header");
  main.classList.add("main-section");
  footer.classList.add("footer");
  menuButton.classList.add("menu-button");
  defaultContainer.classList.add("default-content");

  menuButton.textContent = "Main menu";

  header.appendChild(menuButton);
  main.appendChild(defaultContainer);
  content.appendChild(header);
  content.appendChild(main);
  content.appendChild(footer);
};

export { homePage };
