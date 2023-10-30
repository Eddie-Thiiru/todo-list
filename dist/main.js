/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/data.js":
/*!*********************!*\
  !*** ./src/data.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   populateStorage: () => (/* binding */ populateStorage),
/* harmony export */   removeItems: () => (/* binding */ removeItems),
/* harmony export */   setArrayValues: () => (/* binding */ setArrayValues),
/* harmony export */   storageAvailable: () => (/* binding */ storageAvailable)
/* harmony export */ });
/* harmony import */ var _layout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./layout */ "./src/layout.js");
/* harmony import */ var _main_content__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./main-content */ "./src/main-content.js");



// Verify that localStorage is a available in the current browser.
// This storageAvailable function is provided by https://developer.mozilla.org/
const storageAvailable = type => {
  let storage;
  try {
    storage = window[type];
    const x = "__storage_test__";
    storage.setItem(x, x);
    storage.removeItem(x);
    return true;
  } catch (e) {
    return e instanceof DOMException && (
    // everything except Firefox
    e.code === 22 ||
    // Firefox
    e.code === 1014 ||
    // test name field too, because code might not be present
    // everything except Firefox
    e.name === "QuotaExceededError" ||
    // Firefox
    e.name === "NS_ERROR_DOM_QUOTA_REACHED") &&
    // acknowledge QuotaExceededError only if there's something already stored
    storage && storage.length !== 0;
  }
};
const populateStorage = () => {
  // Populate lists in storage

  const listArrayString = JSON.stringify(_layout__WEBPACK_IMPORTED_MODULE_0__.listArray);
  localStorage.setItem("listArray", listArrayString);
  setArrayValues().setLists();

  // Populate tasks in storage
  if (_main_content__WEBPACK_IMPORTED_MODULE_1__.taskArray.length !== 0) {
    for (let i = 0; i < _main_content__WEBPACK_IMPORTED_MODULE_1__.taskArray.length; i++) {
      let obj = _main_content__WEBPACK_IMPORTED_MODULE_1__.taskArray[i];
      let objString = JSON.stringify(obj);
      localStorage.setItem(`task-${i}`, objString);
    }
    setArrayValues().setTasks();
  }
};
const removeItems = () => {
  localStorage.clear();
};
const setArrayValues = () => {
  // Get list options from storage
  const setLists = () => {
    const listValues = localStorage.getItem("listArray");
    if (listValues) {
      const newListArray = JSON.parse(listValues);
      _layout__WEBPACK_IMPORTED_MODULE_0__.listArray.length = 0;
      for (let i = 0; i < newListArray.length; i++) {
        _layout__WEBPACK_IMPORTED_MODULE_0__.listArray.push(newListArray[i]);
      }
    }
  };

  // Get tasks from storage
  const setTasks = () => {
    _main_content__WEBPACK_IMPORTED_MODULE_1__.taskArray.length = 0;
    for (let i = 0; i < localStorage.length; i++) {
      const task = localStorage.getItem(`task-${i}`);
      const newTaskObj = JSON.parse(task);
      if (task) {
        _main_content__WEBPACK_IMPORTED_MODULE_1__.taskArray.push(newTaskObj);
      } else {
        return;
      }
    }
  };
  return {
    setLists,
    setTasks
  };
};


/***/ }),

/***/ "./src/layout.js":
/*!***********************!*\
  !*** ./src/layout.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   displayHeight: () => (/* binding */ displayHeight),
/* harmony export */   listArray: () => (/* binding */ listArray),
/* harmony export */   pageLayout: () => (/* binding */ pageLayout),
/* harmony export */   priorityArray: () => (/* binding */ priorityArray),
/* harmony export */   updateListArray: () => (/* binding */ updateListArray)
/* harmony export */ });
/* harmony import */ var _layout_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./layout.css */ "./src/layout.css");
/* harmony import */ var _images_menu_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./images/menu.svg */ "./src/images/menu.svg");
/* harmony import */ var _images_cat_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./images/cat.svg */ "./src/images/cat.svg");
/* harmony import */ var _images_bell_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./images/bell.svg */ "./src/images/bell.svg");
/* harmony import */ var _images_list_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./images/list.svg */ "./src/images/list.svg");





const listArray = ["personal", "work", "shopping"];
const priorityArray = ["critical", "high", "normal"];
const pageLayout = () => {
  const content = document.querySelector(".content");
  const header = document.createElement("div");
  const main = document.createElement("div");
  const footer = document.createElement("div");
  const para = document.createElement("p");
  const menuContainer = document.createElement("div");
  const menuBtn = document.createElement("button");
  const menuImg = new Image();
  const profile = document.createElement("div");
  const profileImg = new Image();
  const bellImg = new Image();
  const listGroupBtn = document.createElement("button");
  const listGroupImg = new Image();
  header.classList.add("header");
  main.classList.add("main-section");
  footer.classList.add("footer");
  para.textContent = "Copyright @ Todo 2023";
  menuImg.src = _images_menu_svg__WEBPACK_IMPORTED_MODULE_1__;
  menuImg.alt = "menu icon";
  menuBtn.type = "button";
  menuBtn.classList.add("menu-btn");
  profileImg.src = _images_cat_svg__WEBPACK_IMPORTED_MODULE_2__;
  profileImg.alt = "A cat icon";
  bellImg.src = _images_bell_svg__WEBPACK_IMPORTED_MODULE_3__;
  bellImg.alt = "A bell icon";
  listGroupBtn.type = "button";
  listGroupBtn.classList.add("view-lists-btn");
  listGroupImg.src = _images_list_svg__WEBPACK_IMPORTED_MODULE_4__;
  listGroupImg.alt = "A list icon";
  menuBtn.appendChild(menuImg);
  listGroupBtn.appendChild(listGroupImg);
  profile.appendChild(listGroupBtn);
  profile.appendChild(bellImg);
  profile.appendChild(profileImg);
  menuContainer.appendChild(menuBtn);
  header.appendChild(menuContainer);
  header.appendChild(profile);
  footer.appendChild(para);
  content.appendChild(header);
  content.appendChild(main);
  content.appendChild(footer);
};
const updateListArray = () => {
  const newList = document.querySelector("#new-list").value;
  listArray.push(newList);
};
const displayHeight = () => {
  let height = document.querySelector(".task-display").clientHeight;
  return height;
};


/***/ }),

/***/ "./src/main-content.js":
/*!*****************************!*\
  !*** ./src/main-content.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addListOption: () => (/* binding */ addListOption),
/* harmony export */   addTimeOption: () => (/* binding */ addTimeOption),
/* harmony export */   backBtnController: () => (/* binding */ backBtnController),
/* harmony export */   createForm: () => (/* binding */ createForm),
/* harmony export */   deleteBtnController: () => (/* binding */ deleteBtnController),
/* harmony export */   displayBtnController: () => (/* binding */ displayBtnController),
/* harmony export */   emptyIndicator: () => (/* binding */ emptyIndicator),
/* harmony export */   listDisplayController: () => (/* binding */ listDisplayController),
/* harmony export */   mainContent: () => (/* binding */ mainContent),
/* harmony export */   modifyTask: () => (/* binding */ modifyTask),
/* harmony export */   newListForm: () => (/* binding */ newListForm),
/* harmony export */   processForm: () => (/* binding */ processForm),
/* harmony export */   taskArray: () => (/* binding */ taskArray)
/* harmony export */ });
/* harmony import */ var _content_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./content.css */ "./src/content.css");
/* harmony import */ var _forms_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./forms.css */ "./src/forms.css");
/* harmony import */ var _layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./layout */ "./src/layout.js");
/* harmony import */ var _images_add_task_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./images/add-task.svg */ "./src/images/add-task.svg");
/* harmony import */ var _images_back_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./images/back.svg */ "./src/images/back.svg");
/* harmony import */ var _images_add_list_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./images/add-list.svg */ "./src/images/add-list.svg");
/* harmony import */ var _images_save_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./images/save.svg */ "./src/images/save.svg");
/* harmony import */ var _images_calendar_svg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./images/calendar.svg */ "./src/images/calendar.svg");
/* harmony import */ var _images_delete_svg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./images/delete.svg */ "./src/images/delete.svg");
/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./data */ "./src/data.js");










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
  btnImg.src = _images_add_task_svg__WEBPACK_IMPORTED_MODULE_3__;
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
  img.src = _images_calendar_svg__WEBPACK_IMPORTED_MODULE_7__;
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
  createListImg.src = _images_add_list_svg__WEBPACK_IMPORTED_MODULE_5__;
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
  for (let i = 0; i < _layout__WEBPACK_IMPORTED_MODULE_2__.listArray.length; i++) {
    const submitOption = document.createElement("option");
    submitOption.value = _layout__WEBPACK_IMPORTED_MODULE_2__.listArray[i];
    submitOption.textContent = _layout__WEBPACK_IMPORTED_MODULE_2__.listArray[i];
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
const displayBtnController = ele => {
  const btnContainer = document.querySelector(".display-btn-container");
  btnContainer.textContent = "";
  if (ele.className === "form-btn") {
    const btn = document.createElement("button");
    const btnImg = new Image();
    btn.type = "button";
    btn.classList.add("submit-btn");
    btnImg.src = _images_save_svg__WEBPACK_IMPORTED_MODULE_6__;
    btnImg.alt = "Check circle icon";
    btn.appendChild(btnImg);
    btnContainer.appendChild(btn);
  } else if (ele.className === "task") {
    const btn = document.createElement("button");
    const btnImg = new Image();
    btn.type = "button";
    btn.classList.add("save-btn");
    btnImg.src = _images_save_svg__WEBPACK_IMPORTED_MODULE_6__;
    btnImg.alt = "Check circle icon";
    btn.appendChild(btnImg);
    btnContainer.appendChild(btn);
  } else {
    const btn = document.createElement("button");
    const btnImg = new Image();
    btn.type = "button";
    btn.classList.add("form-btn");
    btnImg.src = _images_add_task_svg__WEBPACK_IMPORTED_MODULE_3__;
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
    backBtnImg.src = _images_back_svg__WEBPACK_IMPORTED_MODULE_4__;
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
    delBtnImg.src = _images_delete_svg__WEBPACK_IMPORTED_MODULE_8__;
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
    checkBoxes.forEach(checkBox => {
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
  return {
    addDeleteBtn,
    checkDeleteBtn,
    removeDeleteBtn
  };
};
const listDisplayController = () => {
  const listsView = () => {
    const display = document.querySelector(".task-display");
    const header = document.querySelector("h2");
    display.textContent = "";
    header.textContent = "Task Lists";
    for (let i = 0; i < _layout__WEBPACK_IMPORTED_MODULE_2__.listArray.length; i++) {
      const listContainer = document.createElement("div");
      const titleWrapper = document.createElement("div");
      const listTitle = document.createElement("h3");
      const description = document.createElement("p");
      listContainer.classList.add("list-bar");
      listContainer.id = _layout__WEBPACK_IMPORTED_MODULE_2__.listArray[i];
      listContainer.dataset.num = i;
      listTitle.textContent = _layout__WEBPACK_IMPORTED_MODULE_2__.listArray[i];
      titleWrapper.appendChild(listTitle);
      titleWrapper.appendChild(description);
      listContainer.appendChild(titleWrapper);
      if (i > 2) {
        const btn = document.createElement("button");
        const btnImg = new Image();
        btn.type = "button";
        btn.classList.add("remove-project-btn");
        btnImg.src = _images_delete_svg__WEBPACK_IMPORTED_MODULE_8__;
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
  const removeList = btn => {
    const parent = btn.parentNode;
    const index = parseInt(parent.dataset.num);

    // Remove list and update display
    _layout__WEBPACK_IMPORTED_MODULE_2__.listArray.splice(index, 1);
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
    (0,_data__WEBPACK_IMPORTED_MODULE_9__.populateStorage)();
  };
  return {
    listsView,
    removeList
  };
};


/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   changeFavoritesImage: () => (/* binding */ changeFavoritesImage),
/* harmony export */   changeProjectsImage: () => (/* binding */ changeProjectsImage),
/* harmony export */   favoritesList: () => (/* binding */ favoritesList),
/* harmony export */   listArray: () => (/* reexport safe */ _layout__WEBPACK_IMPORTED_MODULE_2__.listArray),
/* harmony export */   mainMenu: () => (/* binding */ mainMenu),
/* harmony export */   projectList: () => (/* binding */ projectList),
/* harmony export */   taskCount: () => (/* binding */ taskCount)
/* harmony export */ });
/* harmony import */ var _main_content__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./main-content */ "./src/main-content.js");
/* harmony import */ var _nav_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./nav.css */ "./src/nav.css");
/* harmony import */ var _layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./layout */ "./src/layout.js");
/* harmony import */ var _images_today_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./images/today.svg */ "./src/images/today.svg");
/* harmony import */ var _images_upcoming_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./images/upcoming.svg */ "./src/images/upcoming.svg");
/* harmony import */ var _images_expand_less_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./images/expand-less.svg */ "./src/images/expand-less.svg");
/* harmony import */ var _images_expand_more_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./images/expand-more.svg */ "./src/images/expand-more.svg");
/* harmony import */ var _images_critical_svg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./images/critical.svg */ "./src/images/critical.svg");
/* harmony import */ var _images_high_svg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./images/high.svg */ "./src/images/high.svg");
/* harmony import */ var _images_normal_svg__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./images/normal.svg */ "./src/images/normal.svg");
/* harmony import */ var _images_personal_svg__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./images/personal.svg */ "./src/images/personal.svg");
/* harmony import */ var _images_work_svg__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./images/work.svg */ "./src/images/work.svg");
/* harmony import */ var _images_shopping_svg__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./images/shopping.svg */ "./src/images/shopping.svg");
/* harmony import */ var _images_new_svg__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./images/new.svg */ "./src/images/new.svg");
/* harmony import */ var _images_add_list_svg__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./images/add-list.svg */ "./src/images/add-list.svg");















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
  todayImg.src = _images_today_svg__WEBPACK_IMPORTED_MODULE_3__;
  todayImg.alt = "Calender icon";
  upcomingImg.src = _images_upcoming_svg__WEBPACK_IMPORTED_MODULE_4__;
  upcomingImg.alt = "Calender icon";
  favoritesImg.src = _images_expand_less_svg__WEBPACK_IMPORTED_MODULE_5__;
  favoritesImg.alt = "Expand less icon";
  favoritesImg.classList.add("favorites-img");
  projectsImg.src = _images_expand_less_svg__WEBPACK_IMPORTED_MODULE_5__;
  projectsImg.alt = "Expand less icon";
  projectsImg.classList.add("projects-img");
  addListImg.src = _images_add_list_svg__WEBPACK_IMPORTED_MODULE_14__;
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
  criticalImg.src = _images_critical_svg__WEBPACK_IMPORTED_MODULE_7__;
  criticalImg.alt = "Water drop icon";
  highImg.src = _images_high_svg__WEBPACK_IMPORTED_MODULE_8__;
  highImg.alt = "Water drop icon";
  normalImg.src = _images_normal_svg__WEBPACK_IMPORTED_MODULE_9__;
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
  for (let i = 0; i < _layout__WEBPACK_IMPORTED_MODULE_2__.listArray.length; i++) {
    const listName = _layout__WEBPACK_IMPORTED_MODULE_2__.listArray[i];
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
      img.src = _images_personal_svg__WEBPACK_IMPORTED_MODULE_10__;
      img.alt = "Person icon";
    } else if (listName === "work") {
      img.src = _images_work_svg__WEBPACK_IMPORTED_MODULE_11__;
      img.alt = "Briefcase icon";
    } else if (listName === "shopping") {
      img.src = _images_shopping_svg__WEBPACK_IMPORTED_MODULE_12__;
      img.alt = "Shopping cart icon";
    } else {
      img.src = _images_new_svg__WEBPACK_IMPORTED_MODULE_13__;
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
  counts.forEach(count => {
    let className = count.className;
    let num = 0;
    for (let i = 0; i < _main_content__WEBPACK_IMPORTED_MODULE_0__.taskArray.length; i++) {
      const obj = _main_content__WEBPACK_IMPORTED_MODULE_0__.taskArray[i];
      const listChoice = obj["list"];
      const taskPriority = obj["priority"];
      const taskDate = obj["date"];
      if (className.includes(listChoice) || todayDate === taskDate && className.includes("today") || todayDate !== taskDate && className.includes("upcoming") || className.includes(taskPriority)) {
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
    image.src = _images_expand_less_svg__WEBPACK_IMPORTED_MODULE_5__;
    image.alt = "Expand less icon";
  } else {
    image.src = _images_expand_more_svg__WEBPACK_IMPORTED_MODULE_6__;
    image.alt = "Expand more icon";
  }
};
const changeProjectsImage = () => {
  const projectsContainer = document.querySelector(".projects");
  const image = document.querySelector(".projects-img");
  if (projectsContainer) {
    if (projectsContainer.textContent === "") {
      image.src = _images_expand_less_svg__WEBPACK_IMPORTED_MODULE_5__;
      image.alt = "Expand less icon";
    } else {
      image.src = _images_expand_more_svg__WEBPACK_IMPORTED_MODULE_6__;
      image.alt = "Expand more icon";
    }
  }
};


/***/ }),

/***/ "./src/task-display.js":
/*!*****************************!*\
  !*** ./src/task-display.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   deleteTask: () => (/* binding */ deleteTask),
/* harmony export */   sortTaskBars: () => (/* binding */ sortTaskBars),
/* harmony export */   taskBars: () => (/* binding */ taskBars),
/* harmony export */   taskPage: () => (/* binding */ taskPage)
/* harmony export */ });
/* harmony import */ var _main_content_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./main-content.js */ "./src/main-content.js");
/* harmony import */ var _layout_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./layout.js */ "./src/layout.js");
/* harmony import */ var _forms_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./forms.css */ "./src/forms.css");
/* harmony import */ var _images_personal_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./images/personal.svg */ "./src/images/personal.svg");
/* harmony import */ var _images_work_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./images/work.svg */ "./src/images/work.svg");
/* harmony import */ var _images_shopping_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./images/shopping.svg */ "./src/images/shopping.svg");
/* harmony import */ var _images_new_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./images/new.svg */ "./src/images/new.svg");
/* harmony import */ var _images_back_svg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./images/back.svg */ "./src/images/back.svg");








