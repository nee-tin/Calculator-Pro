const display = document.getElementById("display");
const buttons = document.querySelectorAll("button");
const themeBtn = document.getElementById("theme");

// Button Clicks
buttons.forEach(btn => {
  btn.addEventListener("click", () => handleInput(btn.dataset.value));
});

function handleInput(value) {
  if (!value) return;

  if (value === "C") {
    display.value = "";
  } 
  else if (value === "⌫") {
    display.value = display.value.slice(0, -1);
  } 
  else if (value === "=") {
    try {
      display.value = eval(display.value) || "";
    } catch {
      display.value = "Error";
    }
  } 
  else {
    display.value += value;
  }
}

// Keyboard Support
document.addEventListener("keydown", (e) => {
  const key = e.key;

  if (!isNaN(key) || "+-*/.".includes(key)) {
    display.value += key;
  } 
  else if (key === "Enter") {
    handleInput("=");
  } 
  else if (key === "Backspace") {
    handleInput("⌫");
  } 
  else if (key === "Escape") {
    handleInput("C");
  }
});

// Theme Toggle
themeBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  themeBtn.textContent = document.body.classList.contains("dark") ? "☀️" : "🌙";
});
