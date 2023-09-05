// script.js
document.addEventListener("DOMContentLoaded", function () {
    const taskForm = document.getElementById("taskForm");
    const taskList = document.getElementById("taskList");

    // Event listener for form submission
    taskForm.addEventListener("submit", function (e) {
        e.preventDefault();

        const title = document.getElementById("title").value;
        const description = document.getElementById("description").value;
        const dueDate = document.getElementById("dueDate").value;

        // Create a new task element
        const taskItem = document.createElement("li");
        taskItem.innerHTML = `<strong>${title}</strong><br>${description}<br>Due Date: ${dueDate}`;

        // Append the task to the list
        taskList.appendChild(taskItem);

        // Clear the form
        taskForm.reset();
    });
});
