import "./content.css";
import { listArray } from "./layout";

const taskArray = [];

const mainContent = () => {
  const container = document.querySelector(".main-section");

  const wrapper = document.createElement("div");
  const header = document.createElement("div");
  const taskDisplay = document.createElement("div");
  const heading = document.createElement("h2");
  const btn = document.createElement("button");

  wrapper.classList.add("wrapper");
  taskDisplay.classList.add("task-display");
  btn.classList.add("create-form-btn");

  btn.type = "button";
  heading.textContent = "Today";
  btn.textContent = "Add Task";

  header.appendChild(heading);
  wrapper.appendChild(header);
  wrapper.appendChild(taskDisplay);
  wrapper.appendChild(btn);

  container.appendChild(wrapper);
};

const emptyIndicator = () => {
  const display = document.querySelector(".task-display");
  const container = document.createElement("div");
  const para = document.createElement("p");

  const image = new Image();

  image.alt = "empty image";
  container.classList.add("empty-indicator");
  para.textContent = "Nothing to do";

  container.appendChild(image);
  container.appendChild(para);
  display.appendChild(container);
};

const form = () => {
  const display = document.querySelector(".task-display");

  display.textContent = "";

  // create form inputs
  const form = document.createElement("form");
  const formBtn = document.createElement("button");
  const taskDiv = document.createElement("div");
  const taskLabel = document.createElement("label");
  const taskInput = document.createElement("input");
  const descriptionDiv = document.createElement("div");
  const descriptionLabel = document.createElement("label");
  const descriptionInput = document.createElement("input");
  const dueDateDiv = document.createElement("div");
  const dueDateLabel = document.createElement("label");
  const dueDateInput = document.createElement("input");

  // create form selections
  const priorityDiv = document.createElement("div");
  const priorityLabel = document.createElement("label");
  const priorityInput = document.createElement("select");
  const submitDiv = document.createElement("div");
  const submitLabel = document.createElement("label");
  const submitInput = document.createElement("select");
  const priorityOption1 = document.createElement("option");
  const priorityOption2 = document.createElement("option");
  const priorityOption3 = document.createElement("option");
  const createListBtn = document.createElement("button");

  //Add attributes
  formBtn.classList.add("form-btn");
  createListBtn.classList.add("create-list-btn");

  taskLabel.htmlFor = "task-title";
  descriptionLabel.htmlFor = "description";
  dueDateLabel.htmlFor = "date";
  priorityLabel.htmlFor = "priority";
  submitLabel.htmlFor = "list";

  taskInput.type = "text";
  descriptionInput.type = "text";
  dueDateInput.type = "date";
  createListBtn.type = "button";
  priorityInput.name = "priority";
  submitInput.name = "choice";
  taskInput.id = "task-title";
  descriptionInput.id = "description";
  dueDateInput.id = "date";
  priorityInput.id = "priority";
  submitInput.id = "list";

  taskLabel.textContent = "Task name";
  descriptionLabel.textContent = "What is to be done?";
  dueDateLabel.textContent = "Due date";
  priorityLabel.textContent = "Priority";
  submitLabel.textContent = "Add to List";
  createListBtn.textContent = "new list";
  formBtn.textContent = "submit";

  priorityOption1.value = "critical";
  priorityOption2.value = "high";
  priorityOption3.value = "normal";
  priorityOption1.textContent = "Critical";
  priorityOption2.textContent = "High";
  priorityOption3.textContent = "Normal";

  // Dynamically add list options. When the user adds a new list,
  // the new list will be present in the next form.
  for (let i = 0; i < listArray.length; i++) {
    const submitOption = document.createElement("option");

    submitOption.value = listArray[i];
    submitOption.textContent = listArray[i];

    submitInput.appendChild(submitOption);
  }

  // Append nodes
  priorityInput.appendChild(priorityOption1);
  priorityInput.appendChild(priorityOption2);
  priorityInput.appendChild(priorityOption3);
  taskDiv.appendChild(taskLabel);
  taskDiv.appendChild(taskInput);
  descriptionDiv.appendChild(descriptionLabel);
  descriptionDiv.appendChild(descriptionInput);
  dueDateDiv.appendChild(dueDateLabel);
  dueDateDiv.appendChild(dueDateInput);
  priorityDiv.appendChild(priorityLabel);
  priorityDiv.appendChild(priorityInput);
  submitDiv.appendChild(submitLabel);
  submitDiv.appendChild(submitInput);
  submitDiv.appendChild(createListBtn);

  form.appendChild(taskDiv);
  form.appendChild(descriptionDiv);
  form.appendChild(dueDateDiv);
  form.appendChild(priorityDiv);
  form.appendChild(submitDiv);
  form.appendChild(formBtn);
  display.appendChild(form);
};

const newListForm = () => {
  const wrapper = document.querySelector(".wrapper");

  const listForm = document.createElement("form");
  const label = document.createElement("label");
  const input = document.createElement("input");
  const btnContainer = document.createElement("div");
  const cancelBtn = document.createElement("button");
  const acceptBtn = document.createElement("button");

  cancelBtn.classList.add("cancel-list-btn");
  acceptBtn.classList.add("add-list-btn");
  cancelBtn.type = "button";
  acceptBtn.type = "submit";
  label.htmlFor = "new-list";
  input.name = "new-list";
  input.id = "new-list";

  label.textContent = "New List";
  cancelBtn.textContent = "Cancel";
  acceptBtn.textContent = "Add";

  btnContainer.appendChild(cancelBtn);
  btnContainer.appendChild(acceptBtn);
  listForm.appendChild(label);
  listForm.appendChild(input);
  listForm.appendChild(btnContainer);
  wrapper.appendChild(listForm);
};

const addTimeOption = (input) => {
  const parent = input.parentNode;
  const divChild = document.querySelector(".time-container");

  if (parent.contains(divChild)) {
    return;
  } else {
    const container = document.createElement("div");
    const label = document.createElement("label");
    const timeInput = document.createElement("input");

    container.classList.add("time-container");
    label.htmlFor = "time";
    timeInput.type = "time";
    timeInput.id = "time";
    label.textContent = "Time:";

    container.appendChild(label);
    container.appendChild(timeInput);
    parent.appendChild(container);
  }
};

const addListOption = () => {
  const optionsContainer = document.querySelector("#list");
  const name = document.querySelector("#new-list").value;

  const newOption = document.createElement("option");

  newOption.value = name;
  newOption.selected = true;
  newOption.textContent = name;

  optionsContainer.appendChild(newOption);
};

const processForm = () => {
  const task = document.getElementById("task-title").value;
  const description = document.getElementById("description").value;
  const date = document.getElementById("date").value;
  const time = document.getElementById("time").value;
  const priority = document.getElementById("priority").value;
  const choice = document.getElementById("list").value;

  taskArray.push({ task, description, date, time, priority, choice });
};
export {
  mainContent,
  emptyIndicator,
  form,
  newListForm,
  addTimeOption,
  addListOption,
  processForm,
  taskArray,
};
