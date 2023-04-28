import "./menu.css";

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

  container.classList.add("new-content");
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

  const defaultLabel = document.createElement("label");
  const personalLabel = document.createElement("label");
  const workLabel = document.createElement("label");
  const shoppingLabel = document.createElement("label");
  const defaultList = document.createElement("optgroup");
  const personalList = document.createElement("optgroup");
  const workList = document.createElement("optgroup");
  const shoppingList = document.createElement("optgroup");

  defaultLabel.htmlFor = "default-list";
  personalLabel.htmlFor = "personal-list";
  workLabel.htmlFor = "work-list";
  shoppingLabel.htmlFor = "shopping-list";
  defaultList.name = "default-list";
  personalList.name = "personal-list";
  workList.name = "work-list";
  shoppingList.name = "shopping-list";
  defaultList.id = "default-list";
  personalList.id = "personal-list";
  workList.id = "work-list";
  shoppingList.id = "shopping-list";

  projects.appendChild(defaultList);
  projects.appendChild(defaultLabel);
  projects.appendChild(personalList);
  projects.appendChild(personalLabel);
  projects.appendChild(workList);
  projects.appendChild(workLabel);
  projects.appendChild(shoppingList);
  projects.appendChild(shoppingLabel);
};

export { mainMenu };
