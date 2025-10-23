import { quotes } from "/data/quotes.js";
// ===================
// 2. State Management
// ===================

let state = {
  currentQuoteIndex: 0,
  currentCategory: "All",
  filteredQuotes: [...quotes], // Copy of all quotes
  categories: [
    "All",
    "Motivation",
    "Philosophy",
    "Life",
    "Personal Finance",
    "Happiness",
    "Love",
    "Programming",
    "Entrepreneurship",
  ],
};

//=================
// 3. DOM Elements
//=================

const domElements = {
  quoteText: document.querySelector(".js-quote-text"),
  author: document.querySelector(".js-quote-author"),
  quoteCategory: document.querySelector(".js-quote-category"),
  categoryButtons: document.querySelectorAll(".js-category-btn"),
  prevBtn: document.querySelector(".js-prev-btn"),
  nextBtn: document.querySelector(".js-next-btn"),
  themeToggle: document.querySelector(".js-theme-toggle"),
  copyBtn: document.querySelector(".js-copy-quote"),
  totalQuotes: document.querySelector(".js-total-quotes"),
  activeCategory: document.querySelector(".js-active-category"),
  notification: document.getElementById("notification"),
  changeBgButton: document.querySelector(".js-change-bg"),
};

// ===========================
// 4. Initialization Functions
// ===========================
function initializeApp() {
  console.log("🚀 Quote Generator Initialized!");

  // Load saved theme preference
  loadThemePreference();

  // Display first quote
  displayCurrentQuote();

  // Update statistics
  updateStatistics();

  // Set all event listeners
  setupEventHandlers();

  // Update navigation button states
  updateNavigationButtons();
}

// =================
// 5. Core Functions
// =================
function displayCurrentQuote() {
  const quote = state.filteredQuotes[state.currentQuoteIndex];
  const quoteContainer = document.querySelector(".js-quote-container");
  console.log(quote);

  if (!quote) {
    domElements.quoteText.textContent = "No quotes available in this category.";
    domElements.author.textContent = "";
    domElements.quoteCategory.textContent = "";
    return;
  }

  animateQuoteChange(quoteContainer, () => {
    domElements.quoteText.textContent = quote.text;
    domElements.author.textContent = quote.author;
    domElements.quoteCategory.textContent = quote.category;
  });
}

function updateStatistics() {
  domElements.totalQuotes.textContent = `${state.filteredQuotes.length} Quotes`;
  domElements.activeCategory.textContent = state.currentCategory;
}

// ===================================
// 7. Event Handlers and Interactivity
// ===================================

function setupEventHandlers() {
  // Category Filtering
  domElements.categoryButtons.forEach((button) => {
    button.addEventListener("click", handleCategoryChange);
  });

  // Navigation Buttons
  domElements.nextBtn.addEventListener("click", showNextQuote);
  domElements.prevBtn.addEventListener("click", showPreviousQuote);

  // Action Buttons
  domElements.copyBtn.addEventListener("click", copyQuoteToClipboard);
  domElements.themeToggle.addEventListener("click", toggleTheme);

  // Keyboard Shortcuts
  document.addEventListener("keydown", handleKeyboardNavigation);
}

// =====================
// 8. Category Filtering
// =====================
function handleCategoryChange(event) {
  const selectedCategory = event.target.dataset.category || "All";

  // console.log(event.target); // gives clicked button element

  // update active button styling
  domElements.categoryButtons.forEach((btn) => btn.classList.remove("active"));
  event.target.classList.add("active");

  // Filter Quotes Based on Category
  state.filteredQuotes = filterQuotesByCategory(selectedCategory);

  console.log(state.filteredQuotes);
  // Reset to first quote in category
  state.currentQuoteIndex = 0;
  state.currentCategory = selectedCategory;

  // update UI
  updateNavigationButtons();
  displayCurrentQuote();
  updateStatistics();
  // console.log(`Category Changed to: ${selectedCategory}`);
}

// ===================
// 9. Quote Navigation
// ===================

function showNextQuote() {
  if (state.currentQuoteIndex < state.filteredQuotes.length - 1) {
    state.currentQuoteIndex++;
    displayCurrentQuote();
    updateNavigationButtons();
  } else {
    // Loop back to first quote
    state.currentQuoteIndex = 0;
    displayCurrentQuote();
    updateNavigationButtons();
  }
}

