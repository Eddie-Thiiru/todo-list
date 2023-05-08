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
  btn.classList.add("form-btn");

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
  const taskBtn = document.querySelector(".form-btn");

  display.textContent = "";
  taskBtn.textContent = "Submit";

  // create form inputs
  const form = document.createElement("form");
  const taskContainer = document.createElement("div");
  const taskLabel = document.createElement("label");
  const taskInput = document.createElement("textarea");
  const descriptionContainer = document.createElement("div");
  const descriptionLabel = document.createElement("label");
  const descriptionInput = document.createElement("textarea");
  const dueDateContainer = document.createElement("div");
  const dateContainer = document.createElement("div");
  const dueDateLabel = document.createElement("label");
  const dueDateInput = document.createElement("input");
  const backBtn = document.createElement("button");

  // create form selections
  const priorityDiv = document.createElement("div");
  const priorityLabel = document.createElement("label");
  const priorityInput = document.createElement("select");
  const submitContainer = document.createElement("div");
  const submitSelect = document.createElement("div");
  const submitLabel = document.createElement("label");
  const submitInput = document.createElement("select");
  const priorityOption1 = document.createElement("option");
  const priorityOption2 = document.createElement("option");
  const priorityOption3 = document.createElement("option");
  const createListBtn = document.createElement("button");

  //Add attributes
  createListBtn.classList.add("create-list-btn");
  form.classList.add("task-form");
  dateContainer.classList.add("date-container");
  backBtn.classList.add("back-btn");

  taskLabel.htmlFor = "task-title";
  descriptionLabel.htmlFor = "description";
  dueDateLabel.htmlFor = "date";
  priorityLabel.htmlFor = "priority";
  submitLabel.htmlFor = "list";
  dueDateInput.type = "date";
  createListBtn.type = "button";
  backBtn.type = "button";
  taskInput.name = "title";
  descriptionInput.name = "description";
  dueDateInput.name = "date";
  priorityInput.name = "priority";
  submitInput.name = "list";
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
  backBtn.textContent = "Back";
  // formBtn.textContent = "submit";
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
  taskContainer.appendChild(taskLabel);
  taskContainer.appendChild(taskInput);
  descriptionContainer.appendChild(descriptionLabel);
  descriptionContainer.appendChild(descriptionInput);
  dateContainer.appendChild(dueDateLabel);
  dateContainer.appendChild(dueDateInput);
  priorityDiv.appendChild(priorityLabel);
  priorityDiv.appendChild(priorityInput);
  submitSelect.appendChild(submitLabel);
  submitSelect.appendChild(submitInput);
  submitContainer.appendChild(submitSelect);
  submitContainer.appendChild(createListBtn);
  dueDateContainer.appendChild(dateContainer);

  form.appendChild(backBtn);
  form.appendChild(taskContainer);
  form.appendChild(descriptionContainer);
  form.appendChild(dueDateContainer);
  form.appendChild(priorityDiv);
  form.appendChild(submitContainer);
  // form.appendChild(formBtn);
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

const addTimeOption = () => {
  const sibling = document.querySelector(".date-container");
  const siblingTwo = document.querySelector(".time-container");
  const parent = sibling.parentNode;

  if (parent.contains(siblingTwo)) {
    return;
  } else {
    const container = document.createElement("div");
    const label = document.createElement("label");
    const timeInput = document.createElement("input");

    container.classList.add("time-container");
    label.htmlFor = "time";
    timeInput.type = "time";
    timeInput.name = "time";
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
  const form = document.querySelector(".task-form");
  const getFormData = Object.fromEntries(new FormData(form));

  taskArray.push(getFormData);
};

const modifyTask = () => {
  const form = document.querySelector(".full-task-form");
  const index = parseInt(form.dataset.num);
  const formData = Object.fromEntries(new FormData(form));

  taskArray.splice(index, 1, formData);
};
export {
  mainContent,
  emptyIndicator,
  form,
  newListForm,
  addTimeOption,
  addListOption,
  processForm,
  modifyTask,
  taskArray,
};
