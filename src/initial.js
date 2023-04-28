import "./layout.css";
import "./main.css";

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

const mainContent = () => {
  const container = document.querySelector(".main-section");

  container.textContent = "";

  const wrapper = document.createElement("div");
  const header = document.createElement("div");
  const todoDisplay = document.createElement("div");
  const heading = document.createElement("h2");
  const div = document.createElement("div");
  const para = document.createElement("p");
  const btn = document.createElement("button");
  const image = new Image();

  wrapper.classList.add("wrapper");
  todoDisplay.classList.add("todo-display");
  btn.classList.add("todo-btn");

  image.alt = "empty image";
  btn.type = "button";
  heading.textContent = "Today";
  para.textContent = "Nothing to do";
  btn.textContent = "Add Task";

  header.appendChild(heading);
  div.appendChild(image);
  div.appendChild(para);
  todoDisplay.appendChild(div);
  todoDisplay.appendChild(btn);
  wrapper.appendChild(header);
  wrapper.appendChild(todoDisplay);
  container.appendChild(wrapper);
};

export { layout, mainContent };
