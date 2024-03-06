// Define arrays containing quotes for each part of the message
const part1 = [
  "Success is not the key to happiness,",
  "The only way to achieve greatness is",
  "The greatest glory in living lies not",
  "Believe you can and you're halfway there,",
  "Opportunities are usually disguised as",
  "Life is 10% what happens to us and 90%",
  "The only limit to our realization of tomorrow",
  "The best time to plant a tree was 20 years ago.",
  "The only impossible journey is the one you never",
  "The biggest risk is not taking any risk."
];

const part2 = [
  "happiness is the key to success.",
  "to love what you do.",
  "in the adventure of finding yourself.",
  "there.",
  "hard work, so most people don't recognize them.",
  "how we react to it.",
  "is our doubts of today.",
  "The second best time is now.",
  "begin.",
  "In a world that's changing really quickly,"
];

const part3 = [
  "Keep your face always toward the sunshine - and shadows will fall behind you.",
  "The best way to predict the future is to create it.",
  "The journey of a thousand miles begins with one step.",
  "Do not go where the path may lead, go instead where there is no path and leave a trail.",
  "Believe you can and you're halfway there.",
  "What you get by achieving your goals is not as important as what you become by achieving your goals.",
  "Don't watch the clock; do what it does. Keep going.",
  "Believe in yourself! Have faith in your abilities! Without a humble but reasonable confidence in your own powers you cannot be successful or happy.",
  "You are never too old to set another goal or to dream a new dream.",
  "Success is not final, failure is not fatal: It is the courage to continue that counts."
];

// Generate a random combination for the quote

const generateQuote = () => {
  const index1 =  Math.floor(Math.random() * part1.length);
  const index2 =  Math.floor(Math.random() * part2.length);
  const index3 =  Math.floor(Math.random() * part1.length);

  const quote = `${part1[index1]} ${part2[index2]} ${part3[index3]}`;
  return quote;
}

// Display the quote on the page.

const quoteButton = document.getElementById("generateQuoteButton");
const quoteElementText = document.getElementById("quoteText");

quoteButton.addEventListener("click", function(e) {
  quoteElementText.textContent = generateQuote();
} );
