const todo = document.querySelector('#todo');
const progress = document.querySelector('#progress');
const done = document.querySelector('#done');
const tasks = document.querySelectorAll('.task');
const addBtn = document.querySelector('.add-btn');
const modal = document.querySelector('#modal');
const allContainers = [todo, progress, done];
const deleteBtn = document.querySelector('button');
let draggedElement = null;
let taskData = {};

// Counter Function
const counter = () => {
  taskData = {};
  allContainers.forEach((taskContainer) => {
    const totalTask = taskContainer.querySelectorAll('.task');
    const counterDisplay = taskContainer.querySelector('.counter');
    taskData[taskContainer.id] = Array.from(totalTask).map((t) => {
      return {
        title: t.querySelector('h2').innerText,
        description: t.querySelector('h3').innerText,
      };
    });
    counterDisplay.innerText = totalTask.length;
  });
  localStorage.setItem('task', JSON.stringify(taskData));
};

// Local Storage Function
if (localStorage.getItem('task')) {
  const data = JSON.parse(localStorage.getItem('task'));
  for (const container in data) {
    const taskContainer = document.querySelector(`#${container}`);
    data[container].forEach((task) => {
      const wrapper = document.createElement('div');
      wrapper.setAttribute('draggable', 'true');
      wrapper.innerHTML = `
<div draggable="true" class="bg-gray-600 task flex justify-between items-center p-3 my-1.5 rounded-xl">
   <div class="left">
      <h2 class="text-xl text-white font-bold">${task.title}</h2>
      <h3 class="text-md font-light text-gray-100">${task.description}</h3>
    </div>
    <div class="right">
     <button class="delete-button p-2 text-red-500 rounded-md font-semibold">
                <i class="fa-solid fa-trash text-2xl"></i>
     </button>
   </div>
 </div>
  `;
      wrapper.querySelector('.delete-button').addEventListener('click', (e) => {
        wrapper.remove();
        counter();
      });

      taskContainer.appendChild(wrapper);
      wrapper.addEventListener('dragstart', () => {
        draggedElement = wrapper;
      });
      const totalTask = taskContainer.querySelectorAll('.task');
      const counter = taskContainer.querySelector('.counter');
      counter.innerText = totalTask.length;
    });
  }
  counter();
}

// Adding Element Function
const submitBtn = document.querySelector('.submit-btn');
submitBtn.addEventListener('click', () => {
  const titleValue = document.querySelector('.title').value;
  const descriptionValue = document.querySelector('.description').value;
  const wrapper = document.createElement('div');
  wrapper.setAttribute('draggable', true);
  wrapper.innerHTML = `
<div draggable="true" class="bg-gray-600 task flex justify-between items-center p-3 my-1.5 rounded-xl">
   <div class="left">
      <h2 class="text-xl text-white font-bold">${titleValue}</h2>
      <h3 class="text-md font-light text-gray-100">${descriptionValue}</h3>
    </div>
    <div class="right">
     <button class="delete-button p-2 text-red-500 rounded-md font-semibold">
                <i class="fa-solid fa-trash text-2xl"></i>
     </button>
   </div>
 </div>
  `;
  todo.appendChild(wrapper);
  wrapper.addEventListener('dragstart', () => {
    draggedElement = wrapper;
  });
  document.querySelector('.title').value = '';
  document.querySelector('.description').value = '';
  modal.classList.add('hidden');
  dragDropEvent(todo);
  dragDropEvent(progress);
  dragDropEvent(done);
  counter();
  wrapper.querySelector('.delete-button').addEventListener('click', (e) => {
    wrapper.remove();
    counter();
  });
});

// Toggle Btn Function
addBtn.addEventListener('click', () => {
  modal.classList.remove('hidden');
});
modal.addEventListener('click', (e) => {
  if (e.target == modal) {
    modal.classList.add('hidden');
  }
});

// DragDrop Event Function
const dragDropEvent = (container) => {
  container.addEventListener('dragenter', (e) => {
    e.preventDefault();
    container.classList.add('hover-over');
  });
  container.addEventListener('dragleave', (e) => {
    e.preventDefault();
    if (!container.contains(e.relatedTarget)) {
      container.classList.remove('hover-over');
    }
  });
  container.addEventListener('dragover', (e) => {
    e.preventDefault();
  });
  container.addEventListener('drop', (e) => {
    e.preventDefault();
    container.appendChild(draggedElement);
    container.classList.remove('hover-over');
    counter();
  });
};
dragDropEvent(todo);
dragDropEvent(progress);
dragDropEvent(done);
