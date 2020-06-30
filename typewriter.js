

const sentence = "hello eoifjeaofaefea";
let count = 50;


for (const char in sentence) {
  count += 50;
  if (Number(char) === sentence.length - 1) {
    setTimeout(() => console.log(sentence[char] + "\n"), count + 1);
  } else {
    setTimeout(() => {
      process.stdout.write(sentence[char]);
    }, count);
  }
}