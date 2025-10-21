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
  filteredQuotes: [...quotes],
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
  prevBtn: document.querySelector(".js-prev-btn"),
  nextBtn: document.querySelector(".js-next-btn"),
  themeToggle: document.querySelector(".js-theme-toggle"),
  copyBtn: document.querySelector(".js-copy-quote"),
  totalQuotes: document.querySelector(".js-total-quotes"),
  activeCategory: document.querySelector(".js-active-category"),
  notification: document.getElementById("notification"),
};
