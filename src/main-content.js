import "./content.css";
import "./forms.css";
import { listArray } from "./layout";
import Img from "./images/add-task.svg";
import Img2 from "./images/back.svg";
import Img3 from "./images/add-list.svg";
import Img4 from "./images/save.svg";
import Img5 from "./images/calendar.svg";
import Img6 from "./images/delete.svg";
import { populateStorage } from "./data";

const taskArray = [];

const mainContent = () => {
  const container = document.querySelector(".main-section");

  const wrapper = document.createElement("div");
  const header = document.createElement("div");
  const taskDisplay = document.createElement("div");
  const heading = document.createElement("h2");
  const btnContainer = document.createElement("div");
  const btn = document.createElement("button");
  const btnImg = new Image();

  wrapper.classList.add("wrapper");
  header.classList.add("task-header");
  taskDisplay.classList.add("task-display");
  btnContainer.classList.add("display-btn-container");
  btn.type = "button";
  btn.classList.add("form-btn");
  btnImg.src = Img;
  btnImg.alt = "Plus icon";
  heading.textContent = "Today";

  header.appendChild(heading);
  btn.appendChild(btnImg);
  btnContainer.appendChild(btn);
  wrapper.appendChild(header);
  wrapper.appendChild(taskDisplay);
  wrapper.appendChild(btnContainer);
  container.appendChild(wrapper);
};

const emptyIndicator = () => {
  const display = document.querySelector(".task-display");
  const container = document.createElement("div");
  const para = document.createElement("p");
  const img = new Image();

  container.classList.add("empty-indicator");
  img.src = Img5;
  img.alt = "empty image";
  para.textContent = "Nothing to do";

  container.appendChild(img);
  container.appendChild(para);
  display.appendChild(container);
};

const createForm = () => {
  const display = document.querySelector(".task-display");
  const header = document.querySelector(".task-header");

  display.textContent = "";

  // create form inputs
  const form = document.createElement("form");
  const taskContainer = document.createElement("div");
  const taskLabel = document.createElement("label");
  const taskInput = document.createElement("input");
  const descriptionContainer = document.createElement("div");
  const descriptionLabel = document.createElement("label");
  const descriptionInput = document.createElement("textarea");
  const dueDateContainer = document.createElement("div");
  const dateContainer = document.createElement("div");
  const dueDateLabel = document.createElement("label");
  const dueDateInput = document.createElement("input");

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
  const createListImg = new Image();

  //Add attributes
  form.classList.add("task-form");
  taskContainer.classList.add("title-wrapper");
  descriptionContainer.classList.add("description-wrapper");
  dueDateContainer.classList.add("due-date-wrapper");
  priorityDiv.classList.add("priority-wrapper");
  submitContainer.classList.add("list-wrapper");
  dateContainer.classList.add("date-container");
  taskLabel.htmlFor = "task-title";
  taskLabel.textContent = "New Task";
  descriptionLabel.htmlFor = "description";
  descriptionLabel.textContent = "What is to be done?";
  dueDateLabel.htmlFor = "date";
  dueDateLabel.textContent = "Date";
  priorityLabel.htmlFor = "priority";
  priorityLabel.textContent = "Priority";
  submitLabel.htmlFor = "list";
  submitLabel.textContent = "List";
  dueDateInput.type = "date";
  taskInput.type = "text";
  taskInput.name = "title";
  taskInput.id = "task-title";
  taskInput.maxLength = "35";
  taskInput.placeholder = "Enter Task Name";
  taskInput.required = true;
  descriptionInput.name = "description";
  descriptionInput.id = "description";
  descriptionInput.placeholder = "Enter Task Description Here";
  dueDateInput.name = "date";
  dueDateInput.id = "date";
  priorityInput.name = "priority";
  priorityInput.id = "priority";
  createListBtn.type = "button";
  createListBtn.classList.add("create-list-btn");
  createListImg.src = Img3;
  createListImg.alt = "Add list icon";
  submitInput.name = "list";
  submitInput.id = "list";
  priorityOption1.value = "critical";
  priorityOption1.textContent = "Critical";
  priorityOption2.value = "high";
  priorityOption2.textContent = "High";
  priorityOption3.value = "normal";
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
  createListBtn.appendChild(createListImg);
  submitContainer.appendChild(submitSelect);
  submitContainer.appendChild(createListBtn);
  dueDateContainer.appendChild(dateContainer);
  form.appendChild(taskContainer);
  form.appendChild(descriptionContainer);
  form.appendChild(dueDateContainer);
  form.appendChild(priorityDiv);
  form.appendChild(submitContainer);
  display.appendChild(form);
};

const displayBtnController = (ele) => {
  const btnContainer = document.querySelector(".display-btn-container");

  btnContainer.textContent = "";

  if (ele.className === "form-btn") {
    const btn = document.createElement("button");
    const btnImg = new Image();

    btn.type = "button";
    btn.classList.add("submit-btn");
    btnImg.src = Img4;
    btnImg.alt = "Check circle icon";

    btn.appendChild(btnImg);
    btnContainer.appendChild(btn);
  } else if (ele.className === "task") {
    const btn = document.createElement("button");
    const btnImg = new Image();

    btn.type = "button";
    btn.classList.add("save-btn");
    btnImg.src = Img4;
    btnImg.alt = "Check circle icon";

    btn.appendChild(btnImg);
    btnContainer.appendChild(btn);
  } else {
    const btn = document.createElement("button");
    const btnImg = new Image();

    btn.type = "button";
    btn.classList.add("form-btn");
    btnImg.src = Img;
    btnImg.alt = "Add circle icon";

    btn.appendChild(btnImg);
    btnContainer.appendChild(btn);
  }
};

