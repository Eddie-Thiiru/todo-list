import "./layout.css";
import "./content.css";

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

const mainSection = () => {
  const container = document.querySelector(".main-section");

  container.textContent = "";

  const wrapper = document.createElement("div");
  const header = document.createElement("div");
  const taskDisplay = document.createElement("div");
  const heading = document.createElement("h2");
  const emptyIndicator = document.createElement("div");
  const para = document.createElement("p");
  const btn = document.createElement("button");
  const image = new Image();

  wrapper.classList.add("wrapper");
  taskDisplay.classList.add("task-display");
  emptyIndicator.classList.add("empty-indicator");
  btn.classList.add("create-form-btn");

  image.alt = "empty image";
  btn.type = "button";
  heading.textContent = "Today";
  para.textContent = "Nothing to do";
  btn.textContent = "Add Task";

  header.appendChild(heading);
  emptyIndicator.appendChild(image);
  emptyIndicator.appendChild(para);
  taskDisplay.appendChild(emptyIndicator);
  wrapper.appendChild(header);
  wrapper.appendChild(taskDisplay);
  wrapper.appendChild(btn);
  container.appendChild(wrapper);
};

export { layout, mainSection };
