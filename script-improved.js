//=======================
// 1. Sample Quotes Data
//======================

const quotes = [
  // Motivation
  {
    text: "Push yourself, because no one else is going to do it for you.",
    author: "Unknown",
    category: "Motivation",
  },
  {
    text: "The secret of getting ahead is getting started.",
    author: "Mark Twain",
    category: "Motivation",
  },
  {
    text: "Your time is limited, so don't waste it living someone else's life.",
    author: "Steve Jobs",
    category: "Motivation",
  },
  {
    text: "Don’t watch the clock; do what it does. Keep going.",
    author: "Sam Levenson",
    category: "Motivation",
  },
  {
    text: "Dream big. Start small. Act now.",
    author: "Robin Sharma",
    category: "Motivation",
  },
  {
    text: "Success is not for the lazy.",
    author: "Unknown",
    category: "Motivation",
  },

  // Philosophy
  {
    text: "The unexamined life is not worth living.",
    author: "Socrates",
    category: "Philosophy",
  },
  {
    text: "He who thinks great thoughts, often makes great errors.",
    author: "Martin Heidegger",
    category: "Philosophy",
  },
  {
    text: "Man is condemned to be free.",
    author: "Jean-Paul Sartre",
    category: "Philosophy",
  },
  {
    text: "We are what we repeatedly do. Excellence, then, is not an act but a habit.",
    author: "Aristotle",
    category: "Philosophy",
  },
  {
    text: "Happiness is not an ideal of reason but of imagination.",
    author: "Immanuel Kant",
    category: "Philosophy",
  },

  // Life
  {
    text: "Life is what happens when you’re busy making other plans.",
    author: "John Lennon",
    category: "Life",
  },
  {
    text: "In the end, it’s not the years in your life that count, it’s the life in your years.",
    author: "Abraham Lincoln",
    category: "Life",
  },
  {
    text: "Difficulties in life are intended to make us better, not bitter.",
    author: "Dan Reeves",
    category: "Life",
  },
  {
    text: "Life isn’t about finding yourself. It’s about creating yourself.",
    author: "George Bernard Shaw",
    category: "Life",
  },
  {
    text: "The purpose of life is to live it, to taste experience to the utmost.",
    author: "Eleanor Roosevelt",
    category: "Life",
  },

  // Happiness
  {
    text: "Happiness depends upon ourselves.",
    author: "Aristotle",
    category: "Happiness",
  },
  {
    text: "The most important thing is to enjoy your life—to be happy.",
    author: "Audrey Hepburn",
    category: "Happiness",
  },
  {
    text: "Happiness is not something ready made. It comes from your own actions.",
    author: "Dalai Lama",
    category: "Happiness",
  },
  {
    text: "Count your age by friends, not years. Count your life by smiles, not tears.",
    author: "John Lennon",
    category: "Happiness",
  },
  {
    text: "The greatest happiness you can have is knowing that you do not necessarily require happiness.",
    author: "William Saroyan",
    category: "Happiness",
  },

  // Love
  {
    text: "Love is composed of a single soul inhabiting two bodies.",
    author: "Aristotle",
    category: "Love",
  },
  {
    text: "To love and be loved is to feel the sun from both sides.",
    author: "David Viscott",
    category: "Love",
  },
  {
    text: "We accept the love we think we deserve.",
    author: "Stephen Chbosky",
    category: "Love",
  },
  {
    text: "Love doesn’t make the world go round. Love is what makes the ride worthwhile.",
    author: "Franklin P. Jones",
    category: "Love",
  },
  {
    text: "Where there is love there is life.",
    author: "Mahatma Gandhi",
    category: "Love",
  },

  // Programming
  {
    text: "Talk is cheap. Show me the code.",
    author: "Linus Torvalds",
    category: "Programming",
  },
  {
    text: "Programs must be written for people to read, and only incidentally for machines to execute.",
    author: "Harold Abelson",
    category: "Programming",
  },
  {
    text: "First, solve the problem. Then, write the code.",
    author: "John Johnson",
    category: "Programming",
  },
  {
    text: "Simplicity is the soul of efficiency.",
    author: "Austin Freeman",
    category: "Programming",
  },
  {
    text: "Code is like humor. When you have to explain it, it’s bad.",
    author: "Cory House",
    category: "Programming",
  },

  // Personal Finance
  {
    text: "Do not save what is left after spending, but spend what is left after saving.",
    author: "Warren Buffett",
    category: "Personal Finance",
  },
  {
    text: "An investment in knowledge pays the best interest.",
    author: "Benjamin Franklin",
    category: "Personal Finance",
  },
  {
    text: "The goal isn’t more money. The goal is living life on your terms.",
    author: "Chris Brogan",
    category: "Personal Finance",
  },
  {
    text: "It’s not your salary that makes you rich, it’s your spending habits.",
    author: "Charles A. Jaffe",
    category: "Personal Finance",
  },
  {
    text: "A budget is telling your money where to go instead of wondering where it went.",
    author: "Dave Ramsey",
    category: "Personal Finance",
  },

  // Entrepreneurship
  {
    text: "The best way to predict the future is to create it.",
    author: "Peter Drucker",
    category: "Entrepreneurship",
  },
  {
    text: "Don’t worry about failure; you only have to be right once.",
    author: "Drew Houston",
    category: "Entrepreneurship",
  },
  {
    text: "Move fast and break things. Unless you are breaking stuff, you are not moving fast enough.",
    author: "Mark Zuckerberg",
    category: "Entrepreneurship",
  },
  {
    text: "Opportunities don’t happen. You create them.",
    author: "Chris Grosser",
    category: "Entrepreneurship",
  },
  {
    text: "Your most unhappy customers are your greatest source of learning.",
    author: "Bill Gates",
    category: "Entrepreneurship",
  },
];
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
}

