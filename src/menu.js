import { taskArray } from "./main-content";
import "./nav.css";
import { listArray } from "./layout";

const mainMenu = () => {
  const main = document.querySelector(".main-section");
  const wrapper = document.querySelector(".wrapper");

  const menu = document.createElement("div");
  const todayContainer = document.createElement("div");
  const todayBtn = document.createElement("button");
  const todayCount = document.createElement("div");
  const upcomingContainer = document.createElement("div");
  const upcomingBtn = document.createElement("button");
  const upcomingCount = document.createElement("div");
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
  todayContainer.classList.add("today-container");
  upcomingContainer.classList.add("upcoming-container");
  todayBtn.classList.add("today-btn");
  upcomingBtn.classList.add("upcoming-btn");
  todayCount.classList.add("today-count");
  upcomingCount.classList.add("upcoming-container");
  favContainer.classList.add("fav-container");
  projContainer.classList.add("proj-container");
  favoritesBtn.classList.add("favorites-btn");
  projectsBtn.classList.add("projects-btn");
  addListBtn.classList.add("add-project-btn");
  favorites.classList.add("favorites");
  projects.classList.add("projects");

  todayCount.id = "count";
  upcomingCount.id = "count";
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

  todayContainer.appendChild(todayBtn);
  todayContainer.appendChild(todayCount);
  upcomingContainer.appendChild(upcomingBtn);
  upcomingContainer.appendChild(upcomingCount);
  favContainer.appendChild(favoritesImg);
  favContainer.appendChild(favoritesBtn);
  favContainer.appendChild(favorites);
  projContainer.appendChild(projectsImg);
  projContainer.appendChild(projectsBtn);
  projContainer.appendChild(addListBtn);
  projContainer.appendChild(projects);
  menu.appendChild(todayContainer);
  menu.appendChild(upcomingContainer);
  menu.appendChild(favContainer);
  menu.appendChild(projContainer);

  main.insertBefore(menu, wrapper);
};

const favoritesList = () => {
  const favorites = document.querySelector(".favorites");
  const containerOne = document.createElement("div");
  const containerTwo = document.createElement("div");
  const containerThree = document.createElement("div");
  const priorityOne = document.createElement("button");
  const priorityTwo = document.createElement("button");
  const priorityThree = document.createElement("button");
  const priorityOneCount = document.createElement("div");
  const priorityTwoCount = document.createElement("div");
  const priorityThreeCount = document.createElement("div");
  const criticalImg = new Image();
  const highImg = new Image();
  const normalImg = new Image();

  priorityOne.classList.add("critical-btn");
  priorityTwo.classList.add("high-btn");
  priorityThree.classList.add("normal-btn");
  priorityOne.id = "priority-btn";
  priorityTwo.id = "priority-btn";
  priorityThree.id = "priority-btn";
  priorityOneCount.classList.add("critical-count");
  priorityTwoCount.classList.add("high-count");
  priorityThreeCount.classList.add("normal-count");
  priorityOneCount.id = "count";
  priorityTwoCount.id = "count";
  priorityThreeCount.id = "count";
  criticalImg.alt = "cri";
  highImg.alt = "hi";
  normalImg.alt = "nor";

  priorityOne.textContent = "Critical priority work";
  priorityTwo.textContent = "High priority work";
  priorityThree.textContent = "Normal priority work";

  containerOne.appendChild(criticalImg);
  containerOne.appendChild(priorityOne);
  containerOne.appendChild(priorityOneCount);
  containerTwo.appendChild(highImg);
  containerTwo.appendChild(priorityTwo);
  containerTwo.appendChild(priorityTwoCount);
  containerThree.appendChild(normalImg);
  containerThree.appendChild(priorityThree);
  containerThree.appendChild(priorityThreeCount);
  favorites.appendChild(containerOne);
  favorites.appendChild(containerTwo);
  favorites.appendChild(containerThree);
};

const projectList = () => {
  const projects = document.querySelector(".projects");

  for (let i = 0; i < listArray.length; i++) {
    const listName = listArray[i];

    const container = document.createElement("div");
    const listBtn = document.createElement("button");
    const taskCount = document.createElement("div");
    const img = new Image();

    container.classList.add(`${listName}-list`);
    listBtn.classList.add(`${listName}-btn`);
    taskCount.classList.add(`${listName}-count`);
    listBtn.id = "task-btn";
    taskCount.id = "count";

    if (listName === "personal") {
      //img.src =
      img.alt = "per";
    } else if (listName === "work") {
      //img.src =
      img.alt = "wor";
    } else if (listName === "shopping") {
      //img.src =
      img.alt = "sho";
    } else {
      //img.src =
      img.alt = "cre";
    }

    listBtn.textContent = listName;

    container.appendChild(img);
    container.appendChild(listBtn);
    container.appendChild(taskCount);
    projects.appendChild(container);
  }
};

const taskCount = () => {
  const counts = document.querySelectorAll("#count");
  const todayDate = new Date().toISOString().split("T")[0];

  counts.forEach((count) => {
    const className = count.className;

    let num = 0;

    for (let i = 0; i < taskArray.length; i++) {
      const obj = taskArray[i];
      const listChoice = obj["choice"];
      const taskPriority = obj["priority"];
      const taskDate = obj["date"];

      if (
        className.includes(listChoice) ||
        (todayDate === taskDate && className.includes("today")) ||
        (todayDate !== taskDate && className.includes("upcoming")) ||
        className.includes(taskPriority)
      ) {
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

export { listArray, mainMenu, projectList, favoritesList, taskCount };
