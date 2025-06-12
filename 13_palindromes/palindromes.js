const punctuationMarks = [
  ".", // period
  ",", // comma
  "!", // exclamation mark
  "?", // question mark
  ":", // colon
  ";", // semicolon
  "-", // hyphen
  "—", // em dash
  "(", // left parenthesis
  ")", // right parenthesis
  "[", // left bracket
  "]", // right bracket
  "{", // left brace
  "}", // right brace
  "'", // single quote
  '"', // double quote
  "`", // backtick
  "…", // ellipsis
  "/", // slash
  "\\", // backslash
  "@", // at symbol
  "#", // hash
  "$", // dollar sign
  "%", // percent
  "&", // ampersand
  "*", // asterisk
  "^", // caret
  "=", // equals sign
  "+", // plus
  "<", // less than
  ">", // greater than
  "|", // vertical bar
  "~", // tilde
  " ",
];

const palindromes = function (string) {
  const cleaned = string
    .toLowerCase()
    .split("")
    .filter((char) => !punctuationMarks.includes(char))
    .join("");

  const reversed = cleaned.split("").reverse().join("");

  return cleaned === reversed;
};

// Do not edit below this line
module.exports = palindromes;