const taskBars = () => {
  const display = document.querySelector(".task-display");
  const heading = document.querySelector("h2");
  display.textContent = "";
  heading.textContent = "All Tasks";

  // Add height to the task display area for overflow scrollbar
  display.style.height = (0,_layout_js__WEBPACK_IMPORTED_MODULE_1__.displayHeight)();
  if (_main_content_js__WEBPACK_IMPORTED_MODULE_0__.taskArray.length !== 0) {
    for (let i = 0; i < _main_content_js__WEBPACK_IMPORTED_MODULE_0__.taskArray.length; i++) {
      const obj = _main_content_js__WEBPACK_IMPORTED_MODULE_0__.taskArray[i];
      const taskTitle = obj["title"];
      const listChoice = obj["list"];
      const taskDate = obj["date"];

      // create elements for each task
      const wrapper = document.createElement("div");
      const checkBoxContainer = document.createElement("form");
      const checkBoxLabel = document.createElement("label");
      const checkBox = document.createElement("input");
      const wrapperTwo = document.createElement("div");
      const title = document.createElement("h3");
      const date = document.createElement("div");
      const listContainer = document.createElement("div");
      const listName = document.createElement("p");
      const img = new Image();
      wrapper.classList.add("task");
      wrapper.id = taskTitle;
      wrapper.dataset.num = `${i}`;
      checkBoxLabel.htmlFor = "checkbox";
      checkBox.type = "checkbox";
      checkBox.name = "task-checkbox";
      checkBox.classList.add("checkbox");
      title.textContent = taskTitle;
      date.textContent = taskDate;
      listName.textContent = listChoice;
      if (listChoice === "personal") {
        img.src = _images_personal_svg__WEBPACK_IMPORTED_MODULE_3__;
        img.alt = "Person icon";
      } else if (listChoice === "work") {
        img.src = _images_work_svg__WEBPACK_IMPORTED_MODULE_4__;
        img.alt = "Briefcase icon";
      } else if (listChoice === "shopping") {
        img.src = _images_shopping_svg__WEBPACK_IMPORTED_MODULE_5__;
        img.alt = "Shopping cart icon";
      } else {
        img.src = _images_new_svg__WEBPACK_IMPORTED_MODULE_6__;
        img.alt = "Large dot icon";
      }
      checkBoxContainer.appendChild(checkBoxLabel);
      checkBoxContainer.appendChild(checkBox);
      wrapperTwo.appendChild(title);
      wrapperTwo.appendChild(date);
      listContainer.appendChild(listName);
      listContainer.appendChild(img);
      wrapper.appendChild(checkBoxContainer);
      wrapper.appendChild(wrapperTwo);
      wrapper.appendChild(listContainer);
      display.appendChild(wrapper);
    }
  } else {
    (0,_main_content_js__WEBPACK_IMPORTED_MODULE_0__.emptyIndicator)();
  }
};
const taskPage = taskIndex => {
  const display = document.querySelector(".task-display");
  const header = document.querySelector(".task-header");
  display.textContent = "";
  const obj = _main_content_js__WEBPACK_IMPORTED_MODULE_0__.taskArray[taskIndex];
  const taskTitle = obj["title"];
  const taskDescription = obj["description"];
  const taskDate = obj["date"];
  const taskTime = obj["time"];
  const taskPriority = obj["priority"];
  const listChoice = obj["list"];
  const form = document.createElement("form");
  const titleContainer = document.createElement("div");
  const titleLabel = document.createElement("label");
  const title = document.createElement("textarea");
  const descriptionContainer = document.createElement("div");
  const descriptionLabel = document.createElement("label");
  const description = document.createElement("textarea");
  const dateWrapper = document.createElement("div");
  const dateContainer = document.createElement("div");
  const dateLabel = document.createElement("label");
  const date = document.createElement("input");
  const timeContainer = document.createElement("div");
  const timeLabel = document.createElement("label");
  const time = document.createElement("input");
  const listNameContainer = document.createElement("div");
  const listSelectLabel = document.createElement("label");
  const listSelect = document.createElement("select");
  const priorityContainer = document.createElement("div");
  const priorityLabel = document.createElement("label");
  const prioritySelect = document.createElement("select");
  const backBtnContainer = document.createElement("div");
  const backBtn = document.createElement("button");
  const backBtnImg = new Image();
  form.classList.add("full-task-form");
  form.dataset.num = taskIndex;
  descriptionContainer.classList.add("description");
  dateContainer.classList.add("date-container");
  timeContainer.classList.add("time-container");
  backBtnContainer.classList.add("back-btn-container");
  titleLabel.htmlFor = "task-title";
  descriptionLabel.htmlFor = "description";
  dateLabel.htmlFor = "date";
  dateLabel.textContent = "Due Date";
  timeLabel.htmlFor = "time";
  timeLabel.textContent = "Due Time";
  priorityLabel.htmlFor = "priority";
  listSelectLabel.htmlFor = "list";
  backBtn.type = "button";
  backBtn.classList.add("back-btn");
  backBtnImg.src = _images_back_svg__WEBPACK_IMPORTED_MODULE_7__;
  backBtnImg.alt = "Back arrow icon";
  title.name = "title";
  title.id = "task-title";
  title.value = taskTitle;
  title.maxLength = "35";
  title.required = true;
  description.name = "description";
  description.id = "description";
  description.value = taskDescription;
  listSelect.name = "list";
  listSelect.id = "list";
  date.type = "date";
  date.name = "date";
  date.id = "date";
  date.value = taskDate;
  time.type = "time";
  time.name = "time";
  time.id = "time";
  time.value = taskTime;
  prioritySelect.name = "priority";
  prioritySelect.id = "priority";

  // Dynamically add list options. When the user adds a new list,
  // the new list will be present in the next form.
  for (let i = 0; i < _layout_js__WEBPACK_IMPORTED_MODULE_1__.listArray.length; i++) {
    const listOption = document.createElement("option");
    listOption.value = _layout_js__WEBPACK_IMPORTED_MODULE_1__.listArray[i];
    listOption.textContent = _layout_js__WEBPACK_IMPORTED_MODULE_1__.listArray[i];
    if (listOption.value === listChoice) {
      listOption.selected = true;
    }
    listSelect.appendChild(listOption);
  }
  for (let i = 0; i < _layout_js__WEBPACK_IMPORTED_MODULE_1__.priorityArray.length; i++) {
    const priorityOption = document.createElement("option");
    priorityOption.value = _layout_js__WEBPACK_IMPORTED_MODULE_1__.priorityArray[i];
    priorityOption.textContent = _layout_js__WEBPACK_IMPORTED_MODULE_1__.priorityArray[i];
    prioritySelect.appendChild(priorityOption);
    if (_layout_js__WEBPACK_IMPORTED_MODULE_1__.priorityArray[i] === taskPriority) {
      priorityOption.selected = true;
    }
  }
  titleContainer.appendChild(titleLabel);
  titleContainer.appendChild(title);
  listNameContainer.appendChild(listSelectLabel);
  listNameContainer.appendChild(listSelect);
  priorityContainer.appendChild(priorityLabel);
  priorityContainer.appendChild(prioritySelect);
  descriptionContainer.appendChild(descriptionLabel);
  descriptionContainer.appendChild(description);
  dateContainer.appendChild(dateLabel);
  dateContainer.appendChild(date);
  timeContainer.appendChild(timeLabel);
  timeContainer.appendChild(time);
  dateWrapper.appendChild(dateContainer);
  dateWrapper.appendChild(timeContainer);
  backBtn.appendChild(backBtnImg);
  backBtnContainer.appendChild(backBtn);
  header.appendChild(backBtnContainer);
  form.appendChild(titleContainer);
  form.appendChild(listNameContainer);
  form.appendChild(descriptionContainer);
  form.appendChild(dateWrapper);
  form.appendChild(priorityContainer);
  display.appendChild(form);
};
const sortTaskBars = () => {
  const display = document.querySelector(".task-display");
  const heading = document.querySelector("h2");
  const todayDate = new Date().toISOString().split("T")[0];
  display.textContent = "";
  const menuChoice = btn => {
    const sibling = btn.nextElementSibling;
    const btnClass = btn.className;
    if (btnClass.includes("today")) {
      heading.textContent = "Today";
    } else if (btnClass.includes("upcoming")) {
      heading.textContent = "Upcoming";
    } else if (btnClass.includes("critical")) {
      heading.textContent = "Critical Priority Tasks";
    } else if (btnClass.includes("high")) {
      heading.textContent = "High Priority Tasks";
    } else if (btnClass.includes("normal")) {
      heading.textContent = "Normal Priority Tasks";
    } else if (btnClass.includes("personal")) {
      heading.textContent = "Personal";
    } else if (btnClass.includes("work")) {
      heading.textContent = "Work";
    } else if (btnClass.includes("shopping")) {
      heading.textContent = "Shopping";
    } else {
      let title = btnClass.replaceAll("-", " ");
      heading.textContent = title.replaceAll("btn", "");
    }
    if (sibling.textContent !== "") {
      for (let i = 0; i < _main_content_js__WEBPACK_IMPORTED_MODULE_0__.taskArray.length; i++) {
        const obj = _main_content_js__WEBPACK_IMPORTED_MODULE_0__.taskArray[i];
        const taskTitle = obj["title"];
        const listChoice = obj["list"];
        const taskDate = obj["date"];
        const priority = obj["priority"];
        if (btnClass.includes(listChoice) || todayDate === taskDate && btnClass.includes("today") || todayDate !== taskDate && btnClass.includes("upcoming") || btnClass.includes(priority)) {
          // create elements for each task
          const wrapper = document.createElement("div");
          const checkBoxContainer = document.createElement("form");
          const checkBoxLabel = document.createElement("label");
          const checkBox = document.createElement("input");
          const wrapperTwo = document.createElement("div");
          const title = document.createElement("h3");
          const date = document.createElement("div");
          const listContainer = document.createElement("div");
          const listName = document.createElement("p");
          const listImg = new Image();
          wrapper.classList.add("task");
          wrapper.id = taskTitle;
          wrapper.dataset.num = i;
          checkBoxLabel.htmlFor = "checkbox";
          checkBox.type = "checkbox";
          checkBox.name = "task-checkbox";
          checkBox.classList.add("checkbox");
          title.textContent = taskTitle;
          date.textContent = taskDate;
          listName.textContent = listChoice;
          if (listChoice === "personal") {
            listImg.src = _images_personal_svg__WEBPACK_IMPORTED_MODULE_3__;
            listImg.alt = "Person icon";
          } else if (listChoice === "work") {
            listImg.src = _images_work_svg__WEBPACK_IMPORTED_MODULE_4__;
            listImg.alt = "Briefcase icon";
          } else if (listChoice === "shopping") {
            listImg.src = _images_shopping_svg__WEBPACK_IMPORTED_MODULE_5__;
            listImg.alt = "Shopping cart icon";
          } else {
            listImg.src = _images_new_svg__WEBPACK_IMPORTED_MODULE_6__;
            listImg.alt = "Large dot icon";
          }
          checkBoxContainer.appendChild(checkBoxLabel);
          checkBoxContainer.appendChild(checkBox);
          wrapperTwo.appendChild(title);
          wrapperTwo.appendChild(date);
          listContainer.appendChild(listName);
          listContainer.appendChild(listImg);
          wrapper.appendChild(checkBoxContainer);
          wrapper.appendChild(wrapperTwo);
          wrapper.appendChild(listContainer);
          display.appendChild(wrapper);
        }
      }
    } else {
      (0,_main_content_js__WEBPACK_IMPORTED_MODULE_0__.emptyIndicator)();
    }
  };
  const todayStoredTasks = () => {
    let count = 0;
    for (let i = 0; i < _main_content_js__WEBPACK_IMPORTED_MODULE_0__.taskArray.length; i++) {
      const obj = _main_content_js__WEBPACK_IMPORTED_MODULE_0__.taskArray[i];
      const taskTitle = obj["title"];
      const listChoice = obj["list"];
      const taskDate = obj["date"];
      if (todayDate === taskDate) {
        count += 1;

        // create elements for each task
        const wrapper = document.createElement("div");
        const checkBoxContainer = document.createElement("form");
        const checkBoxLabel = document.createElement("label");
        const checkBox = document.createElement("input");
        const wrapperTwo = document.createElement("div");
        const title = document.createElement("h3");
        const date = document.createElement("div");
        const listContainer = document.createElement("div");
        const listName = document.createElement("p");
        const listImg = new Image();
        wrapper.classList.add("task");
        wrapper.id = taskTitle;
        wrapper.dataset.num = i;
        checkBoxLabel.htmlFor = "checkbox";
        checkBox.type = "checkbox";
        checkBox.name = "task-checkbox";
        checkBox.classList.add("checkbox");
        title.textContent = taskTitle;
        date.textContent = taskDate;
        listName.textContent = listChoice;
        if (listChoice === "personal") {
          listImg.src = _images_personal_svg__WEBPACK_IMPORTED_MODULE_3__;
          listImg.alt = "Person icon";
        } else if (listChoice === "work") {
          listImg.src = _images_work_svg__WEBPACK_IMPORTED_MODULE_4__;
          listImg.alt = "Briefcase icon";
        } else if (listChoice === "shopping") {
          listImg.src = _images_shopping_svg__WEBPACK_IMPORTED_MODULE_5__;
          listImg.alt = "Shopping cart icon";
        } else {
          listImg.src = _images_new_svg__WEBPACK_IMPORTED_MODULE_6__;
          listImg.alt = "Large dot icon";
        }
        checkBoxContainer.appendChild(checkBoxLabel);
        checkBoxContainer.appendChild(checkBox);
        wrapperTwo.appendChild(title);
        wrapperTwo.appendChild(date);
        listContainer.appendChild(listName);
        listContainer.appendChild(listImg);
        wrapper.appendChild(checkBoxContainer);
        wrapper.appendChild(wrapperTwo);
        wrapper.appendChild(listContainer);
        display.appendChild(wrapper);
      }
    }
    if (count === 0) {
      (0,_main_content_js__WEBPACK_IMPORTED_MODULE_0__.emptyIndicator)();
    }
  };
  return {
    menuChoice,
    todayStoredTasks
  };
};
const deleteTask = () => {
  const display = document.querySelector(".task-display");
  const tasks = document.querySelectorAll(".checkbox");
  const displayNodes = display.childNodes;
  tasks.forEach(task => {
    if (task.checked === true) {
      const grandParent = task.parentNode.parentNode;
      const taskIndex = grandParent.dataset.num;
      _main_content_js__WEBPACK_IMPORTED_MODULE_0__.taskArray.splice(taskIndex, 1);
      display.removeChild(displayNodes[taskIndex]);
      for (let i = 0; i < displayNodes.length; i++) {
        displayNodes[i].dataset.num = i;
      }
    }
  });
  if (display.textContent === "") {
    (0,_main_content_js__WEBPACK_IMPORTED_MODULE_0__.emptyIndicator)();
    (0,_main_content_js__WEBPACK_IMPORTED_MODULE_0__.deleteBtnController)().removeDeleteBtn();
  }
};


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/content.css":
/*!***************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/content.css ***!
  \***************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".wrapper {\n  height: 100%;\n  width: 100%;\n  padding: 15px;\n  position: relative;\n  display: grid;\n  grid-template-rows: 80px 1fr;\n}\n\nh2 {\n  color: #f44336;\n}\n\n.task-display {\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n  overflow-y: auto;\n}\n\n.empty-indicator {\n  padding: 10px;\n  position: absolute;\n  bottom: 50%;\n  display: flex;\n  flex-direction: column;\n  align-self: center;\n}\n\n.task,\n.list-bar {\n  width: 100%;\n  height: 50px;\n  padding: 5px;\n  display: flex;\n  gap: 10px;\n  align-items: center;\n}\n\n.list-bar {\n  background-color: #e3e9f6;\n  border-radius: 10px;\n}\n\n.list-bar > div {\n  padding: 5px;\n}\n\n.display-btn-container {\n  position: absolute;\n  right: 10px;\n  bottom: 10px;\n}\n\n.back-btn-container,\n.del-btn-container {\n  align-self: center;\n}\n\n.wrapper button {\n  background-color: #dee0e0;\n  padding: 5px;\n  border: none;\n  border-radius: 50%;\n  display: grid;\n  justify-self: self-start;\n  align-items: center;\n}\n\n.list-bar p {\n  font-size: 0.75rem;\n\n  opacity: 0.7;\n}\n\n.list-bar .remove-project-btn {\n  margin-left: auto;\n  background-color: #e3e9f6;\n}\n\n.task > div {\n  padding: 5px;\n  display: flex;\n  gap: 5px;\n  pointer-events: none;\n}\n\n.task > div:nth-child(2) {\n  flex-direction: column;\n}\n\n.task > div:nth-of-type(2) {\n  margin-left: auto;\n}\n\n.task img {\n  height: 15px;\n  width: 15px;\n  align-self: center;\n}\n\n.back-btn img,\n.del-btn img,\n.create-list-btn img,\n.remove-project-btn img {\n  height: 30px;\n  width: 30px;\n}\n\n.empty-indicator img {\n  height: 100px;\n  width: 100px;\n}\n\n.wrapper button:hover {\n  background-color: #cccccc;\n}\n", "",{"version":3,"sources":["webpack://./src/content.css"],"names":[],"mappings":"AAAA;EACE,YAAY;EACZ,WAAW;EACX,aAAa;EACb,kBAAkB;EAClB,aAAa;EACb,4BAA4B;AAC9B;;AAEA;EACE,cAAc;AAChB;;AAEA;EACE,kBAAkB;EAClB,aAAa;EACb,sBAAsB;EACtB,SAAS;EACT,gBAAgB;AAClB;;AAEA;EACE,aAAa;EACb,kBAAkB;EAClB,WAAW;EACX,aAAa;EACb,sBAAsB;EACtB,kBAAkB;AACpB;;AAEA;;EAEE,WAAW;EACX,YAAY;EACZ,YAAY;EACZ,aAAa;EACb,SAAS;EACT,mBAAmB;AACrB;;AAEA;EACE,yBAAyB;EACzB,mBAAmB;AACrB;;AAEA;EACE,YAAY;AACd;;AAEA;EACE,kBAAkB;EAClB,WAAW;EACX,YAAY;AACd;;AAEA;;EAEE,kBAAkB;AACpB;;AAEA;EACE,yBAAyB;EACzB,YAAY;EACZ,YAAY;EACZ,kBAAkB;EAClB,aAAa;EACb,wBAAwB;EACxB,mBAAmB;AACrB;;AAEA;EACE,kBAAkB;;EAElB,YAAY;AACd;;AAEA;EACE,iBAAiB;EACjB,yBAAyB;AAC3B;;AAEA;EACE,YAAY;EACZ,aAAa;EACb,QAAQ;EACR,oBAAoB;AACtB;;AAEA;EACE,sBAAsB;AACxB;;AAEA;EACE,iBAAiB;AACnB;;AAEA;EACE,YAAY;EACZ,WAAW;EACX,kBAAkB;AACpB;;AAEA;;;;EAIE,YAAY;EACZ,WAAW;AACb;;AAEA;EACE,aAAa;EACb,YAAY;AACd;;AAEA;EACE,yBAAyB;AAC3B","sourcesContent":[".wrapper {\n  height: 100%;\n  width: 100%;\n  padding: 15px;\n  position: relative;\n  display: grid;\n  grid-template-rows: 80px 1fr;\n}\n\nh2 {\n  color: #f44336;\n}\n\n.task-display {\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n  overflow-y: auto;\n}\n\n.empty-indicator {\n  padding: 10px;\n  position: absolute;\n  bottom: 50%;\n  display: flex;\n  flex-direction: column;\n  align-self: center;\n}\n\n.task,\n.list-bar {\n  width: 100%;\n  height: 50px;\n  padding: 5px;\n  display: flex;\n  gap: 10px;\n  align-items: center;\n}\n\n.list-bar {\n  background-color: #e3e9f6;\n  border-radius: 10px;\n}\n\n.list-bar > div {\n  padding: 5px;\n}\n\n.display-btn-container {\n  position: absolute;\n  right: 10px;\n  bottom: 10px;\n}\n\n.back-btn-container,\n.del-btn-container {\n  align-self: center;\n}\n\n.wrapper button {\n  background-color: #dee0e0;\n  padding: 5px;\n  border: none;\n  border-radius: 50%;\n  display: grid;\n  justify-self: self-start;\n  align-items: center;\n}\n\n.list-bar p {\n  font-size: 0.75rem;\n\n  opacity: 0.7;\n}\n\n.list-bar .remove-project-btn {\n  margin-left: auto;\n  background-color: #e3e9f6;\n}\n\n.task > div {\n  padding: 5px;\n  display: flex;\n  gap: 5px;\n  pointer-events: none;\n}\n\n.task > div:nth-child(2) {\n  flex-direction: column;\n}\n\n.task > div:nth-of-type(2) {\n  margin-left: auto;\n}\n\n.task img {\n  height: 15px;\n  width: 15px;\n  align-self: center;\n}\n\n.back-btn img,\n.del-btn img,\n.create-list-btn img,\n.remove-project-btn img {\n  height: 30px;\n  width: 30px;\n}\n\n.empty-indicator img {\n  height: 100px;\n  width: 100px;\n}\n\n.wrapper button:hover {\n  background-color: #cccccc;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/forms.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/forms.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".task-form {\n  height: 100%;\n  display: grid;\n  grid-template-columns: 1fr 1fr 1fr 1fr;\n  grid-template-rows: 1fr 3fr 50px 50px;\n  gap: 10px;\n}\n\n.full-task-form {\n  height: 100%;\n  display: grid;\n  grid-template-columns: 1fr 2fr 1fr;\n  grid-template-rows: 1fr 50px 3fr 50px 50px;\n  justify-items: center;\n}\n\nbody.modal-open {\n  pointer-events: none;\n}\n\nbody.modal-open .task-form {\n  opacity: 0.5;\n}\n\nbody.modal-open .pop-up {\n  pointer-events: auto;\n}\n\n.pop-up {\n  position: absolute;\n  width: 250px;\n  height: 150px;\n  background-color: #77c4fe;\n  border-radius: 5px;\n  padding: 10px;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  display: flex;\n  flex-direction: column;\n  gap: 5px;\n}\n\n.pop-up label,\n.pop-up div {\n  padding: 5px 0px;\n}\n\n.pop-up input {\n  background-color: #77c4fe;\n  border-radius: 0px;\n  border-bottom: 2px solid #050203;\n}\n\n.pop-up > div {\n  margin-top: auto;\n  display: flex;\n  gap: 10px;\n  justify-content: end;\n}\n\n.pop-up button {\n  border-radius: 5px;\n  width: 60px;\n}\n\n.task > form {\n  padding: 5px;\n}\n\n.task-form > div {\n  padding: 5px;\n}\n\n.full-task-form #task-title {\n  font-size: 1.5rem;\n  font-weight: bold;\n  height: auto;\n  width: 300px;\n  text-align: center;\n}\n\n.task-form #task-title {\n  width: 300px;\n  background-color: #f6f8fc;\n  border-bottom: 2px solid #050203;\n  border-radius: 0px;\n}\n\n.title-wrapper {\n  grid-column: 2 / 4;\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n}\n\n.description-wrapper {\n  grid-column: 2 / 4;\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n}\n\n.due-date-wrapper {\n  grid-column: 2 / 4;\n  grid-row: 3 / 4;\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 20px;\n}\n\n.priority-wrapper {\n  grid-column: 2 / 3;\n  display: grid;\n  grid-template-columns: 60px 140px;\n  align-items: center;\n}\n\n.list-wrapper {\n  grid-column: 3 / 4;\n  grid-row: 4 / 5;\n  display: grid;\n  grid-template-columns: 1fr 40px;\n  align-items: center;\n  gap: 2px;\n}\n\n.date-container,\n.time-container {\n  display: grid;\n  grid-template-columns: 60px 140px;\n  align-items: center;\n}\n\n.full-task-form > div {\n  grid-column: 2 / 3;\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding: 10px;\n}\n\n.full-task-form .date-container,\n.full-task-form .time-container {\n  grid-template-columns: 80px 140px;\n}\n\n.full-task-form > div:nth-child(4) {\n  gap: 10px;\n}\n\n.full-task-form select {\n  width: 100px;\n}\n\n.list-wrapper > div {\n  display: grid;\n  grid-template-columns: 60px minmax(100px, 140px);\n  align-items: center;\n}\n\ninput,\ntextarea,\nselect {\n  height: 35px;\n  font-family: \"Open Sans\", sans-serif;\n  font-weight: 400;\n  font-size: 1rem;\n  background-color: #dee0e0;\n  border: none;\n  border-radius: 5px;\n  padding: 5px;\n}\n/* \n.full-task-form input,\n.full-task-form textarea,\n.full-task-form select {\n  background-color: #ebeced;\n} */\n\nlabel {\n  font-weight: 600;\n}\n\ntextarea {\n  resize: none;\n}\n\n.description > textarea,\n.description-wrapper > textarea {\n  height: 100%;\n  width: 100%;\n}\n\n.task-form #task-title:focus,\n.pop-up input {\n  outline: none;\n}\n", "",{"version":3,"sources":["webpack://./src/forms.css"],"names":[],"mappings":"AAAA;EACE,YAAY;EACZ,aAAa;EACb,sCAAsC;EACtC,qCAAqC;EACrC,SAAS;AACX;;AAEA;EACE,YAAY;EACZ,aAAa;EACb,kCAAkC;EAClC,0CAA0C;EAC1C,qBAAqB;AACvB;;AAEA;EACE,oBAAoB;AACtB;;AAEA;EACE,YAAY;AACd;;AAEA;EACE,oBAAoB;AACtB;;AAEA;EACE,kBAAkB;EAClB,YAAY;EACZ,aAAa;EACb,yBAAyB;EACzB,kBAAkB;EAClB,aAAa;EACb,QAAQ;EACR,SAAS;EACT,gCAAgC;EAChC,aAAa;EACb,sBAAsB;EACtB,QAAQ;AACV;;AAEA;;EAEE,gBAAgB;AAClB;;AAEA;EACE,yBAAyB;EACzB,kBAAkB;EAClB,gCAAgC;AAClC;;AAEA;EACE,gBAAgB;EAChB,aAAa;EACb,SAAS;EACT,oBAAoB;AACtB;;AAEA;EACE,kBAAkB;EAClB,WAAW;AACb;;AAEA;EACE,YAAY;AACd;;AAEA;EACE,YAAY;AACd;;AAEA;EACE,iBAAiB;EACjB,iBAAiB;EACjB,YAAY;EACZ,YAAY;EACZ,kBAAkB;AACpB;;AAEA;EACE,YAAY;EACZ,yBAAyB;EACzB,gCAAgC;EAChC,kBAAkB;AACpB;;AAEA;EACE,kBAAkB;EAClB,aAAa;EACb,sBAAsB;EACtB,SAAS;AACX;;AAEA;EACE,kBAAkB;EAClB,aAAa;EACb,sBAAsB;EACtB,SAAS;AACX;;AAEA;EACE,kBAAkB;EAClB,eAAe;EACf,aAAa;EACb,8BAA8B;EAC9B,SAAS;AACX;;AAEA;EACE,kBAAkB;EAClB,aAAa;EACb,iCAAiC;EACjC,mBAAmB;AACrB;;AAEA;EACE,kBAAkB;EAClB,eAAe;EACf,aAAa;EACb,+BAA+B;EAC/B,mBAAmB;EACnB,QAAQ;AACV;;AAEA;;EAEE,aAAa;EACb,iCAAiC;EACjC,mBAAmB;AACrB;;AAEA;EACE,kBAAkB;EAClB,WAAW;EACX,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,aAAa;AACf;;AAEA;;EAEE,iCAAiC;AACnC;;AAEA;EACE,SAAS;AACX;;AAEA;EACE,YAAY;AACd;;AAEA;EACE,aAAa;EACb,gDAAgD;EAChD,mBAAmB;AACrB;;AAEA;;;EAGE,YAAY;EACZ,oCAAoC;EACpC,gBAAgB;EAChB,eAAe;EACf,yBAAyB;EACzB,YAAY;EACZ,kBAAkB;EAClB,YAAY;AACd;AACA;;;;;GAKG;;AAEH;EACE,gBAAgB;AAClB;;AAEA;EACE,YAAY;AACd;;AAEA;;EAEE,YAAY;EACZ,WAAW;AACb;;AAEA;;EAEE,aAAa;AACf","sourcesContent":[".task-form {\n  height: 100%;\n  display: grid;\n  grid-template-columns: 1fr 1fr 1fr 1fr;\n  grid-template-rows: 1fr 3fr 50px 50px;\n  gap: 10px;\n}\n\n.full-task-form {\n  height: 100%;\n  display: grid;\n  grid-template-columns: 1fr 2fr 1fr;\n  grid-template-rows: 1fr 50px 3fr 50px 50px;\n  justify-items: center;\n}\n\nbody.modal-open {\n  pointer-events: none;\n}\n\nbody.modal-open .task-form {\n  opacity: 0.5;\n}\n\nbody.modal-open .pop-up {\n  pointer-events: auto;\n}\n\n.pop-up {\n  position: absolute;\n  width: 250px;\n  height: 150px;\n  background-color: #77c4fe;\n  border-radius: 5px;\n  padding: 10px;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  display: flex;\n  flex-direction: column;\n  gap: 5px;\n}\n\n.pop-up label,\n.pop-up div {\n  padding: 5px 0px;\n}\n\n.pop-up input {\n  background-color: #77c4fe;\n  border-radius: 0px;\n  border-bottom: 2px solid #050203;\n}\n\n.pop-up > div {\n  margin-top: auto;\n  display: flex;\n  gap: 10px;\n  justify-content: end;\n}\n\n.pop-up button {\n  border-radius: 5px;\n  width: 60px;\n}\n\n.task > form {\n  padding: 5px;\n}\n\n.task-form > div {\n  padding: 5px;\n}\n\n.full-task-form #task-title {\n  font-size: 1.5rem;\n  font-weight: bold;\n  height: auto;\n  width: 300px;\n  text-align: center;\n}\n\n.task-form #task-title {\n  width: 300px;\n  background-color: #f6f8fc;\n  border-bottom: 2px solid #050203;\n  border-radius: 0px;\n}\n\n.title-wrapper {\n  grid-column: 2 / 4;\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n}\n\n.description-wrapper {\n  grid-column: 2 / 4;\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n}\n\n.due-date-wrapper {\n  grid-column: 2 / 4;\n  grid-row: 3 / 4;\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 20px;\n}\n\n.priority-wrapper {\n  grid-column: 2 / 3;\n  display: grid;\n  grid-template-columns: 60px 140px;\n  align-items: center;\n}\n\n.list-wrapper {\n  grid-column: 3 / 4;\n  grid-row: 4 / 5;\n  display: grid;\n  grid-template-columns: 1fr 40px;\n  align-items: center;\n  gap: 2px;\n}\n\n.date-container,\n.time-container {\n  display: grid;\n  grid-template-columns: 60px 140px;\n  align-items: center;\n}\n\n.full-task-form > div {\n  grid-column: 2 / 3;\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding: 10px;\n}\n\n.full-task-form .date-container,\n.full-task-form .time-container {\n  grid-template-columns: 80px 140px;\n}\n\n.full-task-form > div:nth-child(4) {\n  gap: 10px;\n}\n\n.full-task-form select {\n  width: 100px;\n}\n\n.list-wrapper > div {\n  display: grid;\n  grid-template-columns: 60px minmax(100px, 140px);\n  align-items: center;\n}\n\ninput,\ntextarea,\nselect {\n  height: 35px;\n  font-family: \"Open Sans\", sans-serif;\n  font-weight: 400;\n  font-size: 1rem;\n  background-color: #dee0e0;\n  border: none;\n  border-radius: 5px;\n  padding: 5px;\n}\n/* \n.full-task-form input,\n.full-task-form textarea,\n.full-task-form select {\n  background-color: #ebeced;\n} */\n\nlabel {\n  font-weight: 600;\n}\n\ntextarea {\n  resize: none;\n}\n\n.description > textarea,\n.description-wrapper > textarea {\n  height: 100%;\n  width: 100%;\n}\n\n.task-form #task-title:focus,\n.pop-up input {\n  outline: none;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/layout.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/layout.css ***!
  \**************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Open+Sans&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "* {\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n}\n\nbody {\n  height: 100vh;\n  font-size: 1rem;\n  font-family: \"Open Sans\", sans-serif;\n  background-color: #bccbea;\n  color: #050203;\n}\n\n.content {\n  height: 100%;\n  width: 100%;\n  display: grid;\n  grid-template-columns: minmax(240px, 1fr) minmax(600px, 5fr);\n  grid-template-rows: 60px minmax(650px, 4fr) 60px;\n}\n\n.header {\n  grid-column: 1 / 3;\n  grid-row: 1 / 2;\n  padding: 10px 20px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n\n.main-section {\n  background-color: #f6f8fc;\n  border-radius: 20px;\n  margin: 10px 20px;\n  grid-column-end: span 3;\n  grid-row: 2 / 3;\n}\n\n.footer {\n  padding: 10px;\n  grid-column-end: span 3;\n  grid-row: 3 / 4;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\nbutton {\n  font-family: \"Open Sans\", sans-serif;\n  font-weight: 400;\n  font-size: 1rem;\n  color: #050203;\n  cursor: pointer;\n}\n\n.task-header {\n  display: grid;\n  grid-template-rows: 1fr 1fr;\n}\n\n.menu-btn,\n.view-lists-btn {\n  border: none;\n  background-color: #bccbea;\n  display: grid;\n  align-items: center;\n}\n\n.header > div:nth-child(2) {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 20px;\n}\n\n.header img {\n  height: 35px;\n  width: 40px;\n}\n\n.menu-btn:hover,\n.view-lists-btn:hover {\n  background-color: #dee0e0;\n}\n\n.display-btn-container img,\n.del-btn-container img,\n.create-list-btn img,\n.add-project-btn img,\n.back-btn img,\n.remove-project-btn img {\n  pointer-events: none;\n}\n", "",{"version":3,"sources":["webpack://./src/layout.css"],"names":[],"mappings":"AAEA;EACE,sBAAsB;EACtB,SAAS;EACT,UAAU;AACZ;;AAEA;EACE,aAAa;EACb,eAAe;EACf,oCAAoC;EACpC,yBAAyB;EACzB,cAAc;AAChB;;AAEA;EACE,YAAY;EACZ,WAAW;EACX,aAAa;EACb,4DAA4D;EAC5D,gDAAgD;AAClD;;AAEA;EACE,kBAAkB;EAClB,eAAe;EACf,kBAAkB;EAClB,aAAa;EACb,8BAA8B;EAC9B,mBAAmB;AACrB;;AAEA;EACE,yBAAyB;EACzB,mBAAmB;EACnB,iBAAiB;EACjB,uBAAuB;EACvB,eAAe;AACjB;;AAEA;EACE,aAAa;EACb,uBAAuB;EACvB,eAAe;EACf,aAAa;EACb,uBAAuB;EACvB,mBAAmB;AACrB;;AAEA;EACE,oCAAoC;EACpC,gBAAgB;EAChB,eAAe;EACf,cAAc;EACd,eAAe;AACjB;;AAEA;EACE,aAAa;EACb,2BAA2B;AAC7B;;AAEA;;EAEE,YAAY;EACZ,yBAAyB;EACzB,aAAa;EACb,mBAAmB;AACrB;;AAEA;EACE,aAAa;EACb,qCAAqC;EACrC,SAAS;AACX;;AAEA;EACE,YAAY;EACZ,WAAW;AACb;;AAEA;;EAEE,yBAAyB;AAC3B;;AAEA;;;;;;EAME,oBAAoB;AACtB","sourcesContent":["@import url(\"https://fonts.googleapis.com/css2?family=Open+Sans&display=swap\");\n\n* {\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n}\n\nbody {\n  height: 100vh;\n  font-size: 1rem;\n  font-family: \"Open Sans\", sans-serif;\n  background-color: #bccbea;\n  color: #050203;\n}\n\n.content {\n  height: 100%;\n  width: 100%;\n  display: grid;\n  grid-template-columns: minmax(240px, 1fr) minmax(600px, 5fr);\n  grid-template-rows: 60px minmax(650px, 4fr) 60px;\n}\n\n.header {\n  grid-column: 1 / 3;\n  grid-row: 1 / 2;\n  padding: 10px 20px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n\n.main-section {\n  background-color: #f6f8fc;\n  border-radius: 20px;\n  margin: 10px 20px;\n  grid-column-end: span 3;\n  grid-row: 2 / 3;\n}\n\n.footer {\n  padding: 10px;\n  grid-column-end: span 3;\n  grid-row: 3 / 4;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\nbutton {\n  font-family: \"Open Sans\", sans-serif;\n  font-weight: 400;\n  font-size: 1rem;\n  color: #050203;\n  cursor: pointer;\n}\n\n.task-header {\n  display: grid;\n  grid-template-rows: 1fr 1fr;\n}\n\n.menu-btn,\n.view-lists-btn {\n  border: none;\n  background-color: #bccbea;\n  display: grid;\n  align-items: center;\n}\n\n.header > div:nth-child(2) {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 20px;\n}\n\n.header img {\n  height: 35px;\n  width: 40px;\n}\n\n.menu-btn:hover,\n.view-lists-btn:hover {\n  background-color: #dee0e0;\n}\n\n.display-btn-container img,\n.del-btn-container img,\n.create-list-btn img,\n.add-project-btn img,\n.back-btn img,\n.remove-project-btn img {\n  pointer-events: none;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/nav.css":
/*!***********************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/nav.css ***!
  \***********************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".main-menu {\n  grid-row: 2 / 4;\n  margin-top: 10px;\n  padding: 10px 10px 0px 10px;\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n  justify-items: center;\n}\n\n.main-menu button {\n  background-color: #bccbea;\n  border: none;\n  padding: 2px 10px;\n  justify-self: flex-start;\n  align-self: center;\n  text-align: start;\n}\n\n.main-menu .add-project-btn {\n  padding: 0px;\n}\n\n.today-container,\n.upcoming-container {\n  padding: 5px 10px;\n  border-radius: 5px;\n  display: grid;\n  grid-template-columns: 35px 3fr 35px;\n  column-gap: 5px;\n}\n\n.fav-container,\n.proj-container {\n  display: grid;\n  grid-template-columns: 35px 3fr 35px;\n}\n\n.fav-container > div:nth-child(1),\n.proj-container > div:nth-child(1) {\n  padding: 5px 10px;\n  border-radius: 5px;\n  grid-column: 1 / 4;\n  display: grid;\n  grid-template-columns: 35px 3fr 35px;\n  column-gap: 5px;\n}\n\n.favorites,\n.projects {\n  grid-column: 2 / 4;\n  display: grid;\n  grid-template-rows: repeat(3, 1fr);\n}\n\n.favorites > div,\n.projects > div {\n  padding: 5px;\n  border-radius: 5px;\n  display: grid;\n  grid-template-columns: 20px 3fr 1fr;\n  align-items: center;\n}\n\n.favorites > div > img,\n.projects > div > img {\n  height: 15px;\n  width: 15px;\n}\n\n.today-container > img,\n.upcoming-container > img,\n.fav-container img,\n.proj-container img {\n  height: 30px;\n  width: 30px;\n}\n\n.add-project-btn {\n  height: 30px;\n  width: 30px;\n  justify-self: end;\n}\n\n[class*=\"count\"] {\n  text-align: end;\n}\n\n.today-container:hover,\n.upcoming-container:hover,\n.fav-wrapper:hover,\n.proj-wrapper:hover {\n  background-color: #77c4fe;\n}\n\n.today-container:hover .today-btn,\n.upcoming-container:hover .upcoming-btn,\n.fav-wrapper:hover .favorites-btn,\n.proj-wrapper:hover .projects-btn,\n.proj-wrapper:hover .add-project-btn {\n  background-color: #77c4fe;\n}\n\n.favorites > div:hover,\n.projects > div:hover,\n.favorites > div:hover button,\n.projects > div:hover button {\n  background-color: #77c4fe;\n}\n\n.main-menu button:hover {\n  font-weight: 600;\n}\n", "",{"version":3,"sources":["webpack://./src/nav.css"],"names":[],"mappings":"AAAA;EACE,eAAe;EACf,gBAAgB;EAChB,2BAA2B;EAC3B,aAAa;EACb,sBAAsB;EACtB,SAAS;EACT,qBAAqB;AACvB;;AAEA;EACE,yBAAyB;EACzB,YAAY;EACZ,iBAAiB;EACjB,wBAAwB;EACxB,kBAAkB;EAClB,iBAAiB;AACnB;;AAEA;EACE,YAAY;AACd;;AAEA;;EAEE,iBAAiB;EACjB,kBAAkB;EAClB,aAAa;EACb,oCAAoC;EACpC,eAAe;AACjB;;AAEA;;EAEE,aAAa;EACb,oCAAoC;AACtC;;AAEA;;EAEE,iBAAiB;EACjB,kBAAkB;EAClB,kBAAkB;EAClB,aAAa;EACb,oCAAoC;EACpC,eAAe;AACjB;;AAEA;;EAEE,kBAAkB;EAClB,aAAa;EACb,kCAAkC;AACpC;;AAEA;;EAEE,YAAY;EACZ,kBAAkB;EAClB,aAAa;EACb,mCAAmC;EACnC,mBAAmB;AACrB;;AAEA;;EAEE,YAAY;EACZ,WAAW;AACb;;AAEA;;;;EAIE,YAAY;EACZ,WAAW;AACb;;AAEA;EACE,YAAY;EACZ,WAAW;EACX,iBAAiB;AACnB;;AAEA;EACE,eAAe;AACjB;;AAEA;;;;EAIE,yBAAyB;AAC3B;;AAEA;;;;;EAKE,yBAAyB;AAC3B;;AAEA;;;;EAIE,yBAAyB;AAC3B;;AAEA;EACE,gBAAgB;AAClB","sourcesContent":[".main-menu {\n  grid-row: 2 / 4;\n  margin-top: 10px;\n  padding: 10px 10px 0px 10px;\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n  justify-items: center;\n}\n\n.main-menu button {\n  background-color: #bccbea;\n  border: none;\n  padding: 2px 10px;\n  justify-self: flex-start;\n  align-self: center;\n  text-align: start;\n}\n\n.main-menu .add-project-btn {\n  padding: 0px;\n}\n\n.today-container,\n.upcoming-container {\n  padding: 5px 10px;\n  border-radius: 5px;\n  display: grid;\n  grid-template-columns: 35px 3fr 35px;\n  column-gap: 5px;\n}\n\n.fav-container,\n.proj-container {\n  display: grid;\n  grid-template-columns: 35px 3fr 35px;\n}\n\n.fav-container > div:nth-child(1),\n.proj-container > div:nth-child(1) {\n  padding: 5px 10px;\n  border-radius: 5px;\n  grid-column: 1 / 4;\n  display: grid;\n  grid-template-columns: 35px 3fr 35px;\n  column-gap: 5px;\n}\n\n.favorites,\n.projects {\n  grid-column: 2 / 4;\n  display: grid;\n  grid-template-rows: repeat(3, 1fr);\n}\n\n.favorites > div,\n.projects > div {\n  padding: 5px;\n  border-radius: 5px;\n  display: grid;\n  grid-template-columns: 20px 3fr 1fr;\n  align-items: center;\n}\n\n.favorites > div > img,\n.projects > div > img {\n  height: 15px;\n  width: 15px;\n}\n\n.today-container > img,\n.upcoming-container > img,\n.fav-container img,\n.proj-container img {\n  height: 30px;\n  width: 30px;\n}\n\n.add-project-btn {\n  height: 30px;\n  width: 30px;\n  justify-self: end;\n}\n\n[class*=\"count\"] {\n  text-align: end;\n}\n\n.today-container:hover,\n.upcoming-container:hover,\n.fav-wrapper:hover,\n.proj-wrapper:hover {\n  background-color: #77c4fe;\n}\n\n.today-container:hover .today-btn,\n.upcoming-container:hover .upcoming-btn,\n.fav-wrapper:hover .favorites-btn,\n.proj-wrapper:hover .projects-btn,\n.proj-wrapper:hover .add-project-btn {\n  background-color: #77c4fe;\n}\n\n.favorites > div:hover,\n.projects > div:hover,\n.favorites > div:hover button,\n.projects > div:hover button {\n  background-color: #77c4fe;\n}\n\n.main-menu button:hover {\n  font-weight: 600;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/content.css":
/*!*************************!*\
  !*** ./src/content.css ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_content_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./content.css */ "./node_modules/css-loader/dist/cjs.js!./src/content.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_content_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_content_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_content_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_content_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/forms.css":
/*!***********************!*\
  !*** ./src/forms.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_forms_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./forms.css */ "./node_modules/css-loader/dist/cjs.js!./src/forms.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_forms_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_forms_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_forms_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_forms_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/layout.css":
/*!************************!*\
  !*** ./src/layout.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_layout_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./layout.css */ "./node_modules/css-loader/dist/cjs.js!./src/layout.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_layout_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_layout_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_layout_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_layout_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/nav.css":
/*!*********************!*\
  !*** ./src/nav.css ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_nav_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./nav.css */ "./node_modules/css-loader/dist/cjs.js!./src/nav.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_nav_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_nav_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_nav_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_nav_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/images/add-list.svg":
/*!*********************************!*\
  !*** ./src/images/add-list.svg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "608022691d6d6f840c05.svg";

/***/ }),

/***/ "./src/images/add-task.svg":
/*!*********************************!*\
  !*** ./src/images/add-task.svg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "c8b39a336d92d4c5c69f.svg";

/***/ }),

/***/ "./src/images/back.svg":
/*!*****************************!*\
  !*** ./src/images/back.svg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "29fa7ae3716720eddbde.svg";

/***/ }),

/***/ "./src/images/bell.svg":
/*!*****************************!*\
  !*** ./src/images/bell.svg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "92545f67f5303d0f3922.svg";

/***/ }),

/***/ "./src/images/calendar.svg":
/*!*********************************!*\
  !*** ./src/images/calendar.svg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "6fbe0e8a0f1b42397fe5.svg";

/***/ }),

/***/ "./src/images/cat.svg":
/*!****************************!*\
  !*** ./src/images/cat.svg ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "006d276254200a9c640b.svg";

/***/ }),

/***/ "./src/images/critical.svg":
/*!*********************************!*\
  !*** ./src/images/critical.svg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "bd4d84336704fd8a4dad.svg";

/***/ }),

/***/ "./src/images/delete.svg":
/*!*******************************!*\
  !*** ./src/images/delete.svg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "24315ab37634d58b5ce3.svg";

/***/ }),

/***/ "./src/images/expand-less.svg":
/*!************************************!*\
  !*** ./src/images/expand-less.svg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "bf169074e2c1dab27b9a.svg";

/***/ }),

/***/ "./src/images/expand-more.svg":
/*!************************************!*\
  !*** ./src/images/expand-more.svg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "a0d7c76b47bf772d4197.svg";

/***/ }),

