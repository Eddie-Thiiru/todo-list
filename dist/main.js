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
___CSS_LOADER_EXPORT___.push([module.id, "* {\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n}\n\nbody {\n  height: 100vh;\n  font-size: 1rem;\n  font-family: \"Open Sans\", sans-serif;\n  background-color: #bccbea;\n  color: #050203;\n}\n\n.content {\n  height: 100%;\n  width: 100%;\n  display: grid;\n  grid-template-columns: minmax(240px, 1fr) minmax(600px, 5fr);\n  grid-template-rows: 60px minmax(650px, 4fr) 60px;\n}\n\n.header {\n  grid-column: 1 / 3;\n  grid-row: 1 / 2;\n  padding: 10px 20px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n\n.main-section {\n  background-color: #f6f8fc;\n  border-radius: 20px;\n  margin: 10px 20px;\n  grid-column-end: span 3;\n  grid-row: 2 / 3;\n}\n\n.footer {\n  padding: 10px;\n  grid-column-end: span 3;\n  grid-row: 3 / 4;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\nbutton {\n  font-family: \"Open Sans\", sans-serif;\n  font-weight: 400;\n  font-size: 1rem;\n  color: #050203;\n}\n\n.task-header {\n  display: grid;\n  grid-template-rows: 1fr 1fr;\n}\n\n.menu-btn,\n.view-lists-btn {\n  border: none;\n  background-color: #bccbea;\n  display: grid;\n  align-items: center;\n}\n\n.header > div:nth-child(2) {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 20px;\n}\n\n.header img {\n  height: 35px;\n  width: 40px;\n}\n\n.menu-btn:hover,\n.view-lists-btn:hover {\n  background-color: #dee0e0;\n}\n\n.display-btn-container img,\n.del-btn-container img,\n.create-list-btn img,\n.add-project-btn img,\n.back-btn img,\n.remove-project-btn img {\n  pointer-events: none;\n}\n", "",{"version":3,"sources":["webpack://./src/layout.css"],"names":[],"mappings":"AAEA;EACE,sBAAsB;EACtB,SAAS;EACT,UAAU;AACZ;;AAEA;EACE,aAAa;EACb,eAAe;EACf,oCAAoC;EACpC,yBAAyB;EACzB,cAAc;AAChB;;AAEA;EACE,YAAY;EACZ,WAAW;EACX,aAAa;EACb,4DAA4D;EAC5D,gDAAgD;AAClD;;AAEA;EACE,kBAAkB;EAClB,eAAe;EACf,kBAAkB;EAClB,aAAa;EACb,8BAA8B;EAC9B,mBAAmB;AACrB;;AAEA;EACE,yBAAyB;EACzB,mBAAmB;EACnB,iBAAiB;EACjB,uBAAuB;EACvB,eAAe;AACjB;;AAEA;EACE,aAAa;EACb,uBAAuB;EACvB,eAAe;EACf,aAAa;EACb,uBAAuB;EACvB,mBAAmB;AACrB;;AAEA;EACE,oCAAoC;EACpC,gBAAgB;EAChB,eAAe;EACf,cAAc;AAChB;;AAEA;EACE,aAAa;EACb,2BAA2B;AAC7B;;AAEA;;EAEE,YAAY;EACZ,yBAAyB;EACzB,aAAa;EACb,mBAAmB;AACrB;;AAEA;EACE,aAAa;EACb,qCAAqC;EACrC,SAAS;AACX;;AAEA;EACE,YAAY;EACZ,WAAW;AACb;;AAEA;;EAEE,yBAAyB;AAC3B;;AAEA;;;;;;EAME,oBAAoB;AACtB","sourcesContent":["@import url(\"https://fonts.googleapis.com/css2?family=Open+Sans&display=swap\");\n\n* {\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n}\n\nbody {\n  height: 100vh;\n  font-size: 1rem;\n  font-family: \"Open Sans\", sans-serif;\n  background-color: #bccbea;\n  color: #050203;\n}\n\n.content {\n  height: 100%;\n  width: 100%;\n  display: grid;\n  grid-template-columns: minmax(240px, 1fr) minmax(600px, 5fr);\n  grid-template-rows: 60px minmax(650px, 4fr) 60px;\n}\n\n.header {\n  grid-column: 1 / 3;\n  grid-row: 1 / 2;\n  padding: 10px 20px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n\n.main-section {\n  background-color: #f6f8fc;\n  border-radius: 20px;\n  margin: 10px 20px;\n  grid-column-end: span 3;\n  grid-row: 2 / 3;\n}\n\n.footer {\n  padding: 10px;\n  grid-column-end: span 3;\n  grid-row: 3 / 4;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\nbutton {\n  font-family: \"Open Sans\", sans-serif;\n  font-weight: 400;\n  font-size: 1rem;\n  color: #050203;\n}\n\n.task-header {\n  display: grid;\n  grid-template-rows: 1fr 1fr;\n}\n\n.menu-btn,\n.view-lists-btn {\n  border: none;\n  background-color: #bccbea;\n  display: grid;\n  align-items: center;\n}\n\n.header > div:nth-child(2) {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 20px;\n}\n\n.header img {\n  height: 35px;\n  width: 40px;\n}\n\n.menu-btn:hover,\n.view-lists-btn:hover {\n  background-color: #dee0e0;\n}\n\n.display-btn-container img,\n.del-btn-container img,\n.create-list-btn img,\n.add-project-btn img,\n.back-btn img,\n.remove-project-btn img {\n  pointer-events: none;\n}\n"],"sourceRoot":""}]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O01BQ0Y7O01BRUE7TUFDQSxJQUFJNVEsQ0FBQyxDQUFDNFEsTUFBTSxDQUFDbkssU0FBUyxLQUFLLFVBQVUsSUFBSXpHLENBQUMsQ0FBQzRRLE1BQU0sQ0FBQ2xILE9BQU8sS0FBSyxJQUFJLEVBQUU7UUFDbEVaLHFFQUFtQixDQUFDLENBQUMsQ0FBQ0UsWUFBWSxDQUFDLENBQUM7TUFDdEMsQ0FBQyxNQUFNLElBQ0xoSixDQUFDLENBQUM0USxNQUFNLENBQUNuSyxTQUFTLEtBQUssVUFBVSxJQUNqQ3pHLENBQUMsQ0FBQzRRLE1BQU0sQ0FBQ2xILE9BQU8sS0FBSyxLQUFLLEVBQzFCO1FBQ0FaLHFFQUFtQixDQUFDLENBQUMsQ0FBQ00sZUFBZSxDQUFDLENBQUM7TUFDekM7O01BRUE7TUFDQSxJQUFJcEosQ0FBQyxDQUFDNFEsTUFBTSxDQUFDbkssU0FBUyxLQUFLLFNBQVMsRUFBRTtRQUNwQzBKLDREQUFVLENBQUMsQ0FBQztRQUNaaEQsbURBQVMsQ0FBQyxDQUFDO1FBQ1huTSxxREFBVyxDQUFDLENBQUM7UUFDYlgseURBQWUsQ0FBQyxDQUFDO01BQ25COztNQUVBO01BQ0EsSUFBSUwsQ0FBQyxDQUFDNFEsTUFBTSxDQUFDbkssU0FBUyxLQUFLLG9CQUFvQixFQUFFO1FBQy9DLE1BQU1vRSxJQUFJLEdBQUc3SSxRQUFRLENBQUNDLGFBQWEsQ0FBQyxZQUFZLENBQUM7UUFFakQwSCx1RUFBcUIsQ0FBQyxDQUFDLENBQUNNLFVBQVUsQ0FBQ2pLLENBQUMsQ0FBQzRRLE1BQU0sQ0FBQztRQUU1QyxJQUFJL0YsSUFBSSxFQUFFO1VBQ1JtQyxxREFBVyxDQUFDLENBQUM7VUFDYkcsbURBQVMsQ0FBQyxDQUFDO1FBQ2I7TUFDRjtJQUNGLENBQUMsQ0FBQztFQUNKO0VBQ0FzRCxZQUFZLENBQUMsQ0FBQztBQUNoQjtBQUNBRCxTQUFTLENBQUMsQ0FBQyxDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2RhdGEuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2xheW91dC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvbWFpbi1jb250ZW50LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9tZW51LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy90YXNrLWRpc3BsYXkuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2NvbnRlbnQuY3NzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9mb3Jtcy5jc3MiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2xheW91dC5jc3MiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL25hdi5jc3MiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvY29udGVudC5jc3M/YzM0NyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvZm9ybXMuY3NzPzdkZDIiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2xheW91dC5jc3M/ZWFlYyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvbmF2LmNzcz8yMGE3Iiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBsaXN0QXJyYXkgfSBmcm9tIFwiLi9sYXlvdXRcIjtcbmltcG9ydCB7IHRhc2tBcnJheSB9IGZyb20gXCIuL21haW4tY29udGVudFwiO1xuXG4vLyBWZXJpZnkgdGhhdCBsb2NhbFN0b3JhZ2UgaXMgYSBhdmFpbGFibGUgaW4gdGhlIGN1cnJlbnQgYnJvd3Nlci5cbi8vIFRoaXMgc3RvcmFnZUF2YWlsYWJsZSBmdW5jdGlvbiBpcyBwcm92aWRlZCBieSBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9cbmNvbnN0IHN0b3JhZ2VBdmFpbGFibGUgPSAodHlwZSkgPT4ge1xuICBsZXQgc3RvcmFnZTtcbiAgdHJ5IHtcbiAgICBzdG9yYWdlID0gd2luZG93W3R5cGVdO1xuICAgIGNvbnN0IHggPSBcIl9fc3RvcmFnZV90ZXN0X19cIjtcbiAgICBzdG9yYWdlLnNldEl0ZW0oeCwgeCk7XG4gICAgc3RvcmFnZS5yZW1vdmVJdGVtKHgpO1xuICAgIHJldHVybiB0cnVlO1xuICB9IGNhdGNoIChlKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIGUgaW5zdGFuY2VvZiBET01FeGNlcHRpb24gJiZcbiAgICAgIC8vIGV2ZXJ5dGhpbmcgZXhjZXB0IEZpcmVmb3hcbiAgICAgIChlLmNvZGUgPT09IDIyIHx8XG4gICAgICAgIC8vIEZpcmVmb3hcbiAgICAgICAgZS5jb2RlID09PSAxMDE0IHx8XG4gICAgICAgIC8vIHRlc3QgbmFtZSBmaWVsZCB0b28sIGJlY2F1c2UgY29kZSBtaWdodCBub3QgYmUgcHJlc2VudFxuICAgICAgICAvLyBldmVyeXRoaW5nIGV4Y2VwdCBGaXJlZm94XG4gICAgICAgIGUubmFtZSA9PT0gXCJRdW90YUV4Y2VlZGVkRXJyb3JcIiB8fFxuICAgICAgICAvLyBGaXJlZm94XG4gICAgICAgIGUubmFtZSA9PT0gXCJOU19FUlJPUl9ET01fUVVPVEFfUkVBQ0hFRFwiKSAmJlxuICAgICAgLy8gYWNrbm93bGVkZ2UgUXVvdGFFeGNlZWRlZEVycm9yIG9ubHkgaWYgdGhlcmUncyBzb21ldGhpbmcgYWxyZWFkeSBzdG9yZWRcbiAgICAgIHN0b3JhZ2UgJiZcbiAgICAgIHN0b3JhZ2UubGVuZ3RoICE9PSAwXG4gICAgKTtcbiAgfVxufTtcblxuY29uc3QgcG9wdWxhdGVTdG9yYWdlID0gKCkgPT4ge1xuICAvLyBQb3B1bGF0ZSBsaXN0cyBpbiBzdG9yYWdlXG5cbiAgY29uc3QgbGlzdEFycmF5U3RyaW5nID0gSlNPTi5zdHJpbmdpZnkobGlzdEFycmF5KTtcblxuICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImxpc3RBcnJheVwiLCBsaXN0QXJyYXlTdHJpbmcpO1xuXG4gIHNldEFycmF5VmFsdWVzKCkuc2V0TGlzdHMoKTtcblxuICAvLyBQb3B1bGF0ZSB0YXNrcyBpbiBzdG9yYWdlXG4gIGlmICh0YXNrQXJyYXkubGVuZ3RoICE9PSAwKSB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0YXNrQXJyYXkubGVuZ3RoOyBpKyspIHtcbiAgICAgIGxldCBvYmogPSB0YXNrQXJyYXlbaV07XG4gICAgICBsZXQgb2JqU3RyaW5nID0gSlNPTi5zdHJpbmdpZnkob2JqKTtcblxuICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oYHRhc2stJHtpfWAsIG9ialN0cmluZyk7XG4gICAgfVxuXG4gICAgc2V0QXJyYXlWYWx1ZXMoKS5zZXRUYXNrcygpO1xuICB9XG59O1xuXG5jb25zdCByZW1vdmVJdGVtcyA9ICgpID0+IHtcbiAgbG9jYWxTdG9yYWdlLmNsZWFyKCk7XG59O1xuXG5jb25zdCBzZXRBcnJheVZhbHVlcyA9ICgpID0+IHtcbiAgLy8gR2V0IGxpc3Qgb3B0aW9ucyBmcm9tIHN0b3JhZ2VcbiAgY29uc3Qgc2V0TGlzdHMgPSAoKSA9PiB7XG4gICAgY29uc3QgbGlzdFZhbHVlcyA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwibGlzdEFycmF5XCIpO1xuXG4gICAgaWYgKGxpc3RWYWx1ZXMpIHtcbiAgICAgIGNvbnN0IG5ld0xpc3RBcnJheSA9IEpTT04ucGFyc2UobGlzdFZhbHVlcyk7XG5cbiAgICAgIGxpc3RBcnJheS5sZW5ndGggPSAwO1xuXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG5ld0xpc3RBcnJheS5sZW5ndGg7IGkrKykge1xuICAgICAgICBsaXN0QXJyYXkucHVzaChuZXdMaXN0QXJyYXlbaV0pO1xuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICAvLyBHZXQgdGFza3MgZnJvbSBzdG9yYWdlXG4gIGNvbnN0IHNldFRhc2tzID0gKCkgPT4ge1xuICAgIHRhc2tBcnJheS5sZW5ndGggPSAwO1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsb2NhbFN0b3JhZ2UubGVuZ3RoOyBpKyspIHtcbiAgICAgIGNvbnN0IHRhc2sgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShgdGFzay0ke2l9YCk7XG5cbiAgICAgIGNvbnN0IG5ld1Rhc2tPYmogPSBKU09OLnBhcnNlKHRhc2spO1xuXG4gICAgICBpZiAodGFzaykge1xuICAgICAgICB0YXNrQXJyYXkucHVzaChuZXdUYXNrT2JqKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHsgc2V0TGlzdHMsIHNldFRhc2tzIH07XG59O1xuXG5leHBvcnQgeyBzdG9yYWdlQXZhaWxhYmxlLCBwb3B1bGF0ZVN0b3JhZ2UsIHJlbW92ZUl0ZW1zLCBzZXRBcnJheVZhbHVlcyB9O1xuIiwiaW1wb3J0IFwiLi9sYXlvdXQuY3NzXCI7XG5pbXBvcnQgSW1nIGZyb20gXCIuL2ltYWdlcy9tZW51LnN2Z1wiO1xuaW1wb3J0IEltZzIgZnJvbSBcIi4vaW1hZ2VzL2NhdC5zdmdcIjtcbmltcG9ydCBJbWczIGZyb20gXCIuL2ltYWdlcy9iZWxsLnN2Z1wiO1xuaW1wb3J0IEltZzQgZnJvbSBcIi4vaW1hZ2VzL2xpc3Quc3ZnXCI7XG5cbmNvbnN0IGxpc3RBcnJheSA9IFtcInBlcnNvbmFsXCIsIFwid29ya1wiLCBcInNob3BwaW5nXCJdO1xuY29uc3QgcHJpb3JpdHlBcnJheSA9IFtcImNyaXRpY2FsXCIsIFwiaGlnaFwiLCBcIm5vcm1hbFwiXTtcblxuY29uc3QgcGFnZUxheW91dCA9ICgpID0+IHtcbiAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY29udGVudFwiKTtcbiAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgbWFpbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IGZvb3RlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IHBhcmEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgY29uc3QgbWVudUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IG1lbnVCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICBjb25zdCBtZW51SW1nID0gbmV3IEltYWdlKCk7XG4gIGNvbnN0IHByb2ZpbGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCBwcm9maWxlSW1nID0gbmV3IEltYWdlKCk7XG4gIGNvbnN0IGJlbGxJbWcgPSBuZXcgSW1hZ2UoKTtcbiAgY29uc3QgbGlzdEdyb3VwQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgY29uc3QgbGlzdEdyb3VwSW1nID0gbmV3IEltYWdlKCk7XG5cbiAgaGVhZGVyLmNsYXNzTGlzdC5hZGQoXCJoZWFkZXJcIik7XG4gIG1haW4uY2xhc3NMaXN0LmFkZChcIm1haW4tc2VjdGlvblwiKTtcbiAgZm9vdGVyLmNsYXNzTGlzdC5hZGQoXCJmb290ZXJcIik7XG4gIHBhcmEudGV4dENvbnRlbnQgPSBcIkNvcHlyaWdodCBAIFRvZG8gMjAyM1wiO1xuICBtZW51SW1nLnNyYyA9IEltZztcbiAgbWVudUltZy5hbHQgPSBcIm1lbnUgaWNvblwiO1xuICBtZW51QnRuLnR5cGUgPSBcImJ1dHRvblwiO1xuICBtZW51QnRuLmNsYXNzTGlzdC5hZGQoXCJtZW51LWJ0blwiKTtcbiAgcHJvZmlsZUltZy5zcmMgPSBJbWcyO1xuICBwcm9maWxlSW1nLmFsdCA9IFwiQSBjYXQgaWNvblwiO1xuICBiZWxsSW1nLnNyYyA9IEltZzM7XG4gIGJlbGxJbWcuYWx0ID0gXCJBIGJlbGwgaWNvblwiO1xuICBsaXN0R3JvdXBCdG4udHlwZSA9IFwiYnV0dG9uXCI7XG4gIGxpc3RHcm91cEJ0bi5jbGFzc0xpc3QuYWRkKFwidmlldy1saXN0cy1idG5cIik7XG4gIGxpc3RHcm91cEltZy5zcmMgPSBJbWc0O1xuICBsaXN0R3JvdXBJbWcuYWx0ID0gXCJBIGxpc3QgaWNvblwiO1xuXG4gIG1lbnVCdG4uYXBwZW5kQ2hpbGQobWVudUltZyk7XG4gIGxpc3RHcm91cEJ0bi5hcHBlbmRDaGlsZChsaXN0R3JvdXBJbWcpO1xuICBwcm9maWxlLmFwcGVuZENoaWxkKGxpc3RHcm91cEJ0bik7XG4gIHByb2ZpbGUuYXBwZW5kQ2hpbGQoYmVsbEltZyk7XG4gIHByb2ZpbGUuYXBwZW5kQ2hpbGQocHJvZmlsZUltZyk7XG4gIG1lbnVDb250YWluZXIuYXBwZW5kQ2hpbGQobWVudUJ0bik7XG4gIGhlYWRlci5hcHBlbmRDaGlsZChtZW51Q29udGFpbmVyKTtcbiAgaGVhZGVyLmFwcGVuZENoaWxkKHByb2ZpbGUpO1xuICBmb290ZXIuYXBwZW5kQ2hpbGQocGFyYSk7XG4gIGNvbnRlbnQuYXBwZW5kQ2hpbGQoaGVhZGVyKTtcbiAgY29udGVudC5hcHBlbmRDaGlsZChtYWluKTtcbiAgY29udGVudC5hcHBlbmRDaGlsZChmb290ZXIpO1xufTtcblxuY29uc3QgdXBkYXRlTGlzdEFycmF5ID0gKCkgPT4ge1xuICBjb25zdCBuZXdMaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNuZXctbGlzdFwiKS52YWx1ZTtcbiAgbGlzdEFycmF5LnB1c2gobmV3TGlzdCk7XG59O1xuXG5jb25zdCBkaXNwbGF5SGVpZ2h0ID0gKCkgPT4ge1xuICBsZXQgaGVpZ2h0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50YXNrLWRpc3BsYXlcIikuY2xpZW50SGVpZ2h0O1xuXG4gIHJldHVybiBoZWlnaHQ7XG59O1xuXG5leHBvcnQgeyBsaXN0QXJyYXksIHByaW9yaXR5QXJyYXksIHBhZ2VMYXlvdXQsIHVwZGF0ZUxpc3RBcnJheSwgZGlzcGxheUhlaWdodCB9O1xuIiwiaW1wb3J0IFwiLi9jb250ZW50LmNzc1wiO1xuaW1wb3J0IFwiLi9mb3Jtcy5jc3NcIjtcbmltcG9ydCB7IGxpc3RBcnJheSB9IGZyb20gXCIuL2xheW91dFwiO1xuaW1wb3J0IEltZyBmcm9tIFwiLi9pbWFnZXMvYWRkLXRhc2suc3ZnXCI7XG5pbXBvcnQgSW1nMiBmcm9tIFwiLi9pbWFnZXMvYmFjay5zdmdcIjtcbmltcG9ydCBJbWczIGZyb20gXCIuL2ltYWdlcy9hZGQtbGlzdC5zdmdcIjtcbmltcG9ydCBJbWc0IGZyb20gXCIuL2ltYWdlcy9zYXZlLnN2Z1wiO1xuaW1wb3J0IEltZzUgZnJvbSBcIi4vaW1hZ2VzL2NhbGVuZGFyLnN2Z1wiO1xuaW1wb3J0IEltZzYgZnJvbSBcIi4vaW1hZ2VzL2RlbGV0ZS5zdmdcIjtcbmltcG9ydCB7IHBvcHVsYXRlU3RvcmFnZSB9IGZyb20gXCIuL2RhdGFcIjtcblxuY29uc3QgdGFza0FycmF5ID0gW107XG5cbmNvbnN0IG1haW5Db250ZW50ID0gKCkgPT4ge1xuICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1haW4tc2VjdGlvblwiKTtcblxuICBjb25zdCB3cmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgdGFza0Rpc3BsYXkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCBoZWFkaW5nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgyXCIpO1xuICBjb25zdCBidG5Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCBidG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICBjb25zdCBidG5JbWcgPSBuZXcgSW1hZ2UoKTtcblxuICB3cmFwcGVyLmNsYXNzTGlzdC5hZGQoXCJ3cmFwcGVyXCIpO1xuICBoZWFkZXIuY2xhc3NMaXN0LmFkZChcInRhc2staGVhZGVyXCIpO1xuICB0YXNrRGlzcGxheS5jbGFzc0xpc3QuYWRkKFwidGFzay1kaXNwbGF5XCIpO1xuICBidG5Db250YWluZXIuY2xhc3NMaXN0LmFkZChcImRpc3BsYXktYnRuLWNvbnRhaW5lclwiKTtcbiAgYnRuLnR5cGUgPSBcImJ1dHRvblwiO1xuICBidG4uY2xhc3NMaXN0LmFkZChcImZvcm0tYnRuXCIpO1xuICBidG5JbWcuc3JjID0gSW1nO1xuICBidG5JbWcuYWx0ID0gXCJQbHVzIGljb25cIjtcbiAgaGVhZGluZy50ZXh0Q29udGVudCA9IFwiVG9kYXlcIjtcblxuICBoZWFkZXIuYXBwZW5kQ2hpbGQoaGVhZGluZyk7XG4gIGJ0bi5hcHBlbmRDaGlsZChidG5JbWcpO1xuICBidG5Db250YWluZXIuYXBwZW5kQ2hpbGQoYnRuKTtcbiAgd3JhcHBlci5hcHBlbmRDaGlsZChoZWFkZXIpO1xuICB3cmFwcGVyLmFwcGVuZENoaWxkKHRhc2tEaXNwbGF5KTtcbiAgd3JhcHBlci5hcHBlbmRDaGlsZChidG5Db250YWluZXIpO1xuICBjb250YWluZXIuYXBwZW5kQ2hpbGQod3JhcHBlcik7XG59O1xuXG5jb25zdCBlbXB0eUluZGljYXRvciA9ICgpID0+IHtcbiAgY29uc3QgZGlzcGxheSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudGFzay1kaXNwbGF5XCIpO1xuICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCBwYXJhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gIGNvbnN0IGltZyA9IG5ldyBJbWFnZSgpO1xuXG4gIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwiZW1wdHktaW5kaWNhdG9yXCIpO1xuICBpbWcuc3JjID0gSW1nNTtcbiAgaW1nLmFsdCA9IFwiZW1wdHkgaW1hZ2VcIjtcbiAgcGFyYS50ZXh0Q29udGVudCA9IFwiTm90aGluZyB0byBkb1wiO1xuXG4gIGNvbnRhaW5lci5hcHBlbmRDaGlsZChpbWcpO1xuICBjb250YWluZXIuYXBwZW5kQ2hpbGQocGFyYSk7XG4gIGRpc3BsYXkuYXBwZW5kQ2hpbGQoY29udGFpbmVyKTtcbn07XG5cbmNvbnN0IGNyZWF0ZUZvcm0gPSAoKSA9PiB7XG4gIGNvbnN0IGRpc3BsYXkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRhc2stZGlzcGxheVwiKTtcbiAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50YXNrLWhlYWRlclwiKTtcblxuICBkaXNwbGF5LnRleHRDb250ZW50ID0gXCJcIjtcblxuICAvLyBjcmVhdGUgZm9ybSBpbnB1dHNcbiAgY29uc3QgZm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJmb3JtXCIpO1xuICBjb25zdCB0YXNrQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgdGFza0xhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xuICBjb25zdCB0YXNrSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gIGNvbnN0IGRlc2NyaXB0aW9uQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgZGVzY3JpcHRpb25MYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcbiAgY29uc3QgZGVzY3JpcHRpb25JbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZXh0YXJlYVwiKTtcbiAgY29uc3QgZHVlRGF0ZUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IGRhdGVDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCBkdWVEYXRlTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XG4gIGNvbnN0IGR1ZURhdGVJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcblxuICAvLyBjcmVhdGUgZm9ybSBzZWxlY3Rpb25zXG4gIGNvbnN0IHByaW9yaXR5RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgcHJpb3JpdHlMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcbiAgY29uc3QgcHJpb3JpdHlJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzZWxlY3RcIik7XG4gIGNvbnN0IHN1Ym1pdENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IHN1Ym1pdFNlbGVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IHN1Ym1pdExhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xuICBjb25zdCBzdWJtaXRJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzZWxlY3RcIik7XG4gIGNvbnN0IHByaW9yaXR5T3B0aW9uMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIik7XG4gIGNvbnN0IHByaW9yaXR5T3B0aW9uMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIik7XG4gIGNvbnN0IHByaW9yaXR5T3B0aW9uMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIik7XG4gIGNvbnN0IGNyZWF0ZUxpc3RCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICBjb25zdCBjcmVhdGVMaXN0SW1nID0gbmV3IEltYWdlKCk7XG5cbiAgLy9BZGQgYXR0cmlidXRlc1xuICBmb3JtLmNsYXNzTGlzdC5hZGQoXCJ0YXNrLWZvcm1cIik7XG4gIHRhc2tDb250YWluZXIuY2xhc3NMaXN0LmFkZChcInRpdGxlLXdyYXBwZXJcIik7XG4gIGRlc2NyaXB0aW9uQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJkZXNjcmlwdGlvbi13cmFwcGVyXCIpO1xuICBkdWVEYXRlQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJkdWUtZGF0ZS13cmFwcGVyXCIpO1xuICBwcmlvcml0eURpdi5jbGFzc0xpc3QuYWRkKFwicHJpb3JpdHktd3JhcHBlclwiKTtcbiAgc3VibWl0Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJsaXN0LXdyYXBwZXJcIik7XG4gIGRhdGVDb250YWluZXIuY2xhc3NMaXN0LmFkZChcImRhdGUtY29udGFpbmVyXCIpO1xuICB0YXNrTGFiZWwuaHRtbEZvciA9IFwidGFzay10aXRsZVwiO1xuICB0YXNrTGFiZWwudGV4dENvbnRlbnQgPSBcIk5ldyBUYXNrXCI7XG4gIGRlc2NyaXB0aW9uTGFiZWwuaHRtbEZvciA9IFwiZGVzY3JpcHRpb25cIjtcbiAgZGVzY3JpcHRpb25MYWJlbC50ZXh0Q29udGVudCA9IFwiV2hhdCBpcyB0byBiZSBkb25lP1wiO1xuICBkdWVEYXRlTGFiZWwuaHRtbEZvciA9IFwiZGF0ZVwiO1xuICBkdWVEYXRlTGFiZWwudGV4dENvbnRlbnQgPSBcIkRhdGVcIjtcbiAgcHJpb3JpdHlMYWJlbC5odG1sRm9yID0gXCJwcmlvcml0eVwiO1xuICBwcmlvcml0eUxhYmVsLnRleHRDb250ZW50ID0gXCJQcmlvcml0eVwiO1xuICBzdWJtaXRMYWJlbC5odG1sRm9yID0gXCJsaXN0XCI7XG4gIHN1Ym1pdExhYmVsLnRleHRDb250ZW50ID0gXCJMaXN0XCI7XG4gIGR1ZURhdGVJbnB1dC50eXBlID0gXCJkYXRlXCI7XG4gIHRhc2tJbnB1dC50eXBlID0gXCJ0ZXh0XCI7XG4gIHRhc2tJbnB1dC5uYW1lID0gXCJ0aXRsZVwiO1xuICB0YXNrSW5wdXQuaWQgPSBcInRhc2stdGl0bGVcIjtcbiAgdGFza0lucHV0Lm1heExlbmd0aCA9IFwiMzVcIjtcbiAgdGFza0lucHV0LnBsYWNlaG9sZGVyID0gXCJFbnRlciBUYXNrIE5hbWVcIjtcbiAgdGFza0lucHV0LnJlcXVpcmVkID0gdHJ1ZTtcbiAgZGVzY3JpcHRpb25JbnB1dC5uYW1lID0gXCJkZXNjcmlwdGlvblwiO1xuICBkZXNjcmlwdGlvbklucHV0LmlkID0gXCJkZXNjcmlwdGlvblwiO1xuICBkZXNjcmlwdGlvbklucHV0LnBsYWNlaG9sZGVyID0gXCJFbnRlciBUYXNrIERlc2NyaXB0aW9uIEhlcmVcIjtcbiAgZHVlRGF0ZUlucHV0Lm5hbWUgPSBcImRhdGVcIjtcbiAgZHVlRGF0ZUlucHV0LmlkID0gXCJkYXRlXCI7XG4gIHByaW9yaXR5SW5wdXQubmFtZSA9IFwicHJpb3JpdHlcIjtcbiAgcHJpb3JpdHlJbnB1dC5pZCA9IFwicHJpb3JpdHlcIjtcbiAgY3JlYXRlTGlzdEJ0bi50eXBlID0gXCJidXR0b25cIjtcbiAgY3JlYXRlTGlzdEJ0bi5jbGFzc0xpc3QuYWRkKFwiY3JlYXRlLWxpc3QtYnRuXCIpO1xuICBjcmVhdGVMaXN0SW1nLnNyYyA9IEltZzM7XG4gIGNyZWF0ZUxpc3RJbWcuYWx0ID0gXCJBZGQgbGlzdCBpY29uXCI7XG4gIHN1Ym1pdElucHV0Lm5hbWUgPSBcImxpc3RcIjtcbiAgc3VibWl0SW5wdXQuaWQgPSBcImxpc3RcIjtcbiAgcHJpb3JpdHlPcHRpb24xLnZhbHVlID0gXCJjcml0aWNhbFwiO1xuICBwcmlvcml0eU9wdGlvbjEudGV4dENvbnRlbnQgPSBcIkNyaXRpY2FsXCI7XG4gIHByaW9yaXR5T3B0aW9uMi52YWx1ZSA9IFwiaGlnaFwiO1xuICBwcmlvcml0eU9wdGlvbjIudGV4dENvbnRlbnQgPSBcIkhpZ2hcIjtcbiAgcHJpb3JpdHlPcHRpb24zLnZhbHVlID0gXCJub3JtYWxcIjtcbiAgcHJpb3JpdHlPcHRpb24zLnRleHRDb250ZW50ID0gXCJOb3JtYWxcIjtcblxuICAvLyBEeW5hbWljYWxseSBhZGQgbGlzdCBvcHRpb25zLiBXaGVuIHRoZSB1c2VyIGFkZHMgYSBuZXcgbGlzdCxcbiAgLy8gdGhlIG5ldyBsaXN0IHdpbGwgYmUgcHJlc2VudCBpbiB0aGUgbmV4dCBmb3JtLlxuICBmb3IgKGxldCBpID0gMDsgaSA8IGxpc3RBcnJheS5sZW5ndGg7IGkrKykge1xuICAgIGNvbnN0IHN1Ym1pdE9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIik7XG5cbiAgICBzdWJtaXRPcHRpb24udmFsdWUgPSBsaXN0QXJyYXlbaV07XG4gICAgc3VibWl0T3B0aW9uLnRleHRDb250ZW50ID0gbGlzdEFycmF5W2ldO1xuXG4gICAgc3VibWl0SW5wdXQuYXBwZW5kQ2hpbGQoc3VibWl0T3B0aW9uKTtcbiAgfVxuXG4gIC8vIEFwcGVuZCBub2Rlc1xuICBwcmlvcml0eUlucHV0LmFwcGVuZENoaWxkKHByaW9yaXR5T3B0aW9uMSk7XG4gIHByaW9yaXR5SW5wdXQuYXBwZW5kQ2hpbGQocHJpb3JpdHlPcHRpb24yKTtcbiAgcHJpb3JpdHlJbnB1dC5hcHBlbmRDaGlsZChwcmlvcml0eU9wdGlvbjMpO1xuICB0YXNrQ29udGFpbmVyLmFwcGVuZENoaWxkKHRhc2tMYWJlbCk7XG4gIHRhc2tDb250YWluZXIuYXBwZW5kQ2hpbGQodGFza0lucHV0KTtcbiAgZGVzY3JpcHRpb25Db250YWluZXIuYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb25MYWJlbCk7XG4gIGRlc2NyaXB0aW9uQ29udGFpbmVyLmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uSW5wdXQpO1xuICBkYXRlQ29udGFpbmVyLmFwcGVuZENoaWxkKGR1ZURhdGVMYWJlbCk7XG4gIGRhdGVDb250YWluZXIuYXBwZW5kQ2hpbGQoZHVlRGF0ZUlucHV0KTtcbiAgcHJpb3JpdHlEaXYuYXBwZW5kQ2hpbGQocHJpb3JpdHlMYWJlbCk7XG4gIHByaW9yaXR5RGl2LmFwcGVuZENoaWxkKHByaW9yaXR5SW5wdXQpO1xuICBzdWJtaXRTZWxlY3QuYXBwZW5kQ2hpbGQoc3VibWl0TGFiZWwpO1xuICBzdWJtaXRTZWxlY3QuYXBwZW5kQ2hpbGQoc3VibWl0SW5wdXQpO1xuICBjcmVhdGVMaXN0QnRuLmFwcGVuZENoaWxkKGNyZWF0ZUxpc3RJbWcpO1xuICBzdWJtaXRDb250YWluZXIuYXBwZW5kQ2hpbGQoc3VibWl0U2VsZWN0KTtcbiAgc3VibWl0Q29udGFpbmVyLmFwcGVuZENoaWxkKGNyZWF0ZUxpc3RCdG4pO1xuICBkdWVEYXRlQ29udGFpbmVyLmFwcGVuZENoaWxkKGRhdGVDb250YWluZXIpO1xuICBmb3JtLmFwcGVuZENoaWxkKHRhc2tDb250YWluZXIpO1xuICBmb3JtLmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uQ29udGFpbmVyKTtcbiAgZm9ybS5hcHBlbmRDaGlsZChkdWVEYXRlQ29udGFpbmVyKTtcbiAgZm9ybS5hcHBlbmRDaGlsZChwcmlvcml0eURpdik7XG4gIGZvcm0uYXBwZW5kQ2hpbGQoc3VibWl0Q29udGFpbmVyKTtcbiAgZGlzcGxheS5hcHBlbmRDaGlsZChmb3JtKTtcbn07XG5cbmNvbnN0IGRpc3BsYXlCdG5Db250cm9sbGVyID0gKGVsZSkgPT4ge1xuICBjb25zdCBidG5Db250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmRpc3BsYXktYnRuLWNvbnRhaW5lclwiKTtcblxuICBidG5Db250YWluZXIudGV4dENvbnRlbnQgPSBcIlwiO1xuXG4gIGlmIChlbGUuY2xhc3NOYW1lID09PSBcImZvcm0tYnRuXCIpIHtcbiAgICBjb25zdCBidG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgIGNvbnN0IGJ0bkltZyA9IG5ldyBJbWFnZSgpO1xuXG4gICAgYnRuLnR5cGUgPSBcImJ1dHRvblwiO1xuICAgIGJ0bi5jbGFzc0xpc3QuYWRkKFwic3VibWl0LWJ0blwiKTtcbiAgICBidG5JbWcuc3JjID0gSW1nNDtcbiAgICBidG5JbWcuYWx0ID0gXCJDaGVjayBjaXJjbGUgaWNvblwiO1xuXG4gICAgYnRuLmFwcGVuZENoaWxkKGJ0bkltZyk7XG4gICAgYnRuQ29udGFpbmVyLmFwcGVuZENoaWxkKGJ0bik7XG4gIH0gZWxzZSBpZiAoZWxlLmNsYXNzTmFtZSA9PT0gXCJ0YXNrXCIpIHtcbiAgICBjb25zdCBidG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgIGNvbnN0IGJ0bkltZyA9IG5ldyBJbWFnZSgpO1xuXG4gICAgYnRuLnR5cGUgPSBcImJ1dHRvblwiO1xuICAgIGJ0bi5jbGFzc0xpc3QuYWRkKFwic2F2ZS1idG5cIik7XG4gICAgYnRuSW1nLnNyYyA9IEltZzQ7XG4gICAgYnRuSW1nLmFsdCA9IFwiQ2hlY2sgY2lyY2xlIGljb25cIjtcblxuICAgIGJ0bi5hcHBlbmRDaGlsZChidG5JbWcpO1xuICAgIGJ0bkNvbnRhaW5lci5hcHBlbmRDaGlsZChidG4pO1xuICB9IGVsc2Uge1xuICAgIGNvbnN0IGJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgY29uc3QgYnRuSW1nID0gbmV3IEltYWdlKCk7XG5cbiAgICBidG4udHlwZSA9IFwiYnV0dG9uXCI7XG4gICAgYnRuLmNsYXNzTGlzdC5hZGQoXCJmb3JtLWJ0blwiKTtcbiAgICBidG5JbWcuc3JjID0gSW1nO1xuICAgIGJ0bkltZy5hbHQgPSBcIkFkZCBjaXJjbGUgaWNvblwiO1xuXG4gICAgYnRuLmFwcGVuZENoaWxkKGJ0bkltZyk7XG4gICAgYnRuQ29udGFpbmVyLmFwcGVuZENoaWxkKGJ0bik7XG4gIH1cbn07XG5cbmNvbnN0IG5ld0xpc3RGb3JtID0gKCkgPT4ge1xuICBjb25zdCBkaXNwbGF5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50YXNrLWRpc3BsYXlcIik7XG5cbiAgY29uc3QgbGlzdEZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZm9ybVwiKTtcbiAgY29uc3QgbGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XG4gIGNvbnN0IGlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICBjb25zdCBidG5Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCBjYW5jZWxCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICBjb25zdCBhY2NlcHRCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuXG4gIGxpc3RGb3JtLmNsYXNzTGlzdC5hZGQoXCJwb3AtdXBcIik7XG4gIGNhbmNlbEJ0bi50eXBlID0gXCJidXR0b25cIjtcbiAgY2FuY2VsQnRuLmNsYXNzTGlzdC5hZGQoXCJjYW5jZWwtbGlzdC1idG5cIik7XG4gIGNhbmNlbEJ0bi50ZXh0Q29udGVudCA9IFwiQ2FuY2VsXCI7XG4gIGFjY2VwdEJ0bi50eXBlID0gXCJidXR0b25cIjtcbiAgYWNjZXB0QnRuLmNsYXNzTGlzdC5hZGQoXCJhZGQtbGlzdC1idG5cIik7XG4gIGFjY2VwdEJ0bi50ZXh0Q29udGVudCA9IFwiQWRkXCI7XG4gIGxhYmVsLmh0bWxGb3IgPSBcIm5ldy1saXN0XCI7XG4gIGxhYmVsLnRleHRDb250ZW50ID0gXCJOZXcgTGlzdFwiO1xuICBpbnB1dC50eXBlID0gXCJ0ZXh0XCI7XG4gIGlucHV0Lm5hbWUgPSBcIm5ldy1saXN0XCI7XG4gIGlucHV0LmlkID0gXCJuZXctbGlzdFwiO1xuICBpbnB1dC5yZXF1aXJlZCA9IHRydWU7XG4gIGlucHV0LnBsYWNlaG9sZGVyID0gXCJFbnRlciBMaXN0IE5hbWVcIjtcbiAgaW5wdXQubWF4TGVuZ3RoID0gXCIxNVwiO1xuXG4gIGJ0bkNvbnRhaW5lci5hcHBlbmRDaGlsZChhY2NlcHRCdG4pO1xuICBidG5Db250YWluZXIuYXBwZW5kQ2hpbGQoY2FuY2VsQnRuKTtcbiAgbGlzdEZvcm0uYXBwZW5kQ2hpbGQobGFiZWwpO1xuICBsaXN0Rm9ybS5hcHBlbmRDaGlsZChpbnB1dCk7XG4gIGxpc3RGb3JtLmFwcGVuZENoaWxkKGJ0bkNvbnRhaW5lcik7XG4gIGRpc3BsYXkuYXBwZW5kQ2hpbGQobGlzdEZvcm0pO1xufTtcblxuY29uc3QgYWRkVGltZU9wdGlvbiA9ICgpID0+IHtcbiAgY29uc3Qgc2libGluZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZGF0ZS1jb250YWluZXJcIik7XG4gIGNvbnN0IHNpYmxpbmdUd28gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRpbWUtY29udGFpbmVyXCIpO1xuICBjb25zdCBwYXJlbnQgPSBzaWJsaW5nLnBhcmVudE5vZGU7XG5cbiAgaWYgKHBhcmVudC5jb250YWlucyhzaWJsaW5nVHdvKSkge1xuICAgIHJldHVybjtcbiAgfSBlbHNlIHtcbiAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNvbnN0IGxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xuICAgIGNvbnN0IHRpbWVJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcblxuICAgIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwidGltZS1jb250YWluZXJcIik7XG4gICAgbGFiZWwuaHRtbEZvciA9IFwidGltZVwiO1xuICAgIGxhYmVsLnRleHRDb250ZW50ID0gXCJUaW1lXCI7XG4gICAgdGltZUlucHV0LnR5cGUgPSBcInRpbWVcIjtcbiAgICB0aW1lSW5wdXQubmFtZSA9IFwidGltZVwiO1xuICAgIHRpbWVJbnB1dC5pZCA9IFwidGltZVwiO1xuXG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGxhYmVsKTtcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQodGltZUlucHV0KTtcbiAgICBwYXJlbnQuYXBwZW5kQ2hpbGQoY29udGFpbmVyKTtcbiAgfVxufTtcblxuY29uc3QgYWRkTGlzdE9wdGlvbiA9ICgpID0+IHtcbiAgY29uc3Qgb3B0aW9uc0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbGlzdFwiKTtcbiAgY29uc3QgbmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbmV3LWxpc3RcIikudmFsdWU7XG4gIGNvbnN0IG5ld09wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIik7XG5cbiAgbmV3T3B0aW9uLnZhbHVlID0gbmFtZTtcbiAgbmV3T3B0aW9uLnNlbGVjdGVkID0gdHJ1ZTtcbiAgbmV3T3B0aW9uLnRleHRDb250ZW50ID0gbmFtZTtcblxuICBvcHRpb25zQ29udGFpbmVyLmFwcGVuZENoaWxkKG5ld09wdGlvbik7XG59O1xuXG5jb25zdCBwcm9jZXNzRm9ybSA9ICgpID0+IHtcbiAgY29uc3QgZm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudGFzay1mb3JtXCIpO1xuICBjb25zdCBnZXRGb3JtRGF0YSA9IE9iamVjdC5mcm9tRW50cmllcyhuZXcgRm9ybURhdGEoZm9ybSkpO1xuXG4gIHRhc2tBcnJheS5wdXNoKGdldEZvcm1EYXRhKTtcbn07XG5cbmNvbnN0IG1vZGlmeVRhc2sgPSAoKSA9PiB7XG4gIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmZ1bGwtdGFzay1mb3JtXCIpO1xuICBjb25zdCBpbmRleCA9IHBhcnNlSW50KGZvcm0uZGF0YXNldC5udW0pO1xuICBjb25zdCBmb3JtRGF0YSA9IE9iamVjdC5mcm9tRW50cmllcyhuZXcgRm9ybURhdGEoZm9ybSkpO1xuXG4gIHRhc2tBcnJheS5zcGxpY2UoaW5kZXgsIDEsIGZvcm1EYXRhKTtcbn07XG5cbmNvbnN0IGJhY2tCdG5Db250cm9sbGVyID0gKCkgPT4ge1xuICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRhc2staGVhZGVyXCIpO1xuICBjb25zdCBkaXNwbGF5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50YXNrLWRpc3BsYXlcIik7XG4gIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRhc2stZm9ybVwiKTtcbiAgY29uc3QgZm9ybVR3byA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZnVsbC10YXNrLWZvcm1cIik7XG4gIGNvbnN0IGNoaWxkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5iYWNrLWJ0bi1jb250YWluZXJcIik7XG5cbiAgaWYgKGhlYWRlci5jb250YWlucyhjaGlsZCkgJiYgZGlzcGxheS5jb250YWlucyhmb3JtKSkge1xuICAgIGhlYWRlci5yZW1vdmVDaGlsZChjaGlsZCk7XG4gICAgZGlzcGxheS5yZW1vdmVDaGlsZChmb3JtKTtcbiAgfSBlbHNlIGlmIChoZWFkZXIuY29udGFpbnMoY2hpbGQpICYmIGRpc3BsYXkuY29udGFpbnMoZm9ybVR3bykpIHtcbiAgICBoZWFkZXIucmVtb3ZlQ2hpbGQoY2hpbGQpO1xuICAgIGRpc3BsYXkucmVtb3ZlQ2hpbGQoZm9ybVR3byk7XG4gIH0gZWxzZSBpZiAoZGlzcGxheS5jb250YWlucyhmb3JtKSB8fCBkaXNwbGF5LmNvbnRhaW5zKGZvcm1Ud28pKSB7XG4gICAgLy8gQ3JlYXRlIGEgYmFjayBidXR0b25cbiAgICBjb25zdCBiYWNrQnRuQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjb25zdCBiYWNrQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICBjb25zdCBiYWNrQnRuSW1nID0gbmV3IEltYWdlKCk7XG5cbiAgICBiYWNrQnRuQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJiYWNrLWJ0bi1jb250YWluZXJcIik7XG4gICAgYmFja0J0bi50eXBlID0gXCJidXR0b25cIjtcbiAgICBiYWNrQnRuLmNsYXNzTGlzdC5hZGQoXCJiYWNrLWJ0blwiKTtcbiAgICBiYWNrQnRuSW1nLnNyYyA9IEltZzI7XG4gICAgYmFja0J0bkltZy5hbHQgPSBcIkJhY2sgYXJyb3cgaWNvblwiO1xuXG4gICAgYmFja0J0bi5hcHBlbmRDaGlsZChiYWNrQnRuSW1nKTtcbiAgICBiYWNrQnRuQ29udGFpbmVyLmFwcGVuZENoaWxkKGJhY2tCdG4pO1xuICAgIGhlYWRlci5hcHBlbmRDaGlsZChiYWNrQnRuQ29udGFpbmVyKTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm47XG4gIH1cbn07XG5cbmNvbnN0IGRlbGV0ZUJ0bkNvbnRyb2xsZXIgPSAoKSA9PiB7XG4gIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudGFzay1oZWFkZXJcIik7XG4gIGNvbnN0IGRpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZGVsLWJ0bi1jb250YWluZXJcIik7XG5cbiAgY29uc3QgYWRkRGVsZXRlQnRuID0gKCkgPT4ge1xuICAgIGlmIChoZWFkZXIuY29udGFpbnMoZGl2KSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY29uc3QgZGVsQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICBjb25zdCBkZWxCdG5JbWcgPSBuZXcgSW1hZ2UoKTtcblxuICAgIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwiZGVsLWJ0bi1jb250YWluZXJcIik7XG4gICAgZGVsQnRuLnR5cGUgPSBcInN1Ym1pdFwiO1xuICAgIGRlbEJ0bi5jbGFzc0xpc3QuYWRkKFwiZGVsLWJ0blwiKTtcbiAgICBkZWxCdG5JbWcuc3JjID0gSW1nNjtcbiAgICBkZWxCdG5JbWcuYWx0ID0gXCJEZWxldGUgaWNvblwiO1xuXG4gICAgZGVsQnRuLmFwcGVuZENoaWxkKGRlbEJ0bkltZyk7XG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGRlbEJ0bik7XG4gICAgaGVhZGVyLmFwcGVuZENoaWxkKGNvbnRhaW5lcik7XG4gIH07XG5cbiAgY29uc3QgY2hlY2tEZWxldGVCdG4gPSAoKSA9PiB7XG4gICAgaWYgKGhlYWRlci5jb250YWlucyhkaXYpKSB7XG4gICAgICBoZWFkZXIucmVtb3ZlQ2hpbGQoZGl2KTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgcmVtb3ZlRGVsZXRlQnRuID0gKCkgPT4ge1xuICAgIGNvbnN0IGNoZWNrQm94ZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmNoZWNrYm94XCIpO1xuXG4gICAgbGV0IGNoZWNrZWRDb3VudCA9IDA7XG5cbiAgICBjaGVja0JveGVzLmZvckVhY2goKGNoZWNrQm94KSA9PiB7XG4gICAgICBpZiAoY2hlY2tCb3guY2hlY2tlZCA9PT0gdHJ1ZSkge1xuICAgICAgICBjaGVja2VkQ291bnQgKz0gMTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGlmIChjaGVja2VkQ291bnQgPT09IDApIHtcbiAgICAgIGhlYWRlci5yZW1vdmVDaGlsZChkaXYpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB7IGFkZERlbGV0ZUJ0biwgY2hlY2tEZWxldGVCdG4sIHJlbW92ZURlbGV0ZUJ0biB9O1xufTtcblxuY29uc3QgbGlzdERpc3BsYXlDb250cm9sbGVyID0gKCkgPT4ge1xuICBjb25zdCBsaXN0c1ZpZXcgPSAoKSA9PiB7XG4gICAgY29uc3QgZGlzcGxheSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudGFzay1kaXNwbGF5XCIpO1xuICAgIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJoMlwiKTtcblxuICAgIGRpc3BsYXkudGV4dENvbnRlbnQgPSBcIlwiO1xuICAgIGhlYWRlci50ZXh0Q29udGVudCA9IFwiVGFzayBMaXN0c1wiO1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsaXN0QXJyYXkubGVuZ3RoOyBpKyspIHtcbiAgICAgIGNvbnN0IGxpc3RDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgY29uc3QgdGl0bGVXcmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgIGNvbnN0IGxpc3RUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoM1wiKTtcbiAgICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG5cbiAgICAgIGxpc3RDb250YWluZXIuY2xhc3NMaXN0LmFkZChcImxpc3QtYmFyXCIpO1xuICAgICAgbGlzdENvbnRhaW5lci5pZCA9IGxpc3RBcnJheVtpXTtcbiAgICAgIGxpc3RDb250YWluZXIuZGF0YXNldC5udW0gPSBpO1xuICAgICAgbGlzdFRpdGxlLnRleHRDb250ZW50ID0gbGlzdEFycmF5W2ldO1xuXG4gICAgICB0aXRsZVdyYXBwZXIuYXBwZW5kQ2hpbGQobGlzdFRpdGxlKTtcbiAgICAgIHRpdGxlV3JhcHBlci5hcHBlbmRDaGlsZChkZXNjcmlwdGlvbik7XG4gICAgICBsaXN0Q29udGFpbmVyLmFwcGVuZENoaWxkKHRpdGxlV3JhcHBlcik7XG5cbiAgICAgIGlmIChpID4gMikge1xuICAgICAgICBjb25zdCBidG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgICAgICBjb25zdCBidG5JbWcgPSBuZXcgSW1hZ2UoKTtcblxuICAgICAgICBidG4udHlwZSA9IFwiYnV0dG9uXCI7XG4gICAgICAgIGJ0bi5jbGFzc0xpc3QuYWRkKFwicmVtb3ZlLXByb2plY3QtYnRuXCIpO1xuICAgICAgICBidG5JbWcuc3JjID0gSW1nNjtcbiAgICAgICAgYnRuSW1nLmFsdCA9IFwiUmVtb3ZlIGxpc3QgaWNvblwiO1xuICAgICAgICBkZXNjcmlwdGlvbi50ZXh0Q29udGVudCA9IFwiQ3VzdG9tXCI7XG5cbiAgICAgICAgYnRuLmFwcGVuZENoaWxkKGJ0bkltZyk7XG4gICAgICAgIGxpc3RDb250YWluZXIuYXBwZW5kQ2hpbGQoYnRuKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGRlc2NyaXB0aW9uLnRleHRDb250ZW50ID0gXCJEZWZhdWx0XCI7XG4gICAgICB9XG5cbiAgICAgIGRpc3BsYXkuYXBwZW5kQ2hpbGQobGlzdENvbnRhaW5lcik7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IHJlbW92ZUxpc3QgPSAoYnRuKSA9PiB7XG4gICAgY29uc3QgcGFyZW50ID0gYnRuLnBhcmVudE5vZGU7XG4gICAgY29uc3QgaW5kZXggPSBwYXJzZUludChwYXJlbnQuZGF0YXNldC5udW0pO1xuXG4gICAgLy8gUmVtb3ZlIGxpc3QgYW5kIHVwZGF0ZSBkaXNwbGF5XG4gICAgbGlzdEFycmF5LnNwbGljZShpbmRleCwgMSk7XG4gICAgbGlzdHNWaWV3KCk7XG5cbiAgICAvLyBDaGFuZ2UgdGFzayBsaXN0IHRvIGRlZmF1bHQgbGlzdFxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGFza0FycmF5Lmxlbmd0aDsgaSsrKSB7XG4gICAgICBjb25zdCBvYmogPSB0YXNrQXJyYXlbaV07XG4gICAgICBjb25zdCBsaXN0Q2hvaWNlID0gb2JqW1wibGlzdFwiXTtcblxuICAgICAgaWYgKHBhcmVudC5pZC5pbmNsdWRlcyhsaXN0Q2hvaWNlKSkge1xuICAgICAgICBjb25zb2xlLmxvZyhcImluY2x1ZGVzXCIpO1xuICAgICAgICBvYmpbXCJsaXN0XCJdID0gXCJwZXJzb25hbFwiO1xuICAgICAgfVxuICAgIH1cblxuICAgIHBvcHVsYXRlU3RvcmFnZSgpO1xuICB9O1xuXG4gIHJldHVybiB7IGxpc3RzVmlldywgcmVtb3ZlTGlzdCB9O1xufTtcblxuZXhwb3J0IHtcbiAgbWFpbkNvbnRlbnQsXG4gIGVtcHR5SW5kaWNhdG9yLFxuICBjcmVhdGVGb3JtLFxuICBkaXNwbGF5QnRuQ29udHJvbGxlcixcbiAgbmV3TGlzdEZvcm0sXG4gIGFkZFRpbWVPcHRpb24sXG4gIGFkZExpc3RPcHRpb24sXG4gIHByb2Nlc3NGb3JtLFxuICBtb2RpZnlUYXNrLFxuICBiYWNrQnRuQ29udHJvbGxlcixcbiAgZGVsZXRlQnRuQ29udHJvbGxlcixcbiAgbGlzdERpc3BsYXlDb250cm9sbGVyLFxuICB0YXNrQXJyYXksXG59O1xuIiwiaW1wb3J0IHsgdGFza0FycmF5IH0gZnJvbSBcIi4vbWFpbi1jb250ZW50XCI7XG5pbXBvcnQgXCIuL25hdi5jc3NcIjtcbmltcG9ydCB7IGxpc3RBcnJheSB9IGZyb20gXCIuL2xheW91dFwiO1xuaW1wb3J0IEltZyBmcm9tIFwiLi9pbWFnZXMvdG9kYXkuc3ZnXCI7XG5pbXBvcnQgSW1nMiBmcm9tIFwiLi9pbWFnZXMvdXBjb21pbmcuc3ZnXCI7XG5pbXBvcnQgSW1nMyBmcm9tIFwiLi9pbWFnZXMvZXhwYW5kLWxlc3Muc3ZnXCI7XG5pbXBvcnQgSW1nNCBmcm9tIFwiLi9pbWFnZXMvZXhwYW5kLW1vcmUuc3ZnXCI7XG5pbXBvcnQgSW1nNSBmcm9tIFwiLi9pbWFnZXMvY3JpdGljYWwuc3ZnXCI7XG5pbXBvcnQgSW1nNiBmcm9tIFwiLi9pbWFnZXMvaGlnaC5zdmdcIjtcbmltcG9ydCBJbWc3IGZyb20gXCIuL2ltYWdlcy9ub3JtYWwuc3ZnXCI7XG5pbXBvcnQgSW1nOCBmcm9tIFwiLi9pbWFnZXMvcGVyc29uYWwuc3ZnXCI7XG5pbXBvcnQgSW1nOSBmcm9tIFwiLi9pbWFnZXMvd29yay5zdmdcIjtcbmltcG9ydCBJbWcxMCBmcm9tIFwiLi9pbWFnZXMvc2hvcHBpbmcuc3ZnXCI7XG5pbXBvcnQgSW1nMTEgZnJvbSBcIi4vaW1hZ2VzL25ldy5zdmdcIjtcbmltcG9ydCBJbWcxMiBmcm9tIFwiLi9pbWFnZXMvYWRkLWxpc3Quc3ZnXCI7XG5cbmNvbnN0IG1haW5NZW51ID0gKCkgPT4ge1xuICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jb250ZW50XCIpO1xuICBjb25zdCBtYWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tYWluLXNlY3Rpb25cIik7XG4gIGNvbnN0IG1lbnUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCB0b2RheUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IHRvZGF5SW1nID0gbmV3IEltYWdlKCk7XG4gIGNvbnN0IHRvZGF5QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgY29uc3QgdG9kYXlDb3VudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IHVwY29taW5nQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgdXBjb21pbmdJbWcgPSBuZXcgSW1hZ2UoKTtcbiAgY29uc3QgdXBjb21pbmdCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICBjb25zdCB1cGNvbWluZ0NvdW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgZmF2Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgZmF2V3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IGZhdm9yaXRlc0ltZyA9IG5ldyBJbWFnZSgpO1xuICBjb25zdCBmYXZvcml0ZXNCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICBjb25zdCBmYXZvcml0ZXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCBwcm9qQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgcHJvaldyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCBwcm9qZWN0c0ltZyA9IG5ldyBJbWFnZSgpO1xuICBjb25zdCBwcm9qZWN0cyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IHByb2plY3RzQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgY29uc3QgYWRkTGlzdEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gIGNvbnN0IGFkZExpc3RJbWcgPSBuZXcgSW1hZ2UoKTtcblxuICBtZW51LmNsYXNzTGlzdC5hZGQoXCJtYWluLW1lbnVcIik7XG4gIHRvZGF5Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJ0b2RheS1jb250YWluZXJcIik7XG4gIHVwY29taW5nQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJ1cGNvbWluZy1jb250YWluZXJcIik7XG4gIHRvZGF5QnRuLnR5cGUgPSBcImJ1dHRvblwiO1xuICB0b2RheUJ0bi5jbGFzc0xpc3QuYWRkKFwidG9kYXktYnRuXCIpO1xuICB0b2RheUJ0bi50ZXh0Q29udGVudCA9IFwiVG9kYXlcIjtcbiAgdXBjb21pbmdCdG4udHlwZSA9IFwiYnV0dG9uXCI7XG4gIHVwY29taW5nQnRuLmNsYXNzTGlzdC5hZGQoXCJ1cGNvbWluZy1idG5cIik7XG4gIHVwY29taW5nQnRuLnRleHRDb250ZW50ID0gXCJVcGNvbWluZ1wiO1xuICB0b2RheUNvdW50LmNsYXNzTGlzdC5hZGQoXCJ0b2RheS1jb3VudFwiKTtcbiAgdXBjb21pbmdDb3VudC5jbGFzc0xpc3QuYWRkKFwidXBjb21pbmctY291bnRcIik7XG4gIGZhdkNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwiZmF2LWNvbnRhaW5lclwiKTtcbiAgZmF2V3JhcHBlci5jbGFzc0xpc3QuYWRkKFwiZmF2LXdyYXBwZXJcIik7XG4gIHByb2pDb250YWluZXIuY2xhc3NMaXN0LmFkZChcInByb2otY29udGFpbmVyXCIpO1xuICBwcm9qV3JhcHBlci5jbGFzc0xpc3QuYWRkKFwicHJvai13cmFwcGVyXCIpO1xuICBmYXZvcml0ZXNCdG4udHlwZSA9IFwiYnV0dG9uXCI7XG4gIGZhdm9yaXRlc0J0bi5jbGFzc0xpc3QuYWRkKFwiZmF2b3JpdGVzLWJ0blwiKTtcbiAgZmF2b3JpdGVzQnRuLnRleHRDb250ZW50ID0gXCJGYXZvcml0ZXNcIjtcbiAgcHJvamVjdHNCdG4udHlwZSA9IFwiYnV0dG9uXCI7XG4gIHByb2plY3RzQnRuLmNsYXNzTGlzdC5hZGQoXCJwcm9qZWN0cy1idG5cIik7XG4gIHByb2plY3RzQnRuLnRleHRDb250ZW50ID0gXCJQcm9qZWN0c1wiO1xuICBhZGRMaXN0QnRuLnR5cGUgPSBcImJ1dHRvblwiO1xuICBhZGRMaXN0QnRuLmNsYXNzTGlzdC5hZGQoXCJhZGQtcHJvamVjdC1idG5cIik7XG4gIGZhdm9yaXRlcy5jbGFzc0xpc3QuYWRkKFwiZmF2b3JpdGVzXCIpO1xuICBwcm9qZWN0cy5jbGFzc0xpc3QuYWRkKFwicHJvamVjdHNcIik7XG4gIHRvZGF5SW1nLnNyYyA9IEltZztcbiAgdG9kYXlJbWcuYWx0ID0gXCJDYWxlbmRlciBpY29uXCI7XG4gIHVwY29taW5nSW1nLnNyYyA9IEltZzI7XG4gIHVwY29taW5nSW1nLmFsdCA9IFwiQ2FsZW5kZXIgaWNvblwiO1xuICBmYXZvcml0ZXNJbWcuc3JjID0gSW1nMztcbiAgZmF2b3JpdGVzSW1nLmFsdCA9IFwiRXhwYW5kIGxlc3MgaWNvblwiO1xuICBmYXZvcml0ZXNJbWcuY2xhc3NMaXN0LmFkZChcImZhdm9yaXRlcy1pbWdcIik7XG4gIHByb2plY3RzSW1nLnNyYyA9IEltZzM7XG4gIHByb2plY3RzSW1nLmFsdCA9IFwiRXhwYW5kIGxlc3MgaWNvblwiO1xuICBwcm9qZWN0c0ltZy5jbGFzc0xpc3QuYWRkKFwicHJvamVjdHMtaW1nXCIpO1xuICBhZGRMaXN0SW1nLnNyYyA9IEltZzEyO1xuICBhZGRMaXN0SW1nLmFsdCA9IFwiQWRkIGxpc3QgaWNvblwiO1xuXG4gIGFkZExpc3RCdG4uYXBwZW5kQ2hpbGQoYWRkTGlzdEltZyk7XG4gIHRvZGF5Q29udGFpbmVyLmFwcGVuZENoaWxkKHRvZGF5SW1nKTtcbiAgdG9kYXlDb250YWluZXIuYXBwZW5kQ2hpbGQodG9kYXlCdG4pO1xuICB0b2RheUNvbnRhaW5lci5hcHBlbmRDaGlsZCh0b2RheUNvdW50KTtcbiAgdXBjb21pbmdDb250YWluZXIuYXBwZW5kQ2hpbGQodXBjb21pbmdJbWcpO1xuICB1cGNvbWluZ0NvbnRhaW5lci5hcHBlbmRDaGlsZCh1cGNvbWluZ0J0bik7XG4gIHVwY29taW5nQ29udGFpbmVyLmFwcGVuZENoaWxkKHVwY29taW5nQ291bnQpO1xuICBmYXZXcmFwcGVyLmFwcGVuZENoaWxkKGZhdm9yaXRlc0ltZyk7XG4gIGZhdldyYXBwZXIuYXBwZW5kQ2hpbGQoZmF2b3JpdGVzQnRuKTtcbiAgZmF2Q29udGFpbmVyLmFwcGVuZENoaWxkKGZhdldyYXBwZXIpO1xuICBmYXZDb250YWluZXIuYXBwZW5kQ2hpbGQoZmF2b3JpdGVzKTtcbiAgcHJvaldyYXBwZXIuYXBwZW5kQ2hpbGQocHJvamVjdHNJbWcpO1xuICBwcm9qV3JhcHBlci5hcHBlbmRDaGlsZChwcm9qZWN0c0J0bik7XG4gIHByb2pXcmFwcGVyLmFwcGVuZENoaWxkKGFkZExpc3RCdG4pO1xuICBwcm9qQ29udGFpbmVyLmFwcGVuZENoaWxkKHByb2pXcmFwcGVyKTtcbiAgcHJvakNvbnRhaW5lci5hcHBlbmRDaGlsZChwcm9qZWN0cyk7XG4gIG1lbnUuYXBwZW5kQ2hpbGQodG9kYXlDb250YWluZXIpO1xuICBtZW51LmFwcGVuZENoaWxkKHVwY29taW5nQ29udGFpbmVyKTtcbiAgbWVudS5hcHBlbmRDaGlsZChmYXZDb250YWluZXIpO1xuICBtZW51LmFwcGVuZENoaWxkKHByb2pDb250YWluZXIpO1xuICBjb250ZW50Lmluc2VydEJlZm9yZShtZW51LCBtYWluKTtcbn07XG5cbmNvbnN0IGZhdm9yaXRlc0xpc3QgPSAoKSA9PiB7XG4gIGNvbnN0IGZhdm9yaXRlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZmF2b3JpdGVzXCIpO1xuICBjb25zdCBjb250YWluZXJPbmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCBjb250YWluZXJUd28gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCBjb250YWluZXJUaHJlZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IHByaW9yaXR5T25lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgY29uc3QgcHJpb3JpdHlUd28gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICBjb25zdCBwcmlvcml0eVRocmVlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgY29uc3QgcHJpb3JpdHlPbmVDb3VudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IHByaW9yaXR5VHdvQ291bnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCBwcmlvcml0eVRocmVlQ291bnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCBjcml0aWNhbEltZyA9IG5ldyBJbWFnZSgpO1xuICBjb25zdCBoaWdoSW1nID0gbmV3IEltYWdlKCk7XG4gIGNvbnN0IG5vcm1hbEltZyA9IG5ldyBJbWFnZSgpO1xuXG4gIHByaW9yaXR5T25lLmNsYXNzTGlzdC5hZGQoXCJjcml0aWNhbC1idG5cIik7XG4gIHByaW9yaXR5T25lLmlkID0gXCJwcmlvcml0eS1idG5cIjtcbiAgcHJpb3JpdHlPbmUudGV4dENvbnRlbnQgPSBcIkNyaXRpY2FsIFByaW9yaXR5XCI7XG4gIHByaW9yaXR5VHdvLmNsYXNzTGlzdC5hZGQoXCJoaWdoLWJ0blwiKTtcbiAgcHJpb3JpdHlUd28uaWQgPSBcInByaW9yaXR5LWJ0blwiO1xuICBwcmlvcml0eVR3by50ZXh0Q29udGVudCA9IFwiSGlnaCBQcmlvcml0eVwiO1xuICBwcmlvcml0eVRocmVlLmNsYXNzTGlzdC5hZGQoXCJub3JtYWwtYnRuXCIpO1xuICBwcmlvcml0eVRocmVlLmlkID0gXCJwcmlvcml0eS1idG5cIjtcbiAgcHJpb3JpdHlUaHJlZS50ZXh0Q29udGVudCA9IFwiTm9ybWFsIFByaW9yaXR5XCI7XG4gIHByaW9yaXR5T25lQ291bnQuY2xhc3NMaXN0LmFkZChcImNyaXRpY2FsLWNvdW50XCIpO1xuICBwcmlvcml0eVR3b0NvdW50LmNsYXNzTGlzdC5hZGQoXCJoaWdoLWNvdW50XCIpO1xuICBwcmlvcml0eVRocmVlQ291bnQuY2xhc3NMaXN0LmFkZChcIm5vcm1hbC1jb3VudFwiKTtcblxuICBjcml0aWNhbEltZy5zcmMgPSBJbWc1O1xuICBjcml0aWNhbEltZy5hbHQgPSBcIldhdGVyIGRyb3AgaWNvblwiO1xuICBoaWdoSW1nLnNyYyA9IEltZzY7XG4gIGhpZ2hJbWcuYWx0ID0gXCJXYXRlciBkcm9wIGljb25cIjtcbiAgbm9ybWFsSW1nLnNyYyA9IEltZzc7XG4gIG5vcm1hbEltZy5hbHQgPSBcIldhdGVyIGRyb3AgaWNvblwiO1xuXG4gIGNvbnRhaW5lck9uZS5hcHBlbmRDaGlsZChjcml0aWNhbEltZyk7XG4gIGNvbnRhaW5lck9uZS5hcHBlbmRDaGlsZChwcmlvcml0eU9uZSk7XG4gIGNvbnRhaW5lck9uZS5hcHBlbmRDaGlsZChwcmlvcml0eU9uZUNvdW50KTtcbiAgY29udGFpbmVyVHdvLmFwcGVuZENoaWxkKGhpZ2hJbWcpO1xuICBjb250YWluZXJUd28uYXBwZW5kQ2hpbGQocHJpb3JpdHlUd28pO1xuICBjb250YWluZXJUd28uYXBwZW5kQ2hpbGQocHJpb3JpdHlUd29Db3VudCk7XG4gIGNvbnRhaW5lclRocmVlLmFwcGVuZENoaWxkKG5vcm1hbEltZyk7XG4gIGNvbnRhaW5lclRocmVlLmFwcGVuZENoaWxkKHByaW9yaXR5VGhyZWUpO1xuICBjb250YWluZXJUaHJlZS5hcHBlbmRDaGlsZChwcmlvcml0eVRocmVlQ291bnQpO1xuICBmYXZvcml0ZXMuYXBwZW5kQ2hpbGQoY29udGFpbmVyT25lKTtcbiAgZmF2b3JpdGVzLmFwcGVuZENoaWxkKGNvbnRhaW5lclR3byk7XG4gIGZhdm9yaXRlcy5hcHBlbmRDaGlsZChjb250YWluZXJUaHJlZSk7XG59O1xuXG5jb25zdCBwcm9qZWN0TGlzdCA9ICgpID0+IHtcbiAgY29uc3QgcHJvamVjdHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2plY3RzXCIpO1xuXG4gIGlmIChwcm9qZWN0cykge1xuICAgIHByb2plY3RzLnRleHRDb250ZW50ID0gXCJcIjtcbiAgfVxuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgbGlzdEFycmF5Lmxlbmd0aDsgaSsrKSB7XG4gICAgY29uc3QgbGlzdE5hbWUgPSBsaXN0QXJyYXlbaV07XG5cbiAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNvbnN0IGxpc3RCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgIGNvbnN0IHRhc2tDb3VudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY29uc3QgaW1nID0gbmV3IEltYWdlKCk7XG5cbiAgICBjb250YWluZXIuY2xhc3NMaXN0LmFkZChgJHtsaXN0TmFtZS5yZXBsYWNlQWxsKFwiIFwiLCBcIi1cIil9LWxpc3RgKTtcbiAgICBsaXN0QnRuLnR5cGUgPSBcImJ1dHRvblwiO1xuICAgIGxpc3RCdG4uY2xhc3NMaXN0LmFkZChgJHtsaXN0TmFtZS5yZXBsYWNlQWxsKFwiIFwiLCBcIi1cIil9LWJ0bmApO1xuICAgIGxpc3RCdG4uaWQgPSBcInRhc2stYnRuXCI7XG4gICAgbGlzdEJ0bi50ZXh0Q29udGVudCA9IGxpc3ROYW1lO1xuICAgIHRhc2tDb3VudC5jbGFzc0xpc3QuYWRkKGAke2xpc3ROYW1lLnJlcGxhY2VBbGwoXCIgXCIsIFwiLVwiKX0tY291bnRgKTtcblxuICAgIGlmIChsaXN0TmFtZSA9PT0gXCJwZXJzb25hbFwiKSB7XG4gICAgICBpbWcuc3JjID0gSW1nODtcbiAgICAgIGltZy5hbHQgPSBcIlBlcnNvbiBpY29uXCI7XG4gICAgfSBlbHNlIGlmIChsaXN0TmFtZSA9PT0gXCJ3b3JrXCIpIHtcbiAgICAgIGltZy5zcmMgPSBJbWc5O1xuICAgICAgaW1nLmFsdCA9IFwiQnJpZWZjYXNlIGljb25cIjtcbiAgICB9IGVsc2UgaWYgKGxpc3ROYW1lID09PSBcInNob3BwaW5nXCIpIHtcbiAgICAgIGltZy5zcmMgPSBJbWcxMDtcbiAgICAgIGltZy5hbHQgPSBcIlNob3BwaW5nIGNhcnQgaWNvblwiO1xuICAgIH0gZWxzZSB7XG4gICAgICBpbWcuc3JjID0gSW1nMTE7XG4gICAgICBpbWcuYWx0ID0gXCJMYXJnZSBkb3QgaWNvblwiO1xuICAgIH1cblxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChpbWcpO1xuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChsaXN0QnRuKTtcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQodGFza0NvdW50KTtcblxuICAgIGlmIChwcm9qZWN0cykge1xuICAgICAgcHJvamVjdHMuYXBwZW5kQ2hpbGQoY29udGFpbmVyKTtcbiAgICB9XG4gIH1cbn07XG5cbmNvbnN0IHRhc2tDb3VudCA9ICgpID0+IHtcbiAgY29uc3QgY291bnRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIltjbGFzcyo9J2NvdW50J11cIik7XG4gIGNvbnN0IHRvZGF5RGF0ZSA9IG5ldyBEYXRlKCkudG9JU09TdHJpbmcoKS5zcGxpdChcIlRcIilbMF07XG5cbiAgY291bnRzLmZvckVhY2goKGNvdW50KSA9PiB7XG4gICAgbGV0IGNsYXNzTmFtZSA9IGNvdW50LmNsYXNzTmFtZTtcblxuICAgIGxldCBudW0gPSAwO1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0YXNrQXJyYXkubGVuZ3RoOyBpKyspIHtcbiAgICAgIGNvbnN0IG9iaiA9IHRhc2tBcnJheVtpXTtcbiAgICAgIGNvbnN0IGxpc3RDaG9pY2UgPSBvYmpbXCJsaXN0XCJdO1xuICAgICAgY29uc3QgdGFza1ByaW9yaXR5ID0gb2JqW1wicHJpb3JpdHlcIl07XG4gICAgICBjb25zdCB0YXNrRGF0ZSA9IG9ialtcImRhdGVcIl07XG5cbiAgICAgIGlmIChcbiAgICAgICAgY2xhc3NOYW1lLmluY2x1ZGVzKGxpc3RDaG9pY2UpIHx8XG4gICAgICAgICh0b2RheURhdGUgPT09IHRhc2tEYXRlICYmIGNsYXNzTmFtZS5pbmNsdWRlcyhcInRvZGF5XCIpKSB8fFxuICAgICAgICAodG9kYXlEYXRlICE9PSB0YXNrRGF0ZSAmJiBjbGFzc05hbWUuaW5jbHVkZXMoXCJ1cGNvbWluZ1wiKSkgfHxcbiAgICAgICAgY2xhc3NOYW1lLmluY2x1ZGVzKHRhc2tQcmlvcml0eSlcbiAgICAgICkge1xuICAgICAgICBudW0gKz0gMTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAobnVtID09PSAwKSB7XG4gICAgICBjb3VudC50ZXh0Q29udGVudCA9IFwiXCI7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvdW50LnRleHRDb250ZW50ID0gbnVtO1xuICAgIH1cbiAgfSk7XG59O1xuXG5jb25zdCBjaGFuZ2VGYXZvcml0ZXNJbWFnZSA9ICgpID0+IHtcbiAgY29uc3QgZmF2b3JpdGVzQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5mYXZvcml0ZXNcIik7XG4gIGNvbnN0IGltYWdlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5mYXZvcml0ZXMtaW1nXCIpO1xuXG4gIGlmIChmYXZvcml0ZXNDb250YWluZXIudGV4dENvbnRlbnQgPT09IFwiXCIpIHtcbiAgICBpbWFnZS5zcmMgPSBJbWczO1xuICAgIGltYWdlLmFsdCA9IFwiRXhwYW5kIGxlc3MgaWNvblwiO1xuICB9IGVsc2Uge1xuICAgIGltYWdlLnNyYyA9IEltZzQ7XG4gICAgaW1hZ2UuYWx0ID0gXCJFeHBhbmQgbW9yZSBpY29uXCI7XG4gIH1cbn07XG5cbmNvbnN0IGNoYW5nZVByb2plY3RzSW1hZ2UgPSAoKSA9PiB7XG4gIGNvbnN0IHByb2plY3RzQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcm9qZWN0c1wiKTtcbiAgY29uc3QgaW1hZ2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2plY3RzLWltZ1wiKTtcblxuICBpZiAocHJvamVjdHNDb250YWluZXIpIHtcbiAgICBpZiAocHJvamVjdHNDb250YWluZXIudGV4dENvbnRlbnQgPT09IFwiXCIpIHtcbiAgICAgIGltYWdlLnNyYyA9IEltZzM7XG4gICAgICBpbWFnZS5hbHQgPSBcIkV4cGFuZCBsZXNzIGljb25cIjtcbiAgICB9IGVsc2Uge1xuICAgICAgaW1hZ2Uuc3JjID0gSW1nNDtcbiAgICAgIGltYWdlLmFsdCA9IFwiRXhwYW5kIG1vcmUgaWNvblwiO1xuICAgIH1cbiAgfVxufTtcblxuZXhwb3J0IHtcbiAgbGlzdEFycmF5LFxuICBtYWluTWVudSxcbiAgcHJvamVjdExpc3QsXG4gIGZhdm9yaXRlc0xpc3QsXG4gIHRhc2tDb3VudCxcbiAgY2hhbmdlRmF2b3JpdGVzSW1hZ2UsXG4gIGNoYW5nZVByb2plY3RzSW1hZ2UsXG59O1xuIiwiaW1wb3J0IHtcbiAgdGFza0FycmF5LFxuICBlbXB0eUluZGljYXRvcixcbiAgZGVsZXRlQnRuQ29udHJvbGxlcixcbn0gZnJvbSBcIi4vbWFpbi1jb250ZW50LmpzXCI7XG5pbXBvcnQgeyBsaXN0QXJyYXksIHByaW9yaXR5QXJyYXksIGRpc3BsYXlIZWlnaHQgfSBmcm9tIFwiLi9sYXlvdXQuanNcIjtcbmltcG9ydCBcIi4vZm9ybXMuY3NzXCI7XG5pbXBvcnQgSW1nIGZyb20gXCIuL2ltYWdlcy9wZXJzb25hbC5zdmdcIjtcbmltcG9ydCBJbWcyIGZyb20gXCIuL2ltYWdlcy93b3JrLnN2Z1wiO1xuaW1wb3J0IEltZzMgZnJvbSBcIi4vaW1hZ2VzL3Nob3BwaW5nLnN2Z1wiO1xuaW1wb3J0IEltZzQgZnJvbSBcIi4vaW1hZ2VzL25ldy5zdmdcIjtcbmltcG9ydCBJbWc2IGZyb20gXCIuL2ltYWdlcy9iYWNrLnN2Z1wiO1xuXG5jb25zdCB0YXNrQmFycyA9ICgpID0+IHtcbiAgY29uc3QgZGlzcGxheSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudGFzay1kaXNwbGF5XCIpO1xuICBjb25zdCBoZWFkaW5nID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImgyXCIpO1xuXG4gIGRpc3BsYXkudGV4dENvbnRlbnQgPSBcIlwiO1xuICBoZWFkaW5nLnRleHRDb250ZW50ID0gXCJBbGwgVGFza3NcIjtcblxuICAvLyBBZGQgaGVpZ2h0IHRvIHRoZSB0YXNrIGRpc3BsYXkgYXJlYSBmb3Igb3ZlcmZsb3cgc2Nyb2xsYmFyXG4gIGRpc3BsYXkuc3R5bGUuaGVpZ2h0ID0gZGlzcGxheUhlaWdodCgpO1xuXG4gIGlmICh0YXNrQXJyYXkubGVuZ3RoICE9PSAwKSB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0YXNrQXJyYXkubGVuZ3RoOyBpKyspIHtcbiAgICAgIGNvbnN0IG9iaiA9IHRhc2tBcnJheVtpXTtcbiAgICAgIGNvbnN0IHRhc2tUaXRsZSA9IG9ialtcInRpdGxlXCJdO1xuICAgICAgY29uc3QgbGlzdENob2ljZSA9IG9ialtcImxpc3RcIl07XG4gICAgICBjb25zdCB0YXNrRGF0ZSA9IG9ialtcImRhdGVcIl07XG5cbiAgICAgIC8vIGNyZWF0ZSBlbGVtZW50cyBmb3IgZWFjaCB0YXNrXG4gICAgICBjb25zdCB3cmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgIGNvbnN0IGNoZWNrQm94Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImZvcm1cIik7XG4gICAgICBjb25zdCBjaGVja0JveExhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xuICAgICAgY29uc3QgY2hlY2tCb3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgICBjb25zdCB3cmFwcGVyVHdvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgzXCIpO1xuICAgICAgY29uc3QgZGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICBjb25zdCBsaXN0Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgIGNvbnN0IGxpc3ROYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgICBjb25zdCBpbWcgPSBuZXcgSW1hZ2UoKTtcblxuICAgICAgd3JhcHBlci5jbGFzc0xpc3QuYWRkKFwidGFza1wiKTtcbiAgICAgIHdyYXBwZXIuaWQgPSB0YXNrVGl0bGU7XG4gICAgICB3cmFwcGVyLmRhdGFzZXQubnVtID0gYCR7aX1gO1xuICAgICAgY2hlY2tCb3hMYWJlbC5odG1sRm9yID0gXCJjaGVja2JveFwiO1xuICAgICAgY2hlY2tCb3gudHlwZSA9IFwiY2hlY2tib3hcIjtcbiAgICAgIGNoZWNrQm94Lm5hbWUgPSBcInRhc2stY2hlY2tib3hcIjtcbiAgICAgIGNoZWNrQm94LmNsYXNzTGlzdC5hZGQoXCJjaGVja2JveFwiKTtcbiAgICAgIHRpdGxlLnRleHRDb250ZW50ID0gdGFza1RpdGxlO1xuICAgICAgZGF0ZS50ZXh0Q29udGVudCA9IHRhc2tEYXRlO1xuICAgICAgbGlzdE5hbWUudGV4dENvbnRlbnQgPSBsaXN0Q2hvaWNlO1xuXG4gICAgICBpZiAobGlzdENob2ljZSA9PT0gXCJwZXJzb25hbFwiKSB7XG4gICAgICAgIGltZy5zcmMgPSBJbWc7XG4gICAgICAgIGltZy5hbHQgPSBcIlBlcnNvbiBpY29uXCI7XG4gICAgICB9IGVsc2UgaWYgKGxpc3RDaG9pY2UgPT09IFwid29ya1wiKSB7XG4gICAgICAgIGltZy5zcmMgPSBJbWcyO1xuICAgICAgICBpbWcuYWx0ID0gXCJCcmllZmNhc2UgaWNvblwiO1xuICAgICAgfSBlbHNlIGlmIChsaXN0Q2hvaWNlID09PSBcInNob3BwaW5nXCIpIHtcbiAgICAgICAgaW1nLnNyYyA9IEltZzM7XG4gICAgICAgIGltZy5hbHQgPSBcIlNob3BwaW5nIGNhcnQgaWNvblwiO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaW1nLnNyYyA9IEltZzQ7XG4gICAgICAgIGltZy5hbHQgPSBcIkxhcmdlIGRvdCBpY29uXCI7XG4gICAgICB9XG5cbiAgICAgIGNoZWNrQm94Q29udGFpbmVyLmFwcGVuZENoaWxkKGNoZWNrQm94TGFiZWwpO1xuICAgICAgY2hlY2tCb3hDb250YWluZXIuYXBwZW5kQ2hpbGQoY2hlY2tCb3gpO1xuICAgICAgd3JhcHBlclR3by5hcHBlbmRDaGlsZCh0aXRsZSk7XG4gICAgICB3cmFwcGVyVHdvLmFwcGVuZENoaWxkKGRhdGUpO1xuICAgICAgbGlzdENvbnRhaW5lci5hcHBlbmRDaGlsZChsaXN0TmFtZSk7XG4gICAgICBsaXN0Q29udGFpbmVyLmFwcGVuZENoaWxkKGltZyk7XG4gICAgICB3cmFwcGVyLmFwcGVuZENoaWxkKGNoZWNrQm94Q29udGFpbmVyKTtcbiAgICAgIHdyYXBwZXIuYXBwZW5kQ2hpbGQod3JhcHBlclR3byk7XG4gICAgICB3cmFwcGVyLmFwcGVuZENoaWxkKGxpc3RDb250YWluZXIpO1xuICAgICAgZGlzcGxheS5hcHBlbmRDaGlsZCh3cmFwcGVyKTtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgZW1wdHlJbmRpY2F0b3IoKTtcbiAgfVxufTtcblxuY29uc3QgdGFza1BhZ2UgPSAodGFza0luZGV4KSA9PiB7XG4gIGNvbnN0IGRpc3BsYXkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRhc2stZGlzcGxheVwiKTtcbiAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50YXNrLWhlYWRlclwiKTtcblxuICBkaXNwbGF5LnRleHRDb250ZW50ID0gXCJcIjtcblxuICBjb25zdCBvYmogPSB0YXNrQXJyYXlbdGFza0luZGV4XTtcbiAgY29uc3QgdGFza1RpdGxlID0gb2JqW1widGl0bGVcIl07XG4gIGNvbnN0IHRhc2tEZXNjcmlwdGlvbiA9IG9ialtcImRlc2NyaXB0aW9uXCJdO1xuICBjb25zdCB0YXNrRGF0ZSA9IG9ialtcImRhdGVcIl07XG4gIGNvbnN0IHRhc2tUaW1lID0gb2JqW1widGltZVwiXTtcbiAgY29uc3QgdGFza1ByaW9yaXR5ID0gb2JqW1wicHJpb3JpdHlcIl07XG4gIGNvbnN0IGxpc3RDaG9pY2UgPSBvYmpbXCJsaXN0XCJdO1xuXG4gIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZm9ybVwiKTtcbiAgY29uc3QgdGl0bGVDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCB0aXRsZUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xuICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZXh0YXJlYVwiKTtcbiAgY29uc3QgZGVzY3JpcHRpb25Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCBkZXNjcmlwdGlvbkxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xuICBjb25zdCBkZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZXh0YXJlYVwiKTtcbiAgY29uc3QgZGF0ZVdyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCBkYXRlQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgZGF0ZUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xuICBjb25zdCBkYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICBjb25zdCB0aW1lQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgdGltZUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xuICBjb25zdCB0aW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICBjb25zdCBsaXN0TmFtZUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IGxpc3RTZWxlY3RMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcbiAgY29uc3QgbGlzdFNlbGVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzZWxlY3RcIik7XG4gIGNvbnN0IHByaW9yaXR5Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgcHJpb3JpdHlMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcbiAgY29uc3QgcHJpb3JpdHlTZWxlY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2VsZWN0XCIpO1xuICBjb25zdCBiYWNrQnRuQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgYmFja0J0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gIGNvbnN0IGJhY2tCdG5JbWcgPSBuZXcgSW1hZ2UoKTtcblxuICBmb3JtLmNsYXNzTGlzdC5hZGQoXCJmdWxsLXRhc2stZm9ybVwiKTtcbiAgZm9ybS5kYXRhc2V0Lm51bSA9IHRhc2tJbmRleDtcbiAgZGVzY3JpcHRpb25Db250YWluZXIuY2xhc3NMaXN0LmFkZChcImRlc2NyaXB0aW9uXCIpO1xuICBkYXRlQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJkYXRlLWNvbnRhaW5lclwiKTtcbiAgdGltZUNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwidGltZS1jb250YWluZXJcIik7XG4gIGJhY2tCdG5Db250YWluZXIuY2xhc3NMaXN0LmFkZChcImJhY2stYnRuLWNvbnRhaW5lclwiKTtcbiAgdGl0bGVMYWJlbC5odG1sRm9yID0gXCJ0YXNrLXRpdGxlXCI7XG4gIGRlc2NyaXB0aW9uTGFiZWwuaHRtbEZvciA9IFwiZGVzY3JpcHRpb25cIjtcbiAgZGF0ZUxhYmVsLmh0bWxGb3IgPSBcImRhdGVcIjtcbiAgZGF0ZUxhYmVsLnRleHRDb250ZW50ID0gXCJEdWUgRGF0ZVwiO1xuICB0aW1lTGFiZWwuaHRtbEZvciA9IFwidGltZVwiO1xuICB0aW1lTGFiZWwudGV4dENvbnRlbnQgPSBcIkR1ZSBUaW1lXCI7XG4gIHByaW9yaXR5TGFiZWwuaHRtbEZvciA9IFwicHJpb3JpdHlcIjtcbiAgbGlzdFNlbGVjdExhYmVsLmh0bWxGb3IgPSBcImxpc3RcIjtcbiAgYmFja0J0bi50eXBlID0gXCJidXR0b25cIjtcbiAgYmFja0J0bi5jbGFzc0xpc3QuYWRkKFwiYmFjay1idG5cIik7XG4gIGJhY2tCdG5JbWcuc3JjID0gSW1nNjtcbiAgYmFja0J0bkltZy5hbHQgPSBcIkJhY2sgYXJyb3cgaWNvblwiO1xuICB0aXRsZS5uYW1lID0gXCJ0aXRsZVwiO1xuICB0aXRsZS5pZCA9IFwidGFzay10aXRsZVwiO1xuICB0aXRsZS52YWx1ZSA9IHRhc2tUaXRsZTtcbiAgdGl0bGUubWF4TGVuZ3RoID0gXCIzNVwiO1xuICB0aXRsZS5yZXF1aXJlZCA9IHRydWU7XG4gIGRlc2NyaXB0aW9uLm5hbWUgPSBcImRlc2NyaXB0aW9uXCI7XG4gIGRlc2NyaXB0aW9uLmlkID0gXCJkZXNjcmlwdGlvblwiO1xuICBkZXNjcmlwdGlvbi52YWx1ZSA9IHRhc2tEZXNjcmlwdGlvbjtcbiAgbGlzdFNlbGVjdC5uYW1lID0gXCJsaXN0XCI7XG4gIGxpc3RTZWxlY3QuaWQgPSBcImxpc3RcIjtcbiAgZGF0ZS50eXBlID0gXCJkYXRlXCI7XG4gIGRhdGUubmFtZSA9IFwiZGF0ZVwiO1xuICBkYXRlLmlkID0gXCJkYXRlXCI7XG4gIGRhdGUudmFsdWUgPSB0YXNrRGF0ZTtcbiAgdGltZS50eXBlID0gXCJ0aW1lXCI7XG4gIHRpbWUubmFtZSA9IFwidGltZVwiO1xuICB0aW1lLmlkID0gXCJ0aW1lXCI7XG4gIHRpbWUudmFsdWUgPSB0YXNrVGltZTtcbiAgcHJpb3JpdHlTZWxlY3QubmFtZSA9IFwicHJpb3JpdHlcIjtcbiAgcHJpb3JpdHlTZWxlY3QuaWQgPSBcInByaW9yaXR5XCI7XG5cbiAgLy8gRHluYW1pY2FsbHkgYWRkIGxpc3Qgb3B0aW9ucy4gV2hlbiB0aGUgdXNlciBhZGRzIGEgbmV3IGxpc3QsXG4gIC8vIHRoZSBuZXcgbGlzdCB3aWxsIGJlIHByZXNlbnQgaW4gdGhlIG5leHQgZm9ybS5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBsaXN0QXJyYXkubGVuZ3RoOyBpKyspIHtcbiAgICBjb25zdCBsaXN0T3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiKTtcblxuICAgIGxpc3RPcHRpb24udmFsdWUgPSBsaXN0QXJyYXlbaV07XG4gICAgbGlzdE9wdGlvbi50ZXh0Q29udGVudCA9IGxpc3RBcnJheVtpXTtcblxuICAgIGlmIChsaXN0T3B0aW9uLnZhbHVlID09PSBsaXN0Q2hvaWNlKSB7XG4gICAgICBsaXN0T3B0aW9uLnNlbGVjdGVkID0gdHJ1ZTtcbiAgICB9XG4gICAgbGlzdFNlbGVjdC5hcHBlbmRDaGlsZChsaXN0T3B0aW9uKTtcbiAgfVxuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgcHJpb3JpdHlBcnJheS5sZW5ndGg7IGkrKykge1xuICAgIGNvbnN0IHByaW9yaXR5T3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiKTtcblxuICAgIHByaW9yaXR5T3B0aW9uLnZhbHVlID0gcHJpb3JpdHlBcnJheVtpXTtcbiAgICBwcmlvcml0eU9wdGlvbi50ZXh0Q29udGVudCA9IHByaW9yaXR5QXJyYXlbaV07XG5cbiAgICBwcmlvcml0eVNlbGVjdC5hcHBlbmRDaGlsZChwcmlvcml0eU9wdGlvbik7XG5cbiAgICBpZiAocHJpb3JpdHlBcnJheVtpXSA9PT0gdGFza1ByaW9yaXR5KSB7XG4gICAgICBwcmlvcml0eU9wdGlvbi5zZWxlY3RlZCA9IHRydWU7XG4gICAgfVxuICB9XG5cbiAgdGl0bGVDb250YWluZXIuYXBwZW5kQ2hpbGQodGl0bGVMYWJlbCk7XG4gIHRpdGxlQ29udGFpbmVyLmFwcGVuZENoaWxkKHRpdGxlKTtcbiAgbGlzdE5hbWVDb250YWluZXIuYXBwZW5kQ2hpbGQobGlzdFNlbGVjdExhYmVsKTtcbiAgbGlzdE5hbWVDb250YWluZXIuYXBwZW5kQ2hpbGQobGlzdFNlbGVjdCk7XG4gIHByaW9yaXR5Q29udGFpbmVyLmFwcGVuZENoaWxkKHByaW9yaXR5TGFiZWwpO1xuICBwcmlvcml0eUNvbnRhaW5lci5hcHBlbmRDaGlsZChwcmlvcml0eVNlbGVjdCk7XG4gIGRlc2NyaXB0aW9uQ29udGFpbmVyLmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uTGFiZWwpO1xuICBkZXNjcmlwdGlvbkNvbnRhaW5lci5hcHBlbmRDaGlsZChkZXNjcmlwdGlvbik7XG4gIGRhdGVDb250YWluZXIuYXBwZW5kQ2hpbGQoZGF0ZUxhYmVsKTtcbiAgZGF0ZUNvbnRhaW5lci5hcHBlbmRDaGlsZChkYXRlKTtcbiAgdGltZUNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aW1lTGFiZWwpO1xuICB0aW1lQ29udGFpbmVyLmFwcGVuZENoaWxkKHRpbWUpO1xuICBkYXRlV3JhcHBlci5hcHBlbmRDaGlsZChkYXRlQ29udGFpbmVyKTtcbiAgZGF0ZVdyYXBwZXIuYXBwZW5kQ2hpbGQodGltZUNvbnRhaW5lcik7XG4gIGJhY2tCdG4uYXBwZW5kQ2hpbGQoYmFja0J0bkltZyk7XG4gIGJhY2tCdG5Db250YWluZXIuYXBwZW5kQ2hpbGQoYmFja0J0bik7XG4gIGhlYWRlci5hcHBlbmRDaGlsZChiYWNrQnRuQ29udGFpbmVyKTtcbiAgZm9ybS5hcHBlbmRDaGlsZCh0aXRsZUNvbnRhaW5lcik7XG4gIGZvcm0uYXBwZW5kQ2hpbGQobGlzdE5hbWVDb250YWluZXIpO1xuICBmb3JtLmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uQ29udGFpbmVyKTtcbiAgZm9ybS5hcHBlbmRDaGlsZChkYXRlV3JhcHBlcik7XG4gIGZvcm0uYXBwZW5kQ2hpbGQocHJpb3JpdHlDb250YWluZXIpO1xuICBkaXNwbGF5LmFwcGVuZENoaWxkKGZvcm0pO1xufTtcblxuY29uc3Qgc29ydFRhc2tCYXJzID0gKCkgPT4ge1xuICBjb25zdCBkaXNwbGF5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50YXNrLWRpc3BsYXlcIik7XG4gIGNvbnN0IGhlYWRpbmcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiaDJcIik7XG4gIGNvbnN0IHRvZGF5RGF0ZSA9IG5ldyBEYXRlKCkudG9JU09TdHJpbmcoKS5zcGxpdChcIlRcIilbMF07XG5cbiAgZGlzcGxheS50ZXh0Q29udGVudCA9IFwiXCI7XG5cbiAgY29uc3QgbWVudUNob2ljZSA9IChidG4pID0+IHtcbiAgICBjb25zdCBzaWJsaW5nID0gYnRuLm5leHRFbGVtZW50U2libGluZztcbiAgICBjb25zdCBidG5DbGFzcyA9IGJ0bi5jbGFzc05hbWU7XG5cbiAgICBpZiAoYnRuQ2xhc3MuaW5jbHVkZXMoXCJ0b2RheVwiKSkge1xuICAgICAgaGVhZGluZy50ZXh0Q29udGVudCA9IFwiVG9kYXlcIjtcbiAgICB9IGVsc2UgaWYgKGJ0bkNsYXNzLmluY2x1ZGVzKFwidXBjb21pbmdcIikpIHtcbiAgICAgIGhlYWRpbmcudGV4dENvbnRlbnQgPSBcIlVwY29taW5nXCI7XG4gICAgfSBlbHNlIGlmIChidG5DbGFzcy5pbmNsdWRlcyhcImNyaXRpY2FsXCIpKSB7XG4gICAgICBoZWFkaW5nLnRleHRDb250ZW50ID0gXCJDcml0aWNhbCBQcmlvcml0eSBUYXNrc1wiO1xuICAgIH0gZWxzZSBpZiAoYnRuQ2xhc3MuaW5jbHVkZXMoXCJoaWdoXCIpKSB7XG4gICAgICBoZWFkaW5nLnRleHRDb250ZW50ID0gXCJIaWdoIFByaW9yaXR5IFRhc2tzXCI7XG4gICAgfSBlbHNlIGlmIChidG5DbGFzcy5pbmNsdWRlcyhcIm5vcm1hbFwiKSkge1xuICAgICAgaGVhZGluZy50ZXh0Q29udGVudCA9IFwiTm9ybWFsIFByaW9yaXR5IFRhc2tzXCI7XG4gICAgfSBlbHNlIGlmIChidG5DbGFzcy5pbmNsdWRlcyhcInBlcnNvbmFsXCIpKSB7XG4gICAgICBoZWFkaW5nLnRleHRDb250ZW50ID0gXCJQZXJzb25hbFwiO1xuICAgIH0gZWxzZSBpZiAoYnRuQ2xhc3MuaW5jbHVkZXMoXCJ3b3JrXCIpKSB7XG4gICAgICBoZWFkaW5nLnRleHRDb250ZW50ID0gXCJXb3JrXCI7XG4gICAgfSBlbHNlIGlmIChidG5DbGFzcy5pbmNsdWRlcyhcInNob3BwaW5nXCIpKSB7XG4gICAgICBoZWFkaW5nLnRleHRDb250ZW50ID0gXCJTaG9wcGluZ1wiO1xuICAgIH0gZWxzZSB7XG4gICAgICBsZXQgdGl0bGUgPSBidG5DbGFzcy5yZXBsYWNlQWxsKFwiLVwiLCBcIiBcIik7XG4gICAgICBoZWFkaW5nLnRleHRDb250ZW50ID0gdGl0bGUucmVwbGFjZUFsbChcImJ0blwiLCBcIlwiKTtcbiAgICB9XG5cbiAgICBpZiAoc2libGluZy50ZXh0Q29udGVudCAhPT0gXCJcIikge1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0YXNrQXJyYXkubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgY29uc3Qgb2JqID0gdGFza0FycmF5W2ldO1xuICAgICAgICBjb25zdCB0YXNrVGl0bGUgPSBvYmpbXCJ0aXRsZVwiXTtcbiAgICAgICAgY29uc3QgbGlzdENob2ljZSA9IG9ialtcImxpc3RcIl07XG4gICAgICAgIGNvbnN0IHRhc2tEYXRlID0gb2JqW1wiZGF0ZVwiXTtcbiAgICAgICAgY29uc3QgcHJpb3JpdHkgPSBvYmpbXCJwcmlvcml0eVwiXTtcblxuICAgICAgICBpZiAoXG4gICAgICAgICAgYnRuQ2xhc3MuaW5jbHVkZXMobGlzdENob2ljZSkgfHxcbiAgICAgICAgICAodG9kYXlEYXRlID09PSB0YXNrRGF0ZSAmJiBidG5DbGFzcy5pbmNsdWRlcyhcInRvZGF5XCIpKSB8fFxuICAgICAgICAgICh0b2RheURhdGUgIT09IHRhc2tEYXRlICYmIGJ0bkNsYXNzLmluY2x1ZGVzKFwidXBjb21pbmdcIikpIHx8XG4gICAgICAgICAgYnRuQ2xhc3MuaW5jbHVkZXMocHJpb3JpdHkpXG4gICAgICAgICkge1xuICAgICAgICAgIC8vIGNyZWF0ZSBlbGVtZW50cyBmb3IgZWFjaCB0YXNrXG4gICAgICAgICAgY29uc3Qgd3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgICAgY29uc3QgY2hlY2tCb3hDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZm9ybVwiKTtcbiAgICAgICAgICBjb25zdCBjaGVja0JveExhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xuICAgICAgICAgIGNvbnN0IGNoZWNrQm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgICAgICAgIGNvbnN0IHdyYXBwZXJUd28gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgzXCIpO1xuICAgICAgICAgIGNvbnN0IGRhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICAgIGNvbnN0IGxpc3RDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICAgIGNvbnN0IGxpc3ROYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgICAgICAgY29uc3QgbGlzdEltZyA9IG5ldyBJbWFnZSgpO1xuXG4gICAgICAgICAgd3JhcHBlci5jbGFzc0xpc3QuYWRkKFwidGFza1wiKTtcbiAgICAgICAgICB3cmFwcGVyLmlkID0gdGFza1RpdGxlO1xuICAgICAgICAgIHdyYXBwZXIuZGF0YXNldC5udW0gPSBpO1xuICAgICAgICAgIGNoZWNrQm94TGFiZWwuaHRtbEZvciA9IFwiY2hlY2tib3hcIjtcbiAgICAgICAgICBjaGVja0JveC50eXBlID0gXCJjaGVja2JveFwiO1xuICAgICAgICAgIGNoZWNrQm94Lm5hbWUgPSBcInRhc2stY2hlY2tib3hcIjtcbiAgICAgICAgICBjaGVja0JveC5jbGFzc0xpc3QuYWRkKFwiY2hlY2tib3hcIik7XG4gICAgICAgICAgdGl0bGUudGV4dENvbnRlbnQgPSB0YXNrVGl0bGU7XG4gICAgICAgICAgZGF0ZS50ZXh0Q29udGVudCA9IHRhc2tEYXRlO1xuICAgICAgICAgIGxpc3ROYW1lLnRleHRDb250ZW50ID0gbGlzdENob2ljZTtcblxuICAgICAgICAgIGlmIChsaXN0Q2hvaWNlID09PSBcInBlcnNvbmFsXCIpIHtcbiAgICAgICAgICAgIGxpc3RJbWcuc3JjID0gSW1nO1xuICAgICAgICAgICAgbGlzdEltZy5hbHQgPSBcIlBlcnNvbiBpY29uXCI7XG4gICAgICAgICAgfSBlbHNlIGlmIChsaXN0Q2hvaWNlID09PSBcIndvcmtcIikge1xuICAgICAgICAgICAgbGlzdEltZy5zcmMgPSBJbWcyO1xuICAgICAgICAgICAgbGlzdEltZy5hbHQgPSBcIkJyaWVmY2FzZSBpY29uXCI7XG4gICAgICAgICAgfSBlbHNlIGlmIChsaXN0Q2hvaWNlID09PSBcInNob3BwaW5nXCIpIHtcbiAgICAgICAgICAgIGxpc3RJbWcuc3JjID0gSW1nMztcbiAgICAgICAgICAgIGxpc3RJbWcuYWx0ID0gXCJTaG9wcGluZyBjYXJ0IGljb25cIjtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbGlzdEltZy5zcmMgPSBJbWc0O1xuICAgICAgICAgICAgbGlzdEltZy5hbHQgPSBcIkxhcmdlIGRvdCBpY29uXCI7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgY2hlY2tCb3hDb250YWluZXIuYXBwZW5kQ2hpbGQoY2hlY2tCb3hMYWJlbCk7XG4gICAgICAgICAgY2hlY2tCb3hDb250YWluZXIuYXBwZW5kQ2hpbGQoY2hlY2tCb3gpO1xuICAgICAgICAgIHdyYXBwZXJUd28uYXBwZW5kQ2hpbGQodGl0bGUpO1xuICAgICAgICAgIHdyYXBwZXJUd28uYXBwZW5kQ2hpbGQoZGF0ZSk7XG4gICAgICAgICAgbGlzdENvbnRhaW5lci5hcHBlbmRDaGlsZChsaXN0TmFtZSk7XG4gICAgICAgICAgbGlzdENvbnRhaW5lci5hcHBlbmRDaGlsZChsaXN0SW1nKTtcbiAgICAgICAgICB3cmFwcGVyLmFwcGVuZENoaWxkKGNoZWNrQm94Q29udGFpbmVyKTtcbiAgICAgICAgICB3cmFwcGVyLmFwcGVuZENoaWxkKHdyYXBwZXJUd28pO1xuICAgICAgICAgIHdyYXBwZXIuYXBwZW5kQ2hpbGQobGlzdENvbnRhaW5lcik7XG4gICAgICAgICAgZGlzcGxheS5hcHBlbmRDaGlsZCh3cmFwcGVyKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBlbXB0eUluZGljYXRvcigpO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCB0b2RheVN0b3JlZFRhc2tzID0gKCkgPT4ge1xuICAgIGxldCBjb3VudCA9IDA7XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRhc2tBcnJheS5sZW5ndGg7IGkrKykge1xuICAgICAgY29uc3Qgb2JqID0gdGFza0FycmF5W2ldO1xuICAgICAgY29uc3QgdGFza1RpdGxlID0gb2JqW1widGl0bGVcIl07XG4gICAgICBjb25zdCBsaXN0Q2hvaWNlID0gb2JqW1wibGlzdFwiXTtcbiAgICAgIGNvbnN0IHRhc2tEYXRlID0gb2JqW1wiZGF0ZVwiXTtcblxuICAgICAgaWYgKHRvZGF5RGF0ZSA9PT0gdGFza0RhdGUpIHtcbiAgICAgICAgY291bnQgKz0gMTtcblxuICAgICAgICAvLyBjcmVhdGUgZWxlbWVudHMgZm9yIGVhY2ggdGFza1xuICAgICAgICBjb25zdCB3cmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgY29uc3QgY2hlY2tCb3hDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZm9ybVwiKTtcbiAgICAgICAgY29uc3QgY2hlY2tCb3hMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcbiAgICAgICAgY29uc3QgY2hlY2tCb3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgICAgIGNvbnN0IHdyYXBwZXJUd28gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoM1wiKTtcbiAgICAgICAgY29uc3QgZGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIGNvbnN0IGxpc3RDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBjb25zdCBsaXN0TmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgICAgICBjb25zdCBsaXN0SW1nID0gbmV3IEltYWdlKCk7XG5cbiAgICAgICAgd3JhcHBlci5jbGFzc0xpc3QuYWRkKFwidGFza1wiKTtcbiAgICAgICAgd3JhcHBlci5pZCA9IHRhc2tUaXRsZTtcbiAgICAgICAgd3JhcHBlci5kYXRhc2V0Lm51bSA9IGk7XG4gICAgICAgIGNoZWNrQm94TGFiZWwuaHRtbEZvciA9IFwiY2hlY2tib3hcIjtcbiAgICAgICAgY2hlY2tCb3gudHlwZSA9IFwiY2hlY2tib3hcIjtcbiAgICAgICAgY2hlY2tCb3gubmFtZSA9IFwidGFzay1jaGVja2JveFwiO1xuICAgICAgICBjaGVja0JveC5jbGFzc0xpc3QuYWRkKFwiY2hlY2tib3hcIik7XG4gICAgICAgIHRpdGxlLnRleHRDb250ZW50ID0gdGFza1RpdGxlO1xuICAgICAgICBkYXRlLnRleHRDb250ZW50ID0gdGFza0RhdGU7XG4gICAgICAgIGxpc3ROYW1lLnRleHRDb250ZW50ID0gbGlzdENob2ljZTtcblxuICAgICAgICBpZiAobGlzdENob2ljZSA9PT0gXCJwZXJzb25hbFwiKSB7XG4gICAgICAgICAgbGlzdEltZy5zcmMgPSBJbWc7XG4gICAgICAgICAgbGlzdEltZy5hbHQgPSBcIlBlcnNvbiBpY29uXCI7XG4gICAgICAgIH0gZWxzZSBpZiAobGlzdENob2ljZSA9PT0gXCJ3b3JrXCIpIHtcbiAgICAgICAgICBsaXN0SW1nLnNyYyA9IEltZzI7XG4gICAgICAgICAgbGlzdEltZy5hbHQgPSBcIkJyaWVmY2FzZSBpY29uXCI7XG4gICAgICAgIH0gZWxzZSBpZiAobGlzdENob2ljZSA9PT0gXCJzaG9wcGluZ1wiKSB7XG4gICAgICAgICAgbGlzdEltZy5zcmMgPSBJbWczO1xuICAgICAgICAgIGxpc3RJbWcuYWx0ID0gXCJTaG9wcGluZyBjYXJ0IGljb25cIjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBsaXN0SW1nLnNyYyA9IEltZzQ7XG4gICAgICAgICAgbGlzdEltZy5hbHQgPSBcIkxhcmdlIGRvdCBpY29uXCI7XG4gICAgICAgIH1cblxuICAgICAgICBjaGVja0JveENvbnRhaW5lci5hcHBlbmRDaGlsZChjaGVja0JveExhYmVsKTtcbiAgICAgICAgY2hlY2tCb3hDb250YWluZXIuYXBwZW5kQ2hpbGQoY2hlY2tCb3gpO1xuICAgICAgICB3cmFwcGVyVHdvLmFwcGVuZENoaWxkKHRpdGxlKTtcbiAgICAgICAgd3JhcHBlclR3by5hcHBlbmRDaGlsZChkYXRlKTtcbiAgICAgICAgbGlzdENvbnRhaW5lci5hcHBlbmRDaGlsZChsaXN0TmFtZSk7XG4gICAgICAgIGxpc3RDb250YWluZXIuYXBwZW5kQ2hpbGQobGlzdEltZyk7XG4gICAgICAgIHdyYXBwZXIuYXBwZW5kQ2hpbGQoY2hlY2tCb3hDb250YWluZXIpO1xuICAgICAgICB3cmFwcGVyLmFwcGVuZENoaWxkKHdyYXBwZXJUd28pO1xuICAgICAgICB3cmFwcGVyLmFwcGVuZENoaWxkKGxpc3RDb250YWluZXIpO1xuICAgICAgICBkaXNwbGF5LmFwcGVuZENoaWxkKHdyYXBwZXIpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChjb3VudCA9PT0gMCkge1xuICAgICAgZW1wdHlJbmRpY2F0b3IoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHsgbWVudUNob2ljZSwgdG9kYXlTdG9yZWRUYXNrcyB9O1xufTtcblxuY29uc3QgZGVsZXRlVGFzayA9ICgpID0+IHtcbiAgY29uc3QgZGlzcGxheSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudGFzay1kaXNwbGF5XCIpO1xuICBjb25zdCB0YXNrcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuY2hlY2tib3hcIik7XG4gIGNvbnN0IGRpc3BsYXlOb2RlcyA9IGRpc3BsYXkuY2hpbGROb2RlcztcblxuICB0YXNrcy5mb3JFYWNoKCh0YXNrKSA9PiB7XG4gICAgaWYgKHRhc2suY2hlY2tlZCA9PT0gdHJ1ZSkge1xuICAgICAgY29uc3QgZ3JhbmRQYXJlbnQgPSB0YXNrLnBhcmVudE5vZGUucGFyZW50Tm9kZTtcbiAgICAgIGNvbnN0IHRhc2tJbmRleCA9IGdyYW5kUGFyZW50LmRhdGFzZXQubnVtO1xuXG4gICAgICB0YXNrQXJyYXkuc3BsaWNlKHRhc2tJbmRleCwgMSk7XG4gICAgICBkaXNwbGF5LnJlbW92ZUNoaWxkKGRpc3BsYXlOb2Rlc1t0YXNrSW5kZXhdKTtcblxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBkaXNwbGF5Tm9kZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgZGlzcGxheU5vZGVzW2ldLmRhdGFzZXQubnVtID0gaTtcbiAgICAgIH1cbiAgICB9XG4gIH0pO1xuXG4gIGlmIChkaXNwbGF5LnRleHRDb250ZW50ID09PSBcIlwiKSB7XG4gICAgZW1wdHlJbmRpY2F0b3IoKTtcbiAgICBkZWxldGVCdG5Db250cm9sbGVyKCkucmVtb3ZlRGVsZXRlQnRuKCk7XG4gIH1cbn07XG5cbmV4cG9ydCB7IHRhc2tCYXJzLCB0YXNrUGFnZSwgc29ydFRhc2tCYXJzLCBkZWxldGVUYXNrIH07XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi53cmFwcGVyIHtcXG4gIGhlaWdodDogMTAwJTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgcGFkZGluZzogMTVweDtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDgwcHggMWZyO1xcbn1cXG5cXG5oMiB7XFxuICBjb2xvcjogI2Y0NDMzNjtcXG59XFxuXFxuLnRhc2stZGlzcGxheSB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGdhcDogMTBweDtcXG4gIG92ZXJmbG93LXk6IGF1dG87XFxufVxcblxcbi5lbXB0eS1pbmRpY2F0b3Ige1xcbiAgcGFkZGluZzogMTBweDtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGJvdHRvbTogNTAlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxufVxcblxcbi50YXNrLFxcbi5saXN0LWJhciB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogNTBweDtcXG4gIHBhZGRpbmc6IDVweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBnYXA6IDEwcHg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4ubGlzdC1iYXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2UzZTlmNjtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxufVxcblxcbi5saXN0LWJhciA+IGRpdiB7XFxuICBwYWRkaW5nOiA1cHg7XFxufVxcblxcbi5kaXNwbGF5LWJ0bi1jb250YWluZXIge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgcmlnaHQ6IDEwcHg7XFxuICBib3R0b206IDEwcHg7XFxufVxcblxcbi5iYWNrLWJ0bi1jb250YWluZXIsXFxuLmRlbC1idG4tY29udGFpbmVyIHtcXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcXG59XFxuXFxuLndyYXBwZXIgYnV0dG9uIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNkZWUwZTA7XFxuICBwYWRkaW5nOiA1cHg7XFxuICBib3JkZXI6IG5vbmU7XFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAganVzdGlmeS1zZWxmOiBzZWxmLXN0YXJ0O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmxpc3QtYmFyIHAge1xcbiAgZm9udC1zaXplOiAwLjc1cmVtO1xcblxcbiAgb3BhY2l0eTogMC43O1xcbn1cXG5cXG4ubGlzdC1iYXIgLnJlbW92ZS1wcm9qZWN0LWJ0biB7XFxuICBtYXJnaW4tbGVmdDogYXV0bztcXG4gIGJhY2tncm91bmQtY29sb3I6ICNlM2U5ZjY7XFxufVxcblxcbi50YXNrID4gZGl2IHtcXG4gIHBhZGRpbmc6IDVweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBnYXA6IDVweDtcXG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xcbn1cXG5cXG4udGFzayA+IGRpdjpudGgtY2hpbGQoMikge1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuLnRhc2sgPiBkaXY6bnRoLW9mLXR5cGUoMikge1xcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XFxufVxcblxcbi50YXNrIGltZyB7XFxuICBoZWlnaHQ6IDE1cHg7XFxuICB3aWR0aDogMTVweDtcXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcXG59XFxuXFxuLmJhY2stYnRuIGltZyxcXG4uZGVsLWJ0biBpbWcsXFxuLmNyZWF0ZS1saXN0LWJ0biBpbWcsXFxuLnJlbW92ZS1wcm9qZWN0LWJ0biBpbWcge1xcbiAgaGVpZ2h0OiAzMHB4O1xcbiAgd2lkdGg6IDMwcHg7XFxufVxcblxcbi5lbXB0eS1pbmRpY2F0b3IgaW1nIHtcXG4gIGhlaWdodDogMTAwcHg7XFxuICB3aWR0aDogMTAwcHg7XFxufVxcblxcbi53cmFwcGVyIGJ1dHRvbjpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2NjY2NjO1xcbn1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvY29udGVudC5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxZQUFZO0VBQ1osV0FBVztFQUNYLGFBQWE7RUFDYixrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLDRCQUE0QjtBQUM5Qjs7QUFFQTtFQUNFLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixTQUFTO0VBQ1QsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixrQkFBa0I7QUFDcEI7O0FBRUE7O0VBRUUsV0FBVztFQUNYLFlBQVk7RUFDWixZQUFZO0VBQ1osYUFBYTtFQUNiLFNBQVM7RUFDVCxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsWUFBWTtBQUNkOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxZQUFZO0FBQ2Q7O0FBRUE7O0VBRUUsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLFlBQVk7RUFDWixZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYix3QkFBd0I7RUFDeEIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0Usa0JBQWtCOztFQUVsQixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGFBQWE7RUFDYixRQUFRO0VBQ1Isb0JBQW9CO0FBQ3RCOztBQUVBO0VBQ0Usc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsWUFBWTtFQUNaLFdBQVc7RUFDWCxrQkFBa0I7QUFDcEI7O0FBRUE7Ozs7RUFJRSxZQUFZO0VBQ1osV0FBVztBQUNiOztBQUVBO0VBQ0UsYUFBYTtFQUNiLFlBQVk7QUFDZDs7QUFFQTtFQUNFLHlCQUF5QjtBQUMzQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIud3JhcHBlciB7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICB3aWR0aDogMTAwJTtcXG4gIHBhZGRpbmc6IDE1cHg7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiA4MHB4IDFmcjtcXG59XFxuXFxuaDIge1xcbiAgY29sb3I6ICNmNDQzMzY7XFxufVxcblxcbi50YXNrLWRpc3BsYXkge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBnYXA6IDEwcHg7XFxuICBvdmVyZmxvdy15OiBhdXRvO1xcbn1cXG5cXG4uZW1wdHktaW5kaWNhdG9yIHtcXG4gIHBhZGRpbmc6IDEwcHg7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBib3R0b206IDUwJTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xcbn1cXG5cXG4udGFzayxcXG4ubGlzdC1iYXIge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDUwcHg7XFxuICBwYWRkaW5nOiA1cHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZ2FwOiAxMHB4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmxpc3QtYmFyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNlM2U5ZjY7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbn1cXG5cXG4ubGlzdC1iYXIgPiBkaXYge1xcbiAgcGFkZGluZzogNXB4O1xcbn1cXG5cXG4uZGlzcGxheS1idG4tY29udGFpbmVyIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHJpZ2h0OiAxMHB4O1xcbiAgYm90dG9tOiAxMHB4O1xcbn1cXG5cXG4uYmFjay1idG4tY29udGFpbmVyLFxcbi5kZWwtYnRuLWNvbnRhaW5lciB7XFxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxufVxcblxcbi53cmFwcGVyIGJ1dHRvbiB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGVlMGUwO1xcbiAgcGFkZGluZzogNXB4O1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGp1c3RpZnktc2VsZjogc2VsZi1zdGFydDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5saXN0LWJhciBwIHtcXG4gIGZvbnQtc2l6ZTogMC43NXJlbTtcXG5cXG4gIG9wYWNpdHk6IDAuNztcXG59XFxuXFxuLmxpc3QtYmFyIC5yZW1vdmUtcHJvamVjdC1idG4ge1xcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTNlOWY2O1xcbn1cXG5cXG4udGFzayA+IGRpdiB7XFxuICBwYWRkaW5nOiA1cHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZ2FwOiA1cHg7XFxuICBwb2ludGVyLWV2ZW50czogbm9uZTtcXG59XFxuXFxuLnRhc2sgPiBkaXY6bnRoLWNoaWxkKDIpIHtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbi50YXNrID4gZGl2Om50aC1vZi10eXBlKDIpIHtcXG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xcbn1cXG5cXG4udGFzayBpbWcge1xcbiAgaGVpZ2h0OiAxNXB4O1xcbiAgd2lkdGg6IDE1cHg7XFxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxufVxcblxcbi5iYWNrLWJ0biBpbWcsXFxuLmRlbC1idG4gaW1nLFxcbi5jcmVhdGUtbGlzdC1idG4gaW1nLFxcbi5yZW1vdmUtcHJvamVjdC1idG4gaW1nIHtcXG4gIGhlaWdodDogMzBweDtcXG4gIHdpZHRoOiAzMHB4O1xcbn1cXG5cXG4uZW1wdHktaW5kaWNhdG9yIGltZyB7XFxuICBoZWlnaHQ6IDEwMHB4O1xcbiAgd2lkdGg6IDEwMHB4O1xcbn1cXG5cXG4ud3JhcHBlciBidXR0b246aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2NjY2NjYztcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLnRhc2stZm9ybSB7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyIDFmciAxZnI7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciAzZnIgNTBweCA1MHB4O1xcbiAgZ2FwOiAxMHB4O1xcbn1cXG5cXG4uZnVsbC10YXNrLWZvcm0ge1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDJmciAxZnI7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciA1MHB4IDNmciA1MHB4IDUwcHg7XFxuICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbmJvZHkubW9kYWwtb3BlbiB7XFxuICBwb2ludGVyLWV2ZW50czogbm9uZTtcXG59XFxuXFxuYm9keS5tb2RhbC1vcGVuIC50YXNrLWZvcm0ge1xcbiAgb3BhY2l0eTogMC41O1xcbn1cXG5cXG5ib2R5Lm1vZGFsLW9wZW4gLnBvcC11cCB7XFxuICBwb2ludGVyLWV2ZW50czogYXV0bztcXG59XFxuXFxuLnBvcC11cCB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB3aWR0aDogMjUwcHg7XFxuICBoZWlnaHQ6IDE1MHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzc3YzRmZTtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIHBhZGRpbmc6IDEwcHg7XFxuICB0b3A6IDUwJTtcXG4gIGxlZnQ6IDUwJTtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBnYXA6IDVweDtcXG59XFxuXFxuLnBvcC11cCBsYWJlbCxcXG4ucG9wLXVwIGRpdiB7XFxuICBwYWRkaW5nOiA1cHggMHB4O1xcbn1cXG5cXG4ucG9wLXVwIGlucHV0IHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM3N2M0ZmU7XFxuICBib3JkZXItcmFkaXVzOiAwcHg7XFxuICBib3JkZXItYm90dG9tOiAycHggc29saWQgIzA1MDIwMztcXG59XFxuXFxuLnBvcC11cCA+IGRpdiB7XFxuICBtYXJnaW4tdG9wOiBhdXRvO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGdhcDogMTBweDtcXG4gIGp1c3RpZnktY29udGVudDogZW5kO1xcbn1cXG5cXG4ucG9wLXVwIGJ1dHRvbiB7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICB3aWR0aDogNjBweDtcXG59XFxuXFxuLnRhc2sgPiBmb3JtIHtcXG4gIHBhZGRpbmc6IDVweDtcXG59XFxuXFxuLnRhc2stZm9ybSA+IGRpdiB7XFxuICBwYWRkaW5nOiA1cHg7XFxufVxcblxcbi5mdWxsLXRhc2stZm9ybSAjdGFzay10aXRsZSB7XFxuICBmb250LXNpemU6IDEuNXJlbTtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgaGVpZ2h0OiBhdXRvO1xcbiAgd2lkdGg6IDMwMHB4O1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4udGFzay1mb3JtICN0YXNrLXRpdGxlIHtcXG4gIHdpZHRoOiAzMDBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmNmY4ZmM7XFxuICBib3JkZXItYm90dG9tOiAycHggc29saWQgIzA1MDIwMztcXG4gIGJvcmRlci1yYWRpdXM6IDBweDtcXG59XFxuXFxuLnRpdGxlLXdyYXBwZXIge1xcbiAgZ3JpZC1jb2x1bW46IDIgLyA0O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBnYXA6IDEwcHg7XFxufVxcblxcbi5kZXNjcmlwdGlvbi13cmFwcGVyIHtcXG4gIGdyaWQtY29sdW1uOiAyIC8gNDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ2FwOiAxMHB4O1xcbn1cXG5cXG4uZHVlLWRhdGUtd3JhcHBlciB7XFxuICBncmlkLWNvbHVtbjogMiAvIDQ7XFxuICBncmlkLXJvdzogMyAvIDQ7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xcbiAgZ2FwOiAyMHB4O1xcbn1cXG5cXG4ucHJpb3JpdHktd3JhcHBlciB7XFxuICBncmlkLWNvbHVtbjogMiAvIDM7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiA2MHB4IDE0MHB4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmxpc3Qtd3JhcHBlciB7XFxuICBncmlkLWNvbHVtbjogMyAvIDQ7XFxuICBncmlkLXJvdzogNCAvIDU7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgNDBweDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDJweDtcXG59XFxuXFxuLmRhdGUtY29udGFpbmVyLFxcbi50aW1lLWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiA2MHB4IDE0MHB4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmZ1bGwtdGFzay1mb3JtID4gZGl2IHtcXG4gIGdyaWQtY29sdW1uOiAyIC8gMztcXG4gIHdpZHRoOiAxMDAlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHBhZGRpbmc6IDEwcHg7XFxufVxcblxcbi5mdWxsLXRhc2stZm9ybSAuZGF0ZS1jb250YWluZXIsXFxuLmZ1bGwtdGFzay1mb3JtIC50aW1lLWNvbnRhaW5lciB7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDgwcHggMTQwcHg7XFxufVxcblxcbi5mdWxsLXRhc2stZm9ybSA+IGRpdjpudGgtY2hpbGQoNCkge1xcbiAgZ2FwOiAxMHB4O1xcbn1cXG5cXG4uZnVsbC10YXNrLWZvcm0gc2VsZWN0IHtcXG4gIHdpZHRoOiAxMDBweDtcXG59XFxuXFxuLmxpc3Qtd3JhcHBlciA+IGRpdiB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiA2MHB4IG1pbm1heCgxMDBweCwgMTQwcHgpO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuaW5wdXQsXFxudGV4dGFyZWEsXFxuc2VsZWN0IHtcXG4gIGhlaWdodDogMzVweDtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiT3BlbiBTYW5zXFxcIiwgc2Fucy1zZXJpZjtcXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XFxuICBmb250LXNpemU6IDFyZW07XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGVlMGUwO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgcGFkZGluZzogNXB4O1xcbn1cXG4vKiBcXG4uZnVsbC10YXNrLWZvcm0gaW5wdXQsXFxuLmZ1bGwtdGFzay1mb3JtIHRleHRhcmVhLFxcbi5mdWxsLXRhc2stZm9ybSBzZWxlY3Qge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ViZWNlZDtcXG59ICovXFxuXFxubGFiZWwge1xcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXG59XFxuXFxudGV4dGFyZWEge1xcbiAgcmVzaXplOiBub25lO1xcbn1cXG5cXG4uZGVzY3JpcHRpb24gPiB0ZXh0YXJlYSxcXG4uZGVzY3JpcHRpb24td3JhcHBlciA+IHRleHRhcmVhIHtcXG4gIGhlaWdodDogMTAwJTtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4udGFzay1mb3JtICN0YXNrLXRpdGxlOmZvY3VzLFxcbi5wb3AtdXAgaW5wdXQge1xcbiAgb3V0bGluZTogbm9uZTtcXG59XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2Zvcm1zLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLFlBQVk7RUFDWixhQUFhO0VBQ2Isc0NBQXNDO0VBQ3RDLHFDQUFxQztFQUNyQyxTQUFTO0FBQ1g7O0FBRUE7RUFDRSxZQUFZO0VBQ1osYUFBYTtFQUNiLGtDQUFrQztFQUNsQywwQ0FBMEM7RUFDMUMscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0Usb0JBQW9CO0FBQ3RCOztBQUVBO0VBQ0UsWUFBWTtBQUNkOztBQUVBO0VBQ0Usb0JBQW9CO0FBQ3RCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixhQUFhO0VBQ2IseUJBQXlCO0VBQ3pCLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2IsUUFBUTtFQUNSLFNBQVM7RUFDVCxnQ0FBZ0M7RUFDaEMsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixRQUFRO0FBQ1Y7O0FBRUE7O0VBRUUsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLGtCQUFrQjtFQUNsQixnQ0FBZ0M7QUFDbEM7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsYUFBYTtFQUNiLFNBQVM7RUFDVCxvQkFBb0I7QUFDdEI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsV0FBVztBQUNiOztBQUVBO0VBQ0UsWUFBWTtBQUNkOztBQUVBO0VBQ0UsWUFBWTtBQUNkOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLGlCQUFpQjtFQUNqQixZQUFZO0VBQ1osWUFBWTtFQUNaLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLFlBQVk7RUFDWix5QkFBeUI7RUFDekIsZ0NBQWdDO0VBQ2hDLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLFNBQVM7QUFDWDs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLFNBQVM7QUFDWDs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2YsYUFBYTtFQUNiLDhCQUE4QjtFQUM5QixTQUFTO0FBQ1g7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLGlDQUFpQztFQUNqQyxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLGFBQWE7RUFDYiwrQkFBK0I7RUFDL0IsbUJBQW1CO0VBQ25CLFFBQVE7QUFDVjs7QUFFQTs7RUFFRSxhQUFhO0VBQ2IsaUNBQWlDO0VBQ2pDLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsYUFBYTtBQUNmOztBQUVBOztFQUVFLGlDQUFpQztBQUNuQzs7QUFFQTtFQUNFLFNBQVM7QUFDWDs7QUFFQTtFQUNFLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGFBQWE7RUFDYixnREFBZ0Q7RUFDaEQsbUJBQW1CO0FBQ3JCOztBQUVBOzs7RUFHRSxZQUFZO0VBQ1osb0NBQW9DO0VBQ3BDLGdCQUFnQjtFQUNoQixlQUFlO0VBQ2YseUJBQXlCO0VBQ3pCLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsWUFBWTtBQUNkO0FBQ0E7Ozs7O0dBS0c7O0FBRUg7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxZQUFZO0FBQ2Q7O0FBRUE7O0VBRUUsWUFBWTtFQUNaLFdBQVc7QUFDYjs7QUFFQTs7RUFFRSxhQUFhO0FBQ2ZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLnRhc2stZm9ybSB7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyIDFmciAxZnI7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciAzZnIgNTBweCA1MHB4O1xcbiAgZ2FwOiAxMHB4O1xcbn1cXG5cXG4uZnVsbC10YXNrLWZvcm0ge1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDJmciAxZnI7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciA1MHB4IDNmciA1MHB4IDUwcHg7XFxuICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbmJvZHkubW9kYWwtb3BlbiB7XFxuICBwb2ludGVyLWV2ZW50czogbm9uZTtcXG59XFxuXFxuYm9keS5tb2RhbC1vcGVuIC50YXNrLWZvcm0ge1xcbiAgb3BhY2l0eTogMC41O1xcbn1cXG5cXG5ib2R5Lm1vZGFsLW9wZW4gLnBvcC11cCB7XFxuICBwb2ludGVyLWV2ZW50czogYXV0bztcXG59XFxuXFxuLnBvcC11cCB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB3aWR0aDogMjUwcHg7XFxuICBoZWlnaHQ6IDE1MHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzc3YzRmZTtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIHBhZGRpbmc6IDEwcHg7XFxuICB0b3A6IDUwJTtcXG4gIGxlZnQ6IDUwJTtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBnYXA6IDVweDtcXG59XFxuXFxuLnBvcC11cCBsYWJlbCxcXG4ucG9wLXVwIGRpdiB7XFxuICBwYWRkaW5nOiA1cHggMHB4O1xcbn1cXG5cXG4ucG9wLXVwIGlucHV0IHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM3N2M0ZmU7XFxuICBib3JkZXItcmFkaXVzOiAwcHg7XFxuICBib3JkZXItYm90dG9tOiAycHggc29saWQgIzA1MDIwMztcXG59XFxuXFxuLnBvcC11cCA+IGRpdiB7XFxuICBtYXJnaW4tdG9wOiBhdXRvO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGdhcDogMTBweDtcXG4gIGp1c3RpZnktY29udGVudDogZW5kO1xcbn1cXG5cXG4ucG9wLXVwIGJ1dHRvbiB7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICB3aWR0aDogNjBweDtcXG59XFxuXFxuLnRhc2sgPiBmb3JtIHtcXG4gIHBhZGRpbmc6IDVweDtcXG59XFxuXFxuLnRhc2stZm9ybSA+IGRpdiB7XFxuICBwYWRkaW5nOiA1cHg7XFxufVxcblxcbi5mdWxsLXRhc2stZm9ybSAjdGFzay10aXRsZSB7XFxuICBmb250LXNpemU6IDEuNXJlbTtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgaGVpZ2h0OiBhdXRvO1xcbiAgd2lkdGg6IDMwMHB4O1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4udGFzay1mb3JtICN0YXNrLXRpdGxlIHtcXG4gIHdpZHRoOiAzMDBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmNmY4ZmM7XFxuICBib3JkZXItYm90dG9tOiAycHggc29saWQgIzA1MDIwMztcXG4gIGJvcmRlci1yYWRpdXM6IDBweDtcXG59XFxuXFxuLnRpdGxlLXdyYXBwZXIge1xcbiAgZ3JpZC1jb2x1bW46IDIgLyA0O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBnYXA6IDEwcHg7XFxufVxcblxcbi5kZXNjcmlwdGlvbi13cmFwcGVyIHtcXG4gIGdyaWQtY29sdW1uOiAyIC8gNDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ2FwOiAxMHB4O1xcbn1cXG5cXG4uZHVlLWRhdGUtd3JhcHBlciB7XFxuICBncmlkLWNvbHVtbjogMiAvIDQ7XFxuICBncmlkLXJvdzogMyAvIDQ7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xcbiAgZ2FwOiAyMHB4O1xcbn1cXG5cXG4ucHJpb3JpdHktd3JhcHBlciB7XFxuICBncmlkLWNvbHVtbjogMiAvIDM7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiA2MHB4IDE0MHB4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmxpc3Qtd3JhcHBlciB7XFxuICBncmlkLWNvbHVtbjogMyAvIDQ7XFxuICBncmlkLXJvdzogNCAvIDU7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgNDBweDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDJweDtcXG59XFxuXFxuLmRhdGUtY29udGFpbmVyLFxcbi50aW1lLWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiA2MHB4IDE0MHB4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmZ1bGwtdGFzay1mb3JtID4gZGl2IHtcXG4gIGdyaWQtY29sdW1uOiAyIC8gMztcXG4gIHdpZHRoOiAxMDAlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHBhZGRpbmc6IDEwcHg7XFxufVxcblxcbi5mdWxsLXRhc2stZm9ybSAuZGF0ZS1jb250YWluZXIsXFxuLmZ1bGwtdGFzay1mb3JtIC50aW1lLWNvbnRhaW5lciB7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDgwcHggMTQwcHg7XFxufVxcblxcbi5mdWxsLXRhc2stZm9ybSA+IGRpdjpudGgtY2hpbGQoNCkge1xcbiAgZ2FwOiAxMHB4O1xcbn1cXG5cXG4uZnVsbC10YXNrLWZvcm0gc2VsZWN0IHtcXG4gIHdpZHRoOiAxMDBweDtcXG59XFxuXFxuLmxpc3Qtd3JhcHBlciA+IGRpdiB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiA2MHB4IG1pbm1heCgxMDBweCwgMTQwcHgpO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuaW5wdXQsXFxudGV4dGFyZWEsXFxuc2VsZWN0IHtcXG4gIGhlaWdodDogMzVweDtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiT3BlbiBTYW5zXFxcIiwgc2Fucy1zZXJpZjtcXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XFxuICBmb250LXNpemU6IDFyZW07XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGVlMGUwO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgcGFkZGluZzogNXB4O1xcbn1cXG4vKiBcXG4uZnVsbC10YXNrLWZvcm0gaW5wdXQsXFxuLmZ1bGwtdGFzay1mb3JtIHRleHRhcmVhLFxcbi5mdWxsLXRhc2stZm9ybSBzZWxlY3Qge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ViZWNlZDtcXG59ICovXFxuXFxubGFiZWwge1xcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXG59XFxuXFxudGV4dGFyZWEge1xcbiAgcmVzaXplOiBub25lO1xcbn1cXG5cXG4uZGVzY3JpcHRpb24gPiB0ZXh0YXJlYSxcXG4uZGVzY3JpcHRpb24td3JhcHBlciA+IHRleHRhcmVhIHtcXG4gIGhlaWdodDogMTAwJTtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4udGFzay1mb3JtICN0YXNrLXRpdGxlOmZvY3VzLFxcbi5wb3AtdXAgaW5wdXQge1xcbiAgb3V0bGluZTogbm9uZTtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9T3BlbitTYW5zJmRpc3BsYXk9c3dhcCk7XCJdKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIioge1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxufVxcblxcbmJvZHkge1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiT3BlbiBTYW5zXFxcIiwgc2Fucy1zZXJpZjtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNiY2NiZWE7XFxuICBjb2xvcjogIzA1MDIwMztcXG59XFxuXFxuLmNvbnRlbnQge1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBtaW5tYXgoMjQwcHgsIDFmcikgbWlubWF4KDYwMHB4LCA1ZnIpO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiA2MHB4IG1pbm1heCg2NTBweCwgNGZyKSA2MHB4O1xcbn1cXG5cXG4uaGVhZGVyIHtcXG4gIGdyaWQtY29sdW1uOiAxIC8gMztcXG4gIGdyaWQtcm93OiAxIC8gMjtcXG4gIHBhZGRpbmc6IDEwcHggMjBweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4ubWFpbi1zZWN0aW9uIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmNmY4ZmM7XFxuICBib3JkZXItcmFkaXVzOiAyMHB4O1xcbiAgbWFyZ2luOiAxMHB4IDIwcHg7XFxuICBncmlkLWNvbHVtbi1lbmQ6IHNwYW4gMztcXG4gIGdyaWQtcm93OiAyIC8gMztcXG59XFxuXFxuLmZvb3RlciB7XFxuICBwYWRkaW5nOiAxMHB4O1xcbiAgZ3JpZC1jb2x1bW4tZW5kOiBzcGFuIDM7XFxuICBncmlkLXJvdzogMyAvIDQ7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG5idXR0b24ge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJPcGVuIFNhbnNcXFwiLCBzYW5zLXNlcmlmO1xcbiAgZm9udC13ZWlnaHQ6IDQwMDtcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXG4gIGNvbG9yOiAjMDUwMjAzO1xcbn1cXG5cXG4udGFzay1oZWFkZXIge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDFmcjtcXG59XFxuXFxuLm1lbnUtYnRuLFxcbi52aWV3LWxpc3RzLWJ0biB7XFxuICBib3JkZXI6IG5vbmU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYmNjYmVhO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5oZWFkZXIgPiBkaXY6bnRoLWNoaWxkKDIpIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgzLCAxZnIpO1xcbiAgZ2FwOiAyMHB4O1xcbn1cXG5cXG4uaGVhZGVyIGltZyB7XFxuICBoZWlnaHQ6IDM1cHg7XFxuICB3aWR0aDogNDBweDtcXG59XFxuXFxuLm1lbnUtYnRuOmhvdmVyLFxcbi52aWV3LWxpc3RzLWJ0bjpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGVlMGUwO1xcbn1cXG5cXG4uZGlzcGxheS1idG4tY29udGFpbmVyIGltZyxcXG4uZGVsLWJ0bi1jb250YWluZXIgaW1nLFxcbi5jcmVhdGUtbGlzdC1idG4gaW1nLFxcbi5hZGQtcHJvamVjdC1idG4gaW1nLFxcbi5iYWNrLWJ0biBpbWcsXFxuLnJlbW92ZS1wcm9qZWN0LWJ0biBpbWcge1xcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxufVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9sYXlvdXQuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUVBO0VBQ0Usc0JBQXNCO0VBQ3RCLFNBQVM7RUFDVCxVQUFVO0FBQ1o7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsZUFBZTtFQUNmLG9DQUFvQztFQUNwQyx5QkFBeUI7RUFDekIsY0FBYztBQUNoQjs7QUFFQTtFQUNFLFlBQVk7RUFDWixXQUFXO0VBQ1gsYUFBYTtFQUNiLDREQUE0RDtFQUM1RCxnREFBZ0Q7QUFDbEQ7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2IsOEJBQThCO0VBQzlCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixtQkFBbUI7RUFDbkIsaUJBQWlCO0VBQ2pCLHVCQUF1QjtFQUN2QixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixlQUFlO0VBQ2YsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxvQ0FBb0M7RUFDcEMsZ0JBQWdCO0VBQ2hCLGVBQWU7RUFDZixjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLDJCQUEyQjtBQUM3Qjs7QUFFQTs7RUFFRSxZQUFZO0VBQ1oseUJBQXlCO0VBQ3pCLGFBQWE7RUFDYixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IscUNBQXFDO0VBQ3JDLFNBQVM7QUFDWDs7QUFFQTtFQUNFLFlBQVk7RUFDWixXQUFXO0FBQ2I7O0FBRUE7O0VBRUUseUJBQXlCO0FBQzNCOztBQUVBOzs7Ozs7RUFNRSxvQkFBb0I7QUFDdEJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGltcG9ydCB1cmwoXFxcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9T3BlbitTYW5zJmRpc3BsYXk9c3dhcFxcXCIpO1xcblxcbioge1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxufVxcblxcbmJvZHkge1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiT3BlbiBTYW5zXFxcIiwgc2Fucy1zZXJpZjtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNiY2NiZWE7XFxuICBjb2xvcjogIzA1MDIwMztcXG59XFxuXFxuLmNvbnRlbnQge1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBtaW5tYXgoMjQwcHgsIDFmcikgbWlubWF4KDYwMHB4LCA1ZnIpO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiA2MHB4IG1pbm1heCg2NTBweCwgNGZyKSA2MHB4O1xcbn1cXG5cXG4uaGVhZGVyIHtcXG4gIGdyaWQtY29sdW1uOiAxIC8gMztcXG4gIGdyaWQtcm93OiAxIC8gMjtcXG4gIHBhZGRpbmc6IDEwcHggMjBweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4ubWFpbi1zZWN0aW9uIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmNmY4ZmM7XFxuICBib3JkZXItcmFkaXVzOiAyMHB4O1xcbiAgbWFyZ2luOiAxMHB4IDIwcHg7XFxuICBncmlkLWNvbHVtbi1lbmQ6IHNwYW4gMztcXG4gIGdyaWQtcm93OiAyIC8gMztcXG59XFxuXFxuLmZvb3RlciB7XFxuICBwYWRkaW5nOiAxMHB4O1xcbiAgZ3JpZC1jb2x1bW4tZW5kOiBzcGFuIDM7XFxuICBncmlkLXJvdzogMyAvIDQ7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG5idXR0b24ge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJPcGVuIFNhbnNcXFwiLCBzYW5zLXNlcmlmO1xcbiAgZm9udC13ZWlnaHQ6IDQwMDtcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXG4gIGNvbG9yOiAjMDUwMjAzO1xcbn1cXG5cXG4udGFzay1oZWFkZXIge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDFmcjtcXG59XFxuXFxuLm1lbnUtYnRuLFxcbi52aWV3LWxpc3RzLWJ0biB7XFxuICBib3JkZXI6IG5vbmU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYmNjYmVhO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5oZWFkZXIgPiBkaXY6bnRoLWNoaWxkKDIpIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgzLCAxZnIpO1xcbiAgZ2FwOiAyMHB4O1xcbn1cXG5cXG4uaGVhZGVyIGltZyB7XFxuICBoZWlnaHQ6IDM1cHg7XFxuICB3aWR0aDogNDBweDtcXG59XFxuXFxuLm1lbnUtYnRuOmhvdmVyLFxcbi52aWV3LWxpc3RzLWJ0bjpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGVlMGUwO1xcbn1cXG5cXG4uZGlzcGxheS1idG4tY29udGFpbmVyIGltZyxcXG4uZGVsLWJ0bi1jb250YWluZXIgaW1nLFxcbi5jcmVhdGUtbGlzdC1idG4gaW1nLFxcbi5hZGQtcHJvamVjdC1idG4gaW1nLFxcbi5iYWNrLWJ0biBpbWcsXFxuLnJlbW92ZS1wcm9qZWN0LWJ0biBpbWcge1xcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi5tYWluLW1lbnUge1xcbiAgZ3JpZC1yb3c6IDIgLyA0O1xcbiAgbWFyZ2luLXRvcDogMTBweDtcXG4gIHBhZGRpbmc6IDEwcHggMTBweCAwcHggMTBweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ2FwOiAxMHB4O1xcbiAganVzdGlmeS1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4ubWFpbi1tZW51IGJ1dHRvbiB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYmNjYmVhO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgcGFkZGluZzogMnB4IDEwcHg7XFxuICBqdXN0aWZ5LXNlbGY6IGZsZXgtc3RhcnQ7XFxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICB0ZXh0LWFsaWduOiBzdGFydDtcXG59XFxuXFxuLm1haW4tbWVudSAuYWRkLXByb2plY3QtYnRuIHtcXG4gIHBhZGRpbmc6IDBweDtcXG59XFxuXFxuLnRvZGF5LWNvbnRhaW5lcixcXG4udXBjb21pbmctY29udGFpbmVyIHtcXG4gIHBhZGRpbmc6IDVweCAxMHB4O1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMzVweCAzZnIgMzVweDtcXG4gIGNvbHVtbi1nYXA6IDVweDtcXG59XFxuXFxuLmZhdi1jb250YWluZXIsXFxuLnByb2otY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDM1cHggM2ZyIDM1cHg7XFxufVxcblxcbi5mYXYtY29udGFpbmVyID4gZGl2Om50aC1jaGlsZCgxKSxcXG4ucHJvai1jb250YWluZXIgPiBkaXY6bnRoLWNoaWxkKDEpIHtcXG4gIHBhZGRpbmc6IDVweCAxMHB4O1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgZ3JpZC1jb2x1bW46IDEgLyA0O1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMzVweCAzZnIgMzVweDtcXG4gIGNvbHVtbi1nYXA6IDVweDtcXG59XFxuXFxuLmZhdm9yaXRlcyxcXG4ucHJvamVjdHMge1xcbiAgZ3JpZC1jb2x1bW46IDIgLyA0O1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDMsIDFmcik7XFxufVxcblxcbi5mYXZvcml0ZXMgPiBkaXYsXFxuLnByb2plY3RzID4gZGl2IHtcXG4gIHBhZGRpbmc6IDVweDtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDIwcHggM2ZyIDFmcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5mYXZvcml0ZXMgPiBkaXYgPiBpbWcsXFxuLnByb2plY3RzID4gZGl2ID4gaW1nIHtcXG4gIGhlaWdodDogMTVweDtcXG4gIHdpZHRoOiAxNXB4O1xcbn1cXG5cXG4udG9kYXktY29udGFpbmVyID4gaW1nLFxcbi51cGNvbWluZy1jb250YWluZXIgPiBpbWcsXFxuLmZhdi1jb250YWluZXIgaW1nLFxcbi5wcm9qLWNvbnRhaW5lciBpbWcge1xcbiAgaGVpZ2h0OiAzMHB4O1xcbiAgd2lkdGg6IDMwcHg7XFxufVxcblxcbi5hZGQtcHJvamVjdC1idG4ge1xcbiAgaGVpZ2h0OiAzMHB4O1xcbiAgd2lkdGg6IDMwcHg7XFxuICBqdXN0aWZ5LXNlbGY6IGVuZDtcXG59XFxuXFxuW2NsYXNzKj1cXFwiY291bnRcXFwiXSB7XFxuICB0ZXh0LWFsaWduOiBlbmQ7XFxufVxcblxcbi50b2RheS1jb250YWluZXI6aG92ZXIsXFxuLnVwY29taW5nLWNvbnRhaW5lcjpob3ZlcixcXG4uZmF2LXdyYXBwZXI6aG92ZXIsXFxuLnByb2otd3JhcHBlcjpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNzdjNGZlO1xcbn1cXG5cXG4udG9kYXktY29udGFpbmVyOmhvdmVyIC50b2RheS1idG4sXFxuLnVwY29taW5nLWNvbnRhaW5lcjpob3ZlciAudXBjb21pbmctYnRuLFxcbi5mYXYtd3JhcHBlcjpob3ZlciAuZmF2b3JpdGVzLWJ0bixcXG4ucHJvai13cmFwcGVyOmhvdmVyIC5wcm9qZWN0cy1idG4sXFxuLnByb2otd3JhcHBlcjpob3ZlciAuYWRkLXByb2plY3QtYnRuIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM3N2M0ZmU7XFxufVxcblxcbi5mYXZvcml0ZXMgPiBkaXY6aG92ZXIsXFxuLnByb2plY3RzID4gZGl2OmhvdmVyLFxcbi5mYXZvcml0ZXMgPiBkaXY6aG92ZXIgYnV0dG9uLFxcbi5wcm9qZWN0cyA+IGRpdjpob3ZlciBidXR0b24ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzc3YzRmZTtcXG59XFxuXFxuLm1haW4tbWVudSBidXR0b246aG92ZXIge1xcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXG59XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL25hdi5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLDJCQUEyQjtFQUMzQixhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLFNBQVM7RUFDVCxxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsWUFBWTtFQUNaLGlCQUFpQjtFQUNqQix3QkFBd0I7RUFDeEIsa0JBQWtCO0VBQ2xCLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLFlBQVk7QUFDZDs7QUFFQTs7RUFFRSxpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYixvQ0FBb0M7RUFDcEMsZUFBZTtBQUNqQjs7QUFFQTs7RUFFRSxhQUFhO0VBQ2Isb0NBQW9DO0FBQ3RDOztBQUVBOztFQUVFLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYixvQ0FBb0M7RUFDcEMsZUFBZTtBQUNqQjs7QUFFQTs7RUFFRSxrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLGtDQUFrQztBQUNwQzs7QUFFQTs7RUFFRSxZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYixtQ0FBbUM7RUFDbkMsbUJBQW1CO0FBQ3JCOztBQUVBOztFQUVFLFlBQVk7RUFDWixXQUFXO0FBQ2I7O0FBRUE7Ozs7RUFJRSxZQUFZO0VBQ1osV0FBVztBQUNiOztBQUVBO0VBQ0UsWUFBWTtFQUNaLFdBQVc7RUFDWCxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCOztBQUVBOzs7O0VBSUUseUJBQXlCO0FBQzNCOztBQUVBOzs7OztFQUtFLHlCQUF5QjtBQUMzQjs7QUFFQTs7OztFQUlFLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIubWFpbi1tZW51IHtcXG4gIGdyaWQtcm93OiAyIC8gNDtcXG4gIG1hcmdpbi10b3A6IDEwcHg7XFxuICBwYWRkaW5nOiAxMHB4IDEwcHggMHB4IDEwcHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGdhcDogMTBweDtcXG4gIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLm1haW4tbWVudSBidXR0b24ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2JjY2JlYTtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIHBhZGRpbmc6IDJweCAxMHB4O1xcbiAganVzdGlmeS1zZWxmOiBmbGV4LXN0YXJ0O1xcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgdGV4dC1hbGlnbjogc3RhcnQ7XFxufVxcblxcbi5tYWluLW1lbnUgLmFkZC1wcm9qZWN0LWJ0biB7XFxuICBwYWRkaW5nOiAwcHg7XFxufVxcblxcbi50b2RheS1jb250YWluZXIsXFxuLnVwY29taW5nLWNvbnRhaW5lciB7XFxuICBwYWRkaW5nOiA1cHggMTBweDtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDM1cHggM2ZyIDM1cHg7XFxuICBjb2x1bW4tZ2FwOiA1cHg7XFxufVxcblxcbi5mYXYtY29udGFpbmVyLFxcbi5wcm9qLWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAzNXB4IDNmciAzNXB4O1xcbn1cXG5cXG4uZmF2LWNvbnRhaW5lciA+IGRpdjpudGgtY2hpbGQoMSksXFxuLnByb2otY29udGFpbmVyID4gZGl2Om50aC1jaGlsZCgxKSB7XFxuICBwYWRkaW5nOiA1cHggMTBweDtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIGdyaWQtY29sdW1uOiAxIC8gNDtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDM1cHggM2ZyIDM1cHg7XFxuICBjb2x1bW4tZ2FwOiA1cHg7XFxufVxcblxcbi5mYXZvcml0ZXMsXFxuLnByb2plY3RzIHtcXG4gIGdyaWQtY29sdW1uOiAyIC8gNDtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgzLCAxZnIpO1xcbn1cXG5cXG4uZmF2b3JpdGVzID4gZGl2LFxcbi5wcm9qZWN0cyA+IGRpdiB7XFxuICBwYWRkaW5nOiA1cHg7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAyMHB4IDNmciAxZnI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uZmF2b3JpdGVzID4gZGl2ID4gaW1nLFxcbi5wcm9qZWN0cyA+IGRpdiA+IGltZyB7XFxuICBoZWlnaHQ6IDE1cHg7XFxuICB3aWR0aDogMTVweDtcXG59XFxuXFxuLnRvZGF5LWNvbnRhaW5lciA+IGltZyxcXG4udXBjb21pbmctY29udGFpbmVyID4gaW1nLFxcbi5mYXYtY29udGFpbmVyIGltZyxcXG4ucHJvai1jb250YWluZXIgaW1nIHtcXG4gIGhlaWdodDogMzBweDtcXG4gIHdpZHRoOiAzMHB4O1xcbn1cXG5cXG4uYWRkLXByb2plY3QtYnRuIHtcXG4gIGhlaWdodDogMzBweDtcXG4gIHdpZHRoOiAzMHB4O1xcbiAganVzdGlmeS1zZWxmOiBlbmQ7XFxufVxcblxcbltjbGFzcyo9XFxcImNvdW50XFxcIl0ge1xcbiAgdGV4dC1hbGlnbjogZW5kO1xcbn1cXG5cXG4udG9kYXktY29udGFpbmVyOmhvdmVyLFxcbi51cGNvbWluZy1jb250YWluZXI6aG92ZXIsXFxuLmZhdi13cmFwcGVyOmhvdmVyLFxcbi5wcm9qLXdyYXBwZXI6aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzc3YzRmZTtcXG59XFxuXFxuLnRvZGF5LWNvbnRhaW5lcjpob3ZlciAudG9kYXktYnRuLFxcbi51cGNvbWluZy1jb250YWluZXI6aG92ZXIgLnVwY29taW5nLWJ0bixcXG4uZmF2LXdyYXBwZXI6aG92ZXIgLmZhdm9yaXRlcy1idG4sXFxuLnByb2otd3JhcHBlcjpob3ZlciAucHJvamVjdHMtYnRuLFxcbi5wcm9qLXdyYXBwZXI6aG92ZXIgLmFkZC1wcm9qZWN0LWJ0biB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNzdjNGZlO1xcbn1cXG5cXG4uZmF2b3JpdGVzID4gZGl2OmhvdmVyLFxcbi5wcm9qZWN0cyA+IGRpdjpob3ZlcixcXG4uZmF2b3JpdGVzID4gZGl2OmhvdmVyIGJ1dHRvbixcXG4ucHJvamVjdHMgPiBkaXY6aG92ZXIgYnV0dG9uIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM3N2M0ZmU7XFxufVxcblxcbi5tYWluLW1lbnUgYnV0dG9uOmhvdmVyIHtcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2NvbnRlbnQuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9jb250ZW50LmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9mb3Jtcy5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2Zvcm1zLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9sYXlvdXQuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9sYXlvdXQuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL25hdi5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL25hdi5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyYztcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSB7XG5cdFx0XHR2YXIgaSA9IHNjcmlwdHMubGVuZ3RoIC0gMTtcblx0XHRcdHdoaWxlIChpID4gLTEgJiYgIXNjcmlwdFVybCkgc2NyaXB0VXJsID0gc2NyaXB0c1tpLS1dLnNyYztcblx0XHR9XG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0IHtcbiAgc3RvcmFnZUF2YWlsYWJsZSxcbiAgcG9wdWxhdGVTdG9yYWdlLFxuICBzZXRBcnJheVZhbHVlcyxcbiAgcmVtb3ZlSXRlbXMsXG59IGZyb20gXCIuL2RhdGEuanNcIjtcbmltcG9ydCB7IHBhZ2VMYXlvdXQsIHVwZGF0ZUxpc3RBcnJheSB9IGZyb20gXCIuL2xheW91dC5qc1wiO1xuaW1wb3J0IHtcbiAgbWFpbkNvbnRlbnQsXG4gIGVtcHR5SW5kaWNhdG9yLFxuICBjcmVhdGVGb3JtLFxuICBkaXNwbGF5QnRuQ29udHJvbGxlcixcbiAgbmV3TGlzdEZvcm0sXG4gIGFkZFRpbWVPcHRpb24sXG4gIGFkZExpc3RPcHRpb24sXG4gIHByb2Nlc3NGb3JtLFxuICBtb2RpZnlUYXNrLFxuICBiYWNrQnRuQ29udHJvbGxlcixcbiAgZGVsZXRlQnRuQ29udHJvbGxlcixcbiAgbGlzdERpc3BsYXlDb250cm9sbGVyLFxufSBmcm9tIFwiLi9tYWluLWNvbnRlbnQuanNcIjtcbmltcG9ydCB7XG4gIG1haW5NZW51LFxuICBwcm9qZWN0TGlzdCxcbiAgZmF2b3JpdGVzTGlzdCxcbiAgdGFza0NvdW50LFxuICBjaGFuZ2VGYXZvcml0ZXNJbWFnZSxcbiAgY2hhbmdlUHJvamVjdHNJbWFnZSxcbn0gZnJvbSBcIi4vbWVudS5qc1wiO1xuaW1wb3J0IHtcbiAgdGFza0JhcnMsXG4gIHRhc2tQYWdlLFxuICBzb3J0VGFza0JhcnMsXG4gIGRlbGV0ZVRhc2ssXG59IGZyb20gXCIuL3Rhc2stZGlzcGxheS5qc1wiO1xuXG5mdW5jdGlvbiBjb21wb25lbnQoKSB7XG4gIC8vIEdlbmVyYXRlIGluaXRpYWwgcGFnZSBsYXlvdXRcbiAgcGFnZUxheW91dCgpO1xuICBtYWluQ29udGVudCgpO1xuICBlbXB0eUluZGljYXRvcigpO1xuXG4gIC8vIFRlc3QgaWYgbG9jYWxTdG9yYWdlIGlzIGF2YWlsYWJsZVxuICBpZiAoc3RvcmFnZUF2YWlsYWJsZShcImxvY2FsU3RvcmFnZVwiKSkge1xuICAgIGNvbnNvbGUubG9nKFwibG9jYWxTdG9yYWdlIGF2YWlsYWJsZVwiKTtcblxuICAgIC8vIGxvY2FsU3RvcmFnZS5jbGVhcigpO1xuXG4gICAgaWYgKCFsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImxpc3RBcnJheVwiKSkge1xuICAgICAgcG9wdWxhdGVTdG9yYWdlKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHNldEFycmF5VmFsdWVzKCkuc2V0TGlzdHMoKTtcbiAgICAgIHNldEFycmF5VmFsdWVzKCkuc2V0VGFza3MoKTtcbiAgICAgIHNvcnRUYXNrQmFycygpLnRvZGF5U3RvcmVkVGFza3MoKTtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgY29uc29sZS5sb2coXCJsb2NhbFN0b3JhZ2UgdW5hdmFpbGFibGVcIik7XG4gIH1cblxuICBmdW5jdGlvbiBldmVudEhhbmRsZXIoKSB7XG4gICAgY29uc3QgbWVudUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubWVudS1idG5cIik7XG4gICAgY29uc3Qgdmlld0xpc3RCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnZpZXctbGlzdHMtYnRuXCIpO1xuICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNvbnRlbnRcIik7XG5cbiAgICAvLyBUb2dnbGUgdGhlIE1haW4gTWVudVxuICAgIG1lbnVCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgIGNvbnN0IG1lbnUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1haW4tbWVudVwiKTtcblxuICAgICAgaWYgKGNvbnRlbnQuY29udGFpbnMobWVudSkpIHtcbiAgICAgICAgY29udGVudC5yZW1vdmVDaGlsZChtZW51KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG1haW5NZW51KCk7XG4gICAgICAgIHRhc2tDb3VudCgpO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgdmlld0xpc3RCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgIGxpc3REaXNwbGF5Q29udHJvbGxlcigpLmxpc3RzVmlldygpO1xuICAgIH0pO1xuXG4gICAgY29udGVudC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKGUpIHtcbiAgICAgIC8vIFRvZ2dsZSBUb2RheSBvciBVcGNvbWluZyBwcm9qZWN0c1xuICAgICAgaWYgKGUudGFyZ2V0LmNsYXNzTmFtZSA9PT0gXCJ0b2RheS1idG5cIikge1xuICAgICAgICBjb25zdCBidG4gPSBlLnRhcmdldDtcblxuICAgICAgICBiYWNrQnRuQ29udHJvbGxlcigpO1xuICAgICAgICBkZWxldGVCdG5Db250cm9sbGVyKCkuY2hlY2tEZWxldGVCdG4oKTtcbiAgICAgICAgZGlzcGxheUJ0bkNvbnRyb2xsZXIoYnRuKTtcbiAgICAgICAgc29ydFRhc2tCYXJzKCkubWVudUNob2ljZShidG4pO1xuXG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgaWYgKGUudGFyZ2V0LmNsYXNzTmFtZSA9PT0gXCJ1cGNvbWluZy1idG5cIikge1xuICAgICAgICBjb25zdCBidG4gPSBlLnRhcmdldDtcblxuICAgICAgICBiYWNrQnRuQ29udHJvbGxlcigpO1xuICAgICAgICBkZWxldGVCdG5Db250cm9sbGVyKCkuY2hlY2tEZWxldGVCdG4oKTtcbiAgICAgICAgc29ydFRhc2tCYXJzKCkubWVudUNob2ljZShidG4pO1xuICAgICAgICBkaXNwbGF5QnRuQ29udHJvbGxlcihidG4pO1xuXG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgLy8gVG9nZ2xlIEZhdm9yaXRlcyBhbmQgUHJvamVjdHMgbWVudSBjaG9pY2VzXG4gICAgICBpZiAoZS50YXJnZXQuY2xhc3NOYW1lID09PSBcImZhdm9yaXRlcy1idG5cIikge1xuICAgICAgICBjb25zdCBmYXZvcml0ZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmZhdm9yaXRlc1wiKTtcblxuICAgICAgICBpZiAoZmF2b3JpdGVzLnRleHRDb250ZW50ID09PSBcIlwiKSB7XG4gICAgICAgICAgZmF2b3JpdGVzTGlzdCgpO1xuICAgICAgICAgIHRhc2tDb3VudCgpO1xuICAgICAgICAgIGNoYW5nZUZhdm9yaXRlc0ltYWdlKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgZmF2b3JpdGVzLnRleHRDb250ZW50ID0gXCJcIjtcbiAgICAgICAgICBjaGFuZ2VGYXZvcml0ZXNJbWFnZSgpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBjb25zdCBkaXNwbGF5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50YXNrLWRpc3BsYXlcIik7XG4gICAgICBjb25zdCBmb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50YXNrLWZvcm1cIik7XG5cbiAgICAgIGlmIChlLnRhcmdldC5jbGFzc05hbWUgPT09IFwicHJvamVjdHMtYnRuXCIpIHtcbiAgICAgICAgY29uc3QgcHJvamVjdHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2plY3RzXCIpO1xuXG4gICAgICAgIGlmIChwcm9qZWN0cy50ZXh0Q29udGVudCA9PT0gXCJcIikge1xuICAgICAgICAgIHByb2plY3RMaXN0KCk7XG4gICAgICAgICAgdGFza0NvdW50KCk7XG4gICAgICAgICAgY2hhbmdlUHJvamVjdHNJbWFnZSgpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHByb2plY3RzLnRleHRDb250ZW50ID0gXCJcIjtcbiAgICAgICAgICBjaGFuZ2VQcm9qZWN0c0ltYWdlKCk7XG4gICAgICAgIH1cblxuICAgICAgICBiYWNrQnRuQ29udHJvbGxlcigpO1xuICAgICAgICBkZWxldGVCdG5Db250cm9sbGVyKCkuY2hlY2tEZWxldGVCdG4oKTtcbiAgICAgICAgZGlzcGxheUJ0bkNvbnRyb2xsZXIoZS50YXJnZXQpO1xuICAgICAgICB0YXNrQmFycygpO1xuXG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgY29uc3QgbGlzdEZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnBvcC11cFwiKTtcblxuICAgICAgLy8gY3JlYXRlLCBzdWJtaXQgYW5kIHByb2Nlc3MgZm9ybXNcbiAgICAgIGlmIChlLnRhcmdldC5jbGFzc05hbWUgPT09IFwiZm9ybS1idG5cIikge1xuICAgICAgICBkZWxldGVCdG5Db250cm9sbGVyKCkuY2hlY2tEZWxldGVCdG4oKTtcbiAgICAgICAgY3JlYXRlRm9ybSgpO1xuICAgICAgICBiYWNrQnRuQ29udHJvbGxlcigpO1xuICAgICAgICBkaXNwbGF5QnRuQ29udHJvbGxlcihlLnRhcmdldCk7XG5cbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBpZiAoZS50YXJnZXQuY2xhc3NOYW1lID09PSBcInN1Ym1pdC1idG5cIikge1xuICAgICAgICBjb25zdCBpc0Zvcm1WYWxpZCA9IGZvcm0uY2hlY2tWYWxpZGl0eSgpO1xuXG4gICAgICAgIGlmICghaXNGb3JtVmFsaWQpIHtcbiAgICAgICAgICBmb3JtLnJlcG9ydFZhbGlkaXR5KCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaWYgKGxpc3RGb3JtKSB7XG4gICAgICAgICAgICBkaXNwbGF5LnJlbW92ZUNoaWxkKGxpc3RGb3JtKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgcHJvY2Vzc0Zvcm0oKTtcbiAgICAgICAgICBwb3B1bGF0ZVN0b3JhZ2UoKTtcbiAgICAgICAgICBiYWNrQnRuQ29udHJvbGxlcigpO1xuICAgICAgICAgIGRpc3BsYXlCdG5Db250cm9sbGVyKGUudGFyZ2V0KTtcbiAgICAgICAgICB0YXNrQmFycygpO1xuICAgICAgICAgIHRhc2tDb3VudCgpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBpZiAoZS50YXJnZXQuY2xhc3NOYW1lID09PSBcInNhdmUtYnRuXCIpIHtcbiAgICAgICAgY29uc3QgZm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZnVsbC10YXNrLWZvcm1cIik7XG4gICAgICAgIGNvbnN0IGlzRm9ybVZhbGlkID0gZm9ybS5jaGVja1ZhbGlkaXR5KCk7XG5cbiAgICAgICAgaWYgKCFpc0Zvcm1WYWxpZCkge1xuICAgICAgICAgIGZvcm0ucmVwb3J0VmFsaWRpdHkoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBtb2RpZnlUYXNrKCk7XG4gICAgICAgICAgcG9wdWxhdGVTdG9yYWdlKCk7XG4gICAgICAgICAgYmFja0J0bkNvbnRyb2xsZXIoKTtcbiAgICAgICAgICBkaXNwbGF5QnRuQ29udHJvbGxlcihlLnRhcmdldCk7XG4gICAgICAgICAgdGFza0JhcnMoKTtcbiAgICAgICAgICB0YXNrQ291bnQoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgLy8gQWRkIHRpbWUgaW5wdXQgb3B0aW9uXG4gICAgICBpZiAoZS50YXJnZXQuaWQgPT09IFwiZGF0ZVwiICYmIGUudGFyZ2V0Lm5hbWUgPT09IFwiZGF0ZVwiKSB7XG4gICAgICAgIGFkZFRpbWVPcHRpb24oKTtcblxuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIC8vIFJlbW92ZSBmb3JtIGRpc3BsYXkgb3IgZnVsbC10YXNrIGRpc3BsYXlcbiAgICAgIGlmIChlLnRhcmdldC5jbGFzc05hbWUgPT09IFwiYmFjay1idG5cIikge1xuICAgICAgICBpZiAobGlzdEZvcm0pIHtcbiAgICAgICAgICBkaXNwbGF5LnJlbW92ZUNoaWxkKGxpc3RGb3JtKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGJhY2tCdG5Db250cm9sbGVyKCk7XG4gICAgICAgIHRhc2tCYXJzKCk7XG4gICAgICAgIGRpc3BsYXlCdG5Db250cm9sbGVyKGUudGFyZ2V0KTtcblxuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIC8vIENyZWF0ZSBuZXcgbGlzdCBmb3JtXG4gICAgICBpZiAoXG4gICAgICAgIGUudGFyZ2V0LmNsYXNzTmFtZSA9PT0gXCJhZGQtcHJvamVjdC1idG5cIiB8fFxuICAgICAgICBlLnRhcmdldC5jbGFzc05hbWUgPT09IFwiY3JlYXRlLWxpc3QtYnRuXCJcbiAgICAgICkge1xuICAgICAgICBuZXdMaXN0Rm9ybSgpO1xuXG4gICAgICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LnRvZ2dsZShcIm1vZGFsLW9wZW5cIik7XG5cbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICAvLyBDYW5jZWwgbmV3IGxpc3QgZm9ybVxuICAgICAgaWYgKGUudGFyZ2V0LmNsYXNzTmFtZSA9PT0gXCJjYW5jZWwtbGlzdC1idG5cIikge1xuICAgICAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC50b2dnbGUoXCJtb2RhbC1vcGVuXCIpO1xuXG4gICAgICAgIGRpc3BsYXkucmVtb3ZlQ2hpbGQobGlzdEZvcm0pO1xuXG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgLy8gQWRkIG5ldyBsaXN0IG9wdGlvblxuICAgICAgaWYgKGUudGFyZ2V0LmNsYXNzTmFtZSA9PT0gXCJhZGQtbGlzdC1idG5cIikge1xuICAgICAgICBjb25zdCBpc0Zvcm1WYWxpZCA9IGxpc3RGb3JtLmNoZWNrVmFsaWRpdHkoKTtcblxuICAgICAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC50b2dnbGUoXCJtb2RhbC1vcGVuXCIpO1xuXG4gICAgICAgIGlmICghaXNGb3JtVmFsaWQpIHtcbiAgICAgICAgICBsaXN0Rm9ybS5yZXBvcnRWYWxpZGl0eSgpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICB1cGRhdGVMaXN0QXJyYXkoKTtcbiAgICAgICAgICBwb3B1bGF0ZVN0b3JhZ2UoKTtcblxuICAgICAgICAgIGlmIChkaXNwbGF5LmNvbnRhaW5zKGZvcm0pKSB7XG4gICAgICAgICAgICBhZGRMaXN0T3B0aW9uKCk7XG4gICAgICAgICAgICBwcm9qZWN0TGlzdCgpO1xuICAgICAgICAgICAgY2hhbmdlUHJvamVjdHNJbWFnZSgpO1xuICAgICAgICAgICAgZGlzcGxheS5yZW1vdmVDaGlsZChsaXN0Rm9ybSk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHByb2plY3RMaXN0KCk7XG4gICAgICAgICAgICBjaGFuZ2VQcm9qZWN0c0ltYWdlKCk7XG4gICAgICAgICAgICB0YXNrQ291bnQoKTtcbiAgICAgICAgICAgIGRpc3BsYXkucmVtb3ZlQ2hpbGQobGlzdEZvcm0pO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgLy8gU29ydCB0YXNrcyBhY2NvcmRpbmcgdG8gdGhlIGNsaWNrZWQgcHJvamVjdCBvciBwcmlvcml0eSBsaXN0XG4gICAgICBpZiAoZS50YXJnZXQuaWQgPT09IFwidGFzay1idG5cIiB8fCBlLnRhcmdldC5pZCA9PT0gXCJwcmlvcml0eS1idG5cIikge1xuICAgICAgICBjb25zdCBidG4gPSBlLnRhcmdldDtcblxuICAgICAgICBiYWNrQnRuQ29udHJvbGxlcigpO1xuICAgICAgICBkZWxldGVCdG5Db250cm9sbGVyKCkuY2hlY2tEZWxldGVCdG4oKTtcbiAgICAgICAgZGlzcGxheUJ0bkNvbnRyb2xsZXIoYnRuKTtcbiAgICAgICAgc29ydFRhc2tCYXJzKCkubWVudUNob2ljZShidG4pO1xuXG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgLy8gRGlzcGxheSBmdWxsIHRhc2sgZGV0YWlsc1xuICAgICAgaWYgKGUudGFyZ2V0LmNsYXNzTmFtZSA9PT0gXCJ0YXNrXCIpIHtcbiAgICAgICAgY29uc3QgaW5kZXggPSBlLnRhcmdldC5kYXRhc2V0Lm51bTtcblxuICAgICAgICB0YXNrUGFnZShpbmRleCk7XG4gICAgICAgIGRpc3BsYXlCdG5Db250cm9sbGVyKGUudGFyZ2V0KTtcblxuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIC8vIEFkZCBkZWxldGUgYnRuXG4gICAgICBpZiAoZS50YXJnZXQuY2xhc3NOYW1lID09PSBcImNoZWNrYm94XCIgJiYgZS50YXJnZXQuY2hlY2tlZCA9PT0gdHJ1ZSkge1xuICAgICAgICBkZWxldGVCdG5Db250cm9sbGVyKCkuYWRkRGVsZXRlQnRuKCk7XG4gICAgICB9IGVsc2UgaWYgKFxuICAgICAgICBlLnRhcmdldC5jbGFzc05hbWUgPT09IFwiY2hlY2tib3hcIiAmJlxuICAgICAgICBlLnRhcmdldC5jaGVja2VkID09PSBmYWxzZVxuICAgICAgKSB7XG4gICAgICAgIGRlbGV0ZUJ0bkNvbnRyb2xsZXIoKS5yZW1vdmVEZWxldGVCdG4oKTtcbiAgICAgIH1cblxuICAgICAgLy8gRGVsZXRlIHRhc2tzXG4gICAgICBpZiAoZS50YXJnZXQuY2xhc3NOYW1lID09PSBcImRlbC1idG5cIikge1xuICAgICAgICBkZWxldGVUYXNrKCk7XG4gICAgICAgIHRhc2tDb3VudCgpO1xuICAgICAgICByZW1vdmVJdGVtcygpO1xuICAgICAgICBwb3B1bGF0ZVN0b3JhZ2UoKTtcbiAgICAgIH1cblxuICAgICAgLy8gRGVsZXRlIHByb2plY3RzL2xpc3RzXG4gICAgICBpZiAoZS50YXJnZXQuY2xhc3NOYW1lID09PSBcInJlbW92ZS1wcm9qZWN0LWJ0blwiKSB7XG4gICAgICAgIGNvbnN0IG1lbnUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1haW4tbWVudVwiKTtcblxuICAgICAgICBsaXN0RGlzcGxheUNvbnRyb2xsZXIoKS5yZW1vdmVMaXN0KGUudGFyZ2V0KTtcblxuICAgICAgICBpZiAobWVudSkge1xuICAgICAgICAgIHByb2plY3RMaXN0KCk7XG4gICAgICAgICAgdGFza0NvdW50KCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuICBldmVudEhhbmRsZXIoKTtcbn1cbmNvbXBvbmVudCgpO1xuIl0sIm5hbWVzIjpbImxpc3RBcnJheSIsInRhc2tBcnJheSIsInN0b3JhZ2VBdmFpbGFibGUiLCJ0eXBlIiwic3RvcmFnZSIsIndpbmRvdyIsIngiLCJzZXRJdGVtIiwicmVtb3ZlSXRlbSIsImUiLCJET01FeGNlcHRpb24iLCJjb2RlIiwibmFtZSIsImxlbmd0aCIsInBvcHVsYXRlU3RvcmFnZSIsImxpc3RBcnJheVN0cmluZyIsIkpTT04iLCJzdHJpbmdpZnkiLCJsb2NhbFN0b3JhZ2UiLCJzZXRBcnJheVZhbHVlcyIsInNldExpc3RzIiwiaSIsIm9iaiIsIm9ialN0cmluZyIsInNldFRhc2tzIiwicmVtb3ZlSXRlbXMiLCJjbGVhciIsImxpc3RWYWx1ZXMiLCJnZXRJdGVtIiwibmV3TGlzdEFycmF5IiwicGFyc2UiLCJwdXNoIiwidGFzayIsIm5ld1Rhc2tPYmoiLCJJbWciLCJJbWcyIiwiSW1nMyIsIkltZzQiLCJwcmlvcml0eUFycmF5IiwicGFnZUxheW91dCIsImNvbnRlbnQiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJoZWFkZXIiLCJjcmVhdGVFbGVtZW50IiwibWFpbiIsImZvb3RlciIsInBhcmEiLCJtZW51Q29udGFpbmVyIiwibWVudUJ0biIsIm1lbnVJbWciLCJJbWFnZSIsInByb2ZpbGUiLCJwcm9maWxlSW1nIiwiYmVsbEltZyIsImxpc3RHcm91cEJ0biIsImxpc3RHcm91cEltZyIsImNsYXNzTGlzdCIsImFkZCIsInRleHRDb250ZW50Iiwic3JjIiwiYWx0IiwiYXBwZW5kQ2hpbGQiLCJ1cGRhdGVMaXN0QXJyYXkiLCJuZXdMaXN0IiwidmFsdWUiLCJkaXNwbGF5SGVpZ2h0IiwiaGVpZ2h0IiwiY2xpZW50SGVpZ2h0IiwiSW1nNSIsIkltZzYiLCJtYWluQ29udGVudCIsImNvbnRhaW5lciIsIndyYXBwZXIiLCJ0YXNrRGlzcGxheSIsImhlYWRpbmciLCJidG5Db250YWluZXIiLCJidG4iLCJidG5JbWciLCJlbXB0eUluZGljYXRvciIsImRpc3BsYXkiLCJpbWciLCJjcmVhdGVGb3JtIiwiZm9ybSIsInRhc2tDb250YWluZXIiLCJ0YXNrTGFiZWwiLCJ0YXNrSW5wdXQiLCJkZXNjcmlwdGlvbkNvbnRhaW5lciIsImRlc2NyaXB0aW9uTGFiZWwiLCJkZXNjcmlwdGlvbklucHV0IiwiZHVlRGF0ZUNvbnRhaW5lciIsImRhdGVDb250YWluZXIiLCJkdWVEYXRlTGFiZWwiLCJkdWVEYXRlSW5wdXQiLCJwcmlvcml0eURpdiIsInByaW9yaXR5TGFiZWwiLCJwcmlvcml0eUlucHV0Iiwic3VibWl0Q29udGFpbmVyIiwic3VibWl0U2VsZWN0Iiwic3VibWl0TGFiZWwiLCJzdWJtaXRJbnB1dCIsInByaW9yaXR5T3B0aW9uMSIsInByaW9yaXR5T3B0aW9uMiIsInByaW9yaXR5T3B0aW9uMyIsImNyZWF0ZUxpc3RCdG4iLCJjcmVhdGVMaXN0SW1nIiwiaHRtbEZvciIsImlkIiwibWF4TGVuZ3RoIiwicGxhY2Vob2xkZXIiLCJyZXF1aXJlZCIsInN1Ym1pdE9wdGlvbiIsImRpc3BsYXlCdG5Db250cm9sbGVyIiwiZWxlIiwiY2xhc3NOYW1lIiwibmV3TGlzdEZvcm0iLCJsaXN0Rm9ybSIsImxhYmVsIiwiaW5wdXQiLCJjYW5jZWxCdG4iLCJhY2NlcHRCdG4iLCJhZGRUaW1lT3B0aW9uIiwic2libGluZyIsInNpYmxpbmdUd28iLCJwYXJlbnQiLCJwYXJlbnROb2RlIiwiY29udGFpbnMiLCJ0aW1lSW5wdXQiLCJhZGRMaXN0T3B0aW9uIiwib3B0aW9uc0NvbnRhaW5lciIsIm5ld09wdGlvbiIsInNlbGVjdGVkIiwicHJvY2Vzc0Zvcm0iLCJnZXRGb3JtRGF0YSIsIk9iamVjdCIsImZyb21FbnRyaWVzIiwiRm9ybURhdGEiLCJtb2RpZnlUYXNrIiwiaW5kZXgiLCJwYXJzZUludCIsImRhdGFzZXQiLCJudW0iLCJmb3JtRGF0YSIsInNwbGljZSIsImJhY2tCdG5Db250cm9sbGVyIiwiZm9ybVR3byIsImNoaWxkIiwicmVtb3ZlQ2hpbGQiLCJiYWNrQnRuQ29udGFpbmVyIiwiYmFja0J0biIsImJhY2tCdG5JbWciLCJkZWxldGVCdG5Db250cm9sbGVyIiwiZGl2IiwiYWRkRGVsZXRlQnRuIiwiZGVsQnRuIiwiZGVsQnRuSW1nIiwiY2hlY2tEZWxldGVCdG4iLCJyZW1vdmVEZWxldGVCdG4iLCJjaGVja0JveGVzIiwicXVlcnlTZWxlY3RvckFsbCIsImNoZWNrZWRDb3VudCIsImZvckVhY2giLCJjaGVja0JveCIsImNoZWNrZWQiLCJsaXN0RGlzcGxheUNvbnRyb2xsZXIiLCJsaXN0c1ZpZXciLCJsaXN0Q29udGFpbmVyIiwidGl0bGVXcmFwcGVyIiwibGlzdFRpdGxlIiwiZGVzY3JpcHRpb24iLCJyZW1vdmVMaXN0IiwibGlzdENob2ljZSIsImluY2x1ZGVzIiwiY29uc29sZSIsImxvZyIsIkltZzciLCJJbWc4IiwiSW1nOSIsIkltZzEwIiwiSW1nMTEiLCJJbWcxMiIsIm1haW5NZW51IiwibWVudSIsInRvZGF5Q29udGFpbmVyIiwidG9kYXlJbWciLCJ0b2RheUJ0biIsInRvZGF5Q291bnQiLCJ1cGNvbWluZ0NvbnRhaW5lciIsInVwY29taW5nSW1nIiwidXBjb21pbmdCdG4iLCJ1cGNvbWluZ0NvdW50IiwiZmF2Q29udGFpbmVyIiwiZmF2V3JhcHBlciIsImZhdm9yaXRlc0ltZyIsImZhdm9yaXRlc0J0biIsImZhdm9yaXRlcyIsInByb2pDb250YWluZXIiLCJwcm9qV3JhcHBlciIsInByb2plY3RzSW1nIiwicHJvamVjdHMiLCJwcm9qZWN0c0J0biIsImFkZExpc3RCdG4iLCJhZGRMaXN0SW1nIiwiaW5zZXJ0QmVmb3JlIiwiZmF2b3JpdGVzTGlzdCIsImNvbnRhaW5lck9uZSIsImNvbnRhaW5lclR3byIsImNvbnRhaW5lclRocmVlIiwicHJpb3JpdHlPbmUiLCJwcmlvcml0eVR3byIsInByaW9yaXR5VGhyZWUiLCJwcmlvcml0eU9uZUNvdW50IiwicHJpb3JpdHlUd29Db3VudCIsInByaW9yaXR5VGhyZWVDb3VudCIsImNyaXRpY2FsSW1nIiwiaGlnaEltZyIsIm5vcm1hbEltZyIsInByb2plY3RMaXN0IiwibGlzdE5hbWUiLCJsaXN0QnRuIiwidGFza0NvdW50IiwicmVwbGFjZUFsbCIsImNvdW50cyIsInRvZGF5RGF0ZSIsIkRhdGUiLCJ0b0lTT1N0cmluZyIsInNwbGl0IiwiY291bnQiLCJ0YXNrUHJpb3JpdHkiLCJ0YXNrRGF0ZSIsImNoYW5nZUZhdm9yaXRlc0ltYWdlIiwiZmF2b3JpdGVzQ29udGFpbmVyIiwiaW1hZ2UiLCJjaGFuZ2VQcm9qZWN0c0ltYWdlIiwicHJvamVjdHNDb250YWluZXIiLCJ0YXNrQmFycyIsInN0eWxlIiwidGFza1RpdGxlIiwiY2hlY2tCb3hDb250YWluZXIiLCJjaGVja0JveExhYmVsIiwid3JhcHBlclR3byIsInRpdGxlIiwiZGF0ZSIsInRhc2tQYWdlIiwidGFza0luZGV4IiwidGFza0Rlc2NyaXB0aW9uIiwidGFza1RpbWUiLCJ0aXRsZUNvbnRhaW5lciIsInRpdGxlTGFiZWwiLCJkYXRlV3JhcHBlciIsImRhdGVMYWJlbCIsInRpbWVDb250YWluZXIiLCJ0aW1lTGFiZWwiLCJ0aW1lIiwibGlzdE5hbWVDb250YWluZXIiLCJsaXN0U2VsZWN0TGFiZWwiLCJsaXN0U2VsZWN0IiwicHJpb3JpdHlDb250YWluZXIiLCJwcmlvcml0eVNlbGVjdCIsImxpc3RPcHRpb24iLCJwcmlvcml0eU9wdGlvbiIsInNvcnRUYXNrQmFycyIsIm1lbnVDaG9pY2UiLCJuZXh0RWxlbWVudFNpYmxpbmciLCJidG5DbGFzcyIsInByaW9yaXR5IiwibGlzdEltZyIsInRvZGF5U3RvcmVkVGFza3MiLCJkZWxldGVUYXNrIiwidGFza3MiLCJkaXNwbGF5Tm9kZXMiLCJjaGlsZE5vZGVzIiwiZ3JhbmRQYXJlbnQiLCJjb21wb25lbnQiLCJldmVudEhhbmRsZXIiLCJ2aWV3TGlzdEJ0biIsImFkZEV2ZW50TGlzdGVuZXIiLCJ0YXJnZXQiLCJpc0Zvcm1WYWxpZCIsImNoZWNrVmFsaWRpdHkiLCJyZXBvcnRWYWxpZGl0eSIsInByZXZlbnREZWZhdWx0IiwiYm9keSIsInRvZ2dsZSJdLCJzb3VyY2VSb290IjoiIn0=