// =================
// 5. Core Functions
// =================
function displayCurrentQuote() {
  const quote = state.filteredQuotes[state.currentQuoteIndex];
  const quoteContainer = document.querySelector(".js-js-quote-container");

  if (!quote) {
    domElements.quoteText.textContent = "No quotes available in this category.";
    domElements.author.textContent = "";
    domElements.quoteCategory.textContent = "";
    return;
  }

  // Update quote
  domElements.quoteText.textContent = quote.text;
  domElements.author.textContent = quote.author;
  domElements.quoteCategory.textContent = quote.category;
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

  state.filteredQuotes =
    state.currentCategory === "All"
      ? [...quotes]
      : quotes.filter((quote) => quote.category === selectedCategory);

  // Reset to first quote in category
  state.currentQuoteIndex = 0;
  state.currentCategory = selectedCategory;

  // update UI
  displayCurrentQuote();
  updateStatistics();
  console.log(`Category Changed to: ${selectedCategory}`);
}

// ===================
// 9. Quote Navigation
// ===================

function showNextQuote() {
  if (state.currentQuoteIndex < state.filteredQuotes.length - 1) {
    state.currentQuoteIndex++;
    displayCurrentQuote();
  } else {
    // Loop back to first quote
    state.currentQuoteIndex = 0;
    displayCurrentQuote();
  }
}

function showPreviousQuote() {
  if (state.currentQuoteIndex > 0) {
    state.currentQuoteIndex--;
    displayCurrentQuote();
  } else {
    // loop back to last quote
    state.currentQuoteIndex = state.filteredQuotes.length - 1;
    displayCurrentQuote();
  }
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
      })
      .catch(() => {
        showNotification("Failed to copy!", "error");
      });
  }
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

  const randomIndex = Math.floor(Math.random() * filteredQuotes.length);
  state.currentQuoteIndex = filteredQuotes[randomIndex];

  displayCurrentQuote();
}
// ========================
// 6. Start the Application
// ========================
document.addEventListener("DOMContentLoaded", initializeApp);
