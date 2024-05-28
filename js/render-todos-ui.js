import { elTodoTemplate, elTodos } from "./html-elements.js";

export function renderTodosUI(todos) {
  elTodos.innerHTML = null;
  todos.map(({ id, isCompleted, inputValue: title }) => {
    const cloneTemplate = elTodoTemplate.content.cloneNode(true);
    cloneTemplate.querySelector("#todoTitle").innerText = title;
    cloneTemplate.querySelector("#todoStatus").checked = isCompleted;
    elTodos.appendChild(cloneTemplate);
  });
}