function showPreviousQuote() {
  if (state.currentQuoteIndex > 0) {
    state.currentQuoteIndex--;
    displayCurrentQuote();
    updateNavigationButtons();
  } else {
    // loop back to last quote
    state.currentQuoteIndex = state.filteredQuotes.length - 1;
    displayCurrentQuote();
  }
}

function updateNavigationButtons() {
  // Update button states based on current position
  const hasPrevious = state.currentQuoteIndex > 0;
  const hasNext = state.currentQuoteIndex < state.filteredQuotes.length - 1;

  // Visual feedback
  domElements.prevBtn.disabled = !hasPrevious;
  domElements.nextBtn.disabled = !hasNext;
}

// ========================
// 10. Placeholder Function
// ========================
function copyQuoteToClipboard() {
  const currentQuote = state.filteredQuotes[state.currentQuoteIndex];
  if (!currentQuote) {
    showNotification("No quote to copy!", "error");
  }

  const quoteText = `${currentQuote.text} 
  - ${currentQuote.author}`;

  // Modern Clipboard API (most browsers)
  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard
      .writeText(quoteText)
      .then(() => {
        showNotification("✅ Quote copied to clipboard!", "success");
        addCopyAnimation();
      })
      .catch(() => {
        showNotification("Failed to copy!", "error");
      });
  }
}

function addCopyAnimation() {
  const button = domElements.copyBtn;
  button.style.transform = "scale(0.95)";
  button.style.background = "var(--accent-secondary)";

  setTimeout(() => {
    button.style.transform = "";
    button.style.background = "";
  }, 300);
}

// =======================
// 11. Notification System
// =======================

function showNotification(message, type = "success") {
  const notification = domElements.notification;

  // Set message and type
  notification.textContent = message;
  notification.className = `notification js-notification ${type} show`;

  // Auto-hide after 3 seconds
  setTimeout(() => {
    notification.classList.remove("show");
  }, 1500);
}

// ========================================
// 12. Toggle Theme Functionality (3 MODES)
// ========================================

const backgroundImages = [
  "/assets/pexels-creative-vix-9754.jpg",
  "/assets/pexels-francesco-ungaro-1671325.jpg",
  "/assets/pexels-pixabay-163872.jpg",
  "/assets/pexels-pixabay-414144 (1).jpg",
  "/assets/pexels-veeterzy-38136.jpg",
];

let currentImageIndex = 0;

function toggleTheme() {
  const currentTheme = document.body.dataset.theme || "dark";
  // console.log(currentTheme);
  switch (currentTheme) {
    case "dark":
      enableLightTheme();
      break;
    case "light":
      enableImageTheme();
      break;
    case "image":
      enableDarkTheme();
      break;
  }
}

function enableLightTheme() {
  document.body.dataset.theme = "light";
  updateThemeVariables("light");
  hideBackgroundImageButton();
  domElements.themeToggle.innerHTML =
    '<span class="btn-icon">🌅</span>Switch Image Mode';
  showNotification("Light theme activated");
  saveThemePreference("light");
  console.log("Light theme activated");
}

function enableDarkTheme() {
  document.body.dataset.theme = "dark";
  updateThemeVariables("dark");
  hideBackgroundImageButton();
  domElements.themeToggle.innerHTML = `<span class="btn-icon">☀️</span>Switch Light Mode`;
  showNotification("Dark theme activated");
  saveThemePreference("dark");
  console.log("Dark mode activated");
}

function enableImageTheme() {
  document.body.dataset.theme = "image";
  updateThemeVariables("image");
  showBackgroundImageButton();
  domElements.themeToggle.innerHTML =
    '<span class="btn-icon">🌙</span>Switch Dark Mode';
  setBackgroundImage(backgroundImages[currentImageIndex]);
  showNotification("Image theme activated");
  saveThemePreference("image");
  console.log("image theme activated");
}

