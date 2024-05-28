import { renderTodosUI } from "./render-todos-ui.js";

export const todos = JSON.parse(localStorage.getItem("todos")) || [];
export function addNewTodo(todo) {
  todos.push(todo);
  localStorage.setItem("todos", JSON.stringify(todos));
  renderTodosUI(todos);
}
