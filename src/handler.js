const fs = require('fs');
const { nanoid } = require('nanoid');
const path = require('path');

const tasksFile = path.join(__dirname, 'task.json');
let tasks = [];

// IIFE load function
(function(){
    if (fs.existsSync(tasksFile)) {
        tasks = JSON.parse(fs.readFileSync(tasksFile))
        return;
    }

    console.log('Saving file does not exist, creating one...');
    saveTask();
    console.log('Success creating saving file');
})();

function saveTask() {
    fs.writeFileSync(tasksFile, JSON.stringify(tasks, null, 2));
}

function addTask(description) {
    const newTask = {
        id: nanoid(16),
        description,
        status: 'todo',
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
    }

    tasks.push(newTask);
    saveTask();

    console.log('Task added successfully:', newTask);
}

function updateTaskDescription(id, description) {

    const index = tasks.findIndex((task) => task.id === id);

    if (index === -1) {
        console.log('Task is Not Found');
        return;
    }

    tasks[index] = {
        ...tasks[index],
        description,
        updatedAt: new Date().toISOString()
    }

    saveTask();

    console.log(`Success Updating Task with ID: ${id}`);
}

function deleteTask(id) {
    const index = tasks.findIndex((task)=> task.id === id);

    if (index === -1) {
        console.log('Task is Not Found');
        return;
    }

    tasks.splice(index, 1);
    saveTask()

    console.log(`Success Removing Task with ID: ${id}`);
}

function listAllTask() {    
    if (tasks.length === 0) {
        console.log('No tasks found.');
    } else {
        tasks.forEach((task, index) => {
            console.log(`${index + 1}. [${task.status}] ${task.description} (ID: ${task.id}) (Created: ${task.createdAt})`);
        });
    }
    
}

function listFilterTask(status) {    let filteredTask = tasks;
    
    filteredTask = filteredTask.filter((task) => task.status === status);
    
    if (filteredTask.length === 0) {
        console.log('No tasks found.');
    } else {
        filteredTask.forEach((task, index) => {
            console.log(`${index + 1}. [${task.status}] ${task.description} (ID: ${task.id}) (Created: ${task.createdAt})`);
        });
    }
}

function changeTaskStatus(id, newStatus) {    
    const index = tasks.findIndex((task) => task.id === id);
    
    if(index === -1) {
        console.log('Task is Not Found');
        return;
    }

    switch(newStatus) {
        case "Mark-In-Progress":
            tasks[index] = {
                ...tasks[index],
                status: "In-Progress",
                updatedAt: new Date().toISOString()
            }
            break;
            case "Mark-Done":
                tasks[index] = {
                ...tasks[index],
                status: "Done",
                updatedAt: new Date().toISOString()
            }
            break;
        }
        
        saveTask();
        
        console.log(`Task with ID: ${id} as ${newStatus.substring(5)}`);
    }

module.exports = {
    saveTask,
    addTask,
    updateTaskDescription,
    deleteTask,
    changeTaskStatus,
    listAllTask,
    listFilterTask
}