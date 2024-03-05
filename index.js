// Define arrays containing quotes for each part of the message
const part1 = [
  "Success is not final",
  "The only way to do great work",
  "The greatest glory",
  "Believe you can",
  "Opportunities don't happen"
];

const part2 = [
  "is the courage",
  "is to love what you do",
  "in living",
  "and you're halfway there",
  "you create them"
];

const part3 = [
  "to continue",
  "and keep going",
  "a life well-lived",
  "of success",
  "make the most of it"
];

// Generate a random index for each part of the message

const generateQuote = () => {
  const index1 =  Math.floor(Math.random() * part1.length);
  const index2 =  Math.floor(Math.random() * part2.length);
  const index3 =  Math.floor(Math.random() * part1.length);

  const quote = `${part1[index1]} ${part2[index2]} ${part3[index3]}.`;
  return quote;
}
