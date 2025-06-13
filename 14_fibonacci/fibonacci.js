const fibonacci = function (n) {
  n = +n;
  if (n < 0) return "OOPS";
  if (n === 0) return 0;
  if (n === 1 || n === 2) return 1;

  let a = 1;
  let b = 1;
  let next;

  for (let i = 3; i <= n; i++) {
    next = a + b;
    a = b;
    b = next;
  }
  return next;
};

// Do not edit below this line
module.exports = fibonacci;
