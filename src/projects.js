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

export { projectList };
