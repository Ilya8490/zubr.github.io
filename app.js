// app.js

document.addEventListener('DOMContentLoaded', function() {
    const taskForm = document.getElementById('task-form');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    // Load tasks from localStorage
    loadTasks();

    // Add task
    taskForm.addEventListener('submit', function(e) {
        e.preventDefault();
        addTask(taskInput.value);
        taskInput.value = '';
    });

    // Load tasks
    function loadTasks() {
        const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
        tasks.forEach(task => {
            const taskItem = createTaskItem(task.text, task.completed);
            taskList.appendChild(taskItem);
        });
    }

    // Save tasks to localStorage
    function saveTasks() {
        const tasks = [];
        taskList.querySelectorAll('li').forEach(item => {
            tasks.push({
                text: item.querySelector('span').textContent,
                completed: item.classList.contains('completed')
            });
        });
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }

    // Create task item
    function createTaskItem(text, completed = false) {
        const li = document.createElement('li');
        li.className = completed ? 'completed' : '';
        const span = document.createElement('span');
        span.textContent = text;
        li.appendChild(span);

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.addEventListener('click', function() {
            li.remove();
            saveTasks();
        });
        li.appendChild(deleteButton);

        li.addEventListener('click', function() {
            li.classList.toggle('completed');
            saveTasks();
        });

        return li;
    }

    // Add task to list
    function addTask(text) {
        const taskItem = createTaskItem(text);
        taskList.appendChild(taskItem);
        saveTasks();
    }
});