/***/ "./src/images/high.svg":
/*!*****************************!*\
  !*** ./src/images/high.svg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "35afbeea52a55255d386.svg";

/***/ }),

/***/ "./src/images/list.svg":
/*!*****************************!*\
  !*** ./src/images/list.svg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "54a6cb1a8cb48a62873c.svg";

/***/ }),

/***/ "./src/images/menu.svg":
/*!*****************************!*\
  !*** ./src/images/menu.svg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "c16ad7d4e68aa1552ac6.svg";

/***/ }),

/***/ "./src/images/new.svg":
/*!****************************!*\
  !*** ./src/images/new.svg ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "51da3c0fe3bb7d998c5b.svg";

/***/ }),

/***/ "./src/images/normal.svg":
/*!*******************************!*\
  !*** ./src/images/normal.svg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "1e3a1460054427b2960d.svg";

/***/ }),

/***/ "./src/images/personal.svg":
/*!*********************************!*\
  !*** ./src/images/personal.svg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "3a33861281f830f8e98c.svg";

/***/ }),

/***/ "./src/images/save.svg":
/*!*****************************!*\
  !*** ./src/images/save.svg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "71eb003d9468e9c32eb2.svg";

/***/ }),

/***/ "./src/images/shopping.svg":
/*!*********************************!*\
  !*** ./src/images/shopping.svg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "74275fe8ffa62dc026a3.svg";

/***/ }),

/***/ "./src/images/today.svg":
/*!******************************!*\
  !*** ./src/images/today.svg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "467da477053ac6a2ef12.svg";

/***/ }),

/***/ "./src/images/upcoming.svg":
/*!*********************************!*\
  !*** ./src/images/upcoming.svg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "ca4a672c8f53f481164c.svg";

/***/ }),

/***/ "./src/images/work.svg":
/*!*****************************!*\
  !*** ./src/images/work.svg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "3e2e6ad3d3479c6f52d9.svg";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _data_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./data.js */ "./src/data.js");
/* harmony import */ var _layout_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./layout.js */ "./src/layout.js");
/* harmony import */ var _main_content_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./main-content.js */ "./src/main-content.js");
/* harmony import */ var _menu_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./menu.js */ "./src/menu.js");
/* harmony import */ var _task_display_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./task-display.js */ "./src/task-display.js");





