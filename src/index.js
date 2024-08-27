#!/usr/bin/env node
const { addTask, updateTaskDescription, listAllTask, deleteTask, changeTaskStatus, listFilterTask } = require('./handler');
const {Command} = require('commander');

const program = new Command();

// Application Info
program
.name('task-tracker')
.description('a simple CLI task-tracker app')
.version('1.0.0');

program
.command('add <description>')
.description('Add New Task')
.action((description)=>{
    addTask(description);
});

program
.command('update <id> <description>')
.description('Update Task By Id')
.action((id, description)=>{
    updateTaskDescription(id, description);
});

program
.command('delete <id>')
.description('Delete Task By Id')
.action((id)=>{
    deleteTask(id);
});

program
.command('Mark-In-Progress <id>')
.description('Marking task as In Progress')
.action((id) => {
    changeTaskStatus(id, "Mark-In-Progress");
});

program
.command('Mark-Done <id>')
.description('Marking task as done')
.action((id) => {
    changeTaskStatus(id, "Mark-Done");
});

program
.command('list [status]')
.description('List All Task')
.action((status)=>{
    if (status == undefined) {
        listAllTask();
    }else {
        listFilterTask(status)
    }
})

program.parse(process.argv)