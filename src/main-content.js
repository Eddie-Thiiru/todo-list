import "./content.css";

const taskArray = [];

const updateContent = () => {
  const container = document.querySelector(".main");

  const wrapper = document.createElement("div");
  const header = document.createElement("div");
  const taskDisplay = document.createElement("div");
  const heading = document.createElement("h2");
  const emptyIndicator = document.createElement("div");
  const para = document.createElement("p");
  const btn = document.createElement("button");
  const image = new Image();

  wrapper.classList.add("wrapper");
  taskDisplay.classList.add("task-display");
  emptyIndicator.classList.add("empty-indicator");
  btn.classList.add("create-form-btn");

  image.alt = "empty image";
  btn.type = "button";
  heading.textContent = "Today";
  para.textContent = "Nothing to do";
  btn.textContent = "Add Task";

  header.appendChild(heading);
  emptyIndicator.appendChild(image);
  emptyIndicator.appendChild(para);
  taskDisplay.appendChild(emptyIndicator);
  wrapper.appendChild(header);
  wrapper.appendChild(taskDisplay);
  wrapper.appendChild(btn);
  container.appendChild(wrapper);
};

const form = () => {
  const display = document.querySelector(".task-display");
  const btn = document.querySelector(".create-form-btn");

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
  const repeatDiv = document.createElement("div");
  const repeatLabel = document.createElement("label");
  const repeatInput = document.createElement("select");
  const submitDiv = document.createElement("div");
  const submitLabel = document.createElement("label");
  const submitInput = document.createElement("select");
  const priorityOption1 = document.createElement("option");
  const priorityOption2 = document.createElement("option");
  const priorityOption3 = document.createElement("option");
  const repeatOption1 = document.createElement("option");
  const repeatOption2 = document.createElement("option");
  const repeatOption3 = document.createElement("option");
  const submitOption1 = document.createElement("option");
  const submitOption2 = document.createElement("option");
  const submitOption3 = document.createElement("option");
  const submitOption4 = document.createElement("option");

  //Adds attributes
  formBtn.classList.add("form-btn");

  taskLabel.htmlFor = "task-title";
  descriptionLabel.htmlFor = "description";
  dueDateLabel.htmlFor = "date-time";
  priorityLabel.htmlFor = "priority";
  repeatLabel.htmlFor = "repeat";
  submitLabel.htmlFor = "list";

  taskInput.type = "text";
  descriptionInput.type = "text";
  dueDateInput.type = "datetime-local";
  priorityInput.name = "priority";
  repeatInput.name = "repeat";
  submitInput.name = "choice";
  taskInput.id = "task-title";
  descriptionInput.id = "description";
  dueDateInput.id = "date-time";
  priorityInput.id = "priority";
  repeatInput.id = "repeat";
  submitInput.id = "list";

  taskLabel.textContent = "Task name";
  descriptionLabel.textContent = "What is to be done?";
  dueDateLabel.textContent = "Due date";
  priorityLabel.textContent = "Priority";
  repeatLabel.textContent = "Repeat";
  submitLabel.textContent = "Add to List";
  formBtn.textContent = "submit";

  priorityOption1.value = "1";
  priorityOption2.value = "2";
  priorityOption3.value = "3";
  repeatOption1.value = "";
  repeatOption2.value = "week";
  repeatOption3.value = "month";
  submitOption1.value = "personal";
  submitOption2.value = "work";
  submitOption3.value = "shopping";
  priorityOption1.textContent = "1";
  priorityOption2.textContent = "2";
  priorityOption3.textContent = "3";
  repeatOption1.textContent = "No repeat";
  repeatOption2.textContent = "Once a Week";
  repeatOption3.textContent = "Once a Month";
  submitOption1.textContent = "Personal";
  submitOption2.textContent = "Work";
  submitOption3.textContent = "Shopping";

  // Appends all nodes
  priorityInput.appendChild(priorityOption1);
  priorityInput.appendChild(priorityOption2);
  priorityInput.appendChild(priorityOption3);
  repeatInput.appendChild(repeatOption1);
  repeatInput.appendChild(repeatOption2);
  repeatInput.appendChild(repeatOption3);
  submitInput.appendChild(submitOption1);
  submitInput.appendChild(submitOption2);
  submitInput.appendChild(submitOption3);

  taskDiv.appendChild(taskLabel);
  taskDiv.appendChild(taskInput);
  descriptionDiv.appendChild(descriptionLabel);
  descriptionDiv.appendChild(descriptionInput);
  dueDateDiv.appendChild(dueDateLabel);
  dueDateDiv.appendChild(dueDateInput);
  priorityDiv.appendChild(priorityLabel);
  priorityDiv.appendChild(priorityInput);
  repeatDiv.appendChild(repeatLabel);
  repeatDiv.appendChild(repeatInput);
  submitDiv.appendChild(submitLabel);
  submitDiv.appendChild(submitInput);

  form.appendChild(taskDiv);
  form.appendChild(descriptionDiv);
  form.appendChild(dueDateDiv);
  form.appendChild(priorityDiv);
  form.appendChild(repeatDiv);
  form.appendChild(submitDiv);
  form.appendChild(formBtn);
  display.appendChild(form);
};

const processForm = () => {
  const task = document.getElementById("task-title").value;
  const description = document.getElementById("description").value;
  const date = document.getElementById("date-time").value;
  const priority = document.getElementById("priority").value;
  const repeat = document.getElementById("repeat").value;
  const choice = document.getElementById("list").value;

  taskArray.push({ task, description, date, priority, repeat, choice });
};
export { updateContent, form, processForm, taskArray };
