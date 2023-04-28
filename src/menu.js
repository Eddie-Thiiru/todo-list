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

export { mainMenu };
