document.addEventListener('DOMContentLoaded', () => {
    const addTaskBtn = document.getElementById('add-task-btn');
    const newTaskInput = document.getElementById('new-task');
    const todoList = document.getElementById('todo-list');
    const taskCount = document.getElementById('task-count');

    let totalTasks = 0;

    function updateTaskCount() {
        totalTasks = todoList.children.length;
        taskCount.textContent = totalTasks;
    }

    function addTask() {
        const taskText = newTaskInput.value.trim();
        if (taskText === '') {
            return;
        }

        const li = document.createElement('li');
        li.textContent = taskText;

        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Delete';
        deleteBtn.style.backgroundColor = '#e74c3c';
        deleteBtn.style.marginLeft = '10px';
        deleteBtn.style.width = 'auto';
        deleteBtn.style.padding = '5px 10px';


        deleteBtn.onclick = () => {
            todoList.removeChild(li);
            updateTaskCount();
        };

        li.onclick = () => {
            li.classList.toggle('completed');
        };

        li.appendChild(deleteBtn);
        todoList.appendChild(li);
        newTaskInput.value = '';
        updateTaskCount();
    }

    addTaskBtn.addEventListener('click', addTask);

    newTaskInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            addTask();
        }
    });

    updateTaskCount();
});
