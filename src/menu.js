import { taskArray } from "./main-content";
import "./nav.css";
import { listArray } from "./layout";

const mainMenu = () => {
  const main = document.querySelector(".main-section");
  const wrapper = document.querySelector(".wrapper");

  const menu = document.createElement("div");
  const todayBtn = document.createElement("button");
  const upcomingBtn = document.createElement("button");
  const favContainer = document.createElement("div");
  const projContainer = document.createElement("div");
  const favorites = document.createElement("div");
  const projects = document.createElement("div");
  const favoritesBtn = document.createElement("button");
  const projectsBtn = document.createElement("button");
  const addListBtn = document.createElement("button");
  const favoritesImg = new Image();
  const projectsImg = new Image();

  menu.classList.add("main-menu");
  todayBtn.classList.add("today-btn");
  upcomingBtn.classList.add("upcoming-btn");
  favContainer.classList.add("fav-container");
  projContainer.classList.add("proj-container");
  favoritesBtn.classList.add("favorites-btn");
  projectsBtn.classList.add("projects-btn");
  addListBtn.classList.add("add-project-btn");
  favorites.classList.add("favorites");
  projects.classList.add("projects");

  todayBtn.type = "button";
  upcomingBtn.type = "button";
  favoritesImg.alt = "fav";
  projectsImg.alt = "pro";
  favoritesBtn.type = "button";
  projectsBtn.type = "button";
  addListBtn.type = "button";

  todayBtn.textContent = "Today";
  upcomingBtn.textContent = "Upcoming";
  favoritesBtn.textContent = "Favorites";
  projectsBtn.textContent = "Projects";
  addListBtn.textContent = "Add";

  favContainer.appendChild(favoritesImg);
  favContainer.appendChild(favoritesBtn);
  favContainer.appendChild(favorites);
  projContainer.appendChild(projectsImg);
  projContainer.appendChild(projectsBtn);
  projContainer.appendChild(addListBtn);
  projContainer.appendChild(projects);
  menu.appendChild(todayBtn);
  menu.appendChild(upcomingBtn);
  menu.appendChild(favContainer);
  menu.appendChild(projContainer);

  main.insertBefore(menu, wrapper);
};

const projectList = () => {
  const projects = document.querySelector(".projects");

  for (let i = 0; i < listArray.length; i++) {
    const listName = listArray[i];

    const container = document.createElement("div");
    const listBtn = document.createElement("button");
    const taskCount = document.createElement("div");

    container.classList.add(`${listName}-list`);
    listBtn.classList.add(`${listName}-btn`);
    taskCount.classList.add(`${listName}-count`);
    listBtn.id = "task-btn";
    taskCount.id = "count";
    listBtn.textContent = listName;

    container.appendChild(listBtn);
    container.appendChild(taskCount);
    projects.appendChild(container);
  }
};

const taskCount = () => {
  const counts = document.querySelectorAll("#count");

  counts.forEach((count) => {
    const className = count.className;

    let num = 0;

    for (let i = 0; i < taskArray.length; i++) {
      const values = Object.values(taskArray[i]);
      const listChoice = values[values.length - 1];

      if (className.includes(listChoice)) {
        num += 1;
      }
    }

    if (num === 0) {
      count.textContent = "";
    } else {
      count.textContent = num;
    }
  });
};

export { listArray, mainMenu, projectList, taskCount };