const newListForm = () => {
  const display = document.querySelector(".task-display");

  const listForm = document.createElement("form");
  const label = document.createElement("label");
  const input = document.createElement("input");
  const btnContainer = document.createElement("div");
  const cancelBtn = document.createElement("button");
  const acceptBtn = document.createElement("button");

  listForm.classList.add("pop-up");
  cancelBtn.type = "button";
  cancelBtn.classList.add("cancel-list-btn");
  cancelBtn.textContent = "Cancel";
  acceptBtn.type = "button";
  acceptBtn.classList.add("add-list-btn");
  acceptBtn.textContent = "Add";
  label.htmlFor = "new-list";
  label.textContent = "New List";
  input.type = "text";
  input.name = "new-list";
  input.id = "new-list";
  input.required = true;
  input.placeholder = "Enter List Name";
  input.maxLength = "15";

  btnContainer.appendChild(acceptBtn);
  btnContainer.appendChild(cancelBtn);
  listForm.appendChild(label);
  listForm.appendChild(input);
  listForm.appendChild(btnContainer);
  display.appendChild(listForm);
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
    label.textContent = "Time";
    timeInput.type = "time";
    timeInput.name = "time";
    timeInput.id = "time";

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

const backBtnController = () => {
  const header = document.querySelector(".task-header");
  const display = document.querySelector(".task-display");
  const form = document.querySelector(".task-form");
  const formTwo = document.querySelector(".full-task-form");
  const child = document.querySelector(".back-btn-container");

  if (header.contains(child) && display.contains(form)) {
    header.removeChild(child);
    display.removeChild(form);
  } else if (header.contains(child) && display.contains(formTwo)) {
    header.removeChild(child);
    display.removeChild(formTwo);
  } else if (display.contains(form) || display.contains(formTwo)) {
    // Create a back button
    const backBtnContainer = document.createElement("div");
    const backBtn = document.createElement("button");
    const backBtnImg = new Image();

    backBtnContainer.classList.add("back-btn-container");
    backBtn.type = "button";
    backBtn.classList.add("back-btn");
    backBtnImg.src = Img2;
    backBtnImg.alt = "Back arrow icon";

    backBtn.appendChild(backBtnImg);
    backBtnContainer.appendChild(backBtn);
    header.appendChild(backBtnContainer);
  } else {
    return;
  }
};

const deleteBtnController = () => {
  const header = document.querySelector(".task-header");
  const div = document.querySelector(".del-btn-container");

  const addDeleteBtn = () => {
    if (header.contains(div)) {
      return;
    }

    const container = document.createElement("div");
    const delBtn = document.createElement("button");
    const delBtnImg = new Image();

    container.classList.add("del-btn-container");
    delBtn.type = "submit";
    delBtn.classList.add("del-btn");
    delBtnImg.src = Img6;
    delBtnImg.alt = "Delete icon";

    delBtn.appendChild(delBtnImg);
    container.appendChild(delBtn);
    header.appendChild(container);
  };

  const checkDeleteBtn = () => {
    if (header.contains(div)) {
      header.removeChild(div);
    }
  };

  const removeDeleteBtn = () => {
    const checkBoxes = document.querySelectorAll(".checkbox");

    let checkedCount = 0;

    checkBoxes.forEach((checkBox) => {
      if (checkBox.checked === true) {
        checkedCount += 1;
      }
    });

    if (checkedCount === 0) {
      header.removeChild(div);
    } else {
      return;
    }
  };

  return { addDeleteBtn, checkDeleteBtn, removeDeleteBtn };
};

const listDisplayController = () => {
  const listsView = () => {
    const display = document.querySelector(".task-display");
    const header = document.querySelector("h2");

    display.textContent = "";
    header.textContent = "Task Lists";

    for (let i = 0; i < listArray.length; i++) {
      const listContainer = document.createElement("div");
      const titleWrapper = document.createElement("div");
      const listTitle = document.createElement("h3");
      const description = document.createElement("p");

      listContainer.classList.add("list-bar");
      listContainer.id = listArray[i];
      listContainer.dataset.num = i;
      listTitle.textContent = listArray[i];

      titleWrapper.appendChild(listTitle);
      titleWrapper.appendChild(description);
      listContainer.appendChild(titleWrapper);

      if (i > 2) {
        const btn = document.createElement("button");
        const btnImg = new Image();

        btn.type = "button";
        btn.classList.add("remove-project-btn");
        btnImg.src = Img6;
        btnImg.alt = "Remove list icon";
        description.textContent = "Custom";

        btn.appendChild(btnImg);
        listContainer.appendChild(btn);
      } else {
        description.textContent = "Default";
      }

      display.appendChild(listContainer);
    }
  };

  const removeList = (btn) => {
    const parent = btn.parentNode;
    const index = parseInt(parent.dataset.num);

    // Remove list and update display
    listArray.splice(index, 1);
    listsView();

    // Change task list to default list
    for (let i = 0; i < taskArray.length; i++) {
      const obj = taskArray[i];
      const listChoice = obj["list"];

      if (parent.id.includes(listChoice)) {
        console.log("includes");
        obj["list"] = "personal";
      }
    }

    populateStorage();
  };

  return { listsView, removeList };
};

export {
  mainContent,
  emptyIndicator,
  createForm,
  displayBtnController,
  newListForm,
  addTimeOption,
  addListOption,
  processForm,
  modifyTask,
  backBtnController,
  deleteBtnController,
  listDisplayController,
  taskArray,
};
