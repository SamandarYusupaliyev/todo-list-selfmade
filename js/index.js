import cssClassModifiers from "./css-class-modifiers.js";
import { elNewTodoForm, elThemeToggler, elTodos } from "./html-elements.js";
import loader from "./loader.js";
import { addNewTodo, todos } from "./recycle-todos.js";
import { renderTodosUI } from "./render-todos-ui.js";

// Loader
window.onload = () => {
  const { timeout_1000 } = cssClassModifiers;
  const html = document.documentElement;
  html.dataset.theme = localStorage.getItem("theme") || "light";
  renderTodosUI(todos);
  setTimeout(() => {
    loader();
  }, timeout_1000);
};

// Theme change
elThemeToggler.onclick = () => {
  const html = document.documentElement;
  const currentTheme = html.dataset.theme;
  html.dataset.theme = currentTheme === "dark" ? "light" : "dark";
  // Save to localStorage
  localStorage.setItem("theme", html.dataset.theme);
};

// Get input data
elNewTodoForm.onsubmit = (e) => {
  e.preventDefault();
  const inputValue = e.target[0].value;
  const isCompleted = false;
  const id = window.crypto.randomUUID();
  const todo = { inputValue, isCompleted, id };
  addNewTodo(todo);

  // Clean input
  e.target.reset();
};
