import { taskArray, emptyIndicator } from "./main-content.js";

const taskBars = () => {
  const display = document.querySelector(".task-display");

  display.textContent = "";

  if (taskArray.length !== 0) {
    for (let i = 0; i < taskArray.length; i++) {
      const obj = taskArray[i];
      const taskTitle = obj["task"];
      const listChoice = obj["choice"];
      const taskDate = obj["date"];

      // create elements for each task
      const wrapper = document.createElement("div");
      const checkBoxContainer = document.createElement("div");
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
      checkBoxLabel.htmlFor = `checkbox-${i}`;
      checkBox.type = "checkbox";
      checkBox.name = "checkbox";
      checkBox.id = `checkbox-${i}`;
      listImg.alt = "img";

      title.textContent = taskTitle;
      date.textContent = taskDate;
      listName.textContent = listChoice;
      //   listImg = img

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
  } else {
    emptyIndicator();
  }
};

const taskPage = (task) => {
  const display = document.querySelector(".task-display");
  const taskId = task.id;

  display.textContent = "";

  for (let i = 0; i < taskArray.length; i++) {
    const obj = taskArray[i];
    const taskTitle = obj["task"];
    const taskDescription = obj["description"];
    const taskDate = obj["date"];
    const taskTime = obj["time"];
    const priority = obj["priority"];
    const listChoice = obj["choice"];

    if (taskId === taskTitle) {
      const wrapper = document.createElement("div");
      const title = document.createElement("h2");
      const descriptionContainer = document.createElement("div");
      const description = document.createElement("p");
      const dateContainer = document.createElement("div");
      const date = document.createElement("div");
      const time = document.createElement("div");
      const listName = document.createElement("div");
      const backBtn = document.createElement("button");

      wrapper.classList.add("full-task");
      descriptionContainer.classList.add("description");
      backBtn.classList.add("back-btn");
      backBtn.type = "button";

      title.textContent = taskTitle;
      description.textContent = taskDescription;
      date.textContent = taskDate;
      time.textContent = taskTime;
      listName.textContent = listChoice;
      backBtn.textContent = "Back";

      descriptionContainer.appendChild(description);
      dateContainer.appendChild(date);
      dateContainer.appendChild(time);
      wrapper.appendChild(backBtn);
      wrapper.appendChild(title);
      wrapper.appendChild(listName);
      wrapper.appendChild(descriptionContainer);
      wrapper.appendChild(dateContainer);
      display.appendChild(wrapper);
    }
  }
};

const sortTaskBars = (btn) => {
  const display = document.querySelector(".task-display");
  const sibling = btn.nextElementSibling;
  const btnClass = btn.className;
  const todayDate = new Date().toISOString().split("T")[0];

  display.textContent = "";

  if (sibling.textContent !== "") {
    for (let i = 0; i < taskArray.length; i++) {
      const obj = taskArray[i];
      const taskTitle = obj["task"];
      const listChoice = obj["choice"];
      const taskDate = obj["date"];
      const priority = obj["priority"];

      if (
        btnClass.includes(listChoice) ||
        (todayDate === taskDate && btnClass.includes("today")) ||
        (todayDate !== taskDate && btnClass.includes("upcoming")) ||
        btnClass.includes(priority)
      ) {
        // create elements for each task
        const wrapper = document.createElement("div");
        const checkBoxContainer = document.createElement("div");
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
        checkBoxLabel.htmlFor = `checkbox-${i}`;
        checkBox.type = "checkbox";
        checkBox.name = "checkbox";
        checkBox.id = `checkbox-${i}`;
        listImg.alt = "img";

        title.textContent = taskTitle;
        date.textContent = taskDate;
        listName.textContent = listChoice;
        //   listImg = img

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
    emptyIndicator();
  }
};

export { taskBars, taskPage, sortTaskBars };
