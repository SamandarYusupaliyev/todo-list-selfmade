import cssClassModifiers from "./css-class-modifiers.js";
import { elThemeToggler } from "./html-elements.js";
import loader from "./loader.js";

// Loader
window.onload = () => {
  const { timeout_1000 } = cssClassModifiers;
  const html = document.documentElement;
  html.dataset.theme = localStorage.getItem("theme");
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
