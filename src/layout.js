import "./layout.css";
import Img from "./images/menu.svg";
import Img2 from "./images/cat.svg";
import Img3 from "./images/bell.svg";
import Img4 from "./images/help.svg";

const listArray = ["personal", "work", "shopping"];
const priorityArray = ["critical", "high", "normal"];

const pageLayout = () => {
  const content = document.querySelector(".content");
  const header = document.createElement("div");
  const main = document.createElement("div");
  const footer = document.createElement("div");
  const para = document.createElement("p");
  const menuContainer = document.createElement("div");
  const menuBtn = document.createElement("button");
  const menuImg = new Image();
  const profile = document.createElement("div");
  const profileImg = new Image();
  const bellImg = new Image();
  const helpImg = new Image();

  header.classList.add("header");
  main.classList.add("main-section");
  footer.classList.add("footer");
  para.textContent = "Copyright @ Todo 2023";
  menuImg.src = Img;
  menuImg.alt = "menu icon";
  menuBtn.type = "button";
  menuBtn.classList.add("menu-button");
  profileImg.src = Img2;
  profileImg.alt = "A cat icon";
  bellImg.src = Img3;
  bellImg.alt = "A bell icon";
  helpImg.src = Img4;
  helpImg.alt = "A question mark icon";

  menuBtn.appendChild(menuImg);
  profile.appendChild(helpImg);
  profile.appendChild(bellImg);
  profile.appendChild(profileImg);
  menuContainer.appendChild(menuBtn);
  header.appendChild(menuContainer);
  header.appendChild(profile);
  footer.appendChild(para);
  content.appendChild(header);
  content.appendChild(main);
  content.appendChild(footer);
};

const updateListArray = () => {
  const newList = document.querySelector("#new-list").value;
  listArray.push(newList);
};

const displayHeight = () => {
  let height = document.querySelector(".task-display").clientHeight;

  return height;
};

export { listArray, priorityArray, pageLayout, updateListArray, displayHeight };
