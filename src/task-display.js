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
      const wrapperTwo = document.createElement("div");
      const container = document.createElement("div");
      const checkBox = document.createElement("input");
      const title = document.createElement("label");
      const date = document.createElement("div");
      const listContainer = document.createElement("div");
      const listName = document.createElement("p");
      const listImg = new Image();

      wrapper.classList.add("task");

      checkBox.type = "checkbox";
      checkBox.name = "title";
      checkBox.id = "title";
      title.htmlFor = "title";
      listImg.alt = "img";

      title.textContent = taskTitle;
      date.textContent = taskDate;
      listName.textContent = listChoice;
      //   listImg = img

      container.appendChild(title);
      container.appendChild(date);
      wrapperTwo.appendChild(checkBox);
      wrapperTwo.appendChild(container);
      listContainer.appendChild(listName);
      listContainer.appendChild(listImg);
      wrapper.appendChild(wrapperTwo);
      wrapper.appendChild(listContainer);
      display.appendChild(wrapper);
    }
  } else {
    emptyIndicator();
  }
};

const sortTaskBars = (btn) => {
  const display = document.querySelector(".task-display");
  const sibling = btn.nextElementSibling;
  const btnClass = btn.className;

  display.textContent = "";

  if (sibling.textContent !== "") {
    for (let i = 0; i < taskArray.length; i++) {
      const obj = taskArray[i];
      const taskTitle = obj["task"];
      const listChoice = obj["choice"];
      const taskDate = obj["date"];
      const priority = obj["priority"];

      if (btnClass.includes(listChoice) || btnClass.includes(priority)) {
        // create elements for each task
        const wrapper = document.createElement("div");
        const wrapperTwo = document.createElement("div");
        const container = document.createElement("div");
        const checkBox = document.createElement("input");
        const title = document.createElement("label");
        const date = document.createElement("div");
        const listContainer = document.createElement("div");
        const listName = document.createElement("p");
        const listImg = new Image();

        wrapper.classList.add("task");

        checkBox.type = "checkbox";
        checkBox.name = "title";
        checkBox.id = "title";
        title.htmlFor = "title";
        listImg.alt = "img";

        title.textContent = taskTitle;
        date.textContent = taskDate;
        listName.textContent = listChoice;
        //   listImg = img

        container.appendChild(title);
        container.appendChild(date);
        wrapperTwo.appendChild(checkBox);
        wrapperTwo.appendChild(container);
        listContainer.appendChild(listName);
        listContainer.appendChild(listImg);
        wrapper.appendChild(wrapperTwo);
        wrapper.appendChild(listContainer);
        display.appendChild(wrapper);
      }
    }
  } else {
    emptyIndicator();
  }
};

export { taskBars, sortTaskBars };
