const sentence = "hello there from lighthouse labs";

const printLetters = (char, duration) => {
  setTimeout(() => {
    process.stdout.write(char);
  }, duration);
};

let delay = 0;
for (const char of sentence) {
  printLetters(char, delay);
  delay += 50;
}

setTimeout(() => console.log(), delay);