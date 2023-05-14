import { taskArray } from "./main-content";
import "./nav.css";
import { listArray } from "./layout";
import Img from "./images/today.svg";
import Img2 from "./images/upcoming.svg";
import Img3 from "./images/expand-less.svg";
import Img4 from "./images/expand-more.svg";
import Img5 from "./images/critical.svg";
import Img6 from "./images/high.svg";
import Img7 from "./images/normal.svg";
import Img8 from "./images/personal.svg";
import Img9 from "./images/work.svg";
import Img10 from "./images/shopping.svg";
import Img11 from "./images/new.svg";
import Img12 from "./images/add-list.svg";

const mainMenu = () => {
  const content = document.querySelector(".content");
  const main = document.querySelector(".main-section");
  const menu = document.createElement("div");
  const todayContainer = document.createElement("div");
  const todayImg = new Image();
  const todayBtn = document.createElement("button");
  const todayCount = document.createElement("div");
  const upcomingContainer = document.createElement("div");
  const upcomingImg = new Image();
  const upcomingBtn = document.createElement("button");
  const upcomingCount = document.createElement("div");
  const favContainer = document.createElement("div");
  const favWrapper = document.createElement("div");
  const favoritesImg = new Image();
  const favoritesBtn = document.createElement("button");
  const favorites = document.createElement("div");
  const projContainer = document.createElement("div");
  const projWrapper = document.createElement("div");
  const projectsImg = new Image();
  const projects = document.createElement("div");
  const projectsBtn = document.createElement("button");
  const addListBtn = document.createElement("button");
  const addListImg = new Image();

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
  upcomingCount.classList.add("upcoming-count");
  favContainer.classList.add("fav-container");
  favWrapper.classList.add("fav-wrapper");
  projContainer.classList.add("proj-container");
  projWrapper.classList.add("proj-wrapper");
  favoritesBtn.type = "button";
  favoritesBtn.classList.add("favorites-btn");
  favoritesBtn.textContent = "Favorites";
  projectsBtn.type = "button";
  projectsBtn.classList.add("projects-btn");
  projectsBtn.textContent = "Projects";
  addListBtn.type = "button";
  addListBtn.classList.add("add-project-btn");
  favorites.classList.add("favorites");
  projects.classList.add("projects");
  todayImg.src = Img;
  todayImg.alt = "Calender icon";
  upcomingImg.src = Img2;
  upcomingImg.alt = "Calender icon";
  favoritesImg.src = Img3;
  favoritesImg.alt = "Expand less icon";
  favoritesImg.classList.add("favorites-img");
  projectsImg.src = Img3;
  projectsImg.alt = "Expand less icon";
  projectsImg.classList.add("projects-img");
  addListImg.src = Img12;
  addListImg.alt = "Add list icon";

  addListBtn.appendChild(addListImg);
  todayContainer.appendChild(todayImg);
  todayContainer.appendChild(todayBtn);
  todayContainer.appendChild(todayCount);
  upcomingContainer.appendChild(upcomingImg);
  upcomingContainer.appendChild(upcomingBtn);
  upcomingContainer.appendChild(upcomingCount);
  favWrapper.appendChild(favoritesImg);
  favWrapper.appendChild(favoritesBtn);
  favContainer.appendChild(favWrapper);
  favContainer.appendChild(favorites);
  projWrapper.appendChild(projectsImg);
  projWrapper.appendChild(projectsBtn);
  projWrapper.appendChild(addListBtn);
  projContainer.appendChild(projWrapper);
  projContainer.appendChild(projects);
  menu.appendChild(todayContainer);
  menu.appendChild(upcomingContainer);
  menu.appendChild(favContainer);
  menu.appendChild(projContainer);
  content.insertBefore(menu, main);
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
  priorityOne.textContent = "Critical Priority";
  priorityTwo.classList.add("high-btn");
  priorityTwo.id = "priority-btn";
  priorityTwo.textContent = "High Priority";
  priorityThree.classList.add("normal-btn");
  priorityThree.id = "priority-btn";
  priorityThree.textContent = "Normal Priority";
  priorityOneCount.classList.add("critical-count");
  priorityTwoCount.classList.add("high-count");
  priorityThreeCount.classList.add("normal-count");

  criticalImg.src = Img5;
  criticalImg.alt = "Water drop icon";
  highImg.src = Img6;
  highImg.alt = "Water drop icon";
  normalImg.src = Img7;
  normalImg.alt = "Water drop icon";

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

  if (projects) {
    projects.textContent = "";
  }

  for (let i = 0; i < listArray.length; i++) {
    const listName = listArray[i];

    const container = document.createElement("div");
    const listBtn = document.createElement("button");
    const taskCount = document.createElement("div");
    const img = new Image();

    container.classList.add(`${listName.replaceAll(" ", "-")}-list`);
    listBtn.type = "button";
    listBtn.classList.add(`${listName.replaceAll(" ", "-")}-btn`);
    listBtn.id = "task-btn";
    listBtn.textContent = listName;
    taskCount.classList.add(`${listName.replaceAll(" ", "-")}-count`);

    if (listName === "personal") {
      img.src = Img8;
      img.alt = "Person icon";
    } else if (listName === "work") {
      img.src = Img9;
      img.alt = "Briefcase icon";
    } else if (listName === "shopping") {
      img.src = Img10;
      img.alt = "Shopping cart icon";
    } else {
      img.src = Img11;
      img.alt = "Large dot icon";
    }

    container.appendChild(img);
    container.appendChild(listBtn);
    container.appendChild(taskCount);

    if (projects) {
      projects.appendChild(container);
    }
  }
};

const taskCount = () => {
  const counts = document.querySelectorAll("[class*='count']");
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

const changeFavoritesImage = () => {
  const favoritesContainer = document.querySelector(".favorites");
  const image = document.querySelector(".favorites-img");

  if (favoritesContainer.textContent === "") {
    image.src = Img3;
    image.alt = "Expand less icon";
  } else {
    image.src = Img4;
    image.alt = "Expand more icon";
  }
};

const changeProjectsImage = () => {
  const projectsContainer = document.querySelector(".projects");
  const image = document.querySelector(".projects-img");

  if (projectsContainer) {
    if (projectsContainer.textContent === "") {
      image.src = Img3;
      image.alt = "Expand less icon";
    } else {
      image.src = Img4;
      image.alt = "Expand more icon";
    }
  }
};

export {
  listArray,
  mainMenu,
  projectList,
  favoritesList,
  taskCount,
  changeFavoritesImage,
  changeProjectsImage,
};
