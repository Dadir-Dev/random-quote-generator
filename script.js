// DOM Elements
const quoteText = document.querySelector(".js-quote-text");
const author = document.querySelector(".js-quote-author");
const quoteCategory = document.querySelector(".js-quote-category");
const prevBtn = document.querySelector(".js-prev-btn");
const nextBtn = document.querySelector(".js-next-btn");
const themeToggle = document.querySelector(".js-theme-toggle");
const copyBtn = document.querySelector(".js-copy-quote");
const totalQuotes = document.querySelector(".js-total-quotes");
const activeCategory = document.querySelector(".js-active-category");
const categoryButtons = document.querySelectorAll(".category-btn");

// Sample Quotes Data

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
    text: "Your time is limited, so don't waste it living someone else's Life.",
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
    text: "The unexamined Life is not worth living.",
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
    text: "In the end, it’s not the years in your Life that count, it’s the Life in your years.",
    author: "Abraham Lincoln",
    category: "Life",
  },
  {
    text: "Difficulties in Life are intended to make us better, not bitter.",
    author: "Dan Reeves",
    category: "Life",
  },
  {
    text: "Life isn’t about finding yourself. It’s about creating yourself.",
    author: "George Bernard Shaw",
    category: "Life",
  },
  {
    text: "The purpose of Life is to live it, to taste experience to the utmost.",
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
    text: "Count your age by friends, not years. Count your Life by smiles, not tears.",
    author: "John Lennon",
    category: "Happiness",
  },
  {
    text: "The greatest Happiness you can have is knowing that you do not necessarily require Happiness.",
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
    text: "To Love and be loved is to feel the sun from both sides.",
    author: "David Viscott",
    category: "Love",
  },
  {
    text: "We accept the Love we think we deserve.",
    author: "Stephen Chbosky",
    category: "Love",
  },
  {
    text: "Love doesn’t make the world go round. Love is what makes the ride worthwhile.",
    author: "Franklin P. Jones",
    category: "Love",
  },
  {
    text: "Where there is Love there is Life.",
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
    text: "The goal isn’t more money. The goal is living Life on your terms.",
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

let currentQuoteIndex = 0;
// in-memory history and pointer
let quoteHistory = JSON.parse(localStorage.getItem("quoteHistory")) || [];
let historyPointer = quoteHistory.length - 1; // points to index in quoteHistory
let currentCategory = "All";
let isDarkTheme = true;

// Functions
function displayQuote(quoteObject, save = true) {
  if (!quoteObject) return;
  quoteText.textContent = quoteObject.text;
  author.textContent = `- ${quoteObject.author}`;
  quoteCategory.textContent = quoteObject.category;
  activeCategory.textContent = quoteObject.category;
  // totalQuotes.textContent = quoteHistory.length;
  if (save) saveQuote(quoteObject);
}

function hashQuote(q) {
  return `${q.text}::${q.author}`;
}

function getRandomQuote(category, avoidSet = new Set()) {
  // Filter quotes based on the given category
  const filteredQuotes =
    category === "All" // Use all quotes if category is "All"
      ? quotes
      : quotes.filter((quote) => quote.category === category);

  // Handle case where no quotes exist for this category
  if (filteredQuotes.length === 0) {
    console.warn(`No quotes found for category: ${category}`);
    return null;
  }

  // Filter out any quotes present in avoidSet
  const candidates = filteredQuotes.filter((q) => !avoidSet.has(hashQuote(q)));

  const pool = candidates.length > 0 ? candidates : filteredQuotes; // fallback to allow repeats if none left

  const randomIndex = Math.floor(Math.random() * pool.length);
  return pool[randomIndex];
}

// Save quote to localStorage
function saveQuote(quoteObject) {
  /*
  if (!quoteObject) return;
  // Check if the quote already exists in quoteHistory
  const exists = quoteHistory.some(
    (q) => q.text === quoteObject.text && q.author === quoteObject.author
  );
  if (!exists) {
    quoteHistory.push(quoteObject);
    localStorage("quoteHistory", JSON.stringify(quoteObject));
  }
    */

  // load from memory (quoteHistory) and check duplicates
  const last = quoteHistory[quoteHistory.length - 1];
  if (
    last &&
    last.text === quoteObject.text &&
    last.author === quoteObject.author
  ) {
    // don't save duplicate consecutive entries
    return;
  }

  quoteHistory.push(quoteObject);
  // Limit history to last 50 quotes to be generous
  if (quoteHistory.length > 50) quoteHistory.shift();

  // persist and update pointer
  localStorage.setItem("quoteHistory", JSON.stringify(quoteHistory));
  historyPointer = quoteHistory.length - 1;
}

// get the last quote from history
// get previous quote according to historyPointer
function getPreviousQuote() {
  if (historyPointer > 0) {
    historyPointer -= 1;
    return quoteHistory[historyPointer];
  }
  return null;
}

// get next quote according to historyPointer (when navigating forward)
function getNextFromHistory() {
  if (historyPointer < quoteHistory.length - 1) {
    historyPointer += 1;
    return quoteHistory[historyPointer];
  }
  return null;
}

// Add eventlisteners to next-btn and prev-btn
nextBtn.addEventListener("click", () => {
  // if user navigated back in history, move forward in history
  const nextFromHistory = getNextFromHistory();
  if (nextFromHistory) {
    displayQuote(nextFromHistory, false); // don't re-save when navigating
    return;
  }

  // Build avoidance set from existing history (avoid showing quotes already in history)
  const avoid = new Set(quoteHistory.map(hashQuote));
  const randomQuote = getRandomQuote(currentCategory, avoid);
  if (!randomQuote) {
    console.warn("No quote available for the selected category.");
    return;
  }
  displayQuote(randomQuote, true); // save new random quote
});

prevBtn.addEventListener("click", () => {
  const prev = getPreviousQuote();
  if (!prev) {
    console.warn("No previous quotes in history.");
    return;
  }
  displayQuote(prev, false); // show previous without saving
});

// Initial Display
// Initial Display
const initialQuote = quoteHistory.length
  ? quoteHistory[quoteHistory.length - 1]
  : getRandomQuote(currentCategory);
if (initialQuote) {
  // If it came from history, don't save again; otherwise save the new random
  const isFromHistory = quoteHistory.some(
    (q) => q.text === initialQuote.text && q.author === initialQuote.author
  );
  displayQuote(initialQuote, !isFromHistory);
}

// Wire category buttons
if (categoryButtons && categoryButtons.length) {
  categoryButtons.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      const cat = btn.textContent.trim();
      currentCategory = cat === "All" ? "All" : cat;

      // update active class
      categoryButtons.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");

      // update UI element if present
      if (activeCategory) activeCategory.textContent = currentCategory;

      // show a quote from selected category
      const avoid = new Set(quoteHistory.map(hashQuote));
      const q = getRandomQuote(currentCategory, avoid);
      if (q) displayQuote(q, true);
      else console.warn(`No quotes for category ${currentCategory}`);
    });
  });
}
