import "./mainstyles.css";

const layout = () => {
  const content = document.querySelector(".content");

  const header = document.createElement("div");
  const main = document.createElement("div");
  const footer = document.createElement("div");
  const menuButton = document.createElement("button");

  header.classList.add("header");
  main.classList.add("main-section");
  footer.classList.add("footer");
  menuButton.classList.add("menu-button");

  menuButton.type = "button";
  menuButton.textContent = "Main menu";

  header.appendChild(menuButton);
  content.appendChild(header);
  content.appendChild(main);
  content.appendChild(footer);
};

const defaultContent = () => {
  const container = document.querySelector(".main-section");

  container.textContent = "";

  const defaultContainer = document.createElement("div");
  const div1 = document.createElement("div");
  const div2 = document.createElement("div");
  const heading = document.createElement("h2");

  defaultContainer.classList.add("default-content");
  heading.textContent = "Today";

  div1.appendChild(heading);
  defaultContainer.appendChild(div1);
  defaultContainer.appendChild(div2);
  container.appendChild(defaultContainer);
};

const updateContent = () => {
  const container = document.querySelector(".new-content");

  const defaultContainer = document.createElement("div");
  const div1 = document.createElement("div");
  const div2 = document.createElement("div");
  const heading = document.createElement("h2");

  defaultContainer.classList.add("default-content");
  heading.textContent = "Today";

  div1.appendChild(heading);
  defaultContainer.appendChild(div1);
  defaultContainer.appendChild(div2);
  container.appendChild(defaultContainer);
};

export { layout, defaultContent, updateContent };
