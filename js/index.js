import cssClassModifiers from "./css-class-modifiers.js";
import loader from "./loader.js";

// Loader
window.onload = () => {
  const { timeout_1000 } = cssClassModifiers;
  setTimeout(() => {
    loader();
  }, timeout_1000);
};