function updateThemeVariables(theme) {
  const root = document.documentElement;

  if (theme === "light") {
    root.style.setProperty(
      "--bg-primary",
      "linear-gradient(135deg, #afaeaeff, #ddddddff)"
    );
    root.style.setProperty("--bg-secondary", "#b8b8b8ff");
    root.style.setProperty("--bg-tertiary", "#363636");
    root.style.setProperty("--text-primary", "#2e2e2e");
    root.style.setProperty("--text-secondary", "#565656ff");
    root.style.setProperty("--text-tertiary", "#e6e6e6");
    root.style.setProperty("--border", "#404040");
    root.style.setProperty("--border-hover", "#505050");

    // Remove background image
    document.body.style.backgroundImage = "none";
    document.body.style.background = "var(--bg-primary)";
  } else if (theme === "dark") {
    root.style.setProperty(
      "--bg-primary",
      "linear-gradient(135deg, #1a1a1a, #222)"
    );
    root.style.setProperty("--bg-secondary", "#2a2a2a");
    root.style.setProperty("--bg-tertiary", "#363636");
    root.style.setProperty("--text-primary", "#ffffff");
    root.style.setProperty("--text-secondary", "#a0a0a0");
    root.style.setProperty("--text-tertiary", "#ffffffff");
    root.style.setProperty("--border", "#404040");
    root.style.setProperty("--border-hover", "#505050");

    // Remove background image
    document.body.style.backgroundImage = "none";
    document.body.style.background = "var(--bg-primary)";
  } else if (theme === "image") {
    // Image theme - keep text colors readable over images
    root.style.setProperty(
      "--bg-primary",
      "linear-gradient(135deg, #1a1a1a, #222)"
    );
    root.style.setProperty("--bg-secondary", "#2a2a2a");
    root.style.setProperty("--text-primary", "#ffffff");
    root.style.setProperty("--text-secondary", "#e0e0e0");
    root.style.setProperty("--text-tertiary", "#cccccc");
    root.style.setProperty("--border", "rgba(255,255,255,0.2)");
    root.style.setProperty("--border-hover", "rgba(255,255,255,0.3)");
  }
}

function hideBackgroundImageButton() {
  if (domElements.changeBgButton) {
    domElements.changeBgButton.style.display = "none";
  }
}

function showBackgroundImageButton() {
  if (domElements.changeBgButton) {
    domElements.changeBgButton.innerHTML =
      '<span class="btn-icon">🔄</span>Change BG';

    domElements.changeBgButton.style.display = "block";

    domElements.changeBgButton.addEventListener("click", nextBackgroundImage);
  }
}

function setBackgroundImage(imagePath) {
  document.body.style.backgroundImage = `url("${imagePath}")`;
  document.body.style.backgroundSize = "cover";
  document.body.style.backgroundPosition = "center";
  document.body.style.backgroundAttachment = "fixed";
}

function nextBackgroundImage() {
  currentImageIndex = (currentImageIndex + 1) % backgroundImages.length;
  setBackgroundImage(backgroundImages[currentImageIndex]);
  saveThemePreference("image");
}

function saveThemePreference(theme) {
  localStorage.setItem("quoteGenerator-theme", theme);
  localStorage.setItem(
    "quoteGenerator-bgIndex",
    JSON.stringify(currentImageIndex)
  );
}

function loadThemePreference() {
  const savedTheme = localStorage.getItem("quoteGenerator-theme") || "dark";
  const savedBgIndex =
    parseInt(localStorage.getItem("quoteGenerator-bgIndex")) || 0;
  currentImageIndex = savedBgIndex;
  switch (savedTheme) {
    case "light":
      enableLightTheme();
      break;
    case "dark":
      enableDarkTheme();
      break;
    case "image":
      enableImageTheme();
      break;
  }
  console.log(currentImageIndex);
}

// ==============================
// 13. Random Quote Functionality
// ==============================
function getRandomQuote() {
  if (state.filteredQuotes.length === 0) return;

  const randomIndex = Math.floor(Math.random() * state.filteredQuotes.length);
  state.currentQuoteIndex = state.filteredQuotes[randomIndex];

  displayCurrentQuote();
}

// =====================
// 14 Keyboard Shortcuts
// =====================

function handleKeyboardNavigation(event) {
  switch (event.code) {
    case "ArrowRight":
    case "Space":
      event.preventDefault();
      showNextQuote();
      break;

    case "ArrowLeft":
      event.preventDefault();
      showPreviousQuote();
      break;
  }
}
// ========================
// 6. Start the Application
// ========================
document.addEventListener("DOMContentLoaded", initializeApp);

// =======================
// 15. Helpers and Utilities
// =======================
function animateQuoteChange(container, callback) {
  // Add fade-out animation
  container.style.opacity = "0";
  container.style.transform = "translateY(10px)";
  setTimeout(() => {
    callback();
    // Add fade-in animation
    container.style.opacity = "1";
    container.style.transform = "translateY(0)";
    container.style.transition = "all 0.4s ease";
  }, 200);
}

function filterQuotesByCategory(category) {
  return category === "All"
    ? [...quotes]
    : quotes.filter((quote) => quote.category === category);
}
