# CLI-Task-Tracker
Simple Task Tracker Application using Command Line Interface(CLI) with NodeJs.

### Data Format:
```bash
task = {
    id,
    description,
    status,
    createdAt,
    updatedAt
}
```
### Features:
- **Add Task.**
- **Delete Task by Id.**
- **Update Task Description by Id.**
- **List All Task.**
- **List Task by Status Filtering.**

## Preparation
1. **Clone this repository**
    ```bash 
    git clone https://github.com/Kwekers/CLI-Task-Tracker 
    ```
2. **Navigate to the App Directory**
    ```bash
    cd <app-directory>
    ```
3. **Install Dependencies**
    ```bash
    npm install
    ```
4. **Link the Application Globally**
    ```bash
    npm link
    ```
5. **Unlink the Application (Remove App) (Optional)**
    ```bash
    npm unlink -g task-tracker
    ```

## User Guide

Use ```--help``` command to take a look all command guide:
```bash
task-cli --help
```