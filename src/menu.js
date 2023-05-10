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
  todayBtn.type = "button";
  todayBtn.classList.add("today-btn");
  todayBtn.textContent = "Today";
  upcomingBtn.type = "button";
  upcomingBtn.classList.add("upcoming-btn");
  upcomingBtn.textContent = "Upcoming";
  todayCount.classList.add("today-count");
  todayCount.id = "count";
  upcomingCount.classList.add("upcoming-container");
  upcomingCount.id = "count";
  favContainer.classList.add("fav-container");
  projContainer.classList.add("proj-container");
  favoritesBtn.type = "button";
  favoritesBtn.classList.add("favorites-btn");
  favoritesBtn.textContent = "Favorites";
  projectsBtn.type = "button";
  projectsBtn.classList.add("projects-btn");
  projectsBtn.textContent = "Projects";
  addListBtn.type = "button";
  addListBtn.classList.add("add-project-btn");
  addListBtn.textContent = "Add";
  favorites.classList.add("favorites");
  projects.classList.add("projects");
  favoritesImg.alt = "fav";
  projectsImg.alt = "pro";

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
  priorityOne.id = "priority-btn";
  priorityOne.textContent = "Critical priority work";
  priorityTwo.classList.add("high-btn");
  priorityTwo.id = "priority-btn";
  priorityTwo.textContent = "High priority work";
  priorityThree.classList.add("normal-btn");
  priorityThree.id = "priority-btn";
  priorityThree.textContent = "Normal priority work";
  priorityOneCount.classList.add("critical-count");
  priorityOneCount.id = "count";
  priorityTwoCount.classList.add("high-count");
  priorityTwoCount.id = "count";
  priorityThreeCount.classList.add("normal-count");
  priorityThreeCount.id = "count";
  criticalImg.alt = "cri";
  highImg.alt = "hi";
  normalImg.alt = "nor";

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
    listBtn.id = "task-btn";
    listBtn.textContent = listName;
    taskCount.classList.add(`${listName}-count`);
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
    let className = count.className;

    let num = 0;

    for (let i = 0; i < taskArray.length; i++) {
      const obj = taskArray[i];
      const listChoice = obj["list"];
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
