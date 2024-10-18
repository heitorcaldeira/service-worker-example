// Select DOM elements
const taskInput = document.getElementById('taskInput');
const addTaskButton = document.getElementById('addTaskButton');
const taskList = document.getElementById('taskList');

// Event listener for adding a task
addTaskButton.addEventListener('click', addTask);

// Function to add a task
function addTask() {
  const taskText = taskInput.value.trim();
  if (taskText !== '') {
    // Create list item
    const li = document.createElement('li');
    li.className = 'task-item';
    li.textContent = taskText;

    // Create delete button
    const deleteBtn = document.createElement('button');
    deleteBtn.className = 'delete-button';
    deleteBtn.textContent = 'Delete';
    deleteBtn.addEventListener('click', () => {
      taskList.removeChild(li);
    });

    li.appendChild(deleteBtn);
    taskList.appendChild(li);

    // Clear input
    taskInput.value = '';
  }
}

// Optional: Add task on Enter key press
taskInput.addEventListener('keypress', function(e) {
  if (e.key === 'Enter') {
    addTask();
  }
});