function component() {
  // Generate initial page layout
  (0,_layout_js__WEBPACK_IMPORTED_MODULE_1__.pageLayout)();
  (0,_main_content_js__WEBPACK_IMPORTED_MODULE_2__.mainContent)();
  (0,_main_content_js__WEBPACK_IMPORTED_MODULE_2__.emptyIndicator)();

  // Test if localStorage is available
  if ((0,_data_js__WEBPACK_IMPORTED_MODULE_0__.storageAvailable)("localStorage")) {
    console.log("localStorage available");

    // localStorage.clear();

    if (!localStorage.getItem("listArray")) {
      (0,_data_js__WEBPACK_IMPORTED_MODULE_0__.populateStorage)();
    } else {
      (0,_data_js__WEBPACK_IMPORTED_MODULE_0__.setArrayValues)().setLists();
      (0,_data_js__WEBPACK_IMPORTED_MODULE_0__.setArrayValues)().setTasks();
      (0,_task_display_js__WEBPACK_IMPORTED_MODULE_4__.sortTaskBars)().todayStoredTasks();
    }
  } else {
    console.log("localStorage unavailable");
  }
  function eventHandler() {
    const menuBtn = document.querySelector(".menu-btn");
    const viewListBtn = document.querySelector(".view-lists-btn");
    const content = document.querySelector(".content");

    // Toggle the Main Menu
    menuBtn.addEventListener("click", () => {
      const menu = document.querySelector(".main-menu");
      if (content.contains(menu)) {
        content.removeChild(menu);
      } else {
        (0,_menu_js__WEBPACK_IMPORTED_MODULE_3__.mainMenu)();
        (0,_menu_js__WEBPACK_IMPORTED_MODULE_3__.taskCount)();
      }
    });
    viewListBtn.addEventListener("click", () => {
      (0,_main_content_js__WEBPACK_IMPORTED_MODULE_2__.listDisplayController)().listsView();
    });
    content.addEventListener("click", function (e) {
      // Toggle Today or Upcoming projects
      if (e.target.className === "today-btn") {
        const btn = e.target;
        (0,_main_content_js__WEBPACK_IMPORTED_MODULE_2__.backBtnController)();
        (0,_main_content_js__WEBPACK_IMPORTED_MODULE_2__.deleteBtnController)().checkDeleteBtn();
        (0,_main_content_js__WEBPACK_IMPORTED_MODULE_2__.displayBtnController)(btn);
        (0,_task_display_js__WEBPACK_IMPORTED_MODULE_4__.sortTaskBars)().menuChoice(btn);
        return;
      }
      if (e.target.className === "upcoming-btn") {
        const btn = e.target;
        (0,_main_content_js__WEBPACK_IMPORTED_MODULE_2__.backBtnController)();
        (0,_main_content_js__WEBPACK_IMPORTED_MODULE_2__.deleteBtnController)().checkDeleteBtn();
        (0,_task_display_js__WEBPACK_IMPORTED_MODULE_4__.sortTaskBars)().menuChoice(btn);
        (0,_main_content_js__WEBPACK_IMPORTED_MODULE_2__.displayBtnController)(btn);
        return;
      }

      // Toggle Favorites and Projects menu choices
      if (e.target.className === "favorites-btn") {
        const favorites = document.querySelector(".favorites");
        if (favorites.textContent === "") {
          (0,_menu_js__WEBPACK_IMPORTED_MODULE_3__.favoritesList)();
          (0,_menu_js__WEBPACK_IMPORTED_MODULE_3__.taskCount)();
          (0,_menu_js__WEBPACK_IMPORTED_MODULE_3__.changeFavoritesImage)();
        } else {
          favorites.textContent = "";
          (0,_menu_js__WEBPACK_IMPORTED_MODULE_3__.changeFavoritesImage)();
        }
        return;
      }
      const display = document.querySelector(".task-display");
      const form = document.querySelector(".task-form");
      if (e.target.className === "projects-btn") {
        const projects = document.querySelector(".projects");
        if (projects.textContent === "") {
          (0,_menu_js__WEBPACK_IMPORTED_MODULE_3__.projectList)();
          (0,_menu_js__WEBPACK_IMPORTED_MODULE_3__.taskCount)();
          (0,_menu_js__WEBPACK_IMPORTED_MODULE_3__.changeProjectsImage)();
        } else {
          projects.textContent = "";
          (0,_menu_js__WEBPACK_IMPORTED_MODULE_3__.changeProjectsImage)();
        }
        (0,_main_content_js__WEBPACK_IMPORTED_MODULE_2__.backBtnController)();
        (0,_main_content_js__WEBPACK_IMPORTED_MODULE_2__.deleteBtnController)().checkDeleteBtn();
        (0,_main_content_js__WEBPACK_IMPORTED_MODULE_2__.displayBtnController)(e.target);
        (0,_task_display_js__WEBPACK_IMPORTED_MODULE_4__.taskBars)();
        return;
      }
      const listForm = document.querySelector(".pop-up");

      // create, submit and process forms
      if (e.target.className === "form-btn") {
        (0,_main_content_js__WEBPACK_IMPORTED_MODULE_2__.deleteBtnController)().checkDeleteBtn();
        (0,_main_content_js__WEBPACK_IMPORTED_MODULE_2__.createForm)();
        (0,_main_content_js__WEBPACK_IMPORTED_MODULE_2__.backBtnController)();
        (0,_main_content_js__WEBPACK_IMPORTED_MODULE_2__.displayBtnController)(e.target);
        return;
      }
      if (e.target.className === "submit-btn") {
        const isFormValid = form.checkValidity();
        if (!isFormValid) {
          form.reportValidity();
        } else {
          if (listForm) {
            display.removeChild(listForm);
          }
          e.preventDefault();
          (0,_main_content_js__WEBPACK_IMPORTED_MODULE_2__.processForm)();
          (0,_data_js__WEBPACK_IMPORTED_MODULE_0__.populateStorage)();
          (0,_main_content_js__WEBPACK_IMPORTED_MODULE_2__.backBtnController)();
          (0,_main_content_js__WEBPACK_IMPORTED_MODULE_2__.displayBtnController)(e.target);
          (0,_task_display_js__WEBPACK_IMPORTED_MODULE_4__.taskBars)();
          (0,_menu_js__WEBPACK_IMPORTED_MODULE_3__.taskCount)();
        }
        return;
      }
      if (e.target.className === "save-btn") {
        const form = document.querySelector(".full-task-form");
        const isFormValid = form.checkValidity();
        if (!isFormValid) {
          form.reportValidity();
        } else {
          (0,_main_content_js__WEBPACK_IMPORTED_MODULE_2__.modifyTask)();
          (0,_data_js__WEBPACK_IMPORTED_MODULE_0__.populateStorage)();
          (0,_main_content_js__WEBPACK_IMPORTED_MODULE_2__.backBtnController)();
          (0,_main_content_js__WEBPACK_IMPORTED_MODULE_2__.displayBtnController)(e.target);
          (0,_task_display_js__WEBPACK_IMPORTED_MODULE_4__.taskBars)();
          (0,_menu_js__WEBPACK_IMPORTED_MODULE_3__.taskCount)();
        }
        return;
      }

      // Add time input option
      if (e.target.id === "date" && e.target.name === "date") {
        (0,_main_content_js__WEBPACK_IMPORTED_MODULE_2__.addTimeOption)();
        return;
      }

      // Remove form display or full-task display
      if (e.target.className === "back-btn") {
        if (listForm) {
          display.removeChild(listForm);
        }
        (0,_main_content_js__WEBPACK_IMPORTED_MODULE_2__.backBtnController)();
        (0,_task_display_js__WEBPACK_IMPORTED_MODULE_4__.taskBars)();
        (0,_main_content_js__WEBPACK_IMPORTED_MODULE_2__.displayBtnController)(e.target);
        return;
      }

      // Create new list form
      if (e.target.className === "add-project-btn" || e.target.className === "create-list-btn") {
        (0,_main_content_js__WEBPACK_IMPORTED_MODULE_2__.newListForm)();
        document.body.classList.toggle("modal-open");
        return;
      }

      // Cancel new list form
      if (e.target.className === "cancel-list-btn") {
        document.body.classList.toggle("modal-open");
        display.removeChild(listForm);
        return;
      }

      // Add new list option
      if (e.target.className === "add-list-btn") {
        const isFormValid = listForm.checkValidity();
        document.body.classList.toggle("modal-open");
        if (!isFormValid) {
          listForm.reportValidity();
        } else {
          e.preventDefault();
          (0,_layout_js__WEBPACK_IMPORTED_MODULE_1__.updateListArray)();
          (0,_data_js__WEBPACK_IMPORTED_MODULE_0__.populateStorage)();
          if (display.contains(form)) {
            (0,_main_content_js__WEBPACK_IMPORTED_MODULE_2__.addListOption)();
            (0,_menu_js__WEBPACK_IMPORTED_MODULE_3__.projectList)();
            (0,_menu_js__WEBPACK_IMPORTED_MODULE_3__.changeProjectsImage)();
            display.removeChild(listForm);
          } else {
            (0,_menu_js__WEBPACK_IMPORTED_MODULE_3__.projectList)();
            (0,_menu_js__WEBPACK_IMPORTED_MODULE_3__.changeProjectsImage)();
            (0,_menu_js__WEBPACK_IMPORTED_MODULE_3__.taskCount)();
            display.removeChild(listForm);
          }
        }
        return;
      }

      // Sort tasks according to the clicked project or priority list
      if (e.target.id === "task-btn" || e.target.id === "priority-btn") {
        const btn = e.target;
        (0,_main_content_js__WEBPACK_IMPORTED_MODULE_2__.backBtnController)();
        (0,_main_content_js__WEBPACK_IMPORTED_MODULE_2__.deleteBtnController)().checkDeleteBtn();
        (0,_main_content_js__WEBPACK_IMPORTED_MODULE_2__.displayBtnController)(btn);
        (0,_task_display_js__WEBPACK_IMPORTED_MODULE_4__.sortTaskBars)().menuChoice(btn);
        return;
      }

      // Display full task details
      if (e.target.className === "task") {
        const index = e.target.dataset.num;
        (0,_task_display_js__WEBPACK_IMPORTED_MODULE_4__.taskPage)(index);
        (0,_main_content_js__WEBPACK_IMPORTED_MODULE_2__.displayBtnController)(e.target);
        return;
      }

      // Add delete btn
      if (e.target.className === "checkbox" && e.target.checked === true) {
        (0,_main_content_js__WEBPACK_IMPORTED_MODULE_2__.deleteBtnController)().addDeleteBtn();
      } else if (e.target.className === "checkbox" && e.target.checked === false) {
        (0,_main_content_js__WEBPACK_IMPORTED_MODULE_2__.deleteBtnController)().removeDeleteBtn();
      }

      // Delete tasks
      if (e.target.className === "del-btn") {
        (0,_task_display_js__WEBPACK_IMPORTED_MODULE_4__.deleteTask)();
        (0,_menu_js__WEBPACK_IMPORTED_MODULE_3__.taskCount)();
        (0,_data_js__WEBPACK_IMPORTED_MODULE_0__.removeItems)();
        (0,_data_js__WEBPACK_IMPORTED_MODULE_0__.populateStorage)();
      }

      // Delete projects/lists
      if (e.target.className === "remove-project-btn") {
        const menu = document.querySelector(".main-menu");
        (0,_main_content_js__WEBPACK_IMPORTED_MODULE_2__.listDisplayController)().removeList(e.target);
        if (menu) {
          (0,_menu_js__WEBPACK_IMPORTED_MODULE_3__.projectList)();
          (0,_menu_js__WEBPACK_IMPORTED_MODULE_3__.taskCount)();
        }
      }
    });
  }
  eventHandler();
}
component();
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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bGlzdC8uL3NyYy9sYXlvdXQuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL21haW4tY29udGVudC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvbWVudS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvdGFzay1kaXNwbGF5LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9jb250ZW50LmNzcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvZm9ybXMuY3NzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9sYXlvdXQuY3NzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9uYXYuY3NzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2NvbnRlbnQuY3NzP2MzNDciLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2Zvcm1zLmNzcz83ZGQyIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9sYXlvdXQuY3NzP2VhZWMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL25hdi5jc3M/MjBhNyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgbGlzdEFycmF5IH0gZnJvbSBcIi4vbGF5b3V0XCI7XG5pbXBvcnQgeyB0YXNrQXJyYXkgfSBmcm9tIFwiLi9tYWluLWNvbnRlbnRcIjtcblxuLy8gVmVyaWZ5IHRoYXQgbG9jYWxTdG9yYWdlIGlzIGEgYXZhaWxhYmxlIGluIHRoZSBjdXJyZW50IGJyb3dzZXIuXG4vLyBUaGlzIHN0b3JhZ2VBdmFpbGFibGUgZnVuY3Rpb24gaXMgcHJvdmlkZWQgYnkgaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvXG5jb25zdCBzdG9yYWdlQXZhaWxhYmxlID0gKHR5cGUpID0+IHtcbiAgbGV0IHN0b3JhZ2U7XG4gIHRyeSB7XG4gICAgc3RvcmFnZSA9IHdpbmRvd1t0eXBlXTtcbiAgICBjb25zdCB4ID0gXCJfX3N0b3JhZ2VfdGVzdF9fXCI7XG4gICAgc3RvcmFnZS5zZXRJdGVtKHgsIHgpO1xuICAgIHN0b3JhZ2UucmVtb3ZlSXRlbSh4KTtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfSBjYXRjaCAoZSkge1xuICAgIHJldHVybiAoXG4gICAgICBlIGluc3RhbmNlb2YgRE9NRXhjZXB0aW9uICYmXG4gICAgICAvLyBldmVyeXRoaW5nIGV4Y2VwdCBGaXJlZm94XG4gICAgICAoZS5jb2RlID09PSAyMiB8fFxuICAgICAgICAvLyBGaXJlZm94XG4gICAgICAgIGUuY29kZSA9PT0gMTAxNCB8fFxuICAgICAgICAvLyB0ZXN0IG5hbWUgZmllbGQgdG9vLCBiZWNhdXNlIGNvZGUgbWlnaHQgbm90IGJlIHByZXNlbnRcbiAgICAgICAgLy8gZXZlcnl0aGluZyBleGNlcHQgRmlyZWZveFxuICAgICAgICBlLm5hbWUgPT09IFwiUXVvdGFFeGNlZWRlZEVycm9yXCIgfHxcbiAgICAgICAgLy8gRmlyZWZveFxuICAgICAgICBlLm5hbWUgPT09IFwiTlNfRVJST1JfRE9NX1FVT1RBX1JFQUNIRURcIikgJiZcbiAgICAgIC8vIGFja25vd2xlZGdlIFF1b3RhRXhjZWVkZWRFcnJvciBvbmx5IGlmIHRoZXJlJ3Mgc29tZXRoaW5nIGFscmVhZHkgc3RvcmVkXG4gICAgICBzdG9yYWdlICYmXG4gICAgICBzdG9yYWdlLmxlbmd0aCAhPT0gMFxuICAgICk7XG4gIH1cbn07XG5cbmNvbnN0IHBvcHVsYXRlU3RvcmFnZSA9ICgpID0+IHtcbiAgLy8gUG9wdWxhdGUgbGlzdHMgaW4gc3RvcmFnZVxuXG4gIGNvbnN0IGxpc3RBcnJheVN0cmluZyA9IEpTT04uc3RyaW5naWZ5KGxpc3RBcnJheSk7XG5cbiAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJsaXN0QXJyYXlcIiwgbGlzdEFycmF5U3RyaW5nKTtcblxuICBzZXRBcnJheVZhbHVlcygpLnNldExpc3RzKCk7XG5cbiAgLy8gUG9wdWxhdGUgdGFza3MgaW4gc3RvcmFnZVxuICBpZiAodGFza0FycmF5Lmxlbmd0aCAhPT0gMCkge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGFza0FycmF5Lmxlbmd0aDsgaSsrKSB7XG4gICAgICBsZXQgb2JqID0gdGFza0FycmF5W2ldO1xuICAgICAgbGV0IG9ialN0cmluZyA9IEpTT04uc3RyaW5naWZ5KG9iaik7XG5cbiAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKGB0YXNrLSR7aX1gLCBvYmpTdHJpbmcpO1xuICAgIH1cblxuICAgIHNldEFycmF5VmFsdWVzKCkuc2V0VGFza3MoKTtcbiAgfVxufTtcblxuY29uc3QgcmVtb3ZlSXRlbXMgPSAoKSA9PiB7XG4gIGxvY2FsU3RvcmFnZS5jbGVhcigpO1xufTtcblxuY29uc3Qgc2V0QXJyYXlWYWx1ZXMgPSAoKSA9PiB7XG4gIC8vIEdldCBsaXN0IG9wdGlvbnMgZnJvbSBzdG9yYWdlXG4gIGNvbnN0IHNldExpc3RzID0gKCkgPT4ge1xuICAgIGNvbnN0IGxpc3RWYWx1ZXMgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImxpc3RBcnJheVwiKTtcblxuICAgIGlmIChsaXN0VmFsdWVzKSB7XG4gICAgICBjb25zdCBuZXdMaXN0QXJyYXkgPSBKU09OLnBhcnNlKGxpc3RWYWx1ZXMpO1xuXG4gICAgICBsaXN0QXJyYXkubGVuZ3RoID0gMDtcblxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBuZXdMaXN0QXJyYXkubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgbGlzdEFycmF5LnB1c2gobmV3TGlzdEFycmF5W2ldKTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgLy8gR2V0IHRhc2tzIGZyb20gc3RvcmFnZVxuICBjb25zdCBzZXRUYXNrcyA9ICgpID0+IHtcbiAgICB0YXNrQXJyYXkubGVuZ3RoID0gMDtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbG9jYWxTdG9yYWdlLmxlbmd0aDsgaSsrKSB7XG4gICAgICBjb25zdCB0YXNrID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oYHRhc2stJHtpfWApO1xuXG4gICAgICBjb25zdCBuZXdUYXNrT2JqID0gSlNPTi5wYXJzZSh0YXNrKTtcblxuICAgICAgaWYgKHRhc2spIHtcbiAgICAgICAgdGFza0FycmF5LnB1c2gobmV3VGFza09iaik7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB7IHNldExpc3RzLCBzZXRUYXNrcyB9O1xufTtcblxuZXhwb3J0IHsgc3RvcmFnZUF2YWlsYWJsZSwgcG9wdWxhdGVTdG9yYWdlLCByZW1vdmVJdGVtcywgc2V0QXJyYXlWYWx1ZXMgfTtcbiIsImltcG9ydCBcIi4vbGF5b3V0LmNzc1wiO1xuaW1wb3J0IEltZyBmcm9tIFwiLi9pbWFnZXMvbWVudS5zdmdcIjtcbmltcG9ydCBJbWcyIGZyb20gXCIuL2ltYWdlcy9jYXQuc3ZnXCI7XG5pbXBvcnQgSW1nMyBmcm9tIFwiLi9pbWFnZXMvYmVsbC5zdmdcIjtcbmltcG9ydCBJbWc0IGZyb20gXCIuL2ltYWdlcy9saXN0LnN2Z1wiO1xuXG5jb25zdCBsaXN0QXJyYXkgPSBbXCJwZXJzb25hbFwiLCBcIndvcmtcIiwgXCJzaG9wcGluZ1wiXTtcbmNvbnN0IHByaW9yaXR5QXJyYXkgPSBbXCJjcml0aWNhbFwiLCBcImhpZ2hcIiwgXCJub3JtYWxcIl07XG5cbmNvbnN0IHBhZ2VMYXlvdXQgPSAoKSA9PiB7XG4gIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNvbnRlbnRcIik7XG4gIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IG1haW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCBmb290ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCBwYXJhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gIGNvbnN0IG1lbnVDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCBtZW51QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgY29uc3QgbWVudUltZyA9IG5ldyBJbWFnZSgpO1xuICBjb25zdCBwcm9maWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgcHJvZmlsZUltZyA9IG5ldyBJbWFnZSgpO1xuICBjb25zdCBiZWxsSW1nID0gbmV3IEltYWdlKCk7XG4gIGNvbnN0IGxpc3RHcm91cEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gIGNvbnN0IGxpc3RHcm91cEltZyA9IG5ldyBJbWFnZSgpO1xuXG4gIGhlYWRlci5jbGFzc0xpc3QuYWRkKFwiaGVhZGVyXCIpO1xuICBtYWluLmNsYXNzTGlzdC5hZGQoXCJtYWluLXNlY3Rpb25cIik7XG4gIGZvb3Rlci5jbGFzc0xpc3QuYWRkKFwiZm9vdGVyXCIpO1xuICBwYXJhLnRleHRDb250ZW50ID0gXCJDb3B5cmlnaHQgQCBUb2RvIDIwMjNcIjtcbiAgbWVudUltZy5zcmMgPSBJbWc7XG4gIG1lbnVJbWcuYWx0ID0gXCJtZW51IGljb25cIjtcbiAgbWVudUJ0bi50eXBlID0gXCJidXR0b25cIjtcbiAgbWVudUJ0bi5jbGFzc0xpc3QuYWRkKFwibWVudS1idG5cIik7XG4gIHByb2ZpbGVJbWcuc3JjID0gSW1nMjtcbiAgcHJvZmlsZUltZy5hbHQgPSBcIkEgY2F0IGljb25cIjtcbiAgYmVsbEltZy5zcmMgPSBJbWczO1xuICBiZWxsSW1nLmFsdCA9IFwiQSBiZWxsIGljb25cIjtcbiAgbGlzdEdyb3VwQnRuLnR5cGUgPSBcImJ1dHRvblwiO1xuICBsaXN0R3JvdXBCdG4uY2xhc3NMaXN0LmFkZChcInZpZXctbGlzdHMtYnRuXCIpO1xuICBsaXN0R3JvdXBJbWcuc3JjID0gSW1nNDtcbiAgbGlzdEdyb3VwSW1nLmFsdCA9IFwiQSBsaXN0IGljb25cIjtcblxuICBtZW51QnRuLmFwcGVuZENoaWxkKG1lbnVJbWcpO1xuICBsaXN0R3JvdXBCdG4uYXBwZW5kQ2hpbGQobGlzdEdyb3VwSW1nKTtcbiAgcHJvZmlsZS5hcHBlbmRDaGlsZChsaXN0R3JvdXBCdG4pO1xuICBwcm9maWxlLmFwcGVuZENoaWxkKGJlbGxJbWcpO1xuICBwcm9maWxlLmFwcGVuZENoaWxkKHByb2ZpbGVJbWcpO1xuICBtZW51Q29udGFpbmVyLmFwcGVuZENoaWxkKG1lbnVCdG4pO1xuICBoZWFkZXIuYXBwZW5kQ2hpbGQobWVudUNvbnRhaW5lcik7XG4gIGhlYWRlci5hcHBlbmRDaGlsZChwcm9maWxlKTtcbiAgZm9vdGVyLmFwcGVuZENoaWxkKHBhcmEpO1xuICBjb250ZW50LmFwcGVuZENoaWxkKGhlYWRlcik7XG4gIGNvbnRlbnQuYXBwZW5kQ2hpbGQobWFpbik7XG4gIGNvbnRlbnQuYXBwZW5kQ2hpbGQoZm9vdGVyKTtcbn07XG5cbmNvbnN0IHVwZGF0ZUxpc3RBcnJheSA9ICgpID0+IHtcbiAgY29uc3QgbmV3TGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbmV3LWxpc3RcIikudmFsdWU7XG4gIGxpc3RBcnJheS5wdXNoKG5ld0xpc3QpO1xufTtcblxuY29uc3QgZGlzcGxheUhlaWdodCA9ICgpID0+IHtcbiAgbGV0IGhlaWdodCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudGFzay1kaXNwbGF5XCIpLmNsaWVudEhlaWdodDtcblxuICByZXR1cm4gaGVpZ2h0O1xufTtcblxuZXhwb3J0IHsgbGlzdEFycmF5LCBwcmlvcml0eUFycmF5LCBwYWdlTGF5b3V0LCB1cGRhdGVMaXN0QXJyYXksIGRpc3BsYXlIZWlnaHQgfTtcbiIsImltcG9ydCBcIi4vY29udGVudC5jc3NcIjtcbmltcG9ydCBcIi4vZm9ybXMuY3NzXCI7XG5pbXBvcnQgeyBsaXN0QXJyYXkgfSBmcm9tIFwiLi9sYXlvdXRcIjtcbmltcG9ydCBJbWcgZnJvbSBcIi4vaW1hZ2VzL2FkZC10YXNrLnN2Z1wiO1xuaW1wb3J0IEltZzIgZnJvbSBcIi4vaW1hZ2VzL2JhY2suc3ZnXCI7XG5pbXBvcnQgSW1nMyBmcm9tIFwiLi9pbWFnZXMvYWRkLWxpc3Quc3ZnXCI7XG5pbXBvcnQgSW1nNCBmcm9tIFwiLi9pbWFnZXMvc2F2ZS5zdmdcIjtcbmltcG9ydCBJbWc1IGZyb20gXCIuL2ltYWdlcy9jYWxlbmRhci5zdmdcIjtcbmltcG9ydCBJbWc2IGZyb20gXCIuL2ltYWdlcy9kZWxldGUuc3ZnXCI7XG5pbXBvcnQgeyBwb3B1bGF0ZVN0b3JhZ2UgfSBmcm9tIFwiLi9kYXRhXCI7XG5cbmNvbnN0IHRhc2tBcnJheSA9IFtdO1xuXG5jb25zdCBtYWluQ29udGVudCA9ICgpID0+IHtcbiAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tYWluLXNlY3Rpb25cIik7XG5cbiAgY29uc3Qgd3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IHRhc2tEaXNwbGF5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgaGVhZGluZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMlwiKTtcbiAgY29uc3QgYnRuQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgYnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgY29uc3QgYnRuSW1nID0gbmV3IEltYWdlKCk7XG5cbiAgd3JhcHBlci5jbGFzc0xpc3QuYWRkKFwid3JhcHBlclwiKTtcbiAgaGVhZGVyLmNsYXNzTGlzdC5hZGQoXCJ0YXNrLWhlYWRlclwiKTtcbiAgdGFza0Rpc3BsYXkuY2xhc3NMaXN0LmFkZChcInRhc2stZGlzcGxheVwiKTtcbiAgYnRuQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJkaXNwbGF5LWJ0bi1jb250YWluZXJcIik7XG4gIGJ0bi50eXBlID0gXCJidXR0b25cIjtcbiAgYnRuLmNsYXNzTGlzdC5hZGQoXCJmb3JtLWJ0blwiKTtcbiAgYnRuSW1nLnNyYyA9IEltZztcbiAgYnRuSW1nLmFsdCA9IFwiUGx1cyBpY29uXCI7XG4gIGhlYWRpbmcudGV4dENvbnRlbnQgPSBcIlRvZGF5XCI7XG5cbiAgaGVhZGVyLmFwcGVuZENoaWxkKGhlYWRpbmcpO1xuICBidG4uYXBwZW5kQ2hpbGQoYnRuSW1nKTtcbiAgYnRuQ29udGFpbmVyLmFwcGVuZENoaWxkKGJ0bik7XG4gIHdyYXBwZXIuYXBwZW5kQ2hpbGQoaGVhZGVyKTtcbiAgd3JhcHBlci5hcHBlbmRDaGlsZCh0YXNrRGlzcGxheSk7XG4gIHdyYXBwZXIuYXBwZW5kQ2hpbGQoYnRuQ29udGFpbmVyKTtcbiAgY29udGFpbmVyLmFwcGVuZENoaWxkKHdyYXBwZXIpO1xufTtcblxuY29uc3QgZW1wdHlJbmRpY2F0b3IgPSAoKSA9PiB7XG4gIGNvbnN0IGRpc3BsYXkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRhc2stZGlzcGxheVwiKTtcbiAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgcGFyYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICBjb25zdCBpbWcgPSBuZXcgSW1hZ2UoKTtcblxuICBjb250YWluZXIuY2xhc3NMaXN0LmFkZChcImVtcHR5LWluZGljYXRvclwiKTtcbiAgaW1nLnNyYyA9IEltZzU7XG4gIGltZy5hbHQgPSBcImVtcHR5IGltYWdlXCI7XG4gIHBhcmEudGV4dENvbnRlbnQgPSBcIk5vdGhpbmcgdG8gZG9cIjtcblxuICBjb250YWluZXIuYXBwZW5kQ2hpbGQoaW1nKTtcbiAgY29udGFpbmVyLmFwcGVuZENoaWxkKHBhcmEpO1xuICBkaXNwbGF5LmFwcGVuZENoaWxkKGNvbnRhaW5lcik7XG59O1xuXG5jb25zdCBjcmVhdGVGb3JtID0gKCkgPT4ge1xuICBjb25zdCBkaXNwbGF5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50YXNrLWRpc3BsYXlcIik7XG4gIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudGFzay1oZWFkZXJcIik7XG5cbiAgZGlzcGxheS50ZXh0Q29udGVudCA9IFwiXCI7XG5cbiAgLy8gY3JlYXRlIGZvcm0gaW5wdXRzXG4gIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZm9ybVwiKTtcbiAgY29uc3QgdGFza0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IHRhc2tMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcbiAgY29uc3QgdGFza0lucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICBjb25zdCBkZXNjcmlwdGlvbkNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IGRlc2NyaXB0aW9uTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XG4gIGNvbnN0IGRlc2NyaXB0aW9uSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGV4dGFyZWFcIik7XG4gIGNvbnN0IGR1ZURhdGVDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCBkYXRlQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgZHVlRGF0ZUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xuICBjb25zdCBkdWVEYXRlSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG5cbiAgLy8gY3JlYXRlIGZvcm0gc2VsZWN0aW9uc1xuICBjb25zdCBwcmlvcml0eURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IHByaW9yaXR5TGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XG4gIGNvbnN0IHByaW9yaXR5SW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2VsZWN0XCIpO1xuICBjb25zdCBzdWJtaXRDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCBzdWJtaXRTZWxlY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCBzdWJtaXRMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcbiAgY29uc3Qgc3VibWl0SW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2VsZWN0XCIpO1xuICBjb25zdCBwcmlvcml0eU9wdGlvbjEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIpO1xuICBjb25zdCBwcmlvcml0eU9wdGlvbjIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIpO1xuICBjb25zdCBwcmlvcml0eU9wdGlvbjMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIpO1xuICBjb25zdCBjcmVhdGVMaXN0QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgY29uc3QgY3JlYXRlTGlzdEltZyA9IG5ldyBJbWFnZSgpO1xuXG4gIC8vQWRkIGF0dHJpYnV0ZXNcbiAgZm9ybS5jbGFzc0xpc3QuYWRkKFwidGFzay1mb3JtXCIpO1xuICB0YXNrQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJ0aXRsZS13cmFwcGVyXCIpO1xuICBkZXNjcmlwdGlvbkNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwiZGVzY3JpcHRpb24td3JhcHBlclwiKTtcbiAgZHVlRGF0ZUNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwiZHVlLWRhdGUtd3JhcHBlclwiKTtcbiAgcHJpb3JpdHlEaXYuY2xhc3NMaXN0LmFkZChcInByaW9yaXR5LXdyYXBwZXJcIik7XG4gIHN1Ym1pdENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwibGlzdC13cmFwcGVyXCIpO1xuICBkYXRlQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJkYXRlLWNvbnRhaW5lclwiKTtcbiAgdGFza0xhYmVsLmh0bWxGb3IgPSBcInRhc2stdGl0bGVcIjtcbiAgdGFza0xhYmVsLnRleHRDb250ZW50ID0gXCJOZXcgVGFza1wiO1xuICBkZXNjcmlwdGlvbkxhYmVsLmh0bWxGb3IgPSBcImRlc2NyaXB0aW9uXCI7XG4gIGRlc2NyaXB0aW9uTGFiZWwudGV4dENvbnRlbnQgPSBcIldoYXQgaXMgdG8gYmUgZG9uZT9cIjtcbiAgZHVlRGF0ZUxhYmVsLmh0bWxGb3IgPSBcImRhdGVcIjtcbiAgZHVlRGF0ZUxhYmVsLnRleHRDb250ZW50ID0gXCJEYXRlXCI7XG4gIHByaW9yaXR5TGFiZWwuaHRtbEZvciA9IFwicHJpb3JpdHlcIjtcbiAgcHJpb3JpdHlMYWJlbC50ZXh0Q29udGVudCA9IFwiUHJpb3JpdHlcIjtcbiAgc3VibWl0TGFiZWwuaHRtbEZvciA9IFwibGlzdFwiO1xuICBzdWJtaXRMYWJlbC50ZXh0Q29udGVudCA9IFwiTGlzdFwiO1xuICBkdWVEYXRlSW5wdXQudHlwZSA9IFwiZGF0ZVwiO1xuICB0YXNrSW5wdXQudHlwZSA9IFwidGV4dFwiO1xuICB0YXNrSW5wdXQubmFtZSA9IFwidGl0bGVcIjtcbiAgdGFza0lucHV0LmlkID0gXCJ0YXNrLXRpdGxlXCI7XG4gIHRhc2tJbnB1dC5tYXhMZW5ndGggPSBcIjM1XCI7XG4gIHRhc2tJbnB1dC5wbGFjZWhvbGRlciA9IFwiRW50ZXIgVGFzayBOYW1lXCI7XG4gIHRhc2tJbnB1dC5yZXF1aXJlZCA9IHRydWU7XG4gIGRlc2NyaXB0aW9uSW5wdXQubmFtZSA9IFwiZGVzY3JpcHRpb25cIjtcbiAgZGVzY3JpcHRpb25JbnB1dC5pZCA9IFwiZGVzY3JpcHRpb25cIjtcbiAgZGVzY3JpcHRpb25JbnB1dC5wbGFjZWhvbGRlciA9IFwiRW50ZXIgVGFzayBEZXNjcmlwdGlvbiBIZXJlXCI7XG4gIGR1ZURhdGVJbnB1dC5uYW1lID0gXCJkYXRlXCI7XG4gIGR1ZURhdGVJbnB1dC5pZCA9IFwiZGF0ZVwiO1xuICBwcmlvcml0eUlucHV0Lm5hbWUgPSBcInByaW9yaXR5XCI7XG4gIHByaW9yaXR5SW5wdXQuaWQgPSBcInByaW9yaXR5XCI7XG4gIGNyZWF0ZUxpc3RCdG4udHlwZSA9IFwiYnV0dG9uXCI7XG4gIGNyZWF0ZUxpc3RCdG4uY2xhc3NMaXN0LmFkZChcImNyZWF0ZS1saXN0LWJ0blwiKTtcbiAgY3JlYXRlTGlzdEltZy5zcmMgPSBJbWczO1xuICBjcmVhdGVMaXN0SW1nLmFsdCA9IFwiQWRkIGxpc3QgaWNvblwiO1xuICBzdWJtaXRJbnB1dC5uYW1lID0gXCJsaXN0XCI7XG4gIHN1Ym1pdElucHV0LmlkID0gXCJsaXN0XCI7XG4gIHByaW9yaXR5T3B0aW9uMS52YWx1ZSA9IFwiY3JpdGljYWxcIjtcbiAgcHJpb3JpdHlPcHRpb24xLnRleHRDb250ZW50ID0gXCJDcml0aWNhbFwiO1xuICBwcmlvcml0eU9wdGlvbjIudmFsdWUgPSBcImhpZ2hcIjtcbiAgcHJpb3JpdHlPcHRpb24yLnRleHRDb250ZW50ID0gXCJIaWdoXCI7XG4gIHByaW9yaXR5T3B0aW9uMy52YWx1ZSA9IFwibm9ybWFsXCI7XG4gIHByaW9yaXR5T3B0aW9uMy50ZXh0Q29udGVudCA9IFwiTm9ybWFsXCI7XG5cbiAgLy8gRHluYW1pY2FsbHkgYWRkIGxpc3Qgb3B0aW9ucy4gV2hlbiB0aGUgdXNlciBhZGRzIGEgbmV3IGxpc3QsXG4gIC8vIHRoZSBuZXcgbGlzdCB3aWxsIGJlIHByZXNlbnQgaW4gdGhlIG5leHQgZm9ybS5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBsaXN0QXJyYXkubGVuZ3RoOyBpKyspIHtcbiAgICBjb25zdCBzdWJtaXRPcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIpO1xuXG4gICAgc3VibWl0T3B0aW9uLnZhbHVlID0gbGlzdEFycmF5W2ldO1xuICAgIHN1Ym1pdE9wdGlvbi50ZXh0Q29udGVudCA9IGxpc3RBcnJheVtpXTtcblxuICAgIHN1Ym1pdElucHV0LmFwcGVuZENoaWxkKHN1Ym1pdE9wdGlvbik7XG4gIH1cblxuICAvLyBBcHBlbmQgbm9kZXNcbiAgcHJpb3JpdHlJbnB1dC5hcHBlbmRDaGlsZChwcmlvcml0eU9wdGlvbjEpO1xuICBwcmlvcml0eUlucHV0LmFwcGVuZENoaWxkKHByaW9yaXR5T3B0aW9uMik7XG4gIHByaW9yaXR5SW5wdXQuYXBwZW5kQ2hpbGQocHJpb3JpdHlPcHRpb24zKTtcbiAgdGFza0NvbnRhaW5lci5hcHBlbmRDaGlsZCh0YXNrTGFiZWwpO1xuICB0YXNrQ29udGFpbmVyLmFwcGVuZENoaWxkKHRhc2tJbnB1dCk7XG4gIGRlc2NyaXB0aW9uQ29udGFpbmVyLmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uTGFiZWwpO1xuICBkZXNjcmlwdGlvbkNvbnRhaW5lci5hcHBlbmRDaGlsZChkZXNjcmlwdGlvbklucHV0KTtcbiAgZGF0ZUNvbnRhaW5lci5hcHBlbmRDaGlsZChkdWVEYXRlTGFiZWwpO1xuICBkYXRlQ29udGFpbmVyLmFwcGVuZENoaWxkKGR1ZURhdGVJbnB1dCk7XG4gIHByaW9yaXR5RGl2LmFwcGVuZENoaWxkKHByaW9yaXR5TGFiZWwpO1xuICBwcmlvcml0eURpdi5hcHBlbmRDaGlsZChwcmlvcml0eUlucHV0KTtcbiAgc3VibWl0U2VsZWN0LmFwcGVuZENoaWxkKHN1Ym1pdExhYmVsKTtcbiAgc3VibWl0U2VsZWN0LmFwcGVuZENoaWxkKHN1Ym1pdElucHV0KTtcbiAgY3JlYXRlTGlzdEJ0bi5hcHBlbmRDaGlsZChjcmVhdGVMaXN0SW1nKTtcbiAgc3VibWl0Q29udGFpbmVyLmFwcGVuZENoaWxkKHN1Ym1pdFNlbGVjdCk7XG4gIHN1Ym1pdENvbnRhaW5lci5hcHBlbmRDaGlsZChjcmVhdGVMaXN0QnRuKTtcbiAgZHVlRGF0ZUNvbnRhaW5lci5hcHBlbmRDaGlsZChkYXRlQ29udGFpbmVyKTtcbiAgZm9ybS5hcHBlbmRDaGlsZCh0YXNrQ29udGFpbmVyKTtcbiAgZm9ybS5hcHBlbmRDaGlsZChkZXNjcmlwdGlvbkNvbnRhaW5lcik7XG4gIGZvcm0uYXBwZW5kQ2hpbGQoZHVlRGF0ZUNvbnRhaW5lcik7XG4gIGZvcm0uYXBwZW5kQ2hpbGQocHJpb3JpdHlEaXYpO1xuICBmb3JtLmFwcGVuZENoaWxkKHN1Ym1pdENvbnRhaW5lcik7XG4gIGRpc3BsYXkuYXBwZW5kQ2hpbGQoZm9ybSk7XG59O1xuXG5jb25zdCBkaXNwbGF5QnRuQ29udHJvbGxlciA9IChlbGUpID0+IHtcbiAgY29uc3QgYnRuQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5kaXNwbGF5LWJ0bi1jb250YWluZXJcIik7XG5cbiAgYnRuQ29udGFpbmVyLnRleHRDb250ZW50ID0gXCJcIjtcblxuICBpZiAoZWxlLmNsYXNzTmFtZSA9PT0gXCJmb3JtLWJ0blwiKSB7XG4gICAgY29uc3QgYnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICBjb25zdCBidG5JbWcgPSBuZXcgSW1hZ2UoKTtcblxuICAgIGJ0bi50eXBlID0gXCJidXR0b25cIjtcbiAgICBidG4uY2xhc3NMaXN0LmFkZChcInN1Ym1pdC1idG5cIik7XG4gICAgYnRuSW1nLnNyYyA9IEltZzQ7XG4gICAgYnRuSW1nLmFsdCA9IFwiQ2hlY2sgY2lyY2xlIGljb25cIjtcblxuICAgIGJ0bi5hcHBlbmRDaGlsZChidG5JbWcpO1xuICAgIGJ0bkNvbnRhaW5lci5hcHBlbmRDaGlsZChidG4pO1xuICB9IGVsc2UgaWYgKGVsZS5jbGFzc05hbWUgPT09IFwidGFza1wiKSB7XG4gICAgY29uc3QgYnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICBjb25zdCBidG5JbWcgPSBuZXcgSW1hZ2UoKTtcblxuICAgIGJ0bi50eXBlID0gXCJidXR0b25cIjtcbiAgICBidG4uY2xhc3NMaXN0LmFkZChcInNhdmUtYnRuXCIpO1xuICAgIGJ0bkltZy5zcmMgPSBJbWc0O1xuICAgIGJ0bkltZy5hbHQgPSBcIkNoZWNrIGNpcmNsZSBpY29uXCI7XG5cbiAgICBidG4uYXBwZW5kQ2hpbGQoYnRuSW1nKTtcbiAgICBidG5Db250YWluZXIuYXBwZW5kQ2hpbGQoYnRuKTtcbiAgfSBlbHNlIHtcbiAgICBjb25zdCBidG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgIGNvbnN0IGJ0bkltZyA9IG5ldyBJbWFnZSgpO1xuXG4gICAgYnRuLnR5cGUgPSBcImJ1dHRvblwiO1xuICAgIGJ0bi5jbGFzc0xpc3QuYWRkKFwiZm9ybS1idG5cIik7XG4gICAgYnRuSW1nLnNyYyA9IEltZztcbiAgICBidG5JbWcuYWx0ID0gXCJBZGQgY2lyY2xlIGljb25cIjtcblxuICAgIGJ0bi5hcHBlbmRDaGlsZChidG5JbWcpO1xuICAgIGJ0bkNvbnRhaW5lci5hcHBlbmRDaGlsZChidG4pO1xuICB9XG59O1xuXG5jb25zdCBuZXdMaXN0Rm9ybSA9ICgpID0+IHtcbiAgY29uc3QgZGlzcGxheSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudGFzay1kaXNwbGF5XCIpO1xuXG4gIGNvbnN0IGxpc3RGb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImZvcm1cIik7XG4gIGNvbnN0IGxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xuICBjb25zdCBpbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgY29uc3QgYnRuQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgY2FuY2VsQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgY29uc3QgYWNjZXB0QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcblxuICBsaXN0Rm9ybS5jbGFzc0xpc3QuYWRkKFwicG9wLXVwXCIpO1xuICBjYW5jZWxCdG4udHlwZSA9IFwiYnV0dG9uXCI7XG4gIGNhbmNlbEJ0bi5jbGFzc0xpc3QuYWRkKFwiY2FuY2VsLWxpc3QtYnRuXCIpO1xuICBjYW5jZWxCdG4udGV4dENvbnRlbnQgPSBcIkNhbmNlbFwiO1xuICBhY2NlcHRCdG4udHlwZSA9IFwiYnV0dG9uXCI7XG4gIGFjY2VwdEJ0bi5jbGFzc0xpc3QuYWRkKFwiYWRkLWxpc3QtYnRuXCIpO1xuICBhY2NlcHRCdG4udGV4dENvbnRlbnQgPSBcIkFkZFwiO1xuICBsYWJlbC5odG1sRm9yID0gXCJuZXctbGlzdFwiO1xuICBsYWJlbC50ZXh0Q29udGVudCA9IFwiTmV3IExpc3RcIjtcbiAgaW5wdXQudHlwZSA9IFwidGV4dFwiO1xuICBpbnB1dC5uYW1lID0gXCJuZXctbGlzdFwiO1xuICBpbnB1dC5pZCA9IFwibmV3LWxpc3RcIjtcbiAgaW5wdXQucmVxdWlyZWQgPSB0cnVlO1xuICBpbnB1dC5wbGFjZWhvbGRlciA9IFwiRW50ZXIgTGlzdCBOYW1lXCI7XG4gIGlucHV0Lm1heExlbmd0aCA9IFwiMTVcIjtcblxuICBidG5Db250YWluZXIuYXBwZW5kQ2hpbGQoYWNjZXB0QnRuKTtcbiAgYnRuQ29udGFpbmVyLmFwcGVuZENoaWxkKGNhbmNlbEJ0bik7XG4gIGxpc3RGb3JtLmFwcGVuZENoaWxkKGxhYmVsKTtcbiAgbGlzdEZvcm0uYXBwZW5kQ2hpbGQoaW5wdXQpO1xuICBsaXN0Rm9ybS5hcHBlbmRDaGlsZChidG5Db250YWluZXIpO1xuICBkaXNwbGF5LmFwcGVuZENoaWxkKGxpc3RGb3JtKTtcbn07XG5cbmNvbnN0IGFkZFRpbWVPcHRpb24gPSAoKSA9PiB7XG4gIGNvbnN0IHNpYmxpbmcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmRhdGUtY29udGFpbmVyXCIpO1xuICBjb25zdCBzaWJsaW5nVHdvID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50aW1lLWNvbnRhaW5lclwiKTtcbiAgY29uc3QgcGFyZW50ID0gc2libGluZy5wYXJlbnROb2RlO1xuXG4gIGlmIChwYXJlbnQuY29udGFpbnMoc2libGluZ1R3bykpIHtcbiAgICByZXR1cm47XG4gIH0gZWxzZSB7XG4gICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjb25zdCBsYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcbiAgICBjb25zdCB0aW1lSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG5cbiAgICBjb250YWluZXIuY2xhc3NMaXN0LmFkZChcInRpbWUtY29udGFpbmVyXCIpO1xuICAgIGxhYmVsLmh0bWxGb3IgPSBcInRpbWVcIjtcbiAgICBsYWJlbC50ZXh0Q29udGVudCA9IFwiVGltZVwiO1xuICAgIHRpbWVJbnB1dC50eXBlID0gXCJ0aW1lXCI7XG4gICAgdGltZUlucHV0Lm5hbWUgPSBcInRpbWVcIjtcbiAgICB0aW1lSW5wdXQuaWQgPSBcInRpbWVcIjtcblxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChsYWJlbCk7XG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKHRpbWVJbnB1dCk7XG4gICAgcGFyZW50LmFwcGVuZENoaWxkKGNvbnRhaW5lcik7XG4gIH1cbn07XG5cbmNvbnN0IGFkZExpc3RPcHRpb24gPSAoKSA9PiB7XG4gIGNvbnN0IG9wdGlvbnNDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2xpc3RcIik7XG4gIGNvbnN0IG5hbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI25ldy1saXN0XCIpLnZhbHVlO1xuICBjb25zdCBuZXdPcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIpO1xuXG4gIG5ld09wdGlvbi52YWx1ZSA9IG5hbWU7XG4gIG5ld09wdGlvbi5zZWxlY3RlZCA9IHRydWU7XG4gIG5ld09wdGlvbi50ZXh0Q29udGVudCA9IG5hbWU7XG5cbiAgb3B0aW9uc0NvbnRhaW5lci5hcHBlbmRDaGlsZChuZXdPcHRpb24pO1xufTtcblxuY29uc3QgcHJvY2Vzc0Zvcm0gPSAoKSA9PiB7XG4gIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRhc2stZm9ybVwiKTtcbiAgY29uc3QgZ2V0Rm9ybURhdGEgPSBPYmplY3QuZnJvbUVudHJpZXMobmV3IEZvcm1EYXRhKGZvcm0pKTtcblxuICB0YXNrQXJyYXkucHVzaChnZXRGb3JtRGF0YSk7XG59O1xuXG5jb25zdCBtb2RpZnlUYXNrID0gKCkgPT4ge1xuICBjb25zdCBmb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5mdWxsLXRhc2stZm9ybVwiKTtcbiAgY29uc3QgaW5kZXggPSBwYXJzZUludChmb3JtLmRhdGFzZXQubnVtKTtcbiAgY29uc3QgZm9ybURhdGEgPSBPYmplY3QuZnJvbUVudHJpZXMobmV3IEZvcm1EYXRhKGZvcm0pKTtcblxuICB0YXNrQXJyYXkuc3BsaWNlKGluZGV4LCAxLCBmb3JtRGF0YSk7XG59O1xuXG5jb25zdCBiYWNrQnRuQ29udHJvbGxlciA9ICgpID0+IHtcbiAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50YXNrLWhlYWRlclwiKTtcbiAgY29uc3QgZGlzcGxheSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudGFzay1kaXNwbGF5XCIpO1xuICBjb25zdCBmb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50YXNrLWZvcm1cIik7XG4gIGNvbnN0IGZvcm1Ud28gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmZ1bGwtdGFzay1mb3JtXCIpO1xuICBjb25zdCBjaGlsZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYmFjay1idG4tY29udGFpbmVyXCIpO1xuXG4gIGlmIChoZWFkZXIuY29udGFpbnMoY2hpbGQpICYmIGRpc3BsYXkuY29udGFpbnMoZm9ybSkpIHtcbiAgICBoZWFkZXIucmVtb3ZlQ2hpbGQoY2hpbGQpO1xuICAgIGRpc3BsYXkucmVtb3ZlQ2hpbGQoZm9ybSk7XG4gIH0gZWxzZSBpZiAoaGVhZGVyLmNvbnRhaW5zKGNoaWxkKSAmJiBkaXNwbGF5LmNvbnRhaW5zKGZvcm1Ud28pKSB7XG4gICAgaGVhZGVyLnJlbW92ZUNoaWxkKGNoaWxkKTtcbiAgICBkaXNwbGF5LnJlbW92ZUNoaWxkKGZvcm1Ud28pO1xuICB9IGVsc2UgaWYgKGRpc3BsYXkuY29udGFpbnMoZm9ybSkgfHwgZGlzcGxheS5jb250YWlucyhmb3JtVHdvKSkge1xuICAgIC8vIENyZWF0ZSBhIGJhY2sgYnV0dG9uXG4gICAgY29uc3QgYmFja0J0bkNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY29uc3QgYmFja0J0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgY29uc3QgYmFja0J0bkltZyA9IG5ldyBJbWFnZSgpO1xuXG4gICAgYmFja0J0bkNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwiYmFjay1idG4tY29udGFpbmVyXCIpO1xuICAgIGJhY2tCdG4udHlwZSA9IFwiYnV0dG9uXCI7XG4gICAgYmFja0J0bi5jbGFzc0xpc3QuYWRkKFwiYmFjay1idG5cIik7XG4gICAgYmFja0J0bkltZy5zcmMgPSBJbWcyO1xuICAgIGJhY2tCdG5JbWcuYWx0ID0gXCJCYWNrIGFycm93IGljb25cIjtcblxuICAgIGJhY2tCdG4uYXBwZW5kQ2hpbGQoYmFja0J0bkltZyk7XG4gICAgYmFja0J0bkNvbnRhaW5lci5hcHBlbmRDaGlsZChiYWNrQnRuKTtcbiAgICBoZWFkZXIuYXBwZW5kQ2hpbGQoYmFja0J0bkNvbnRhaW5lcik7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuO1xuICB9XG59O1xuXG5jb25zdCBkZWxldGVCdG5Db250cm9sbGVyID0gKCkgPT4ge1xuICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRhc2staGVhZGVyXCIpO1xuICBjb25zdCBkaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmRlbC1idG4tY29udGFpbmVyXCIpO1xuXG4gIGNvbnN0IGFkZERlbGV0ZUJ0biA9ICgpID0+IHtcbiAgICBpZiAoaGVhZGVyLmNvbnRhaW5zKGRpdikpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNvbnN0IGRlbEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgY29uc3QgZGVsQnRuSW1nID0gbmV3IEltYWdlKCk7XG5cbiAgICBjb250YWluZXIuY2xhc3NMaXN0LmFkZChcImRlbC1idG4tY29udGFpbmVyXCIpO1xuICAgIGRlbEJ0bi50eXBlID0gXCJzdWJtaXRcIjtcbiAgICBkZWxCdG4uY2xhc3NMaXN0LmFkZChcImRlbC1idG5cIik7XG4gICAgZGVsQnRuSW1nLnNyYyA9IEltZzY7XG4gICAgZGVsQnRuSW1nLmFsdCA9IFwiRGVsZXRlIGljb25cIjtcblxuICAgIGRlbEJ0bi5hcHBlbmRDaGlsZChkZWxCdG5JbWcpO1xuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChkZWxCdG4pO1xuICAgIGhlYWRlci5hcHBlbmRDaGlsZChjb250YWluZXIpO1xuICB9O1xuXG4gIGNvbnN0IGNoZWNrRGVsZXRlQnRuID0gKCkgPT4ge1xuICAgIGlmIChoZWFkZXIuY29udGFpbnMoZGl2KSkge1xuICAgICAgaGVhZGVyLnJlbW92ZUNoaWxkKGRpdik7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IHJlbW92ZURlbGV0ZUJ0biA9ICgpID0+IHtcbiAgICBjb25zdCBjaGVja0JveGVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5jaGVja2JveFwiKTtcblxuICAgIGxldCBjaGVja2VkQ291bnQgPSAwO1xuXG4gICAgY2hlY2tCb3hlcy5mb3JFYWNoKChjaGVja0JveCkgPT4ge1xuICAgICAgaWYgKGNoZWNrQm94LmNoZWNrZWQgPT09IHRydWUpIHtcbiAgICAgICAgY2hlY2tlZENvdW50ICs9IDE7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBpZiAoY2hlY2tlZENvdW50ID09PSAwKSB7XG4gICAgICBoZWFkZXIucmVtb3ZlQ2hpbGQoZGl2KTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4geyBhZGREZWxldGVCdG4sIGNoZWNrRGVsZXRlQnRuLCByZW1vdmVEZWxldGVCdG4gfTtcbn07XG5cbmNvbnN0IGxpc3REaXNwbGF5Q29udHJvbGxlciA9ICgpID0+IHtcbiAgY29uc3QgbGlzdHNWaWV3ID0gKCkgPT4ge1xuICAgIGNvbnN0IGRpc3BsYXkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRhc2stZGlzcGxheVwiKTtcbiAgICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiaDJcIik7XG5cbiAgICBkaXNwbGF5LnRleHRDb250ZW50ID0gXCJcIjtcbiAgICBoZWFkZXIudGV4dENvbnRlbnQgPSBcIlRhc2sgTGlzdHNcIjtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGlzdEFycmF5Lmxlbmd0aDsgaSsrKSB7XG4gICAgICBjb25zdCBsaXN0Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgIGNvbnN0IHRpdGxlV3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICBjb25zdCBsaXN0VGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDNcIik7XG4gICAgICBjb25zdCBkZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuXG4gICAgICBsaXN0Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJsaXN0LWJhclwiKTtcbiAgICAgIGxpc3RDb250YWluZXIuaWQgPSBsaXN0QXJyYXlbaV07XG4gICAgICBsaXN0Q29udGFpbmVyLmRhdGFzZXQubnVtID0gaTtcbiAgICAgIGxpc3RUaXRsZS50ZXh0Q29udGVudCA9IGxpc3RBcnJheVtpXTtcblxuICAgICAgdGl0bGVXcmFwcGVyLmFwcGVuZENoaWxkKGxpc3RUaXRsZSk7XG4gICAgICB0aXRsZVdyYXBwZXIuYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb24pO1xuICAgICAgbGlzdENvbnRhaW5lci5hcHBlbmRDaGlsZCh0aXRsZVdyYXBwZXIpO1xuXG4gICAgICBpZiAoaSA+IDIpIHtcbiAgICAgICAgY29uc3QgYnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICAgICAgY29uc3QgYnRuSW1nID0gbmV3IEltYWdlKCk7XG5cbiAgICAgICAgYnRuLnR5cGUgPSBcImJ1dHRvblwiO1xuICAgICAgICBidG4uY2xhc3NMaXN0LmFkZChcInJlbW92ZS1wcm9qZWN0LWJ0blwiKTtcbiAgICAgICAgYnRuSW1nLnNyYyA9IEltZzY7XG4gICAgICAgIGJ0bkltZy5hbHQgPSBcIlJlbW92ZSBsaXN0IGljb25cIjtcbiAgICAgICAgZGVzY3JpcHRpb24udGV4dENvbnRlbnQgPSBcIkN1c3RvbVwiO1xuXG4gICAgICAgIGJ0bi5hcHBlbmRDaGlsZChidG5JbWcpO1xuICAgICAgICBsaXN0Q29udGFpbmVyLmFwcGVuZENoaWxkKGJ0bik7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBkZXNjcmlwdGlvbi50ZXh0Q29udGVudCA9IFwiRGVmYXVsdFwiO1xuICAgICAgfVxuXG4gICAgICBkaXNwbGF5LmFwcGVuZENoaWxkKGxpc3RDb250YWluZXIpO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCByZW1vdmVMaXN0ID0gKGJ0bikgPT4ge1xuICAgIGNvbnN0IHBhcmVudCA9IGJ0bi5wYXJlbnROb2RlO1xuICAgIGNvbnN0IGluZGV4ID0gcGFyc2VJbnQocGFyZW50LmRhdGFzZXQubnVtKTtcblxuICAgIC8vIFJlbW92ZSBsaXN0IGFuZCB1cGRhdGUgZGlzcGxheVxuICAgIGxpc3RBcnJheS5zcGxpY2UoaW5kZXgsIDEpO1xuICAgIGxpc3RzVmlldygpO1xuXG4gICAgLy8gQ2hhbmdlIHRhc2sgbGlzdCB0byBkZWZhdWx0IGxpc3RcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRhc2tBcnJheS5sZW5ndGg7IGkrKykge1xuICAgICAgY29uc3Qgb2JqID0gdGFza0FycmF5W2ldO1xuICAgICAgY29uc3QgbGlzdENob2ljZSA9IG9ialtcImxpc3RcIl07XG5cbiAgICAgIGlmIChwYXJlbnQuaWQuaW5jbHVkZXMobGlzdENob2ljZSkpIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJpbmNsdWRlc1wiKTtcbiAgICAgICAgb2JqW1wibGlzdFwiXSA9IFwicGVyc29uYWxcIjtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBwb3B1bGF0ZVN0b3JhZ2UoKTtcbiAgfTtcblxuICByZXR1cm4geyBsaXN0c1ZpZXcsIHJlbW92ZUxpc3QgfTtcbn07XG5cbmV4cG9ydCB7XG4gIG1haW5Db250ZW50LFxuICBlbXB0eUluZGljYXRvcixcbiAgY3JlYXRlRm9ybSxcbiAgZGlzcGxheUJ0bkNvbnRyb2xsZXIsXG4gIG5ld0xpc3RGb3JtLFxuICBhZGRUaW1lT3B0aW9uLFxuICBhZGRMaXN0T3B0aW9uLFxuICBwcm9jZXNzRm9ybSxcbiAgbW9kaWZ5VGFzayxcbiAgYmFja0J0bkNvbnRyb2xsZXIsXG4gIGRlbGV0ZUJ0bkNvbnRyb2xsZXIsXG4gIGxpc3REaXNwbGF5Q29udHJvbGxlcixcbiAgdGFza0FycmF5LFxufTtcbiIsImltcG9ydCB7IHRhc2tBcnJheSB9IGZyb20gXCIuL21haW4tY29udGVudFwiO1xuaW1wb3J0IFwiLi9uYXYuY3NzXCI7XG5pbXBvcnQgeyBsaXN0QXJyYXkgfSBmcm9tIFwiLi9sYXlvdXRcIjtcbmltcG9ydCBJbWcgZnJvbSBcIi4vaW1hZ2VzL3RvZGF5LnN2Z1wiO1xuaW1wb3J0IEltZzIgZnJvbSBcIi4vaW1hZ2VzL3VwY29taW5nLnN2Z1wiO1xuaW1wb3J0IEltZzMgZnJvbSBcIi4vaW1hZ2VzL2V4cGFuZC1sZXNzLnN2Z1wiO1xuaW1wb3J0IEltZzQgZnJvbSBcIi4vaW1hZ2VzL2V4cGFuZC1tb3JlLnN2Z1wiO1xuaW1wb3J0IEltZzUgZnJvbSBcIi4vaW1hZ2VzL2NyaXRpY2FsLnN2Z1wiO1xuaW1wb3J0IEltZzYgZnJvbSBcIi4vaW1hZ2VzL2hpZ2guc3ZnXCI7XG5pbXBvcnQgSW1nNyBmcm9tIFwiLi9pbWFnZXMvbm9ybWFsLnN2Z1wiO1xuaW1wb3J0IEltZzggZnJvbSBcIi4vaW1hZ2VzL3BlcnNvbmFsLnN2Z1wiO1xuaW1wb3J0IEltZzkgZnJvbSBcIi4vaW1hZ2VzL3dvcmsuc3ZnXCI7XG5pbXBvcnQgSW1nMTAgZnJvbSBcIi4vaW1hZ2VzL3Nob3BwaW5nLnN2Z1wiO1xuaW1wb3J0IEltZzExIGZyb20gXCIuL2ltYWdlcy9uZXcuc3ZnXCI7XG5pbXBvcnQgSW1nMTIgZnJvbSBcIi4vaW1hZ2VzL2FkZC1saXN0LnN2Z1wiO1xuXG5jb25zdCBtYWluTWVudSA9ICgpID0+IHtcbiAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY29udGVudFwiKTtcbiAgY29uc3QgbWFpbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubWFpbi1zZWN0aW9uXCIpO1xuICBjb25zdCBtZW51ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgdG9kYXlDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCB0b2RheUltZyA9IG5ldyBJbWFnZSgpO1xuICBjb25zdCB0b2RheUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gIGNvbnN0IHRvZGF5Q291bnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCB1cGNvbWluZ0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IHVwY29taW5nSW1nID0gbmV3IEltYWdlKCk7XG4gIGNvbnN0IHVwY29taW5nQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgY29uc3QgdXBjb21pbmdDb3VudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IGZhdkNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IGZhdldyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCBmYXZvcml0ZXNJbWcgPSBuZXcgSW1hZ2UoKTtcbiAgY29uc3QgZmF2b3JpdGVzQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgY29uc3QgZmF2b3JpdGVzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgcHJvakNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IHByb2pXcmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgcHJvamVjdHNJbWcgPSBuZXcgSW1hZ2UoKTtcbiAgY29uc3QgcHJvamVjdHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCBwcm9qZWN0c0J0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gIGNvbnN0IGFkZExpc3RCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICBjb25zdCBhZGRMaXN0SW1nID0gbmV3IEltYWdlKCk7XG5cbiAgbWVudS5jbGFzc0xpc3QuYWRkKFwibWFpbi1tZW51XCIpO1xuICB0b2RheUNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwidG9kYXktY29udGFpbmVyXCIpO1xuICB1cGNvbWluZ0NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwidXBjb21pbmctY29udGFpbmVyXCIpO1xuICB0b2RheUJ0bi50eXBlID0gXCJidXR0b25cIjtcbiAgdG9kYXlCdG4uY2xhc3NMaXN0LmFkZChcInRvZGF5LWJ0blwiKTtcbiAgdG9kYXlCdG4udGV4dENvbnRlbnQgPSBcIlRvZGF5XCI7XG4gIHVwY29taW5nQnRuLnR5cGUgPSBcImJ1dHRvblwiO1xuICB1cGNvbWluZ0J0bi5jbGFzc0xpc3QuYWRkKFwidXBjb21pbmctYnRuXCIpO1xuICB1cGNvbWluZ0J0bi50ZXh0Q29udGVudCA9IFwiVXBjb21pbmdcIjtcbiAgdG9kYXlDb3VudC5jbGFzc0xpc3QuYWRkKFwidG9kYXktY291bnRcIik7XG4gIHVwY29taW5nQ291bnQuY2xhc3NMaXN0LmFkZChcInVwY29taW5nLWNvdW50XCIpO1xuICBmYXZDb250YWluZXIuY2xhc3NMaXN0LmFkZChcImZhdi1jb250YWluZXJcIik7XG4gIGZhdldyYXBwZXIuY2xhc3NMaXN0LmFkZChcImZhdi13cmFwcGVyXCIpO1xuICBwcm9qQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJwcm9qLWNvbnRhaW5lclwiKTtcbiAgcHJvaldyYXBwZXIuY2xhc3NMaXN0LmFkZChcInByb2otd3JhcHBlclwiKTtcbiAgZmF2b3JpdGVzQnRuLnR5cGUgPSBcImJ1dHRvblwiO1xuICBmYXZvcml0ZXNCdG4uY2xhc3NMaXN0LmFkZChcImZhdm9yaXRlcy1idG5cIik7XG4gIGZhdm9yaXRlc0J0bi50ZXh0Q29udGVudCA9IFwiRmF2b3JpdGVzXCI7XG4gIHByb2plY3RzQnRuLnR5cGUgPSBcImJ1dHRvblwiO1xuICBwcm9qZWN0c0J0bi5jbGFzc0xpc3QuYWRkKFwicHJvamVjdHMtYnRuXCIpO1xuICBwcm9qZWN0c0J0bi50ZXh0Q29udGVudCA9IFwiUHJvamVjdHNcIjtcbiAgYWRkTGlzdEJ0bi50eXBlID0gXCJidXR0b25cIjtcbiAgYWRkTGlzdEJ0bi5jbGFzc0xpc3QuYWRkKFwiYWRkLXByb2plY3QtYnRuXCIpO1xuICBmYXZvcml0ZXMuY2xhc3NMaXN0LmFkZChcImZhdm9yaXRlc1wiKTtcbiAgcHJvamVjdHMuY2xhc3NMaXN0LmFkZChcInByb2plY3RzXCIpO1xuICB0b2RheUltZy5zcmMgPSBJbWc7XG4gIHRvZGF5SW1nLmFsdCA9IFwiQ2FsZW5kZXIgaWNvblwiO1xuICB1cGNvbWluZ0ltZy5zcmMgPSBJbWcyO1xuICB1cGNvbWluZ0ltZy5hbHQgPSBcIkNhbGVuZGVyIGljb25cIjtcbiAgZmF2b3JpdGVzSW1nLnNyYyA9IEltZzM7XG4gIGZhdm9yaXRlc0ltZy5hbHQgPSBcIkV4cGFuZCBsZXNzIGljb25cIjtcbiAgZmF2b3JpdGVzSW1nLmNsYXNzTGlzdC5hZGQoXCJmYXZvcml0ZXMtaW1nXCIpO1xuICBwcm9qZWN0c0ltZy5zcmMgPSBJbWczO1xuICBwcm9qZWN0c0ltZy5hbHQgPSBcIkV4cGFuZCBsZXNzIGljb25cIjtcbiAgcHJvamVjdHNJbWcuY2xhc3NMaXN0LmFkZChcInByb2plY3RzLWltZ1wiKTtcbiAgYWRkTGlzdEltZy5zcmMgPSBJbWcxMjtcbiAgYWRkTGlzdEltZy5hbHQgPSBcIkFkZCBsaXN0IGljb25cIjtcblxuICBhZGRMaXN0QnRuLmFwcGVuZENoaWxkKGFkZExpc3RJbWcpO1xuICB0b2RheUNvbnRhaW5lci5hcHBlbmRDaGlsZCh0b2RheUltZyk7XG4gIHRvZGF5Q29udGFpbmVyLmFwcGVuZENoaWxkKHRvZGF5QnRuKTtcbiAgdG9kYXlDb250YWluZXIuYXBwZW5kQ2hpbGQodG9kYXlDb3VudCk7XG4gIHVwY29taW5nQ29udGFpbmVyLmFwcGVuZENoaWxkKHVwY29taW5nSW1nKTtcbiAgdXBjb21pbmdDb250YWluZXIuYXBwZW5kQ2hpbGQodXBjb21pbmdCdG4pO1xuICB1cGNvbWluZ0NvbnRhaW5lci5hcHBlbmRDaGlsZCh1cGNvbWluZ0NvdW50KTtcbiAgZmF2V3JhcHBlci5hcHBlbmRDaGlsZChmYXZvcml0ZXNJbWcpO1xuICBmYXZXcmFwcGVyLmFwcGVuZENoaWxkKGZhdm9yaXRlc0J0bik7XG4gIGZhdkNvbnRhaW5lci5hcHBlbmRDaGlsZChmYXZXcmFwcGVyKTtcbiAgZmF2Q29udGFpbmVyLmFwcGVuZENoaWxkKGZhdm9yaXRlcyk7XG4gIHByb2pXcmFwcGVyLmFwcGVuZENoaWxkKHByb2plY3RzSW1nKTtcbiAgcHJvaldyYXBwZXIuYXBwZW5kQ2hpbGQocHJvamVjdHNCdG4pO1xuICBwcm9qV3JhcHBlci5hcHBlbmRDaGlsZChhZGRMaXN0QnRuKTtcbiAgcHJvakNvbnRhaW5lci5hcHBlbmRDaGlsZChwcm9qV3JhcHBlcik7XG4gIHByb2pDb250YWluZXIuYXBwZW5kQ2hpbGQocHJvamVjdHMpO1xuICBtZW51LmFwcGVuZENoaWxkKHRvZGF5Q29udGFpbmVyKTtcbiAgbWVudS5hcHBlbmRDaGlsZCh1cGNvbWluZ0NvbnRhaW5lcik7XG4gIG1lbnUuYXBwZW5kQ2hpbGQoZmF2Q29udGFpbmVyKTtcbiAgbWVudS5hcHBlbmRDaGlsZChwcm9qQ29udGFpbmVyKTtcbiAgY29udGVudC5pbnNlcnRCZWZvcmUobWVudSwgbWFpbik7XG59O1xuXG5jb25zdCBmYXZvcml0ZXNMaXN0ID0gKCkgPT4ge1xuICBjb25zdCBmYXZvcml0ZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmZhdm9yaXRlc1wiKTtcbiAgY29uc3QgY29udGFpbmVyT25lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgY29udGFpbmVyVHdvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgY29udGFpbmVyVGhyZWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCBwcmlvcml0eU9uZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gIGNvbnN0IHByaW9yaXR5VHdvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgY29uc3QgcHJpb3JpdHlUaHJlZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gIGNvbnN0IHByaW9yaXR5T25lQ291bnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCBwcmlvcml0eVR3b0NvdW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgcHJpb3JpdHlUaHJlZUNvdW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgY3JpdGljYWxJbWcgPSBuZXcgSW1hZ2UoKTtcbiAgY29uc3QgaGlnaEltZyA9IG5ldyBJbWFnZSgpO1xuICBjb25zdCBub3JtYWxJbWcgPSBuZXcgSW1hZ2UoKTtcblxuICBwcmlvcml0eU9uZS5jbGFzc0xpc3QuYWRkKFwiY3JpdGljYWwtYnRuXCIpO1xuICBwcmlvcml0eU9uZS5pZCA9IFwicHJpb3JpdHktYnRuXCI7XG4gIHByaW9yaXR5T25lLnRleHRDb250ZW50ID0gXCJDcml0aWNhbCBQcmlvcml0eVwiO1xuICBwcmlvcml0eVR3by5jbGFzc0xpc3QuYWRkKFwiaGlnaC1idG5cIik7XG4gIHByaW9yaXR5VHdvLmlkID0gXCJwcmlvcml0eS1idG5cIjtcbiAgcHJpb3JpdHlUd28udGV4dENvbnRlbnQgPSBcIkhpZ2ggUHJpb3JpdHlcIjtcbiAgcHJpb3JpdHlUaHJlZS5jbGFzc0xpc3QuYWRkKFwibm9ybWFsLWJ0blwiKTtcbiAgcHJpb3JpdHlUaHJlZS5pZCA9IFwicHJpb3JpdHktYnRuXCI7XG4gIHByaW9yaXR5VGhyZWUudGV4dENvbnRlbnQgPSBcIk5vcm1hbCBQcmlvcml0eVwiO1xuICBwcmlvcml0eU9uZUNvdW50LmNsYXNzTGlzdC5hZGQoXCJjcml0aWNhbC1jb3VudFwiKTtcbiAgcHJpb3JpdHlUd29Db3VudC5jbGFzc0xpc3QuYWRkKFwiaGlnaC1jb3VudFwiKTtcbiAgcHJpb3JpdHlUaHJlZUNvdW50LmNsYXNzTGlzdC5hZGQoXCJub3JtYWwtY291bnRcIik7XG5cbiAgY3JpdGljYWxJbWcuc3JjID0gSW1nNTtcbiAgY3JpdGljYWxJbWcuYWx0ID0gXCJXYXRlciBkcm9wIGljb25cIjtcbiAgaGlnaEltZy5zcmMgPSBJbWc2O1xuICBoaWdoSW1nLmFsdCA9IFwiV2F0ZXIgZHJvcCBpY29uXCI7XG4gIG5vcm1hbEltZy5zcmMgPSBJbWc3O1xuICBub3JtYWxJbWcuYWx0ID0gXCJXYXRlciBkcm9wIGljb25cIjtcblxuICBjb250YWluZXJPbmUuYXBwZW5kQ2hpbGQoY3JpdGljYWxJbWcpO1xuICBjb250YWluZXJPbmUuYXBwZW5kQ2hpbGQocHJpb3JpdHlPbmUpO1xuICBjb250YWluZXJPbmUuYXBwZW5kQ2hpbGQocHJpb3JpdHlPbmVDb3VudCk7XG4gIGNvbnRhaW5lclR3by5hcHBlbmRDaGlsZChoaWdoSW1nKTtcbiAgY29udGFpbmVyVHdvLmFwcGVuZENoaWxkKHByaW9yaXR5VHdvKTtcbiAgY29udGFpbmVyVHdvLmFwcGVuZENoaWxkKHByaW9yaXR5VHdvQ291bnQpO1xuICBjb250YWluZXJUaHJlZS5hcHBlbmRDaGlsZChub3JtYWxJbWcpO1xuICBjb250YWluZXJUaHJlZS5hcHBlbmRDaGlsZChwcmlvcml0eVRocmVlKTtcbiAgY29udGFpbmVyVGhyZWUuYXBwZW5kQ2hpbGQocHJpb3JpdHlUaHJlZUNvdW50KTtcbiAgZmF2b3JpdGVzLmFwcGVuZENoaWxkKGNvbnRhaW5lck9uZSk7XG4gIGZhdm9yaXRlcy5hcHBlbmRDaGlsZChjb250YWluZXJUd28pO1xuICBmYXZvcml0ZXMuYXBwZW5kQ2hpbGQoY29udGFpbmVyVGhyZWUpO1xufTtcblxuY29uc3QgcHJvamVjdExpc3QgPSAoKSA9PiB7XG4gIGNvbnN0IHByb2plY3RzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcm9qZWN0c1wiKTtcblxuICBpZiAocHJvamVjdHMpIHtcbiAgICBwcm9qZWN0cy50ZXh0Q29udGVudCA9IFwiXCI7XG4gIH1cblxuICBmb3IgKGxldCBpID0gMDsgaSA8IGxpc3RBcnJheS5sZW5ndGg7IGkrKykge1xuICAgIGNvbnN0IGxpc3ROYW1lID0gbGlzdEFycmF5W2ldO1xuXG4gICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjb25zdCBsaXN0QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICBjb25zdCB0YXNrQ291bnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNvbnN0IGltZyA9IG5ldyBJbWFnZSgpO1xuXG4gICAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoYCR7bGlzdE5hbWUucmVwbGFjZUFsbChcIiBcIiwgXCItXCIpfS1saXN0YCk7XG4gICAgbGlzdEJ0bi50eXBlID0gXCJidXR0b25cIjtcbiAgICBsaXN0QnRuLmNsYXNzTGlzdC5hZGQoYCR7bGlzdE5hbWUucmVwbGFjZUFsbChcIiBcIiwgXCItXCIpfS1idG5gKTtcbiAgICBsaXN0QnRuLmlkID0gXCJ0YXNrLWJ0blwiO1xuICAgIGxpc3RCdG4udGV4dENvbnRlbnQgPSBsaXN0TmFtZTtcbiAgICB0YXNrQ291bnQuY2xhc3NMaXN0LmFkZChgJHtsaXN0TmFtZS5yZXBsYWNlQWxsKFwiIFwiLCBcIi1cIil9LWNvdW50YCk7XG5cbiAgICBpZiAobGlzdE5hbWUgPT09IFwicGVyc29uYWxcIikge1xuICAgICAgaW1nLnNyYyA9IEltZzg7XG4gICAgICBpbWcuYWx0ID0gXCJQZXJzb24gaWNvblwiO1xuICAgIH0gZWxzZSBpZiAobGlzdE5hbWUgPT09IFwid29ya1wiKSB7XG4gICAgICBpbWcuc3JjID0gSW1nOTtcbiAgICAgIGltZy5hbHQgPSBcIkJyaWVmY2FzZSBpY29uXCI7XG4gICAgfSBlbHNlIGlmIChsaXN0TmFtZSA9PT0gXCJzaG9wcGluZ1wiKSB7XG4gICAgICBpbWcuc3JjID0gSW1nMTA7XG4gICAgICBpbWcuYWx0ID0gXCJTaG9wcGluZyBjYXJ0IGljb25cIjtcbiAgICB9IGVsc2Uge1xuICAgICAgaW1nLnNyYyA9IEltZzExO1xuICAgICAgaW1nLmFsdCA9IFwiTGFyZ2UgZG90IGljb25cIjtcbiAgICB9XG5cbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoaW1nKTtcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQobGlzdEJ0bik7XG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKHRhc2tDb3VudCk7XG5cbiAgICBpZiAocHJvamVjdHMpIHtcbiAgICAgIHByb2plY3RzLmFwcGVuZENoaWxkKGNvbnRhaW5lcik7XG4gICAgfVxuICB9XG59O1xuXG5jb25zdCB0YXNrQ291bnQgPSAoKSA9PiB7XG4gIGNvbnN0IGNvdW50cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCJbY2xhc3MqPSdjb3VudCddXCIpO1xuICBjb25zdCB0b2RheURhdGUgPSBuZXcgRGF0ZSgpLnRvSVNPU3RyaW5nKCkuc3BsaXQoXCJUXCIpWzBdO1xuXG4gIGNvdW50cy5mb3JFYWNoKChjb3VudCkgPT4ge1xuICAgIGxldCBjbGFzc05hbWUgPSBjb3VudC5jbGFzc05hbWU7XG5cbiAgICBsZXQgbnVtID0gMDtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGFza0FycmF5Lmxlbmd0aDsgaSsrKSB7XG4gICAgICBjb25zdCBvYmogPSB0YXNrQXJyYXlbaV07XG4gICAgICBjb25zdCBsaXN0Q2hvaWNlID0gb2JqW1wibGlzdFwiXTtcbiAgICAgIGNvbnN0IHRhc2tQcmlvcml0eSA9IG9ialtcInByaW9yaXR5XCJdO1xuICAgICAgY29uc3QgdGFza0RhdGUgPSBvYmpbXCJkYXRlXCJdO1xuXG4gICAgICBpZiAoXG4gICAgICAgIGNsYXNzTmFtZS5pbmNsdWRlcyhsaXN0Q2hvaWNlKSB8fFxuICAgICAgICAodG9kYXlEYXRlID09PSB0YXNrRGF0ZSAmJiBjbGFzc05hbWUuaW5jbHVkZXMoXCJ0b2RheVwiKSkgfHxcbiAgICAgICAgKHRvZGF5RGF0ZSAhPT0gdGFza0RhdGUgJiYgY2xhc3NOYW1lLmluY2x1ZGVzKFwidXBjb21pbmdcIikpIHx8XG4gICAgICAgIGNsYXNzTmFtZS5pbmNsdWRlcyh0YXNrUHJpb3JpdHkpXG4gICAgICApIHtcbiAgICAgICAgbnVtICs9IDE7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKG51bSA9PT0gMCkge1xuICAgICAgY291bnQudGV4dENvbnRlbnQgPSBcIlwiO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb3VudC50ZXh0Q29udGVudCA9IG51bTtcbiAgICB9XG4gIH0pO1xufTtcblxuY29uc3QgY2hhbmdlRmF2b3JpdGVzSW1hZ2UgPSAoKSA9PiB7XG4gIGNvbnN0IGZhdm9yaXRlc0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZmF2b3JpdGVzXCIpO1xuICBjb25zdCBpbWFnZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZmF2b3JpdGVzLWltZ1wiKTtcblxuICBpZiAoZmF2b3JpdGVzQ29udGFpbmVyLnRleHRDb250ZW50ID09PSBcIlwiKSB7XG4gICAgaW1hZ2Uuc3JjID0gSW1nMztcbiAgICBpbWFnZS5hbHQgPSBcIkV4cGFuZCBsZXNzIGljb25cIjtcbiAgfSBlbHNlIHtcbiAgICBpbWFnZS5zcmMgPSBJbWc0O1xuICAgIGltYWdlLmFsdCA9IFwiRXhwYW5kIG1vcmUgaWNvblwiO1xuICB9XG59O1xuXG5jb25zdCBjaGFuZ2VQcm9qZWN0c0ltYWdlID0gKCkgPT4ge1xuICBjb25zdCBwcm9qZWN0c0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJvamVjdHNcIik7XG4gIGNvbnN0IGltYWdlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcm9qZWN0cy1pbWdcIik7XG5cbiAgaWYgKHByb2plY3RzQ29udGFpbmVyKSB7XG4gICAgaWYgKHByb2plY3RzQ29udGFpbmVyLnRleHRDb250ZW50ID09PSBcIlwiKSB7XG4gICAgICBpbWFnZS5zcmMgPSBJbWczO1xuICAgICAgaW1hZ2UuYWx0ID0gXCJFeHBhbmQgbGVzcyBpY29uXCI7XG4gICAgfSBlbHNlIHtcbiAgICAgIGltYWdlLnNyYyA9IEltZzQ7XG4gICAgICBpbWFnZS5hbHQgPSBcIkV4cGFuZCBtb3JlIGljb25cIjtcbiAgICB9XG4gIH1cbn07XG5cbmV4cG9ydCB7XG4gIGxpc3RBcnJheSxcbiAgbWFpbk1lbnUsXG4gIHByb2plY3RMaXN0LFxuICBmYXZvcml0ZXNMaXN0LFxuICB0YXNrQ291bnQsXG4gIGNoYW5nZUZhdm9yaXRlc0ltYWdlLFxuICBjaGFuZ2VQcm9qZWN0c0ltYWdlLFxufTtcbiIsImltcG9ydCB7XG4gIHRhc2tBcnJheSxcbiAgZW1wdHlJbmRpY2F0b3IsXG4gIGRlbGV0ZUJ0bkNvbnRyb2xsZXIsXG59IGZyb20gXCIuL21haW4tY29udGVudC5qc1wiO1xuaW1wb3J0IHsgbGlzdEFycmF5LCBwcmlvcml0eUFycmF5LCBkaXNwbGF5SGVpZ2h0IH0gZnJvbSBcIi4vbGF5b3V0LmpzXCI7XG5pbXBvcnQgXCIuL2Zvcm1zLmNzc1wiO1xuaW1wb3J0IEltZyBmcm9tIFwiLi9pbWFnZXMvcGVyc29uYWwuc3ZnXCI7XG5pbXBvcnQgSW1nMiBmcm9tIFwiLi9pbWFnZXMvd29yay5zdmdcIjtcbmltcG9ydCBJbWczIGZyb20gXCIuL2ltYWdlcy9zaG9wcGluZy5zdmdcIjtcbmltcG9ydCBJbWc0IGZyb20gXCIuL2ltYWdlcy9uZXcuc3ZnXCI7XG5pbXBvcnQgSW1nNiBmcm9tIFwiLi9pbWFnZXMvYmFjay5zdmdcIjtcblxuY29uc3QgdGFza0JhcnMgPSAoKSA9PiB7XG4gIGNvbnN0IGRpc3BsYXkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRhc2stZGlzcGxheVwiKTtcbiAgY29uc3QgaGVhZGluZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJoMlwiKTtcblxuICBkaXNwbGF5LnRleHRDb250ZW50ID0gXCJcIjtcbiAgaGVhZGluZy50ZXh0Q29udGVudCA9IFwiQWxsIFRhc2tzXCI7XG5cbiAgLy8gQWRkIGhlaWdodCB0byB0aGUgdGFzayBkaXNwbGF5IGFyZWEgZm9yIG92ZXJmbG93IHNjcm9sbGJhclxuICBkaXNwbGF5LnN0eWxlLmhlaWdodCA9IGRpc3BsYXlIZWlnaHQoKTtcblxuICBpZiAodGFza0FycmF5Lmxlbmd0aCAhPT0gMCkge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGFza0FycmF5Lmxlbmd0aDsgaSsrKSB7XG4gICAgICBjb25zdCBvYmogPSB0YXNrQXJyYXlbaV07XG4gICAgICBjb25zdCB0YXNrVGl0bGUgPSBvYmpbXCJ0aXRsZVwiXTtcbiAgICAgIGNvbnN0IGxpc3RDaG9pY2UgPSBvYmpbXCJsaXN0XCJdO1xuICAgICAgY29uc3QgdGFza0RhdGUgPSBvYmpbXCJkYXRlXCJdO1xuXG4gICAgICAvLyBjcmVhdGUgZWxlbWVudHMgZm9yIGVhY2ggdGFza1xuICAgICAgY29uc3Qgd3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICBjb25zdCBjaGVja0JveENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJmb3JtXCIpO1xuICAgICAgY29uc3QgY2hlY2tCb3hMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcbiAgICAgIGNvbnN0IGNoZWNrQm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgICAgY29uc3Qgd3JhcHBlclR3byA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoM1wiKTtcbiAgICAgIGNvbnN0IGRhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgY29uc3QgbGlzdENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICBjb25zdCBsaXN0TmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgICAgY29uc3QgaW1nID0gbmV3IEltYWdlKCk7XG5cbiAgICAgIHdyYXBwZXIuY2xhc3NMaXN0LmFkZChcInRhc2tcIik7XG4gICAgICB3cmFwcGVyLmlkID0gdGFza1RpdGxlO1xuICAgICAgd3JhcHBlci5kYXRhc2V0Lm51bSA9IGAke2l9YDtcbiAgICAgIGNoZWNrQm94TGFiZWwuaHRtbEZvciA9IFwiY2hlY2tib3hcIjtcbiAgICAgIGNoZWNrQm94LnR5cGUgPSBcImNoZWNrYm94XCI7XG4gICAgICBjaGVja0JveC5uYW1lID0gXCJ0YXNrLWNoZWNrYm94XCI7XG4gICAgICBjaGVja0JveC5jbGFzc0xpc3QuYWRkKFwiY2hlY2tib3hcIik7XG4gICAgICB0aXRsZS50ZXh0Q29udGVudCA9IHRhc2tUaXRsZTtcbiAgICAgIGRhdGUudGV4dENvbnRlbnQgPSB0YXNrRGF0ZTtcbiAgICAgIGxpc3ROYW1lLnRleHRDb250ZW50ID0gbGlzdENob2ljZTtcblxuICAgICAgaWYgKGxpc3RDaG9pY2UgPT09IFwicGVyc29uYWxcIikge1xuICAgICAgICBpbWcuc3JjID0gSW1nO1xuICAgICAgICBpbWcuYWx0ID0gXCJQZXJzb24gaWNvblwiO1xuICAgICAgfSBlbHNlIGlmIChsaXN0Q2hvaWNlID09PSBcIndvcmtcIikge1xuICAgICAgICBpbWcuc3JjID0gSW1nMjtcbiAgICAgICAgaW1nLmFsdCA9IFwiQnJpZWZjYXNlIGljb25cIjtcbiAgICAgIH0gZWxzZSBpZiAobGlzdENob2ljZSA9PT0gXCJzaG9wcGluZ1wiKSB7XG4gICAgICAgIGltZy5zcmMgPSBJbWczO1xuICAgICAgICBpbWcuYWx0ID0gXCJTaG9wcGluZyBjYXJ0IGljb25cIjtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGltZy5zcmMgPSBJbWc0O1xuICAgICAgICBpbWcuYWx0ID0gXCJMYXJnZSBkb3QgaWNvblwiO1xuICAgICAgfVxuXG4gICAgICBjaGVja0JveENvbnRhaW5lci5hcHBlbmRDaGlsZChjaGVja0JveExhYmVsKTtcbiAgICAgIGNoZWNrQm94Q29udGFpbmVyLmFwcGVuZENoaWxkKGNoZWNrQm94KTtcbiAgICAgIHdyYXBwZXJUd28uYXBwZW5kQ2hpbGQodGl0bGUpO1xuICAgICAgd3JhcHBlclR3by5hcHBlbmRDaGlsZChkYXRlKTtcbiAgICAgIGxpc3RDb250YWluZXIuYXBwZW5kQ2hpbGQobGlzdE5hbWUpO1xuICAgICAgbGlzdENvbnRhaW5lci5hcHBlbmRDaGlsZChpbWcpO1xuICAgICAgd3JhcHBlci5hcHBlbmRDaGlsZChjaGVja0JveENvbnRhaW5lcik7XG4gICAgICB3cmFwcGVyLmFwcGVuZENoaWxkKHdyYXBwZXJUd28pO1xuICAgICAgd3JhcHBlci5hcHBlbmRDaGlsZChsaXN0Q29udGFpbmVyKTtcbiAgICAgIGRpc3BsYXkuYXBwZW5kQ2hpbGQod3JhcHBlcik7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIGVtcHR5SW5kaWNhdG9yKCk7XG4gIH1cbn07XG5cbmNvbnN0IHRhc2tQYWdlID0gKHRhc2tJbmRleCkgPT4ge1xuICBjb25zdCBkaXNwbGF5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50YXNrLWRpc3BsYXlcIik7XG4gIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudGFzay1oZWFkZXJcIik7XG5cbiAgZGlzcGxheS50ZXh0Q29udGVudCA9IFwiXCI7XG5cbiAgY29uc3Qgb2JqID0gdGFza0FycmF5W3Rhc2tJbmRleF07XG4gIGNvbnN0IHRhc2tUaXRsZSA9IG9ialtcInRpdGxlXCJdO1xuICBjb25zdCB0YXNrRGVzY3JpcHRpb24gPSBvYmpbXCJkZXNjcmlwdGlvblwiXTtcbiAgY29uc3QgdGFza0RhdGUgPSBvYmpbXCJkYXRlXCJdO1xuICBjb25zdCB0YXNrVGltZSA9IG9ialtcInRpbWVcIl07XG4gIGNvbnN0IHRhc2tQcmlvcml0eSA9IG9ialtcInByaW9yaXR5XCJdO1xuICBjb25zdCBsaXN0Q2hvaWNlID0gb2JqW1wibGlzdFwiXTtcblxuICBjb25zdCBmb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImZvcm1cIik7XG4gIGNvbnN0IHRpdGxlQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgdGl0bGVMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcbiAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGV4dGFyZWFcIik7XG4gIGNvbnN0IGRlc2NyaXB0aW9uQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgZGVzY3JpcHRpb25MYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcbiAgY29uc3QgZGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGV4dGFyZWFcIik7XG4gIGNvbnN0IGRhdGVXcmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgZGF0ZUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IGRhdGVMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcbiAgY29uc3QgZGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgY29uc3QgdGltZUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IHRpbWVMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcbiAgY29uc3QgdGltZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgY29uc3QgbGlzdE5hbWVDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCBsaXN0U2VsZWN0TGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XG4gIGNvbnN0IGxpc3RTZWxlY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2VsZWN0XCIpO1xuICBjb25zdCBwcmlvcml0eUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IHByaW9yaXR5TGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XG4gIGNvbnN0IHByaW9yaXR5U2VsZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNlbGVjdFwiKTtcbiAgY29uc3QgYmFja0J0bkNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IGJhY2tCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICBjb25zdCBiYWNrQnRuSW1nID0gbmV3IEltYWdlKCk7XG5cbiAgZm9ybS5jbGFzc0xpc3QuYWRkKFwiZnVsbC10YXNrLWZvcm1cIik7XG4gIGZvcm0uZGF0YXNldC5udW0gPSB0YXNrSW5kZXg7XG4gIGRlc2NyaXB0aW9uQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJkZXNjcmlwdGlvblwiKTtcbiAgZGF0ZUNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwiZGF0ZS1jb250YWluZXJcIik7XG4gIHRpbWVDb250YWluZXIuY2xhc3NMaXN0LmFkZChcInRpbWUtY29udGFpbmVyXCIpO1xuICBiYWNrQnRuQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJiYWNrLWJ0bi1jb250YWluZXJcIik7XG4gIHRpdGxlTGFiZWwuaHRtbEZvciA9IFwidGFzay10aXRsZVwiO1xuICBkZXNjcmlwdGlvbkxhYmVsLmh0bWxGb3IgPSBcImRlc2NyaXB0aW9uXCI7XG4gIGRhdGVMYWJlbC5odG1sRm9yID0gXCJkYXRlXCI7XG4gIGRhdGVMYWJlbC50ZXh0Q29udGVudCA9IFwiRHVlIERhdGVcIjtcbiAgdGltZUxhYmVsLmh0bWxGb3IgPSBcInRpbWVcIjtcbiAgdGltZUxhYmVsLnRleHRDb250ZW50ID0gXCJEdWUgVGltZVwiO1xuICBwcmlvcml0eUxhYmVsLmh0bWxGb3IgPSBcInByaW9yaXR5XCI7XG4gIGxpc3RTZWxlY3RMYWJlbC5odG1sRm9yID0gXCJsaXN0XCI7XG4gIGJhY2tCdG4udHlwZSA9IFwiYnV0dG9uXCI7XG4gIGJhY2tCdG4uY2xhc3NMaXN0LmFkZChcImJhY2stYnRuXCIpO1xuICBiYWNrQnRuSW1nLnNyYyA9IEltZzY7XG4gIGJhY2tCdG5JbWcuYWx0ID0gXCJCYWNrIGFycm93IGljb25cIjtcbiAgdGl0bGUubmFtZSA9IFwidGl0bGVcIjtcbiAgdGl0bGUuaWQgPSBcInRhc2stdGl0bGVcIjtcbiAgdGl0bGUudmFsdWUgPSB0YXNrVGl0bGU7XG4gIHRpdGxlLm1heExlbmd0aCA9IFwiMzVcIjtcbiAgdGl0bGUucmVxdWlyZWQgPSB0cnVlO1xuICBkZXNjcmlwdGlvbi5uYW1lID0gXCJkZXNjcmlwdGlvblwiO1xuICBkZXNjcmlwdGlvbi5pZCA9IFwiZGVzY3JpcHRpb25cIjtcbiAgZGVzY3JpcHRpb24udmFsdWUgPSB0YXNrRGVzY3JpcHRpb247XG4gIGxpc3RTZWxlY3QubmFtZSA9IFwibGlzdFwiO1xuICBsaXN0U2VsZWN0LmlkID0gXCJsaXN0XCI7XG4gIGRhdGUudHlwZSA9IFwiZGF0ZVwiO1xuICBkYXRlLm5hbWUgPSBcImRhdGVcIjtcbiAgZGF0ZS5pZCA9IFwiZGF0ZVwiO1xuICBkYXRlLnZhbHVlID0gdGFza0RhdGU7XG4gIHRpbWUudHlwZSA9IFwidGltZVwiO1xuICB0aW1lLm5hbWUgPSBcInRpbWVcIjtcbiAgdGltZS5pZCA9IFwidGltZVwiO1xuICB0aW1lLnZhbHVlID0gdGFza1RpbWU7XG4gIHByaW9yaXR5U2VsZWN0Lm5hbWUgPSBcInByaW9yaXR5XCI7XG4gIHByaW9yaXR5U2VsZWN0LmlkID0gXCJwcmlvcml0eVwiO1xuXG4gIC8vIER5bmFtaWNhbGx5IGFkZCBsaXN0IG9wdGlvbnMuIFdoZW4gdGhlIHVzZXIgYWRkcyBhIG5ldyBsaXN0LFxuICAvLyB0aGUgbmV3IGxpc3Qgd2lsbCBiZSBwcmVzZW50IGluIHRoZSBuZXh0IGZvcm0uXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgbGlzdEFycmF5Lmxlbmd0aDsgaSsrKSB7XG4gICAgY29uc3QgbGlzdE9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIik7XG5cbiAgICBsaXN0T3B0aW9uLnZhbHVlID0gbGlzdEFycmF5W2ldO1xuICAgIGxpc3RPcHRpb24udGV4dENvbnRlbnQgPSBsaXN0QXJyYXlbaV07XG5cbiAgICBpZiAobGlzdE9wdGlvbi52YWx1ZSA9PT0gbGlzdENob2ljZSkge1xuICAgICAgbGlzdE9wdGlvbi5zZWxlY3RlZCA9IHRydWU7XG4gICAgfVxuICAgIGxpc3RTZWxlY3QuYXBwZW5kQ2hpbGQobGlzdE9wdGlvbik7XG4gIH1cblxuICBmb3IgKGxldCBpID0gMDsgaSA8IHByaW9yaXR5QXJyYXkubGVuZ3RoOyBpKyspIHtcbiAgICBjb25zdCBwcmlvcml0eU9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIik7XG5cbiAgICBwcmlvcml0eU9wdGlvbi52YWx1ZSA9IHByaW9yaXR5QXJyYXlbaV07XG4gICAgcHJpb3JpdHlPcHRpb24udGV4dENvbnRlbnQgPSBwcmlvcml0eUFycmF5W2ldO1xuXG4gICAgcHJpb3JpdHlTZWxlY3QuYXBwZW5kQ2hpbGQocHJpb3JpdHlPcHRpb24pO1xuXG4gICAgaWYgKHByaW9yaXR5QXJyYXlbaV0gPT09IHRhc2tQcmlvcml0eSkge1xuICAgICAgcHJpb3JpdHlPcHRpb24uc2VsZWN0ZWQgPSB0cnVlO1xuICAgIH1cbiAgfVxuXG4gIHRpdGxlQ29udGFpbmVyLmFwcGVuZENoaWxkKHRpdGxlTGFiZWwpO1xuICB0aXRsZUNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aXRsZSk7XG4gIGxpc3ROYW1lQ29udGFpbmVyLmFwcGVuZENoaWxkKGxpc3RTZWxlY3RMYWJlbCk7XG4gIGxpc3ROYW1lQ29udGFpbmVyLmFwcGVuZENoaWxkKGxpc3RTZWxlY3QpO1xuICBwcmlvcml0eUNvbnRhaW5lci5hcHBlbmRDaGlsZChwcmlvcml0eUxhYmVsKTtcbiAgcHJpb3JpdHlDb250YWluZXIuYXBwZW5kQ2hpbGQocHJpb3JpdHlTZWxlY3QpO1xuICBkZXNjcmlwdGlvbkNvbnRhaW5lci5hcHBlbmRDaGlsZChkZXNjcmlwdGlvbkxhYmVsKTtcbiAgZGVzY3JpcHRpb25Db250YWluZXIuYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb24pO1xuICBkYXRlQ29udGFpbmVyLmFwcGVuZENoaWxkKGRhdGVMYWJlbCk7XG4gIGRhdGVDb250YWluZXIuYXBwZW5kQ2hpbGQoZGF0ZSk7XG4gIHRpbWVDb250YWluZXIuYXBwZW5kQ2hpbGQodGltZUxhYmVsKTtcbiAgdGltZUNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aW1lKTtcbiAgZGF0ZVdyYXBwZXIuYXBwZW5kQ2hpbGQoZGF0ZUNvbnRhaW5lcik7XG4gIGRhdGVXcmFwcGVyLmFwcGVuZENoaWxkKHRpbWVDb250YWluZXIpO1xuICBiYWNrQnRuLmFwcGVuZENoaWxkKGJhY2tCdG5JbWcpO1xuICBiYWNrQnRuQ29udGFpbmVyLmFwcGVuZENoaWxkKGJhY2tCdG4pO1xuICBoZWFkZXIuYXBwZW5kQ2hpbGQoYmFja0J0bkNvbnRhaW5lcik7XG4gIGZvcm0uYXBwZW5kQ2hpbGQodGl0bGVDb250YWluZXIpO1xuICBmb3JtLmFwcGVuZENoaWxkKGxpc3ROYW1lQ29udGFpbmVyKTtcbiAgZm9ybS5hcHBlbmRDaGlsZChkZXNjcmlwdGlvbkNvbnRhaW5lcik7XG4gIGZvcm0uYXBwZW5kQ2hpbGQoZGF0ZVdyYXBwZXIpO1xuICBmb3JtLmFwcGVuZENoaWxkKHByaW9yaXR5Q29udGFpbmVyKTtcbiAgZGlzcGxheS5hcHBlbmRDaGlsZChmb3JtKTtcbn07XG5cbmNvbnN0IHNvcnRUYXNrQmFycyA9ICgpID0+IHtcbiAgY29uc3QgZGlzcGxheSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudGFzay1kaXNwbGF5XCIpO1xuICBjb25zdCBoZWFkaW5nID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImgyXCIpO1xuICBjb25zdCB0b2RheURhdGUgPSBuZXcgRGF0ZSgpLnRvSVNPU3RyaW5nKCkuc3BsaXQoXCJUXCIpWzBdO1xuXG4gIGRpc3BsYXkudGV4dENvbnRlbnQgPSBcIlwiO1xuXG4gIGNvbnN0IG1lbnVDaG9pY2UgPSAoYnRuKSA9PiB7XG4gICAgY29uc3Qgc2libGluZyA9IGJ0bi5uZXh0RWxlbWVudFNpYmxpbmc7XG4gICAgY29uc3QgYnRuQ2xhc3MgPSBidG4uY2xhc3NOYW1lO1xuXG4gICAgaWYgKGJ0bkNsYXNzLmluY2x1ZGVzKFwidG9kYXlcIikpIHtcbiAgICAgIGhlYWRpbmcudGV4dENvbnRlbnQgPSBcIlRvZGF5XCI7XG4gICAgfSBlbHNlIGlmIChidG5DbGFzcy5pbmNsdWRlcyhcInVwY29taW5nXCIpKSB7XG4gICAgICBoZWFkaW5nLnRleHRDb250ZW50ID0gXCJVcGNvbWluZ1wiO1xuICAgIH0gZWxzZSBpZiAoYnRuQ2xhc3MuaW5jbHVkZXMoXCJjcml0aWNhbFwiKSkge1xuICAgICAgaGVhZGluZy50ZXh0Q29udGVudCA9IFwiQ3JpdGljYWwgUHJpb3JpdHkgVGFza3NcIjtcbiAgICB9IGVsc2UgaWYgKGJ0bkNsYXNzLmluY2x1ZGVzKFwiaGlnaFwiKSkge1xuICAgICAgaGVhZGluZy50ZXh0Q29udGVudCA9IFwiSGlnaCBQcmlvcml0eSBUYXNrc1wiO1xuICAgIH0gZWxzZSBpZiAoYnRuQ2xhc3MuaW5jbHVkZXMoXCJub3JtYWxcIikpIHtcbiAgICAgIGhlYWRpbmcudGV4dENvbnRlbnQgPSBcIk5vcm1hbCBQcmlvcml0eSBUYXNrc1wiO1xuICAgIH0gZWxzZSBpZiAoYnRuQ2xhc3MuaW5jbHVkZXMoXCJwZXJzb25hbFwiKSkge1xuICAgICAgaGVhZGluZy50ZXh0Q29udGVudCA9IFwiUGVyc29uYWxcIjtcbiAgICB9IGVsc2UgaWYgKGJ0bkNsYXNzLmluY2x1ZGVzKFwid29ya1wiKSkge1xuICAgICAgaGVhZGluZy50ZXh0Q29udGVudCA9IFwiV29ya1wiO1xuICAgIH0gZWxzZSBpZiAoYnRuQ2xhc3MuaW5jbHVkZXMoXCJzaG9wcGluZ1wiKSkge1xuICAgICAgaGVhZGluZy50ZXh0Q29udGVudCA9IFwiU2hvcHBpbmdcIjtcbiAgICB9IGVsc2Uge1xuICAgICAgbGV0IHRpdGxlID0gYnRuQ2xhc3MucmVwbGFjZUFsbChcIi1cIiwgXCIgXCIpO1xuICAgICAgaGVhZGluZy50ZXh0Q29udGVudCA9IHRpdGxlLnJlcGxhY2VBbGwoXCJidG5cIiwgXCJcIik7XG4gICAgfVxuXG4gICAgaWYgKHNpYmxpbmcudGV4dENvbnRlbnQgIT09IFwiXCIpIHtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGFza0FycmF5Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGNvbnN0IG9iaiA9IHRhc2tBcnJheVtpXTtcbiAgICAgICAgY29uc3QgdGFza1RpdGxlID0gb2JqW1widGl0bGVcIl07XG4gICAgICAgIGNvbnN0IGxpc3RDaG9pY2UgPSBvYmpbXCJsaXN0XCJdO1xuICAgICAgICBjb25zdCB0YXNrRGF0ZSA9IG9ialtcImRhdGVcIl07XG4gICAgICAgIGNvbnN0IHByaW9yaXR5ID0gb2JqW1wicHJpb3JpdHlcIl07XG5cbiAgICAgICAgaWYgKFxuICAgICAgICAgIGJ0bkNsYXNzLmluY2x1ZGVzKGxpc3RDaG9pY2UpIHx8XG4gICAgICAgICAgKHRvZGF5RGF0ZSA9PT0gdGFza0RhdGUgJiYgYnRuQ2xhc3MuaW5jbHVkZXMoXCJ0b2RheVwiKSkgfHxcbiAgICAgICAgICAodG9kYXlEYXRlICE9PSB0YXNrRGF0ZSAmJiBidG5DbGFzcy5pbmNsdWRlcyhcInVwY29taW5nXCIpKSB8fFxuICAgICAgICAgIGJ0bkNsYXNzLmluY2x1ZGVzKHByaW9yaXR5KVxuICAgICAgICApIHtcbiAgICAgICAgICAvLyBjcmVhdGUgZWxlbWVudHMgZm9yIGVhY2ggdGFza1xuICAgICAgICAgIGNvbnN0IHdyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICAgIGNvbnN0IGNoZWNrQm94Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImZvcm1cIik7XG4gICAgICAgICAgY29uc3QgY2hlY2tCb3hMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcbiAgICAgICAgICBjb25zdCBjaGVja0JveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICAgICAgICBjb25zdCB3cmFwcGVyVHdvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoM1wiKTtcbiAgICAgICAgICBjb25zdCBkYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgICBjb25zdCBsaXN0Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgICBjb25zdCBsaXN0TmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgICAgICAgIGNvbnN0IGxpc3RJbWcgPSBuZXcgSW1hZ2UoKTtcblxuICAgICAgICAgIHdyYXBwZXIuY2xhc3NMaXN0LmFkZChcInRhc2tcIik7XG4gICAgICAgICAgd3JhcHBlci5pZCA9IHRhc2tUaXRsZTtcbiAgICAgICAgICB3cmFwcGVyLmRhdGFzZXQubnVtID0gaTtcbiAgICAgICAgICBjaGVja0JveExhYmVsLmh0bWxGb3IgPSBcImNoZWNrYm94XCI7XG4gICAgICAgICAgY2hlY2tCb3gudHlwZSA9IFwiY2hlY2tib3hcIjtcbiAgICAgICAgICBjaGVja0JveC5uYW1lID0gXCJ0YXNrLWNoZWNrYm94XCI7XG4gICAgICAgICAgY2hlY2tCb3guY2xhc3NMaXN0LmFkZChcImNoZWNrYm94XCIpO1xuICAgICAgICAgIHRpdGxlLnRleHRDb250ZW50ID0gdGFza1RpdGxlO1xuICAgICAgICAgIGRhdGUudGV4dENvbnRlbnQgPSB0YXNrRGF0ZTtcbiAgICAgICAgICBsaXN0TmFtZS50ZXh0Q29udGVudCA9IGxpc3RDaG9pY2U7XG5cbiAgICAgICAgICBpZiAobGlzdENob2ljZSA9PT0gXCJwZXJzb25hbFwiKSB7XG4gICAgICAgICAgICBsaXN0SW1nLnNyYyA9IEltZztcbiAgICAgICAgICAgIGxpc3RJbWcuYWx0ID0gXCJQZXJzb24gaWNvblwiO1xuICAgICAgICAgIH0gZWxzZSBpZiAobGlzdENob2ljZSA9PT0gXCJ3b3JrXCIpIHtcbiAgICAgICAgICAgIGxpc3RJbWcuc3JjID0gSW1nMjtcbiAgICAgICAgICAgIGxpc3RJbWcuYWx0ID0gXCJCcmllZmNhc2UgaWNvblwiO1xuICAgICAgICAgIH0gZWxzZSBpZiAobGlzdENob2ljZSA9PT0gXCJzaG9wcGluZ1wiKSB7XG4gICAgICAgICAgICBsaXN0SW1nLnNyYyA9IEltZzM7XG4gICAgICAgICAgICBsaXN0SW1nLmFsdCA9IFwiU2hvcHBpbmcgY2FydCBpY29uXCI7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGxpc3RJbWcuc3JjID0gSW1nNDtcbiAgICAgICAgICAgIGxpc3RJbWcuYWx0ID0gXCJMYXJnZSBkb3QgaWNvblwiO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGNoZWNrQm94Q29udGFpbmVyLmFwcGVuZENoaWxkKGNoZWNrQm94TGFiZWwpO1xuICAgICAgICAgIGNoZWNrQm94Q29udGFpbmVyLmFwcGVuZENoaWxkKGNoZWNrQm94KTtcbiAgICAgICAgICB3cmFwcGVyVHdvLmFwcGVuZENoaWxkKHRpdGxlKTtcbiAgICAgICAgICB3cmFwcGVyVHdvLmFwcGVuZENoaWxkKGRhdGUpO1xuICAgICAgICAgIGxpc3RDb250YWluZXIuYXBwZW5kQ2hpbGQobGlzdE5hbWUpO1xuICAgICAgICAgIGxpc3RDb250YWluZXIuYXBwZW5kQ2hpbGQobGlzdEltZyk7XG4gICAgICAgICAgd3JhcHBlci5hcHBlbmRDaGlsZChjaGVja0JveENvbnRhaW5lcik7XG4gICAgICAgICAgd3JhcHBlci5hcHBlbmRDaGlsZCh3cmFwcGVyVHdvKTtcbiAgICAgICAgICB3cmFwcGVyLmFwcGVuZENoaWxkKGxpc3RDb250YWluZXIpO1xuICAgICAgICAgIGRpc3BsYXkuYXBwZW5kQ2hpbGQod3JhcHBlcik7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgZW1wdHlJbmRpY2F0b3IoKTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgdG9kYXlTdG9yZWRUYXNrcyA9ICgpID0+IHtcbiAgICBsZXQgY291bnQgPSAwO1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0YXNrQXJyYXkubGVuZ3RoOyBpKyspIHtcbiAgICAgIGNvbnN0IG9iaiA9IHRhc2tBcnJheVtpXTtcbiAgICAgIGNvbnN0IHRhc2tUaXRsZSA9IG9ialtcInRpdGxlXCJdO1xuICAgICAgY29uc3QgbGlzdENob2ljZSA9IG9ialtcImxpc3RcIl07XG4gICAgICBjb25zdCB0YXNrRGF0ZSA9IG9ialtcImRhdGVcIl07XG5cbiAgICAgIGlmICh0b2RheURhdGUgPT09IHRhc2tEYXRlKSB7XG4gICAgICAgIGNvdW50ICs9IDE7XG5cbiAgICAgICAgLy8gY3JlYXRlIGVsZW1lbnRzIGZvciBlYWNoIHRhc2tcbiAgICAgICAgY29uc3Qgd3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIGNvbnN0IGNoZWNrQm94Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImZvcm1cIik7XG4gICAgICAgIGNvbnN0IGNoZWNrQm94TGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XG4gICAgICAgIGNvbnN0IGNoZWNrQm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgICAgICBjb25zdCB3cmFwcGVyVHdvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDNcIik7XG4gICAgICAgIGNvbnN0IGRhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBjb25zdCBsaXN0Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgY29uc3QgbGlzdE5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICAgICAgY29uc3QgbGlzdEltZyA9IG5ldyBJbWFnZSgpO1xuXG4gICAgICAgIHdyYXBwZXIuY2xhc3NMaXN0LmFkZChcInRhc2tcIik7XG4gICAgICAgIHdyYXBwZXIuaWQgPSB0YXNrVGl0bGU7XG4gICAgICAgIHdyYXBwZXIuZGF0YXNldC5udW0gPSBpO1xuICAgICAgICBjaGVja0JveExhYmVsLmh0bWxGb3IgPSBcImNoZWNrYm94XCI7XG4gICAgICAgIGNoZWNrQm94LnR5cGUgPSBcImNoZWNrYm94XCI7XG4gICAgICAgIGNoZWNrQm94Lm5hbWUgPSBcInRhc2stY2hlY2tib3hcIjtcbiAgICAgICAgY2hlY2tCb3guY2xhc3NMaXN0LmFkZChcImNoZWNrYm94XCIpO1xuICAgICAgICB0aXRsZS50ZXh0Q29udGVudCA9IHRhc2tUaXRsZTtcbiAgICAgICAgZGF0ZS50ZXh0Q29udGVudCA9IHRhc2tEYXRlO1xuICAgICAgICBsaXN0TmFtZS50ZXh0Q29udGVudCA9IGxpc3RDaG9pY2U7XG5cbiAgICAgICAgaWYgKGxpc3RDaG9pY2UgPT09IFwicGVyc29uYWxcIikge1xuICAgICAgICAgIGxpc3RJbWcuc3JjID0gSW1nO1xuICAgICAgICAgIGxpc3RJbWcuYWx0ID0gXCJQZXJzb24gaWNvblwiO1xuICAgICAgICB9IGVsc2UgaWYgKGxpc3RDaG9pY2UgPT09IFwid29ya1wiKSB7XG4gICAgICAgICAgbGlzdEltZy5zcmMgPSBJbWcyO1xuICAgICAgICAgIGxpc3RJbWcuYWx0ID0gXCJCcmllZmNhc2UgaWNvblwiO1xuICAgICAgICB9IGVsc2UgaWYgKGxpc3RDaG9pY2UgPT09IFwic2hvcHBpbmdcIikge1xuICAgICAgICAgIGxpc3RJbWcuc3JjID0gSW1nMztcbiAgICAgICAgICBsaXN0SW1nLmFsdCA9IFwiU2hvcHBpbmcgY2FydCBpY29uXCI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgbGlzdEltZy5zcmMgPSBJbWc0O1xuICAgICAgICAgIGxpc3RJbWcuYWx0ID0gXCJMYXJnZSBkb3QgaWNvblwiO1xuICAgICAgICB9XG5cbiAgICAgICAgY2hlY2tCb3hDb250YWluZXIuYXBwZW5kQ2hpbGQoY2hlY2tCb3hMYWJlbCk7XG4gICAgICAgIGNoZWNrQm94Q29udGFpbmVyLmFwcGVuZENoaWxkKGNoZWNrQm94KTtcbiAgICAgICAgd3JhcHBlclR3by5hcHBlbmRDaGlsZCh0aXRsZSk7XG4gICAgICAgIHdyYXBwZXJUd28uYXBwZW5kQ2hpbGQoZGF0ZSk7XG4gICAgICAgIGxpc3RDb250YWluZXIuYXBwZW5kQ2hpbGQobGlzdE5hbWUpO1xuICAgICAgICBsaXN0Q29udGFpbmVyLmFwcGVuZENoaWxkKGxpc3RJbWcpO1xuICAgICAgICB3cmFwcGVyLmFwcGVuZENoaWxkKGNoZWNrQm94Q29udGFpbmVyKTtcbiAgICAgICAgd3JhcHBlci5hcHBlbmRDaGlsZCh3cmFwcGVyVHdvKTtcbiAgICAgICAgd3JhcHBlci5hcHBlbmRDaGlsZChsaXN0Q29udGFpbmVyKTtcbiAgICAgICAgZGlzcGxheS5hcHBlbmRDaGlsZCh3cmFwcGVyKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoY291bnQgPT09IDApIHtcbiAgICAgIGVtcHR5SW5kaWNhdG9yKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB7IG1lbnVDaG9pY2UsIHRvZGF5U3RvcmVkVGFza3MgfTtcbn07XG5cbmNvbnN0IGRlbGV0ZVRhc2sgPSAoKSA9PiB7XG4gIGNvbnN0IGRpc3BsYXkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRhc2stZGlzcGxheVwiKTtcbiAgY29uc3QgdGFza3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmNoZWNrYm94XCIpO1xuICBjb25zdCBkaXNwbGF5Tm9kZXMgPSBkaXNwbGF5LmNoaWxkTm9kZXM7XG5cbiAgdGFza3MuZm9yRWFjaCgodGFzaykgPT4ge1xuICAgIGlmICh0YXNrLmNoZWNrZWQgPT09IHRydWUpIHtcbiAgICAgIGNvbnN0IGdyYW5kUGFyZW50ID0gdGFzay5wYXJlbnROb2RlLnBhcmVudE5vZGU7XG4gICAgICBjb25zdCB0YXNrSW5kZXggPSBncmFuZFBhcmVudC5kYXRhc2V0Lm51bTtcblxuICAgICAgdGFza0FycmF5LnNwbGljZSh0YXNrSW5kZXgsIDEpO1xuICAgICAgZGlzcGxheS5yZW1vdmVDaGlsZChkaXNwbGF5Tm9kZXNbdGFza0luZGV4XSk7XG5cbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZGlzcGxheU5vZGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGRpc3BsYXlOb2Rlc1tpXS5kYXRhc2V0Lm51bSA9IGk7XG4gICAgICB9XG4gICAgfVxuICB9KTtcblxuICBpZiAoZGlzcGxheS50ZXh0Q29udGVudCA9PT0gXCJcIikge1xuICAgIGVtcHR5SW5kaWNhdG9yKCk7XG4gICAgZGVsZXRlQnRuQ29udHJvbGxlcigpLnJlbW92ZURlbGV0ZUJ0bigpO1xuICB9XG59O1xuXG5leHBvcnQgeyB0YXNrQmFycywgdGFza1BhZ2UsIHNvcnRUYXNrQmFycywgZGVsZXRlVGFzayB9O1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIud3JhcHBlciB7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICB3aWR0aDogMTAwJTtcXG4gIHBhZGRpbmc6IDE1cHg7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiA4MHB4IDFmcjtcXG59XFxuXFxuaDIge1xcbiAgY29sb3I6ICNmNDQzMzY7XFxufVxcblxcbi50YXNrLWRpc3BsYXkge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBnYXA6IDEwcHg7XFxuICBvdmVyZmxvdy15OiBhdXRvO1xcbn1cXG5cXG4uZW1wdHktaW5kaWNhdG9yIHtcXG4gIHBhZGRpbmc6IDEwcHg7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBib3R0b206IDUwJTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xcbn1cXG5cXG4udGFzayxcXG4ubGlzdC1iYXIge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDUwcHg7XFxuICBwYWRkaW5nOiA1cHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZ2FwOiAxMHB4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmxpc3QtYmFyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNlM2U5ZjY7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbn1cXG5cXG4ubGlzdC1iYXIgPiBkaXYge1xcbiAgcGFkZGluZzogNXB4O1xcbn1cXG5cXG4uZGlzcGxheS1idG4tY29udGFpbmVyIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHJpZ2h0OiAxMHB4O1xcbiAgYm90dG9tOiAxMHB4O1xcbn1cXG5cXG4uYmFjay1idG4tY29udGFpbmVyLFxcbi5kZWwtYnRuLWNvbnRhaW5lciB7XFxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxufVxcblxcbi53cmFwcGVyIGJ1dHRvbiB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGVlMGUwO1xcbiAgcGFkZGluZzogNXB4O1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGp1c3RpZnktc2VsZjogc2VsZi1zdGFydDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5saXN0LWJhciBwIHtcXG4gIGZvbnQtc2l6ZTogMC43NXJlbTtcXG5cXG4gIG9wYWNpdHk6IDAuNztcXG59XFxuXFxuLmxpc3QtYmFyIC5yZW1vdmUtcHJvamVjdC1idG4ge1xcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTNlOWY2O1xcbn1cXG5cXG4udGFzayA+IGRpdiB7XFxuICBwYWRkaW5nOiA1cHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZ2FwOiA1cHg7XFxuICBwb2ludGVyLWV2ZW50czogbm9uZTtcXG59XFxuXFxuLnRhc2sgPiBkaXY6bnRoLWNoaWxkKDIpIHtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbi50YXNrID4gZGl2Om50aC1vZi10eXBlKDIpIHtcXG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xcbn1cXG5cXG4udGFzayBpbWcge1xcbiAgaGVpZ2h0OiAxNXB4O1xcbiAgd2lkdGg6IDE1cHg7XFxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxufVxcblxcbi5iYWNrLWJ0biBpbWcsXFxuLmRlbC1idG4gaW1nLFxcbi5jcmVhdGUtbGlzdC1idG4gaW1nLFxcbi5yZW1vdmUtcHJvamVjdC1idG4gaW1nIHtcXG4gIGhlaWdodDogMzBweDtcXG4gIHdpZHRoOiAzMHB4O1xcbn1cXG5cXG4uZW1wdHktaW5kaWNhdG9yIGltZyB7XFxuICBoZWlnaHQ6IDEwMHB4O1xcbiAgd2lkdGg6IDEwMHB4O1xcbn1cXG5cXG4ud3JhcHBlciBidXR0b246aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2NjY2NjYztcXG59XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2NvbnRlbnQuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UsWUFBWTtFQUNaLFdBQVc7RUFDWCxhQUFhO0VBQ2Isa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYiw0QkFBNEI7QUFDOUI7O0FBRUE7RUFDRSxjQUFjO0FBQ2hCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsU0FBUztFQUNULGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixrQkFBa0I7RUFDbEIsV0FBVztFQUNYLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsa0JBQWtCO0FBQ3BCOztBQUVBOztFQUVFLFdBQVc7RUFDWCxZQUFZO0VBQ1osWUFBWTtFQUNaLGFBQWE7RUFDYixTQUFTO0VBQ1QsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsWUFBWTtBQUNkOztBQUVBOztFQUVFLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixZQUFZO0VBQ1osWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2Isd0JBQXdCO0VBQ3hCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGtCQUFrQjs7RUFFbEIsWUFBWTtBQUNkOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLFlBQVk7RUFDWixhQUFhO0VBQ2IsUUFBUTtFQUNSLG9CQUFvQjtBQUN0Qjs7QUFFQTtFQUNFLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLFlBQVk7RUFDWixXQUFXO0VBQ1gsa0JBQWtCO0FBQ3BCOztBQUVBOzs7O0VBSUUsWUFBWTtFQUNaLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGFBQWE7RUFDYixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSx5QkFBeUI7QUFDM0JcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLndyYXBwZXIge1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBwYWRkaW5nOiAxNXB4O1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogODBweCAxZnI7XFxufVxcblxcbmgyIHtcXG4gIGNvbG9yOiAjZjQ0MzM2O1xcbn1cXG5cXG4udGFzay1kaXNwbGF5IHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ2FwOiAxMHB4O1xcbiAgb3ZlcmZsb3cteTogYXV0bztcXG59XFxuXFxuLmVtcHR5LWluZGljYXRvciB7XFxuICBwYWRkaW5nOiAxMHB4O1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgYm90dG9tOiA1MCU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcXG59XFxuXFxuLnRhc2ssXFxuLmxpc3QtYmFyIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiA1MHB4O1xcbiAgcGFkZGluZzogNXB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGdhcDogMTBweDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5saXN0LWJhciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTNlOWY2O1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG59XFxuXFxuLmxpc3QtYmFyID4gZGl2IHtcXG4gIHBhZGRpbmc6IDVweDtcXG59XFxuXFxuLmRpc3BsYXktYnRuLWNvbnRhaW5lciB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICByaWdodDogMTBweDtcXG4gIGJvdHRvbTogMTBweDtcXG59XFxuXFxuLmJhY2stYnRuLWNvbnRhaW5lcixcXG4uZGVsLWJ0bi1jb250YWluZXIge1xcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xcbn1cXG5cXG4ud3JhcHBlciBidXR0b24ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2RlZTBlMDtcXG4gIHBhZGRpbmc6IDVweDtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBqdXN0aWZ5LXNlbGY6IHNlbGYtc3RhcnQ7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4ubGlzdC1iYXIgcCB7XFxuICBmb250LXNpemU6IDAuNzVyZW07XFxuXFxuICBvcGFjaXR5OiAwLjc7XFxufVxcblxcbi5saXN0LWJhciAucmVtb3ZlLXByb2plY3QtYnRuIHtcXG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2UzZTlmNjtcXG59XFxuXFxuLnRhc2sgPiBkaXYge1xcbiAgcGFkZGluZzogNXB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGdhcDogNXB4O1xcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxufVxcblxcbi50YXNrID4gZGl2Om50aC1jaGlsZCgyKSB7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4udGFzayA+IGRpdjpudGgtb2YtdHlwZSgyKSB7XFxuICBtYXJnaW4tbGVmdDogYXV0bztcXG59XFxuXFxuLnRhc2sgaW1nIHtcXG4gIGhlaWdodDogMTVweDtcXG4gIHdpZHRoOiAxNXB4O1xcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xcbn1cXG5cXG4uYmFjay1idG4gaW1nLFxcbi5kZWwtYnRuIGltZyxcXG4uY3JlYXRlLWxpc3QtYnRuIGltZyxcXG4ucmVtb3ZlLXByb2plY3QtYnRuIGltZyB7XFxuICBoZWlnaHQ6IDMwcHg7XFxuICB3aWR0aDogMzBweDtcXG59XFxuXFxuLmVtcHR5LWluZGljYXRvciBpbWcge1xcbiAgaGVpZ2h0OiAxMDBweDtcXG4gIHdpZHRoOiAxMDBweDtcXG59XFxuXFxuLndyYXBwZXIgYnV0dG9uOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNjY2NjY2M7XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi50YXNrLWZvcm0ge1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmciAxZnIgMWZyO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgM2ZyIDUwcHggNTBweDtcXG4gIGdhcDogMTBweDtcXG59XFxuXFxuLmZ1bGwtdGFzay1mb3JtIHtcXG4gIGhlaWdodDogMTAwJTtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAyZnIgMWZyO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgNTBweCAzZnIgNTBweCA1MHB4O1xcbiAganVzdGlmeS1pdGVtczogY2VudGVyO1xcbn1cXG5cXG5ib2R5Lm1vZGFsLW9wZW4ge1xcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxufVxcblxcbmJvZHkubW9kYWwtb3BlbiAudGFzay1mb3JtIHtcXG4gIG9wYWNpdHk6IDAuNTtcXG59XFxuXFxuYm9keS5tb2RhbC1vcGVuIC5wb3AtdXAge1xcbiAgcG9pbnRlci1ldmVudHM6IGF1dG87XFxufVxcblxcbi5wb3AtdXAge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgd2lkdGg6IDI1MHB4O1xcbiAgaGVpZ2h0OiAxNTBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM3N2M0ZmU7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBwYWRkaW5nOiAxMHB4O1xcbiAgdG9wOiA1MCU7XFxuICBsZWZ0OiA1MCU7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ2FwOiA1cHg7XFxufVxcblxcbi5wb3AtdXAgbGFiZWwsXFxuLnBvcC11cCBkaXYge1xcbiAgcGFkZGluZzogNXB4IDBweDtcXG59XFxuXFxuLnBvcC11cCBpbnB1dCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNzdjNGZlO1xcbiAgYm9yZGVyLXJhZGl1czogMHB4O1xcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICMwNTAyMDM7XFxufVxcblxcbi5wb3AtdXAgPiBkaXYge1xcbiAgbWFyZ2luLXRvcDogYXV0bztcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBnYXA6IDEwcHg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGVuZDtcXG59XFxuXFxuLnBvcC11cCBidXR0b24ge1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgd2lkdGg6IDYwcHg7XFxufVxcblxcbi50YXNrID4gZm9ybSB7XFxuICBwYWRkaW5nOiA1cHg7XFxufVxcblxcbi50YXNrLWZvcm0gPiBkaXYge1xcbiAgcGFkZGluZzogNXB4O1xcbn1cXG5cXG4uZnVsbC10YXNrLWZvcm0gI3Rhc2stdGl0bGUge1xcbiAgZm9udC1zaXplOiAxLjVyZW07XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIGhlaWdodDogYXV0bztcXG4gIHdpZHRoOiAzMDBweDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLnRhc2stZm9ybSAjdGFzay10aXRsZSB7XFxuICB3aWR0aDogMzAwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjZmOGZjO1xcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICMwNTAyMDM7XFxuICBib3JkZXItcmFkaXVzOiAwcHg7XFxufVxcblxcbi50aXRsZS13cmFwcGVyIHtcXG4gIGdyaWQtY29sdW1uOiAyIC8gNDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ2FwOiAxMHB4O1xcbn1cXG5cXG4uZGVzY3JpcHRpb24td3JhcHBlciB7XFxuICBncmlkLWNvbHVtbjogMiAvIDQ7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGdhcDogMTBweDtcXG59XFxuXFxuLmR1ZS1kYXRlLXdyYXBwZXIge1xcbiAgZ3JpZC1jb2x1bW46IDIgLyA0O1xcbiAgZ3JpZC1yb3c6IDMgLyA0O1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcXG4gIGdhcDogMjBweDtcXG59XFxuXFxuLnByaW9yaXR5LXdyYXBwZXIge1xcbiAgZ3JpZC1jb2x1bW46IDIgLyAzO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogNjBweCAxNDBweDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5saXN0LXdyYXBwZXIge1xcbiAgZ3JpZC1jb2x1bW46IDMgLyA0O1xcbiAgZ3JpZC1yb3c6IDQgLyA1O1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDQwcHg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiAycHg7XFxufVxcblxcbi5kYXRlLWNvbnRhaW5lcixcXG4udGltZS1jb250YWluZXIge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogNjBweCAxNDBweDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5mdWxsLXRhc2stZm9ybSA+IGRpdiB7XFxuICBncmlkLWNvbHVtbjogMiAvIDM7XFxuICB3aWR0aDogMTAwJTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBwYWRkaW5nOiAxMHB4O1xcbn1cXG5cXG4uZnVsbC10YXNrLWZvcm0gLmRhdGUtY29udGFpbmVyLFxcbi5mdWxsLXRhc2stZm9ybSAudGltZS1jb250YWluZXIge1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiA4MHB4IDE0MHB4O1xcbn1cXG5cXG4uZnVsbC10YXNrLWZvcm0gPiBkaXY6bnRoLWNoaWxkKDQpIHtcXG4gIGdhcDogMTBweDtcXG59XFxuXFxuLmZ1bGwtdGFzay1mb3JtIHNlbGVjdCB7XFxuICB3aWR0aDogMTAwcHg7XFxufVxcblxcbi5saXN0LXdyYXBwZXIgPiBkaXYge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogNjBweCBtaW5tYXgoMTAwcHgsIDE0MHB4KTtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbmlucHV0LFxcbnRleHRhcmVhLFxcbnNlbGVjdCB7XFxuICBoZWlnaHQ6IDM1cHg7XFxuICBmb250LWZhbWlseTogXFxcIk9wZW4gU2Fuc1xcXCIsIHNhbnMtc2VyaWY7XFxuICBmb250LXdlaWdodDogNDAwO1xcbiAgZm9udC1zaXplOiAxcmVtO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2RlZTBlMDtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIHBhZGRpbmc6IDVweDtcXG59XFxuLyogXFxuLmZ1bGwtdGFzay1mb3JtIGlucHV0LFxcbi5mdWxsLXRhc2stZm9ybSB0ZXh0YXJlYSxcXG4uZnVsbC10YXNrLWZvcm0gc2VsZWN0IHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNlYmVjZWQ7XFxufSAqL1xcblxcbmxhYmVsIHtcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxufVxcblxcbnRleHRhcmVhIHtcXG4gIHJlc2l6ZTogbm9uZTtcXG59XFxuXFxuLmRlc2NyaXB0aW9uID4gdGV4dGFyZWEsXFxuLmRlc2NyaXB0aW9uLXdyYXBwZXIgPiB0ZXh0YXJlYSB7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuXFxuLnRhc2stZm9ybSAjdGFzay10aXRsZTpmb2N1cyxcXG4ucG9wLXVwIGlucHV0IHtcXG4gIG91dGxpbmU6IG5vbmU7XFxufVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9mb3Jtcy5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxZQUFZO0VBQ1osYUFBYTtFQUNiLHNDQUFzQztFQUN0QyxxQ0FBcUM7RUFDckMsU0FBUztBQUNYOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGFBQWE7RUFDYixrQ0FBa0M7RUFDbEMsMENBQTBDO0VBQzFDLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLG9CQUFvQjtBQUN0Qjs7QUFFQTtFQUNFLFlBQVk7QUFDZDs7QUFFQTtFQUNFLG9CQUFvQjtBQUN0Qjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osYUFBYTtFQUNiLHlCQUF5QjtFQUN6QixrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLFFBQVE7RUFDUixTQUFTO0VBQ1QsZ0NBQWdDO0VBQ2hDLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsUUFBUTtBQUNWOztBQUVBOztFQUVFLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixrQkFBa0I7RUFDbEIsZ0NBQWdDO0FBQ2xDOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGFBQWE7RUFDYixTQUFTO0VBQ1Qsb0JBQW9CO0FBQ3RCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFdBQVc7QUFDYjs7QUFFQTtFQUNFLFlBQVk7QUFDZDs7QUFFQTtFQUNFLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixpQkFBaUI7RUFDakIsWUFBWTtFQUNaLFlBQVk7RUFDWixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxZQUFZO0VBQ1oseUJBQXlCO0VBQ3pCLGdDQUFnQztFQUNoQyxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixTQUFTO0FBQ1g7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixTQUFTO0FBQ1g7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLGFBQWE7RUFDYiw4QkFBOEI7RUFDOUIsU0FBUztBQUNYOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYixpQ0FBaUM7RUFDakMsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZixhQUFhO0VBQ2IsK0JBQStCO0VBQy9CLG1CQUFtQjtFQUNuQixRQUFRO0FBQ1Y7O0FBRUE7O0VBRUUsYUFBYTtFQUNiLGlDQUFpQztFQUNqQyxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsV0FBVztFQUNYLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLGFBQWE7QUFDZjs7QUFFQTs7RUFFRSxpQ0FBaUM7QUFDbkM7O0FBRUE7RUFDRSxTQUFTO0FBQ1g7O0FBRUE7RUFDRSxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsZ0RBQWdEO0VBQ2hELG1CQUFtQjtBQUNyQjs7QUFFQTs7O0VBR0UsWUFBWTtFQUNaLG9DQUFvQztFQUNwQyxnQkFBZ0I7RUFDaEIsZUFBZTtFQUNmLHlCQUF5QjtFQUN6QixZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLFlBQVk7QUFDZDtBQUNBOzs7OztHQUtHOztBQUVIO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsWUFBWTtBQUNkOztBQUVBOztFQUVFLFlBQVk7RUFDWixXQUFXO0FBQ2I7O0FBRUE7O0VBRUUsYUFBYTtBQUNmXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi50YXNrLWZvcm0ge1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmciAxZnIgMWZyO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgM2ZyIDUwcHggNTBweDtcXG4gIGdhcDogMTBweDtcXG59XFxuXFxuLmZ1bGwtdGFzay1mb3JtIHtcXG4gIGhlaWdodDogMTAwJTtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAyZnIgMWZyO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgNTBweCAzZnIgNTBweCA1MHB4O1xcbiAganVzdGlmeS1pdGVtczogY2VudGVyO1xcbn1cXG5cXG5ib2R5Lm1vZGFsLW9wZW4ge1xcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxufVxcblxcbmJvZHkubW9kYWwtb3BlbiAudGFzay1mb3JtIHtcXG4gIG9wYWNpdHk6IDAuNTtcXG59XFxuXFxuYm9keS5tb2RhbC1vcGVuIC5wb3AtdXAge1xcbiAgcG9pbnRlci1ldmVudHM6IGF1dG87XFxufVxcblxcbi5wb3AtdXAge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgd2lkdGg6IDI1MHB4O1xcbiAgaGVpZ2h0OiAxNTBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM3N2M0ZmU7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBwYWRkaW5nOiAxMHB4O1xcbiAgdG9wOiA1MCU7XFxuICBsZWZ0OiA1MCU7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ2FwOiA1cHg7XFxufVxcblxcbi5wb3AtdXAgbGFiZWwsXFxuLnBvcC11cCBkaXYge1xcbiAgcGFkZGluZzogNXB4IDBweDtcXG59XFxuXFxuLnBvcC11cCBpbnB1dCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNzdjNGZlO1xcbiAgYm9yZGVyLXJhZGl1czogMHB4O1xcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICMwNTAyMDM7XFxufVxcblxcbi5wb3AtdXAgPiBkaXYge1xcbiAgbWFyZ2luLXRvcDogYXV0bztcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBnYXA6IDEwcHg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGVuZDtcXG59XFxuXFxuLnBvcC11cCBidXR0b24ge1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgd2lkdGg6IDYwcHg7XFxufVxcblxcbi50YXNrID4gZm9ybSB7XFxuICBwYWRkaW5nOiA1cHg7XFxufVxcblxcbi50YXNrLWZvcm0gPiBkaXYge1xcbiAgcGFkZGluZzogNXB4O1xcbn1cXG5cXG4uZnVsbC10YXNrLWZvcm0gI3Rhc2stdGl0bGUge1xcbiAgZm9udC1zaXplOiAxLjVyZW07XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIGhlaWdodDogYXV0bztcXG4gIHdpZHRoOiAzMDBweDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLnRhc2stZm9ybSAjdGFzay10aXRsZSB7XFxuICB3aWR0aDogMzAwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjZmOGZjO1xcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICMwNTAyMDM7XFxuICBib3JkZXItcmFkaXVzOiAwcHg7XFxufVxcblxcbi50aXRsZS13cmFwcGVyIHtcXG4gIGdyaWQtY29sdW1uOiAyIC8gNDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ2FwOiAxMHB4O1xcbn1cXG5cXG4uZGVzY3JpcHRpb24td3JhcHBlciB7XFxuICBncmlkLWNvbHVtbjogMiAvIDQ7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGdhcDogMTBweDtcXG59XFxuXFxuLmR1ZS1kYXRlLXdyYXBwZXIge1xcbiAgZ3JpZC1jb2x1bW46IDIgLyA0O1xcbiAgZ3JpZC1yb3c6IDMgLyA0O1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcXG4gIGdhcDogMjBweDtcXG59XFxuXFxuLnByaW9yaXR5LXdyYXBwZXIge1xcbiAgZ3JpZC1jb2x1bW46IDIgLyAzO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogNjBweCAxNDBweDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5saXN0LXdyYXBwZXIge1xcbiAgZ3JpZC1jb2x1bW46IDMgLyA0O1xcbiAgZ3JpZC1yb3c6IDQgLyA1O1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDQwcHg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiAycHg7XFxufVxcblxcbi5kYXRlLWNvbnRhaW5lcixcXG4udGltZS1jb250YWluZXIge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogNjBweCAxNDBweDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5mdWxsLXRhc2stZm9ybSA+IGRpdiB7XFxuICBncmlkLWNvbHVtbjogMiAvIDM7XFxuICB3aWR0aDogMTAwJTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBwYWRkaW5nOiAxMHB4O1xcbn1cXG5cXG4uZnVsbC10YXNrLWZvcm0gLmRhdGUtY29udGFpbmVyLFxcbi5mdWxsLXRhc2stZm9ybSAudGltZS1jb250YWluZXIge1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiA4MHB4IDE0MHB4O1xcbn1cXG5cXG4uZnVsbC10YXNrLWZvcm0gPiBkaXY6bnRoLWNoaWxkKDQpIHtcXG4gIGdhcDogMTBweDtcXG59XFxuXFxuLmZ1bGwtdGFzay1mb3JtIHNlbGVjdCB7XFxuICB3aWR0aDogMTAwcHg7XFxufVxcblxcbi5saXN0LXdyYXBwZXIgPiBkaXYge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogNjBweCBtaW5tYXgoMTAwcHgsIDE0MHB4KTtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbmlucHV0LFxcbnRleHRhcmVhLFxcbnNlbGVjdCB7XFxuICBoZWlnaHQ6IDM1cHg7XFxuICBmb250LWZhbWlseTogXFxcIk9wZW4gU2Fuc1xcXCIsIHNhbnMtc2VyaWY7XFxuICBmb250LXdlaWdodDogNDAwO1xcbiAgZm9udC1zaXplOiAxcmVtO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2RlZTBlMDtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIHBhZGRpbmc6IDVweDtcXG59XFxuLyogXFxuLmZ1bGwtdGFzay1mb3JtIGlucHV0LFxcbi5mdWxsLXRhc2stZm9ybSB0ZXh0YXJlYSxcXG4uZnVsbC10YXNrLWZvcm0gc2VsZWN0IHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNlYmVjZWQ7XFxufSAqL1xcblxcbmxhYmVsIHtcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxufVxcblxcbnRleHRhcmVhIHtcXG4gIHJlc2l6ZTogbm9uZTtcXG59XFxuXFxuLmRlc2NyaXB0aW9uID4gdGV4dGFyZWEsXFxuLmRlc2NyaXB0aW9uLXdyYXBwZXIgPiB0ZXh0YXJlYSB7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuXFxuLnRhc2stZm9ybSAjdGFzay10aXRsZTpmb2N1cyxcXG4ucG9wLXVwIGlucHV0IHtcXG4gIG91dGxpbmU6IG5vbmU7XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PU9wZW4rU2FucyZkaXNwbGF5PXN3YXApO1wiXSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIqIHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbn1cXG5cXG5ib2R5IHtcXG4gIGhlaWdodDogMTAwdmg7XFxuICBmb250LXNpemU6IDFyZW07XFxuICBmb250LWZhbWlseTogXFxcIk9wZW4gU2Fuc1xcXCIsIHNhbnMtc2VyaWY7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYmNjYmVhO1xcbiAgY29sb3I6ICMwNTAyMDM7XFxufVxcblxcbi5jb250ZW50IHtcXG4gIGhlaWdodDogMTAwJTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogbWlubWF4KDI0MHB4LCAxZnIpIG1pbm1heCg2MDBweCwgNWZyKTtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogNjBweCBtaW5tYXgoNjUwcHgsIDRmcikgNjBweDtcXG59XFxuXFxuLmhlYWRlciB7XFxuICBncmlkLWNvbHVtbjogMSAvIDM7XFxuICBncmlkLXJvdzogMSAvIDI7XFxuICBwYWRkaW5nOiAxMHB4IDIwcHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLm1haW4tc2VjdGlvbiB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjZmOGZjO1xcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcXG4gIG1hcmdpbjogMTBweCAyMHB4O1xcbiAgZ3JpZC1jb2x1bW4tZW5kOiBzcGFuIDM7XFxuICBncmlkLXJvdzogMiAvIDM7XFxufVxcblxcbi5mb290ZXIge1xcbiAgcGFkZGluZzogMTBweDtcXG4gIGdyaWQtY29sdW1uLWVuZDogc3BhbiAzO1xcbiAgZ3JpZC1yb3c6IDMgLyA0O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuYnV0dG9uIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiT3BlbiBTYW5zXFxcIiwgc2Fucy1zZXJpZjtcXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XFxuICBmb250LXNpemU6IDFyZW07XFxuICBjb2xvcjogIzA1MDIwMztcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLnRhc2staGVhZGVyIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciAxZnI7XFxufVxcblxcbi5tZW51LWJ0bixcXG4udmlldy1saXN0cy1idG4ge1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2JjY2JlYTtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uaGVhZGVyID4gZGl2Om50aC1jaGlsZCgyKSB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMywgMWZyKTtcXG4gIGdhcDogMjBweDtcXG59XFxuXFxuLmhlYWRlciBpbWcge1xcbiAgaGVpZ2h0OiAzNXB4O1xcbiAgd2lkdGg6IDQwcHg7XFxufVxcblxcbi5tZW51LWJ0bjpob3ZlcixcXG4udmlldy1saXN0cy1idG46aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2RlZTBlMDtcXG59XFxuXFxuLmRpc3BsYXktYnRuLWNvbnRhaW5lciBpbWcsXFxuLmRlbC1idG4tY29udGFpbmVyIGltZyxcXG4uY3JlYXRlLWxpc3QtYnRuIGltZyxcXG4uYWRkLXByb2plY3QtYnRuIGltZyxcXG4uYmFjay1idG4gaW1nLFxcbi5yZW1vdmUtcHJvamVjdC1idG4gaW1nIHtcXG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xcbn1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvbGF5b3V0LmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFFQTtFQUNFLHNCQUFzQjtFQUN0QixTQUFTO0VBQ1QsVUFBVTtBQUNaOztBQUVBO0VBQ0UsYUFBYTtFQUNiLGVBQWU7RUFDZixvQ0FBb0M7RUFDcEMseUJBQXlCO0VBQ3pCLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osV0FBVztFQUNYLGFBQWE7RUFDYiw0REFBNEQ7RUFDNUQsZ0RBQWdEO0FBQ2xEOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLDhCQUE4QjtFQUM5QixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsbUJBQW1CO0VBQ25CLGlCQUFpQjtFQUNqQix1QkFBdUI7RUFDdkIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsZUFBZTtFQUNmLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0Usb0NBQW9DO0VBQ3BDLGdCQUFnQjtFQUNoQixlQUFlO0VBQ2YsY0FBYztFQUNkLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsMkJBQTJCO0FBQzdCOztBQUVBOztFQUVFLFlBQVk7RUFDWix5QkFBeUI7RUFDekIsYUFBYTtFQUNiLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixxQ0FBcUM7RUFDckMsU0FBUztBQUNYOztBQUVBO0VBQ0UsWUFBWTtFQUNaLFdBQVc7QUFDYjs7QUFFQTs7RUFFRSx5QkFBeUI7QUFDM0I7O0FBRUE7Ozs7OztFQU1FLG9CQUFvQjtBQUN0QlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAaW1wb3J0IHVybChcXFwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1PcGVuK1NhbnMmZGlzcGxheT1zd2FwXFxcIik7XFxuXFxuKiB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG59XFxuXFxuYm9keSB7XFxuICBoZWlnaHQ6IDEwMHZoO1xcbiAgZm9udC1zaXplOiAxcmVtO1xcbiAgZm9udC1mYW1pbHk6IFxcXCJPcGVuIFNhbnNcXFwiLCBzYW5zLXNlcmlmO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2JjY2JlYTtcXG4gIGNvbG9yOiAjMDUwMjAzO1xcbn1cXG5cXG4uY29udGVudCB7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICB3aWR0aDogMTAwJTtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IG1pbm1heCgyNDBweCwgMWZyKSBtaW5tYXgoNjAwcHgsIDVmcik7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDYwcHggbWlubWF4KDY1MHB4LCA0ZnIpIDYwcHg7XFxufVxcblxcbi5oZWFkZXIge1xcbiAgZ3JpZC1jb2x1bW46IDEgLyAzO1xcbiAgZ3JpZC1yb3c6IDEgLyAyO1xcbiAgcGFkZGluZzogMTBweCAyMHB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5tYWluLXNlY3Rpb24ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y2ZjhmYztcXG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxuICBtYXJnaW46IDEwcHggMjBweDtcXG4gIGdyaWQtY29sdW1uLWVuZDogc3BhbiAzO1xcbiAgZ3JpZC1yb3c6IDIgLyAzO1xcbn1cXG5cXG4uZm9vdGVyIHtcXG4gIHBhZGRpbmc6IDEwcHg7XFxuICBncmlkLWNvbHVtbi1lbmQ6IHNwYW4gMztcXG4gIGdyaWQtcm93OiAzIC8gNDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbmJ1dHRvbiB7XFxuICBmb250LWZhbWlseTogXFxcIk9wZW4gU2Fuc1xcXCIsIHNhbnMtc2VyaWY7XFxuICBmb250LXdlaWdodDogNDAwO1xcbiAgZm9udC1zaXplOiAxcmVtO1xcbiAgY29sb3I6ICMwNTAyMDM7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi50YXNrLWhlYWRlciB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgMWZyO1xcbn1cXG5cXG4ubWVudS1idG4sXFxuLnZpZXctbGlzdHMtYnRuIHtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNiY2NiZWE7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmhlYWRlciA+IGRpdjpudGgtY2hpbGQoMikge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDMsIDFmcik7XFxuICBnYXA6IDIwcHg7XFxufVxcblxcbi5oZWFkZXIgaW1nIHtcXG4gIGhlaWdodDogMzVweDtcXG4gIHdpZHRoOiA0MHB4O1xcbn1cXG5cXG4ubWVudS1idG46aG92ZXIsXFxuLnZpZXctbGlzdHMtYnRuOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNkZWUwZTA7XFxufVxcblxcbi5kaXNwbGF5LWJ0bi1jb250YWluZXIgaW1nLFxcbi5kZWwtYnRuLWNvbnRhaW5lciBpbWcsXFxuLmNyZWF0ZS1saXN0LWJ0biBpbWcsXFxuLmFkZC1wcm9qZWN0LWJ0biBpbWcsXFxuLmJhY2stYnRuIGltZyxcXG4ucmVtb3ZlLXByb2plY3QtYnRuIGltZyB7XFxuICBwb2ludGVyLWV2ZW50czogbm9uZTtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLm1haW4tbWVudSB7XFxuICBncmlkLXJvdzogMiAvIDQ7XFxuICBtYXJnaW4tdG9wOiAxMHB4O1xcbiAgcGFkZGluZzogMTBweCAxMHB4IDBweCAxMHB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBnYXA6IDEwcHg7XFxuICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5tYWluLW1lbnUgYnV0dG9uIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNiY2NiZWE7XFxuICBib3JkZXI6IG5vbmU7XFxuICBwYWRkaW5nOiAycHggMTBweDtcXG4gIGp1c3RpZnktc2VsZjogZmxleC1zdGFydDtcXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gIHRleHQtYWxpZ246IHN0YXJ0O1xcbn1cXG5cXG4ubWFpbi1tZW51IC5hZGQtcHJvamVjdC1idG4ge1xcbiAgcGFkZGluZzogMHB4O1xcbn1cXG5cXG4udG9kYXktY29udGFpbmVyLFxcbi51cGNvbWluZy1jb250YWluZXIge1xcbiAgcGFkZGluZzogNXB4IDEwcHg7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAzNXB4IDNmciAzNXB4O1xcbiAgY29sdW1uLWdhcDogNXB4O1xcbn1cXG5cXG4uZmF2LWNvbnRhaW5lcixcXG4ucHJvai1jb250YWluZXIge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMzVweCAzZnIgMzVweDtcXG59XFxuXFxuLmZhdi1jb250YWluZXIgPiBkaXY6bnRoLWNoaWxkKDEpLFxcbi5wcm9qLWNvbnRhaW5lciA+IGRpdjpudGgtY2hpbGQoMSkge1xcbiAgcGFkZGluZzogNXB4IDEwcHg7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBncmlkLWNvbHVtbjogMSAvIDQ7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAzNXB4IDNmciAzNXB4O1xcbiAgY29sdW1uLWdhcDogNXB4O1xcbn1cXG5cXG4uZmF2b3JpdGVzLFxcbi5wcm9qZWN0cyB7XFxuICBncmlkLWNvbHVtbjogMiAvIDQ7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMywgMWZyKTtcXG59XFxuXFxuLmZhdm9yaXRlcyA+IGRpdixcXG4ucHJvamVjdHMgPiBkaXYge1xcbiAgcGFkZGluZzogNXB4O1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMjBweCAzZnIgMWZyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmZhdm9yaXRlcyA+IGRpdiA+IGltZyxcXG4ucHJvamVjdHMgPiBkaXYgPiBpbWcge1xcbiAgaGVpZ2h0OiAxNXB4O1xcbiAgd2lkdGg6IDE1cHg7XFxufVxcblxcbi50b2RheS1jb250YWluZXIgPiBpbWcsXFxuLnVwY29taW5nLWNvbnRhaW5lciA+IGltZyxcXG4uZmF2LWNvbnRhaW5lciBpbWcsXFxuLnByb2otY29udGFpbmVyIGltZyB7XFxuICBoZWlnaHQ6IDMwcHg7XFxuICB3aWR0aDogMzBweDtcXG59XFxuXFxuLmFkZC1wcm9qZWN0LWJ0biB7XFxuICBoZWlnaHQ6IDMwcHg7XFxuICB3aWR0aDogMzBweDtcXG4gIGp1c3RpZnktc2VsZjogZW5kO1xcbn1cXG5cXG5bY2xhc3MqPVxcXCJjb3VudFxcXCJdIHtcXG4gIHRleHQtYWxpZ246IGVuZDtcXG59XFxuXFxuLnRvZGF5LWNvbnRhaW5lcjpob3ZlcixcXG4udXBjb21pbmctY29udGFpbmVyOmhvdmVyLFxcbi5mYXYtd3JhcHBlcjpob3ZlcixcXG4ucHJvai13cmFwcGVyOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM3N2M0ZmU7XFxufVxcblxcbi50b2RheS1jb250YWluZXI6aG92ZXIgLnRvZGF5LWJ0bixcXG4udXBjb21pbmctY29udGFpbmVyOmhvdmVyIC51cGNvbWluZy1idG4sXFxuLmZhdi13cmFwcGVyOmhvdmVyIC5mYXZvcml0ZXMtYnRuLFxcbi5wcm9qLXdyYXBwZXI6aG92ZXIgLnByb2plY3RzLWJ0bixcXG4ucHJvai13cmFwcGVyOmhvdmVyIC5hZGQtcHJvamVjdC1idG4ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzc3YzRmZTtcXG59XFxuXFxuLmZhdm9yaXRlcyA+IGRpdjpob3ZlcixcXG4ucHJvamVjdHMgPiBkaXY6aG92ZXIsXFxuLmZhdm9yaXRlcyA+IGRpdjpob3ZlciBidXR0b24sXFxuLnByb2plY3RzID4gZGl2OmhvdmVyIGJ1dHRvbiB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNzdjNGZlO1xcbn1cXG5cXG4ubWFpbi1tZW51IGJ1dHRvbjpob3ZlciB7XFxuICBmb250LXdlaWdodDogNjAwO1xcbn1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvbmF2LmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsMkJBQTJCO0VBQzNCLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsU0FBUztFQUNULHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixZQUFZO0VBQ1osaUJBQWlCO0VBQ2pCLHdCQUF3QjtFQUN4QixrQkFBa0I7RUFDbEIsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsWUFBWTtBQUNkOztBQUVBOztFQUVFLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLG9DQUFvQztFQUNwQyxlQUFlO0FBQ2pCOztBQUVBOztFQUVFLGFBQWE7RUFDYixvQ0FBb0M7QUFDdEM7O0FBRUE7O0VBRUUsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLG9DQUFvQztFQUNwQyxlQUFlO0FBQ2pCOztBQUVBOztFQUVFLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2Isa0NBQWtDO0FBQ3BDOztBQUVBOztFQUVFLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLG1DQUFtQztFQUNuQyxtQkFBbUI7QUFDckI7O0FBRUE7O0VBRUUsWUFBWTtFQUNaLFdBQVc7QUFDYjs7QUFFQTs7OztFQUlFLFlBQVk7RUFDWixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxZQUFZO0VBQ1osV0FBVztFQUNYLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGVBQWU7QUFDakI7O0FBRUE7Ozs7RUFJRSx5QkFBeUI7QUFDM0I7O0FBRUE7Ozs7O0VBS0UseUJBQXlCO0FBQzNCOztBQUVBOzs7O0VBSUUseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi5tYWluLW1lbnUge1xcbiAgZ3JpZC1yb3c6IDIgLyA0O1xcbiAgbWFyZ2luLXRvcDogMTBweDtcXG4gIHBhZGRpbmc6IDEwcHggMTBweCAwcHggMTBweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ2FwOiAxMHB4O1xcbiAganVzdGlmeS1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4ubWFpbi1tZW51IGJ1dHRvbiB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYmNjYmVhO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgcGFkZGluZzogMnB4IDEwcHg7XFxuICBqdXN0aWZ5LXNlbGY6IGZsZXgtc3RhcnQ7XFxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICB0ZXh0LWFsaWduOiBzdGFydDtcXG59XFxuXFxuLm1haW4tbWVudSAuYWRkLXByb2plY3QtYnRuIHtcXG4gIHBhZGRpbmc6IDBweDtcXG59XFxuXFxuLnRvZGF5LWNvbnRhaW5lcixcXG4udXBjb21pbmctY29udGFpbmVyIHtcXG4gIHBhZGRpbmc6IDVweCAxMHB4O1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMzVweCAzZnIgMzVweDtcXG4gIGNvbHVtbi1nYXA6IDVweDtcXG59XFxuXFxuLmZhdi1jb250YWluZXIsXFxuLnByb2otY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDM1cHggM2ZyIDM1cHg7XFxufVxcblxcbi5mYXYtY29udGFpbmVyID4gZGl2Om50aC1jaGlsZCgxKSxcXG4ucHJvai1jb250YWluZXIgPiBkaXY6bnRoLWNoaWxkKDEpIHtcXG4gIHBhZGRpbmc6IDVweCAxMHB4O1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgZ3JpZC1jb2x1bW46IDEgLyA0O1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMzVweCAzZnIgMzVweDtcXG4gIGNvbHVtbi1nYXA6IDVweDtcXG59XFxuXFxuLmZhdm9yaXRlcyxcXG4ucHJvamVjdHMge1xcbiAgZ3JpZC1jb2x1bW46IDIgLyA0O1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDMsIDFmcik7XFxufVxcblxcbi5mYXZvcml0ZXMgPiBkaXYsXFxuLnByb2plY3RzID4gZGl2IHtcXG4gIHBhZGRpbmc6IDVweDtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDIwcHggM2ZyIDFmcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5mYXZvcml0ZXMgPiBkaXYgPiBpbWcsXFxuLnByb2plY3RzID4gZGl2ID4gaW1nIHtcXG4gIGhlaWdodDogMTVweDtcXG4gIHdpZHRoOiAxNXB4O1xcbn1cXG5cXG4udG9kYXktY29udGFpbmVyID4gaW1nLFxcbi51cGNvbWluZy1jb250YWluZXIgPiBpbWcsXFxuLmZhdi1jb250YWluZXIgaW1nLFxcbi5wcm9qLWNvbnRhaW5lciBpbWcge1xcbiAgaGVpZ2h0OiAzMHB4O1xcbiAgd2lkdGg6IDMwcHg7XFxufVxcblxcbi5hZGQtcHJvamVjdC1idG4ge1xcbiAgaGVpZ2h0OiAzMHB4O1xcbiAgd2lkdGg6IDMwcHg7XFxuICBqdXN0aWZ5LXNlbGY6IGVuZDtcXG59XFxuXFxuW2NsYXNzKj1cXFwiY291bnRcXFwiXSB7XFxuICB0ZXh0LWFsaWduOiBlbmQ7XFxufVxcblxcbi50b2RheS1jb250YWluZXI6aG92ZXIsXFxuLnVwY29taW5nLWNvbnRhaW5lcjpob3ZlcixcXG4uZmF2LXdyYXBwZXI6aG92ZXIsXFxuLnByb2otd3JhcHBlcjpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNzdjNGZlO1xcbn1cXG5cXG4udG9kYXktY29udGFpbmVyOmhvdmVyIC50b2RheS1idG4sXFxuLnVwY29taW5nLWNvbnRhaW5lcjpob3ZlciAudXBjb21pbmctYnRuLFxcbi5mYXYtd3JhcHBlcjpob3ZlciAuZmF2b3JpdGVzLWJ0bixcXG4ucHJvai13cmFwcGVyOmhvdmVyIC5wcm9qZWN0cy1idG4sXFxuLnByb2otd3JhcHBlcjpob3ZlciAuYWRkLXByb2plY3QtYnRuIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM3N2M0ZmU7XFxufVxcblxcbi5mYXZvcml0ZXMgPiBkaXY6aG92ZXIsXFxuLnByb2plY3RzID4gZGl2OmhvdmVyLFxcbi5mYXZvcml0ZXMgPiBkaXY6aG92ZXIgYnV0dG9uLFxcbi5wcm9qZWN0cyA+IGRpdjpob3ZlciBidXR0b24ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzc3YzRmZTtcXG59XFxuXFxuLm1haW4tbWVudSBidXR0b246aG92ZXIge1xcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vY29udGVudC5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2NvbnRlbnQuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2Zvcm1zLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vZm9ybXMuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2xheW91dC5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2xheW91dC5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vbmF2LmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vbmF2LmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjO1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHtcblx0XHRcdHZhciBpID0gc2NyaXB0cy5sZW5ndGggLSAxO1xuXHRcdFx0d2hpbGUgKGkgPiAtMSAmJiAhc2NyaXB0VXJsKSBzY3JpcHRVcmwgPSBzY3JpcHRzW2ktLV0uc3JjO1xuXHRcdH1cblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQge1xuICBzdG9yYWdlQXZhaWxhYmxlLFxuICBwb3B1bGF0ZVN0b3JhZ2UsXG4gIHNldEFycmF5VmFsdWVzLFxuICByZW1vdmVJdGVtcyxcbn0gZnJvbSBcIi4vZGF0YS5qc1wiO1xuaW1wb3J0IHsgcGFnZUxheW91dCwgdXBkYXRlTGlzdEFycmF5IH0gZnJvbSBcIi4vbGF5b3V0LmpzXCI7XG5pbXBvcnQge1xuICBtYWluQ29udGVudCxcbiAgZW1wdHlJbmRpY2F0b3IsXG4gIGNyZWF0ZUZvcm0sXG4gIGRpc3BsYXlCdG5Db250cm9sbGVyLFxuICBuZXdMaXN0Rm9ybSxcbiAgYWRkVGltZU9wdGlvbixcbiAgYWRkTGlzdE9wdGlvbixcbiAgcHJvY2Vzc0Zvcm0sXG4gIG1vZGlmeVRhc2ssXG4gIGJhY2tCdG5Db250cm9sbGVyLFxuICBkZWxldGVCdG5Db250cm9sbGVyLFxuICBsaXN0RGlzcGxheUNvbnRyb2xsZXIsXG59IGZyb20gXCIuL21haW4tY29udGVudC5qc1wiO1xuaW1wb3J0IHtcbiAgbWFpbk1lbnUsXG4gIHByb2plY3RMaXN0LFxuICBmYXZvcml0ZXNMaXN0LFxuICB0YXNrQ291bnQsXG4gIGNoYW5nZUZhdm9yaXRlc0ltYWdlLFxuICBjaGFuZ2VQcm9qZWN0c0ltYWdlLFxufSBmcm9tIFwiLi9tZW51LmpzXCI7XG5pbXBvcnQge1xuICB0YXNrQmFycyxcbiAgdGFza1BhZ2UsXG4gIHNvcnRUYXNrQmFycyxcbiAgZGVsZXRlVGFzayxcbn0gZnJvbSBcIi4vdGFzay1kaXNwbGF5LmpzXCI7XG5cbmZ1bmN0aW9uIGNvbXBvbmVudCgpIHtcbiAgLy8gR2VuZXJhdGUgaW5pdGlhbCBwYWdlIGxheW91dFxuICBwYWdlTGF5b3V0KCk7XG4gIG1haW5Db250ZW50KCk7XG4gIGVtcHR5SW5kaWNhdG9yKCk7XG5cbiAgLy8gVGVzdCBpZiBsb2NhbFN0b3JhZ2UgaXMgYXZhaWxhYmxlXG4gIGlmIChzdG9yYWdlQXZhaWxhYmxlKFwibG9jYWxTdG9yYWdlXCIpKSB7XG4gICAgY29uc29sZS5sb2coXCJsb2NhbFN0b3JhZ2UgYXZhaWxhYmxlXCIpO1xuXG4gICAgLy8gbG9jYWxTdG9yYWdlLmNsZWFyKCk7XG5cbiAgICBpZiAoIWxvY2FsU3RvcmFnZS5nZXRJdGVtKFwibGlzdEFycmF5XCIpKSB7XG4gICAgICBwb3B1bGF0ZVN0b3JhZ2UoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc2V0QXJyYXlWYWx1ZXMoKS5zZXRMaXN0cygpO1xuICAgICAgc2V0QXJyYXlWYWx1ZXMoKS5zZXRUYXNrcygpO1xuICAgICAgc29ydFRhc2tCYXJzKCkudG9kYXlTdG9yZWRUYXNrcygpO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICBjb25zb2xlLmxvZyhcImxvY2FsU3RvcmFnZSB1bmF2YWlsYWJsZVwiKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGV2ZW50SGFuZGxlcigpIHtcbiAgICBjb25zdCBtZW51QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tZW51LWJ0blwiKTtcbiAgICBjb25zdCB2aWV3TGlzdEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudmlldy1saXN0cy1idG5cIik7XG4gICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY29udGVudFwiKTtcblxuICAgIC8vIFRvZ2dsZSB0aGUgTWFpbiBNZW51XG4gICAgbWVudUJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgY29uc3QgbWVudSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubWFpbi1tZW51XCIpO1xuXG4gICAgICBpZiAoY29udGVudC5jb250YWlucyhtZW51KSkge1xuICAgICAgICBjb250ZW50LnJlbW92ZUNoaWxkKG1lbnUpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbWFpbk1lbnUoKTtcbiAgICAgICAgdGFza0NvdW50KCk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICB2aWV3TGlzdEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgbGlzdERpc3BsYXlDb250cm9sbGVyKCkubGlzdHNWaWV3KCk7XG4gICAgfSk7XG5cbiAgICBjb250ZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoZSkge1xuICAgICAgLy8gVG9nZ2xlIFRvZGF5IG9yIFVwY29taW5nIHByb2plY3RzXG4gICAgICBpZiAoZS50YXJnZXQuY2xhc3NOYW1lID09PSBcInRvZGF5LWJ0blwiKSB7XG4gICAgICAgIGNvbnN0IGJ0biA9IGUudGFyZ2V0O1xuXG4gICAgICAgIGJhY2tCdG5Db250cm9sbGVyKCk7XG4gICAgICAgIGRlbGV0ZUJ0bkNvbnRyb2xsZXIoKS5jaGVja0RlbGV0ZUJ0bigpO1xuICAgICAgICBkaXNwbGF5QnRuQ29udHJvbGxlcihidG4pO1xuICAgICAgICBzb3J0VGFza0JhcnMoKS5tZW51Q2hvaWNlKGJ0bik7XG5cbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBpZiAoZS50YXJnZXQuY2xhc3NOYW1lID09PSBcInVwY29taW5nLWJ0blwiKSB7XG4gICAgICAgIGNvbnN0IGJ0biA9IGUudGFyZ2V0O1xuXG4gICAgICAgIGJhY2tCdG5Db250cm9sbGVyKCk7XG4gICAgICAgIGRlbGV0ZUJ0bkNvbnRyb2xsZXIoKS5jaGVja0RlbGV0ZUJ0bigpO1xuICAgICAgICBzb3J0VGFza0JhcnMoKS5tZW51Q2hvaWNlKGJ0bik7XG4gICAgICAgIGRpc3BsYXlCdG5Db250cm9sbGVyKGJ0bik7XG5cbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICAvLyBUb2dnbGUgRmF2b3JpdGVzIGFuZCBQcm9qZWN0cyBtZW51IGNob2ljZXNcbiAgICAgIGlmIChlLnRhcmdldC5jbGFzc05hbWUgPT09IFwiZmF2b3JpdGVzLWJ0blwiKSB7XG4gICAgICAgIGNvbnN0IGZhdm9yaXRlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZmF2b3JpdGVzXCIpO1xuXG4gICAgICAgIGlmIChmYXZvcml0ZXMudGV4dENvbnRlbnQgPT09IFwiXCIpIHtcbiAgICAgICAgICBmYXZvcml0ZXNMaXN0KCk7XG4gICAgICAgICAgdGFza0NvdW50KCk7XG4gICAgICAgICAgY2hhbmdlRmF2b3JpdGVzSW1hZ2UoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBmYXZvcml0ZXMudGV4dENvbnRlbnQgPSBcIlwiO1xuICAgICAgICAgIGNoYW5nZUZhdm9yaXRlc0ltYWdlKCk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGRpc3BsYXkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRhc2stZGlzcGxheVwiKTtcbiAgICAgIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRhc2stZm9ybVwiKTtcblxuICAgICAgaWYgKGUudGFyZ2V0LmNsYXNzTmFtZSA9PT0gXCJwcm9qZWN0cy1idG5cIikge1xuICAgICAgICBjb25zdCBwcm9qZWN0cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJvamVjdHNcIik7XG5cbiAgICAgICAgaWYgKHByb2plY3RzLnRleHRDb250ZW50ID09PSBcIlwiKSB7XG4gICAgICAgICAgcHJvamVjdExpc3QoKTtcbiAgICAgICAgICB0YXNrQ291bnQoKTtcbiAgICAgICAgICBjaGFuZ2VQcm9qZWN0c0ltYWdlKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcHJvamVjdHMudGV4dENvbnRlbnQgPSBcIlwiO1xuICAgICAgICAgIGNoYW5nZVByb2plY3RzSW1hZ2UoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGJhY2tCdG5Db250cm9sbGVyKCk7XG4gICAgICAgIGRlbGV0ZUJ0bkNvbnRyb2xsZXIoKS5jaGVja0RlbGV0ZUJ0bigpO1xuICAgICAgICBkaXNwbGF5QnRuQ29udHJvbGxlcihlLnRhcmdldCk7XG4gICAgICAgIHRhc2tCYXJzKCk7XG5cbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBjb25zdCBsaXN0Rm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucG9wLXVwXCIpO1xuXG4gICAgICAvLyBjcmVhdGUsIHN1Ym1pdCBhbmQgcHJvY2VzcyBmb3Jtc1xuICAgICAgaWYgKGUudGFyZ2V0LmNsYXNzTmFtZSA9PT0gXCJmb3JtLWJ0blwiKSB7XG4gICAgICAgIGRlbGV0ZUJ0bkNvbnRyb2xsZXIoKS5jaGVja0RlbGV0ZUJ0bigpO1xuICAgICAgICBjcmVhdGVGb3JtKCk7XG4gICAgICAgIGJhY2tCdG5Db250cm9sbGVyKCk7XG4gICAgICAgIGRpc3BsYXlCdG5Db250cm9sbGVyKGUudGFyZ2V0KTtcblxuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGlmIChlLnRhcmdldC5jbGFzc05hbWUgPT09IFwic3VibWl0LWJ0blwiKSB7XG4gICAgICAgIGNvbnN0IGlzRm9ybVZhbGlkID0gZm9ybS5jaGVja1ZhbGlkaXR5KCk7XG5cbiAgICAgICAgaWYgKCFpc0Zvcm1WYWxpZCkge1xuICAgICAgICAgIGZvcm0ucmVwb3J0VmFsaWRpdHkoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpZiAobGlzdEZvcm0pIHtcbiAgICAgICAgICAgIGRpc3BsYXkucmVtb3ZlQ2hpbGQobGlzdEZvcm0pO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICBwcm9jZXNzRm9ybSgpO1xuICAgICAgICAgIHBvcHVsYXRlU3RvcmFnZSgpO1xuICAgICAgICAgIGJhY2tCdG5Db250cm9sbGVyKCk7XG4gICAgICAgICAgZGlzcGxheUJ0bkNvbnRyb2xsZXIoZS50YXJnZXQpO1xuICAgICAgICAgIHRhc2tCYXJzKCk7XG4gICAgICAgICAgdGFza0NvdW50KCk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGlmIChlLnRhcmdldC5jbGFzc05hbWUgPT09IFwic2F2ZS1idG5cIikge1xuICAgICAgICBjb25zdCBmb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5mdWxsLXRhc2stZm9ybVwiKTtcbiAgICAgICAgY29uc3QgaXNGb3JtVmFsaWQgPSBmb3JtLmNoZWNrVmFsaWRpdHkoKTtcblxuICAgICAgICBpZiAoIWlzRm9ybVZhbGlkKSB7XG4gICAgICAgICAgZm9ybS5yZXBvcnRWYWxpZGl0eSgpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIG1vZGlmeVRhc2soKTtcbiAgICAgICAgICBwb3B1bGF0ZVN0b3JhZ2UoKTtcbiAgICAgICAgICBiYWNrQnRuQ29udHJvbGxlcigpO1xuICAgICAgICAgIGRpc3BsYXlCdG5Db250cm9sbGVyKGUudGFyZ2V0KTtcbiAgICAgICAgICB0YXNrQmFycygpO1xuICAgICAgICAgIHRhc2tDb3VudCgpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICAvLyBBZGQgdGltZSBpbnB1dCBvcHRpb25cbiAgICAgIGlmIChlLnRhcmdldC5pZCA9PT0gXCJkYXRlXCIgJiYgZS50YXJnZXQubmFtZSA9PT0gXCJkYXRlXCIpIHtcbiAgICAgICAgYWRkVGltZU9wdGlvbigpO1xuXG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgLy8gUmVtb3ZlIGZvcm0gZGlzcGxheSBvciBmdWxsLXRhc2sgZGlzcGxheVxuICAgICAgaWYgKGUudGFyZ2V0LmNsYXNzTmFtZSA9PT0gXCJiYWNrLWJ0blwiKSB7XG4gICAgICAgIGlmIChsaXN0Rm9ybSkge1xuICAgICAgICAgIGRpc3BsYXkucmVtb3ZlQ2hpbGQobGlzdEZvcm0pO1xuICAgICAgICB9XG5cbiAgICAgICAgYmFja0J0bkNvbnRyb2xsZXIoKTtcbiAgICAgICAgdGFza0JhcnMoKTtcbiAgICAgICAgZGlzcGxheUJ0bkNvbnRyb2xsZXIoZS50YXJnZXQpO1xuXG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgLy8gQ3JlYXRlIG5ldyBsaXN0IGZvcm1cbiAgICAgIGlmIChcbiAgICAgICAgZS50YXJnZXQuY2xhc3NOYW1lID09PSBcImFkZC1wcm9qZWN0LWJ0blwiIHx8XG4gICAgICAgIGUudGFyZ2V0LmNsYXNzTmFtZSA9PT0gXCJjcmVhdGUtbGlzdC1idG5cIlxuICAgICAgKSB7XG4gICAgICAgIG5ld0xpc3RGb3JtKCk7XG5cbiAgICAgICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QudG9nZ2xlKFwibW9kYWwtb3BlblwiKTtcblxuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIC8vIENhbmNlbCBuZXcgbGlzdCBmb3JtXG4gICAgICBpZiAoZS50YXJnZXQuY2xhc3NOYW1lID09PSBcImNhbmNlbC1saXN0LWJ0blwiKSB7XG4gICAgICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LnRvZ2dsZShcIm1vZGFsLW9wZW5cIik7XG5cbiAgICAgICAgZGlzcGxheS5yZW1vdmVDaGlsZChsaXN0Rm9ybSk7XG5cbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICAvLyBBZGQgbmV3IGxpc3Qgb3B0aW9uXG4gICAgICBpZiAoZS50YXJnZXQuY2xhc3NOYW1lID09PSBcImFkZC1saXN0LWJ0blwiKSB7XG4gICAgICAgIGNvbnN0IGlzRm9ybVZhbGlkID0gbGlzdEZvcm0uY2hlY2tWYWxpZGl0eSgpO1xuXG4gICAgICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LnRvZ2dsZShcIm1vZGFsLW9wZW5cIik7XG5cbiAgICAgICAgaWYgKCFpc0Zvcm1WYWxpZCkge1xuICAgICAgICAgIGxpc3RGb3JtLnJlcG9ydFZhbGlkaXR5KCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgIHVwZGF0ZUxpc3RBcnJheSgpO1xuICAgICAgICAgIHBvcHVsYXRlU3RvcmFnZSgpO1xuXG4gICAgICAgICAgaWYgKGRpc3BsYXkuY29udGFpbnMoZm9ybSkpIHtcbiAgICAgICAgICAgIGFkZExpc3RPcHRpb24oKTtcbiAgICAgICAgICAgIHByb2plY3RMaXN0KCk7XG4gICAgICAgICAgICBjaGFuZ2VQcm9qZWN0c0ltYWdlKCk7XG4gICAgICAgICAgICBkaXNwbGF5LnJlbW92ZUNoaWxkKGxpc3RGb3JtKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcHJvamVjdExpc3QoKTtcbiAgICAgICAgICAgIGNoYW5nZVByb2plY3RzSW1hZ2UoKTtcbiAgICAgICAgICAgIHRhc2tDb3VudCgpO1xuICAgICAgICAgICAgZGlzcGxheS5yZW1vdmVDaGlsZChsaXN0Rm9ybSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICAvLyBTb3J0IHRhc2tzIGFjY29yZGluZyB0byB0aGUgY2xpY2tlZCBwcm9qZWN0IG9yIHByaW9yaXR5IGxpc3RcbiAgICAgIGlmIChlLnRhcmdldC5pZCA9PT0gXCJ0YXNrLWJ0blwiIHx8IGUudGFyZ2V0LmlkID09PSBcInByaW9yaXR5LWJ0blwiKSB7XG4gICAgICAgIGNvbnN0IGJ0biA9IGUudGFyZ2V0O1xuXG4gICAgICAgIGJhY2tCdG5Db250cm9sbGVyKCk7XG4gICAgICAgIGRlbGV0ZUJ0bkNvbnRyb2xsZXIoKS5jaGVja0RlbGV0ZUJ0bigpO1xuICAgICAgICBkaXNwbGF5QnRuQ29udHJvbGxlcihidG4pO1xuICAgICAgICBzb3J0VGFza0JhcnMoKS5tZW51Q2hvaWNlKGJ0bik7XG5cbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICAvLyBEaXNwbGF5IGZ1bGwgdGFzayBkZXRhaWxzXG4gICAgICBpZiAoZS50YXJnZXQuY2xhc3NOYW1lID09PSBcInRhc2tcIikge1xuICAgICAgICBjb25zdCBpbmRleCA9IGUudGFyZ2V0LmRhdGFzZXQubnVtO1xuXG4gICAgICAgIHRhc2tQYWdlKGluZGV4KTtcbiAgICAgICAgZGlzcGxheUJ0bkNvbnRyb2xsZXIoZS50YXJnZXQpO1xuXG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgLy8gQWRkIGRlbGV0ZSBidG5cbiAgICAgIGlmIChlLnRhcmdldC5jbGFzc05hbWUgPT09IFwiY2hlY2tib3hcIiAmJiBlLnRhcmdldC5jaGVja2VkID09PSB0cnVlKSB7XG4gICAgICAgIGRlbGV0ZUJ0bkNvbnRyb2xsZXIoKS5hZGREZWxldGVCdG4oKTtcbiAgICAgIH0gZWxzZSBpZiAoXG4gICAgICAgIGUudGFyZ2V0LmNsYXNzTmFtZSA9PT0gXCJjaGVja2JveFwiICYmXG4gICAgICAgIGUudGFyZ2V0LmNoZWNrZWQgPT09IGZhbHNlXG4gICAgICApIHtcbiAgICAgICAgZGVsZXRlQnRuQ29udHJvbGxlcigpLnJlbW92ZURlbGV0ZUJ0bigpO1xuICAgICAgfVxuXG4gICAgICAvLyBEZWxldGUgdGFza3NcbiAgICAgIGlmIChlLnRhcmdldC5jbGFzc05hbWUgPT09IFwiZGVsLWJ0blwiKSB7XG4gICAgICAgIGRlbGV0ZVRhc2soKTtcbiAgICAgICAgdGFza0NvdW50KCk7XG4gICAgICAgIHJlbW92ZUl0ZW1zKCk7XG4gICAgICAgIHBvcHVsYXRlU3RvcmFnZSgpO1xuICAgICAgfVxuXG4gICAgICAvLyBEZWxldGUgcHJvamVjdHMvbGlzdHNcbiAgICAgIGlmIChlLnRhcmdldC5jbGFzc05hbWUgPT09IFwicmVtb3ZlLXByb2plY3QtYnRuXCIpIHtcbiAgICAgICAgY29uc3QgbWVudSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubWFpbi1tZW51XCIpO1xuXG4gICAgICAgIGxpc3REaXNwbGF5Q29udHJvbGxlcigpLnJlbW92ZUxpc3QoZS50YXJnZXQpO1xuXG4gICAgICAgIGlmIChtZW51KSB7XG4gICAgICAgICAgcHJvamVjdExpc3QoKTtcbiAgICAgICAgICB0YXNrQ291bnQoKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuICB9XG4gIGV2ZW50SGFuZGxlcigpO1xufVxuY29tcG9uZW50KCk7XG4iXSwibmFtZXMiOlsibGlzdEFycmF5IiwidGFza0FycmF5Iiwic3RvcmFnZUF2YWlsYWJsZSIsInR5cGUiLCJzdG9yYWdlIiwid2luZG93IiwieCIsInNldEl0ZW0iLCJyZW1vdmVJdGVtIiwiZSIsIkRPTUV4Y2VwdGlvbiIsImNvZGUiLCJuYW1lIiwibGVuZ3RoIiwicG9wdWxhdGVTdG9yYWdlIiwibGlzdEFycmF5U3RyaW5nIiwiSlNPTiIsInN0cmluZ2lmeSIsImxvY2FsU3RvcmFnZSIsInNldEFycmF5VmFsdWVzIiwic2V0TGlzdHMiLCJpIiwib2JqIiwib2JqU3RyaW5nIiwic2V0VGFza3MiLCJyZW1vdmVJdGVtcyIsImNsZWFyIiwibGlzdFZhbHVlcyIsImdldEl0ZW0iLCJuZXdMaXN0QXJyYXkiLCJwYXJzZSIsInB1c2giLCJ0YXNrIiwibmV3VGFza09iaiIsIkltZyIsIkltZzIiLCJJbWczIiwiSW1nNCIsInByaW9yaXR5QXJyYXkiLCJwYWdlTGF5b3V0IiwiY29udGVudCIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsImhlYWRlciIsImNyZWF0ZUVsZW1lbnQiLCJtYWluIiwiZm9vdGVyIiwicGFyYSIsIm1lbnVDb250YWluZXIiLCJtZW51QnRuIiwibWVudUltZyIsIkltYWdlIiwicHJvZmlsZSIsInByb2ZpbGVJbWciLCJiZWxsSW1nIiwibGlzdEdyb3VwQnRuIiwibGlzdEdyb3VwSW1nIiwiY2xhc3NMaXN0IiwiYWRkIiwidGV4dENvbnRlbnQiLCJzcmMiLCJhbHQiLCJhcHBlbmRDaGlsZCIsInVwZGF0ZUxpc3RBcnJheSIsIm5ld0xpc3QiLCJ2YWx1ZSIsImRpc3BsYXlIZWlnaHQiLCJoZWlnaHQiLCJjbGllbnRIZWlnaHQiLCJJbWc1IiwiSW1nNiIsIm1haW5Db250ZW50IiwiY29udGFpbmVyIiwid3JhcHBlciIsInRhc2tEaXNwbGF5IiwiaGVhZGluZyIsImJ0bkNvbnRhaW5lciIsImJ0biIsImJ0bkltZyIsImVtcHR5SW5kaWNhdG9yIiwiZGlzcGxheSIsImltZyIsImNyZWF0ZUZvcm0iLCJmb3JtIiwidGFza0NvbnRhaW5lciIsInRhc2tMYWJlbCIsInRhc2tJbnB1dCIsImRlc2NyaXB0aW9uQ29udGFpbmVyIiwiZGVzY3JpcHRpb25MYWJlbCIsImRlc2NyaXB0aW9uSW5wdXQiLCJkdWVEYXRlQ29udGFpbmVyIiwiZGF0ZUNvbnRhaW5lciIsImR1ZURhdGVMYWJlbCIsImR1ZURhdGVJbnB1dCIsInByaW9yaXR5RGl2IiwicHJpb3JpdHlMYWJlbCIsInByaW9yaXR5SW5wdXQiLCJzdWJtaXRDb250YWluZXIiLCJzdWJtaXRTZWxlY3QiLCJzdWJtaXRMYWJlbCIsInN1Ym1pdElucHV0IiwicHJpb3JpdHlPcHRpb24xIiwicHJpb3JpdHlPcHRpb24yIiwicHJpb3JpdHlPcHRpb24zIiwiY3JlYXRlTGlzdEJ0biIsImNyZWF0ZUxpc3RJbWciLCJodG1sRm9yIiwiaWQiLCJtYXhMZW5ndGgiLCJwbGFjZWhvbGRlciIsInJlcXVpcmVkIiwic3VibWl0T3B0aW9uIiwiZGlzcGxheUJ0bkNvbnRyb2xsZXIiLCJlbGUiLCJjbGFzc05hbWUiLCJuZXdMaXN0Rm9ybSIsImxpc3RGb3JtIiwibGFiZWwiLCJpbnB1dCIsImNhbmNlbEJ0biIsImFjY2VwdEJ0biIsImFkZFRpbWVPcHRpb24iLCJzaWJsaW5nIiwic2libGluZ1R3byIsInBhcmVudCIsInBhcmVudE5vZGUiLCJjb250YWlucyIsInRpbWVJbnB1dCIsImFkZExpc3RPcHRpb24iLCJvcHRpb25zQ29udGFpbmVyIiwibmV3T3B0aW9uIiwic2VsZWN0ZWQiLCJwcm9jZXNzRm9ybSIsImdldEZvcm1EYXRhIiwiT2JqZWN0IiwiZnJvbUVudHJpZXMiLCJGb3JtRGF0YSIsIm1vZGlmeVRhc2siLCJpbmRleCIsInBhcnNlSW50IiwiZGF0YXNldCIsIm51bSIsImZvcm1EYXRhIiwic3BsaWNlIiwiYmFja0J0bkNvbnRyb2xsZXIiLCJmb3JtVHdvIiwiY2hpbGQiLCJyZW1vdmVDaGlsZCIsImJhY2tCdG5Db250YWluZXIiLCJiYWNrQnRuIiwiYmFja0J0bkltZyIsImRlbGV0ZUJ0bkNvbnRyb2xsZXIiLCJkaXYiLCJhZGREZWxldGVCdG4iLCJkZWxCdG4iLCJkZWxCdG5JbWciLCJjaGVja0RlbGV0ZUJ0biIsInJlbW92ZURlbGV0ZUJ0biIsImNoZWNrQm94ZXMiLCJxdWVyeVNlbGVjdG9yQWxsIiwiY2hlY2tlZENvdW50IiwiZm9yRWFjaCIsImNoZWNrQm94IiwiY2hlY2tlZCIsImxpc3REaXNwbGF5Q29udHJvbGxlciIsImxpc3RzVmlldyIsImxpc3RDb250YWluZXIiLCJ0aXRsZVdyYXBwZXIiLCJsaXN0VGl0bGUiLCJkZXNjcmlwdGlvbiIsInJlbW92ZUxpc3QiLCJsaXN0Q2hvaWNlIiwiaW5jbHVkZXMiLCJjb25zb2xlIiwibG9nIiwiSW1nNyIsIkltZzgiLCJJbWc5IiwiSW1nMTAiLCJJbWcxMSIsIkltZzEyIiwibWFpbk1lbnUiLCJtZW51IiwidG9kYXlDb250YWluZXIiLCJ0b2RheUltZyIsInRvZGF5QnRuIiwidG9kYXlDb3VudCIsInVwY29taW5nQ29udGFpbmVyIiwidXBjb21pbmdJbWciLCJ1cGNvbWluZ0J0biIsInVwY29taW5nQ291bnQiLCJmYXZDb250YWluZXIiLCJmYXZXcmFwcGVyIiwiZmF2b3JpdGVzSW1nIiwiZmF2b3JpdGVzQnRuIiwiZmF2b3JpdGVzIiwicHJvakNvbnRhaW5lciIsInByb2pXcmFwcGVyIiwicHJvamVjdHNJbWciLCJwcm9qZWN0cyIsInByb2plY3RzQnRuIiwiYWRkTGlzdEJ0biIsImFkZExpc3RJbWciLCJpbnNlcnRCZWZvcmUiLCJmYXZvcml0ZXNMaXN0IiwiY29udGFpbmVyT25lIiwiY29udGFpbmVyVHdvIiwiY29udGFpbmVyVGhyZWUiLCJwcmlvcml0eU9uZSIsInByaW9yaXR5VHdvIiwicHJpb3JpdHlUaHJlZSIsInByaW9yaXR5T25lQ291bnQiLCJwcmlvcml0eVR3b0NvdW50IiwicHJpb3JpdHlUaHJlZUNvdW50IiwiY3JpdGljYWxJbWciLCJoaWdoSW1nIiwibm9ybWFsSW1nIiwicHJvamVjdExpc3QiLCJsaXN0TmFtZSIsImxpc3RCdG4iLCJ0YXNrQ291bnQiLCJyZXBsYWNlQWxsIiwiY291bnRzIiwidG9kYXlEYXRlIiwiRGF0ZSIsInRvSVNPU3RyaW5nIiwic3BsaXQiLCJjb3VudCIsInRhc2tQcmlvcml0eSIsInRhc2tEYXRlIiwiY2hhbmdlRmF2b3JpdGVzSW1hZ2UiLCJmYXZvcml0ZXNDb250YWluZXIiLCJpbWFnZSIsImNoYW5nZVByb2plY3RzSW1hZ2UiLCJwcm9qZWN0c0NvbnRhaW5lciIsInRhc2tCYXJzIiwic3R5bGUiLCJ0YXNrVGl0bGUiLCJjaGVja0JveENvbnRhaW5lciIsImNoZWNrQm94TGFiZWwiLCJ3cmFwcGVyVHdvIiwidGl0bGUiLCJkYXRlIiwidGFza1BhZ2UiLCJ0YXNrSW5kZXgiLCJ0YXNrRGVzY3JpcHRpb24iLCJ0YXNrVGltZSIsInRpdGxlQ29udGFpbmVyIiwidGl0bGVMYWJlbCIsImRhdGVXcmFwcGVyIiwiZGF0ZUxhYmVsIiwidGltZUNvbnRhaW5lciIsInRpbWVMYWJlbCIsInRpbWUiLCJsaXN0TmFtZUNvbnRhaW5lciIsImxpc3RTZWxlY3RMYWJlbCIsImxpc3RTZWxlY3QiLCJwcmlvcml0eUNvbnRhaW5lciIsInByaW9yaXR5U2VsZWN0IiwibGlzdE9wdGlvbiIsInByaW9yaXR5T3B0aW9uIiwic29ydFRhc2tCYXJzIiwibWVudUNob2ljZSIsIm5leHRFbGVtZW50U2libGluZyIsImJ0bkNsYXNzIiwicHJpb3JpdHkiLCJsaXN0SW1nIiwidG9kYXlTdG9yZWRUYXNrcyIsImRlbGV0ZVRhc2siLCJ0YXNrcyIsImRpc3BsYXlOb2RlcyIsImNoaWxkTm9kZXMiLCJncmFuZFBhcmVudCIsImNvbXBvbmVudCIsImV2ZW50SGFuZGxlciIsInZpZXdMaXN0QnRuIiwiYWRkRXZlbnRMaXN0ZW5lciIsInRhcmdldCIsImlzRm9ybVZhbGlkIiwiY2hlY2tWYWxpZGl0eSIsInJlcG9ydFZhbGlkaXR5IiwicHJldmVudERlZmF1bHQiLCJib2R5IiwidG9nZ2xlIl0sInNvdXJjZVJvb3QiOiIifQ==