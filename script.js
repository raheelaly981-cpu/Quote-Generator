let quotes = [
  {
    text: "The best way to get started is to quit talking and begin doing.",
    author: "Walt Disney"
  },
  {
    text: "Don’t let yesterday take up too much of today.",
    author: "Will Rogers"
  },
  {
    text: "Success is not final, failure is not fatal.",
    author: "Winston Churchill"
  },
  {
    text: "Believe you can and you're halfway there.",
    author: "Theodore Roosevelt"
  },
  {
    text: "It always seems impossible until it's done.",
    author: "Nelson Mandela"
  },
  {
    text: "Stay hungry, stay foolish.",
    author: "Steve Jobs"
  }
];

function showQuote() {
  let random = Math.floor(Math.random() * quotes.length);

  const quoteEl = document.getElementById("quote");
  const authorEl = document.getElementById("author");
  const card = document.getElementById("card");

  // restart animation
  card.style.animation = "none";
  card.offsetHeight;
  card.style.animation = "fade 0.6s ease";

  quoteEl.innerText = quotes[random].text;
  authorEl.innerText = "- " + quotes[random].author;
}