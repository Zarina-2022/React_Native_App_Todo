# Project Overview:
# Name: app_todo

# Description:
The project is a simple React Native Todo application that allows users to add, edit, mark as done, and delete tasks. It utilizes AsyncStorage for local data persistence.

# Project Structure:
<h1>Components:</h1>

<h2>App (App.js):</h2>
Main component managing the entire application.
Renders Header, Input, Todo, and EditModal components.

<h2>Header (Header.js):</h2>
Displays a header with a title.

<h2>Input (Input.js):</h2>
Reusable input component with TextInput and optional icon.

<h2>Todo (Todo.js):</h2>
Represents a single todo item.
Handles actions like marking a task as done, editing, and deleting todos.

<h2>EditModal (EditModal.js):</h2>
Modal for editing todo items.


<h1>Styles:</h1>

Separate stylesheets (style.js files) for each component.
Centralized color constants in constants.js.

<h1>External Libraries:</h1>

<h2>react-native-vector-icons:</h2>
Used for rendering icons in the application.

<h1>Local Storage:</h1>

<h2>AsyncStorage:<h2>
Used for local data persistence, storing todo items.

<h1>Dependencies:</h1>

<h2>Production Dependencies:</h2>

@react-native-async-storage/async-storage: Asynchronous storage for React Native.
react: React library version 18.2.0.
react-native: React Native framework version 0.73.5.
react-native-vector-icons: Library for customizable icons.

Conclusion:
The project follows best practices for React Native development, with a modular and organized structure. It incorporates common libraries for styling, local storage, and testing. The use of AsyncStorage for data persistence indicates a focus on user data management.

![](todo_screen.gif)