# Project Overview:
<h2>Name: app_todo</h2>

<h3>Description:</h3>
The project is a simple React Native Todo application that allows users to add, edit, mark as done, and delete tasks. It utilizes AsyncStorage for local data persistence.

<h2>Project Structure:</h2>
<h3>1. Components:</h3>

<h3> - App (App.js):</h3>
* Main component managing the entire application.
* Renders Header, Input, Todo, and EditModal components.

<h3> - Header (Header.js):</h3>
* Displays a header with a title.

<h3> - Input (Input.js):</h3>
* Reusable input component with TextInput and optional icon.

<h3> - Todo (Todo.js):</h3>
* Represents a single todo item.
* Handles actions like marking a task as done, editing, and deleting todos.

<h3> - EditModal (EditModal.js):</h3>
* Modal for editing todo items.


<h2>2. Styles:</h2>
 - Separate stylesheets (style.js files) for each component.
 - Centralized color constants in constants.js.

<h2>3. External Libraries:</h2>
<h3> - react-native-vector-icons:</h3>
* Used for rendering icons in the application.

<h2>4. Local Storage:</h2>
<h3> - AsyncStorage:</h3>
* Used for local data persistence, storing todo items.

<h2>Dependencies:</h2>

<h3>Production Dependencies:</h3>

- @react-native-async-storage/async-storage: Asynchronous storage for React Native.
- react: React library version 18.2.0.
- react-native: React Native framework version 0.73.5.
- react-native-vector-icons: Library for customizable icons.

<b>Conclusion:</b>
The project follows best practices for React Native development, with a modular and organized structure. It incorporates common libraries for styling, local storage, and testing. The use of AsyncStorage for data persistence indicates a focus on user data management.

![](todo_screen.gif)