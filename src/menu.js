import { taskArray } from "./main-content";
import "./nav.css";

const mainMenu = () => {
  const main = document.querySelector(".main-section");

  main.textContent = "";

  const container = document.createElement("div");
  const menu = document.createElement("div");
  const todayBtn = document.createElement("button");
  const upcomingBtn = document.createElement("button");
  const favContainer = document.createElement("div");
  const projContainer = document.createElement("div");
  const favorites = document.createElement("div");
  const projects = document.createElement("div");
  const favoritesBtn = document.createElement("button");
  const projectsBtn = document.createElement("button");
  const favoritesImg = new Image();
  const projectsImg = new Image();

  container.classList.add("main");
  menu.classList.add("main-menu");
  todayBtn.classList.add("today-btn");
  upcomingBtn.classList.add("upcoming-btn");
  favContainer.classList.add("fav-container");
  projContainer.classList.add("proj-container");
  favoritesBtn.classList.add("favorites-btn");
  projectsBtn.classList.add("projects-btn");
  favorites.classList.add("favorites");
  projects.classList.add("projects");

  todayBtn.type = "button";
  upcomingBtn.type = "button";
  favoritesImg.alt = "fav";
  projectsImg.alt = "pro";
  favoritesBtn.type = "button";
  projectsBtn.type = "button";

  todayBtn.textContent = "Today";
  upcomingBtn.textContent = "Upcoming";
  favoritesBtn.textContent = "Favorites";
  projectsBtn.textContent = "Projects";

  favContainer.appendChild(favoritesImg);
  favContainer.appendChild(favoritesBtn);
  favContainer.appendChild(favorites);
  projContainer.appendChild(projectsImg);
  projContainer.appendChild(projectsBtn);
  projContainer.appendChild(projects);
  menu.appendChild(todayBtn);
  menu.appendChild(upcomingBtn);
  menu.appendChild(favContainer);
  menu.appendChild(projContainer);
  container.appendChild(menu);
  main.appendChild(container);
};

const projectList = () => {
  const projects = document.querySelector(".projects");

  const personalContainer = document.createElement("div");
  const workContainer = document.createElement("div");
  const shoppingContainer = document.createElement("div");

  const personalList = document.createElement("div");
  const workList = document.createElement("div");
  const shoppingList = document.createElement("div");
  const personalBtn = document.createElement("button");
  const workBtn = document.createElement("button");
  const shoppingBtn = document.createElement("button");

  personalList.classList.add("personal-list");
  workList.classList.add("work-list");
  shoppingList.classList.add("shopping-list");
  personalBtn.classList.add("personal-btn");
  workBtn.classList.add("work-btn");
  shoppingBtn.classList.add("shopping-btn");
  personalBtn.textContent = "Personal";
  workBtn.textContent = "Working";
  shoppingBtn.textContent = "Shopping";

  personalContainer.appendChild(personalBtn);
  personalContainer.appendChild(personalList);
  workContainer.appendChild(workBtn);
  workContainer.appendChild(workList);
  shoppingContainer.appendChild(shoppingBtn);
  shoppingContainer.appendChild(shoppingList);

  projects.appendChild(personalContainer);
  projects.appendChild(workContainer);
  projects.appendChild(shoppingContainer);
};

const showPersonalTodo = () => {
  const personalList = document.querySelector(".personal-list");

  personalList.textContent = "";

  for (let i = 0; i < taskArray.length; i++) {
    const values = Object.values(taskArray[i]);
    const title = values[0];
    const chosenList = values[5];

    if (chosenList === "personal") {
      const projectBtn = document.createElement("button");

      projectBtn.type = "button";
      projectBtn.textContent = title;
      personalList.appendChild(projectBtn);
    }
  }
};
const showWorkTodo = () => {
  const workList = document.querySelector(".work-list");

  workList.textContent = "";

  for (let i = 0; i < taskArray.length; i++) {
    const values = Object.values(taskArray[i]);
    const title = values[0];
    const chosenList = values[values.length - 1];

    if (chosenList === "work") {
      const projectBtn = document.createElement("button");

      projectBtn.type = "button";
      projectBtn.textContent = title;
      workList.appendChild(projectBtn);
    }
  }
};

const showShoppingTodo = () => {
  const shoppingList = document.querySelector(".shopping-list");

  shoppingList.textContent = "";

  for (let i = 0; i < taskArray.length; i++) {
    const arrValues = Object.values(taskArray[i]);
    const title = arrValues[0];
    const chosenList = arrValues[5];
    console.log(chosenList);

    if (chosenList === "shopping") {
      const projectBtn = document.createElement("button");

      projectBtn.type = "button";
      projectBtn.textContent = title;
      shoppingList.appendChild(projectBtn);
    }
  }
};

export {
  mainMenu,
  projectList,
  showPersonalTodo,
  showWorkTodo,
  showShoppingTodo,
};
