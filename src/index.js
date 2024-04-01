document.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById('create-task-form');
  const taskList = document.getElementById('tasks');

  form.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission behavior

    // Get the task description input value
    const taskDescription = document.getElementById('new-task-description').value;

    // Create a new list item element
    const listItem = document.createElement('li');
    listItem.textContent = taskDescription; // Set the text content of the list item

    // Append the new list item to the task list
    taskList.appendChild(listItem);

    // Clear the input field after adding the task
    document.getElementById('new-task-description').value = '';
  });
});
