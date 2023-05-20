import { listArray } from "./layout";
import { taskArray } from "./main-content";

// Verify that localStorage is a available in the current browser.
// This storageAvailable function is provided by https://developer.mozilla.org/
const storageAvailable = (type) => {
  let storage;
  try {
    storage = window[type];
    const x = "__storage_test__";
    storage.setItem(x, x);
    storage.removeItem(x);
    return true;
  } catch (e) {
    return (
      e instanceof DOMException &&
      // everything except Firefox
      (e.code === 22 ||
        // Firefox
        e.code === 1014 ||
        // test name field too, because code might not be present
        // everything except Firefox
        e.name === "QuotaExceededError" ||
        // Firefox
        e.name === "NS_ERROR_DOM_QUOTA_REACHED") &&
      // acknowledge QuotaExceededError only if there's something already stored
      storage &&
      storage.length !== 0
    );
  }
};

const populateStorage = () => {
  // Populate lists in storage

  const listArrayString = JSON.stringify(listArray);

  localStorage.setItem("listArray", listArrayString);

  setArrayValues().setLists();

  // Populate tasks in storage
  if (taskArray.length !== 0) {
    for (let i = 0; i < taskArray.length; i++) {
      let obj = taskArray[i];
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

      listArray.length = 0;

      for (let i = 0; i < newListArray.length; i++) {
        listArray.push(newListArray[i]);
      }
    }
  };

  // Get tasks from storage
  const setTasks = () => {
    taskArray.length = 0;

    for (let i = 0; i < localStorage.length; i++) {
      const task = localStorage.getItem(`task-${i}`);

      const newTaskObj = JSON.parse(task);

      if (task) {
        taskArray.push(newTaskObj);
      } else {
        return;
      }
    }
  };

  return { setLists, setTasks };
};

export { storageAvailable, populateStorage, removeItems, setArrayValues };
