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
const categoryButtons = document.querySelectorAll("catogory-btn");

// Sample Quotes Data

const quotes = [
  // Motivation
  {
    text: "Push yourself, because no one else is going to do it for you.",
    author: "Unknown",
    category: "motivation",
  },
  {
    text: "The secret of getting ahead is getting started.",
    author: "Mark Twain",
    category: "motivation",
  },
  {
    text: "Your time is limited, so don't waste it living someone else's life.",
    author: "Steve Jobs",
    category: "motivation",
  },
  {
    text: "Don’t watch the clock; do what it does. Keep going.",
    author: "Sam Levenson",
    category: "motivation",
  },
  {
    text: "Dream big. Start small. Act now.",
    author: "Robin Sharma",
    category: "motivation",
  },
  {
    text: "Success is not for the lazy.",
    author: "Unknown",
    category: "motivation",
  },

  // Philosophy
  {
    text: "The unexamined life is not worth living.",
    author: "Socrates",
    category: "philosophy",
  },
  {
    text: "He who thinks great thoughts, often makes great errors.",
    author: "Martin Heidegger",
    category: "philosophy",
  },
  {
    text: "Man is condemned to be free.",
    author: "Jean-Paul Sartre",
    category: "philosophy",
  },
  {
    text: "We are what we repeatedly do. Excellence, then, is not an act but a habit.",
    author: "Aristotle",
    category: "philosophy",
  },
  {
    text: "Happiness is not an ideal of reason but of imagination.",
    author: "Immanuel Kant",
    category: "philosophy",
  },

  // Life
  {
    text: "Life is what happens when you’re busy making other plans.",
    author: "John Lennon",
    category: "life",
  },
  {
    text: "In the end, it’s not the years in your life that count, it’s the life in your years.",
    author: "Abraham Lincoln",
    category: "life",
  },
  {
    text: "Difficulties in life are intended to make us better, not bitter.",
    author: "Dan Reeves",
    category: "life",
  },
  {
    text: "Life isn’t about finding yourself. It’s about creating yourself.",
    author: "George Bernard Shaw",
    category: "life",
  },
  {
    text: "The purpose of life is to live it, to taste experience to the utmost.",
    author: "Eleanor Roosevelt",
    category: "life",
  },

  // Happiness
  {
    text: "Happiness depends upon ourselves.",
    author: "Aristotle",
    category: "happiness",
  },
  {
    text: "The most important thing is to enjoy your life—to be happy.",
    author: "Audrey Hepburn",
    category: "happiness",
  },
  {
    text: "Happiness is not something ready made. It comes from your own actions.",
    author: "Dalai Lama",
    category: "happiness",
  },
  {
    text: "Count your age by friends, not years. Count your life by smiles, not tears.",
    author: "John Lennon",
    category: "happiness",
  },
  {
    text: "The greatest happiness you can have is knowing that you do not necessarily require happiness.",
    author: "William Saroyan",
    category: "happiness",
  },

  // Love
  {
    text: "Love is composed of a single soul inhabiting two bodies.",
    author: "Aristotle",
    category: "love",
  },
  {
    text: "To love and be loved is to feel the sun from both sides.",
    author: "David Viscott",
    category: "love",
  },
  {
    text: "We accept the love we think we deserve.",
    author: "Stephen Chbosky",
    category: "love",
  },
  {
    text: "Love doesn’t make the world go round. Love is what makes the ride worthwhile.",
    author: "Franklin P. Jones",
    category: "love",
  },
  {
    text: "Where there is love there is life.",
    author: "Mahatma Gandhi",
    category: "love",
  },

  // Programming
  {
    text: "Talk is cheap. Show me the code.",
    author: "Linus Torvalds",
    category: "programming",
  },
  {
    text: "Programs must be written for people to read, and only incidentally for machines to execute.",
    author: "Harold Abelson",
    category: "programming",
  },
  {
    text: "First, solve the problem. Then, write the code.",
    author: "John Johnson",
    category: "programming",
  },
  {
    text: "Simplicity is the soul of efficiency.",
    author: "Austin Freeman",
    category: "programming",
  },
  {
    text: "Code is like humor. When you have to explain it, it’s bad.",
    author: "Cory House",
    category: "programming",
  },

  // Personal Finance
  {
    text: "Do not save what is left after spending, but spend what is left after saving.",
    author: "Warren Buffett",
    category: "personal finance",
  },
  {
    text: "An investment in knowledge pays the best interest.",
    author: "Benjamin Franklin",
    category: "personal finance",
  },
  {
    text: "The goal isn’t more money. The goal is living life on your terms.",
    author: "Chris Brogan",
    category: "personal finance",
  },
  {
    text: "It’s not your salary that makes you rich, it’s your spending habits.",
    author: "Charles A. Jaffe",
    category: "personal finance",
  },
  {
    text: "A budget is telling your money where to go instead of wondering where it went.",
    author: "Dave Ramsey",
    category: "personal finance",
  },

  // Entrepreneurship
  {
    text: "The best way to predict the future is to create it.",
    author: "Peter Drucker",
    category: "entrepreneurship",
  },
  {
    text: "Don’t worry about failure; you only have to be right once.",
    author: "Drew Houston",
    category: "entrepreneurship",
  },
  {
    text: "Move fast and break things. Unless you are breaking stuff, you are not moving fast enough.",
    author: "Mark Zuckerberg",
    category: "entrepreneurship",
  },
  {
    text: "Opportunities don’t happen. You create them.",
    author: "Chris Grosser",
    category: "entrepreneurship",
  },
  {
    text: "Your most unhappy customers are your greatest source of learning.",
    author: "Bill Gates",
    category: "entrepreneurship",
  },
];

// State Variables

let quoteHistory = JSON.parse(localStorage.getItem("quoteHistory")) || [];
let currentCategory = "All";
let isDarkTheme = true;
let historyPointer = quoteHistory.length - 1;

// Functions
function displayQuote(quoteObject) {
  if (!quoteObject) return;

  quoteText.textContent = quoteObject.text;
  author.textContent = `- ${quoteObject.author}`;
  quoteCategory.textContent = quoteObject.category;
  activeCategory.textContent = quoteObject.category;
  totalQuotes.textContent = quoteObject.length;
}

function getRandomQuote(category) {
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

  // Pick random quote from the filtered list
  const randomIndex = Math.floor(Math.random() * filteredQuotes.length);
  const randomQuote = filteredQuotes[randomIndex];
  return randomQuote;
}

function saveQuote(quote) {
  if (!quote) return;

  //check if that quote already exists in history (avoiding duplicates)
  /*
  const exists = quoteHistory.some(
    (q) => q.text === quote.text && q.author === quote.author
  );
  */

  const last = quoteHistory[quoteHistory.length - 1];
  if (
    last &&
    last.text === quoteObject.text &&
    last.author === quoteObject.author
  ) {
    // don't save duplicate consecutive entries
    return;
  }

  // If it’s new, it pushes it into quoteHistory and saves the updated array into localStorage.
  if (!exists) {
    quoteHistory.push(quote);
    localStorage.setItem("quoteHistory", JSON.stringify(quote));
  }
}

function updateQuote(newQuote) {
  displayQuote(newQuote);
  saveQuote(newQuote);
  historyPointer = quoteHistory.length - 1;
}
