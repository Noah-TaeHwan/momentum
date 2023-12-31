const quotes = [
  {
    quote:
      "An object in possession seldom retains the same charm that it had in pursuit.",
    author: "Pliny the Younger",
  },

  {
    quote:
      "The greatest way to live with honor in this world is to be what we pretend to be.",
    author: "Socrates",
  },

  {
    quote:
      "A woman once drove me to drink, and I never had the decency to thank her.",
    author: "Sir Winston Churchill",
  },

  {
    quote:
      "It is hard enough to remember my opinions, without also remembering my reasons for them!",
    author: "Friedrich Nietzsche",
  },

  {
    quote: "An investment in knowledge still yields the best returns.",
    author: "Benjamin Franklin",
  },

  {
    quote: "Tis the most tender part of love, each other to forgive.",
    author: "John Sheffield",
  },

  {
    quote:
      "An object in possession seldom retains the same charm that it had in pKnowledge must come through action; you can have no test which is not fanciful, save by trial.",
    author: "Sophocles",
  },

  {
    quote: "The price of greatness is responsibility.",
    author: "Sir Winston Churchill",
  },

  {
    quote: "Wagner's music is better than it sounds.",
    author: "Edgar Wilson Nye",
  },

  {
    quote: "To love and be loved is to feel the sun from both sides.",
    author: "David Viscott",
  },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];
quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;
