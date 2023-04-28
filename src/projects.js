const projectList = () => {
  const projects = document.querySelector(".projects");

  const defaultContainer = document.createElement("div");
  const personalContainer = document.createElement("div");
  const workContainer = document.createElement("div");
  const shoppingContainer = document.createElement("div");
  const defaultLabel = document.createElement("label");
  const personalLabel = document.createElement("label");
  const workLabel = document.createElement("label");
  const shoppingLabel = document.createElement("label");
  const defaultList = document.createElement("select");
  const personalList = document.createElement("select");
  const workList = document.createElement("select");
  const shoppingList = document.createElement("select");

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
  defaultLabel.textContent = "Default";
  personalLabel.textContent = "Personal";
  workLabel.textContent = "Work";
  shoppingLabel.textContent = "Shopping";

  defaultContainer.appendChild(defaultList);
  defaultContainer.appendChild(defaultLabel);
  personalContainer.appendChild(personalList);
  personalContainer.appendChild(personalLabel);
  shoppingContainer.appendChild(shoppingList);
  shoppingContainer.appendChild(shoppingLabel);
  workContainer.appendChild(workList);
  workContainer.appendChild(workLabel);
  projects.appendChild(defaultContainer);
  projects.appendChild(personalContainer);
  projects.appendChild(workContainer);
  projects.appendChild(shoppingContainer);
};

export { projectList };
