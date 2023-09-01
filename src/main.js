import "./index.css";

const html = document.querySelector("html");
const toggleBtn = document.getElementById("toggle-theme-btn");

function toggleTheme(html, toggleBtn) {
  html.classList.toggle("dark");

  const currentTheme = html.classList.contains("dark") ? "dark" : "light";
  toggleBtn.textContent = currentTheme === "dark" ? "Light" : "Dark";
}

function setTheme(html, toggleBtn, theme) {
  html.classList.add(theme);
  toggleBtn.textContent = theme === "dark" ? "Light" : "Dark";
}

document.addEventListener("DOMContentLoaded", () => {
  let theme = "light";

  if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
    theme = "dark";
  }

  setTheme(html, toggleBtn, theme);
});

toggleBtn.addEventListener("click", () => toggleTheme(html, toggleBtn));
