import { taskArray } from "./main-content.js";

const taskBars = () => {
  const display = document.querySelector(".task-display");

  display.textContent = "";

  for (let i = 0; i < taskArray.length; i++) {
    const values = Object.values(taskArray[i]);

    // create elements for each task
    const wrapper = document.createElement("div");
    const wrapperTwo = document.createElement("div");
    const container = document.createElement("div");
    const checkBox = document.createElement("input");
    const title = document.createElement("label");
    const time = document.createElement("div");
    const listContainer = document.createElement("div");
    const listName = document.createElement("p");
    const listImg = new Image();

    wrapper.classList.add("task");

    checkBox.type = "checkbox";
    checkBox.name = "title";
    checkBox.id = "title";
    title.htmlFor = "title";
    listImg.alt = "img";

    title.textContent = values[0];
    time.textContent = values[2];
    listName.textContent = values[values.length - 1];
    //   listImg = img

    container.appendChild(title);
    container.appendChild(time);
    wrapperTwo.appendChild(checkBox);
    wrapperTwo.appendChild(container);
    listContainer.appendChild(listName);
    listContainer.appendChild(listImg);
    wrapper.appendChild(wrapperTwo);
    wrapper.appendChild(listContainer);
    display.appendChild(wrapper);
  }
};

export { taskBars };
