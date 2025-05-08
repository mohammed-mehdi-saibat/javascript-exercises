const sumAll = function (start, end) {
  if (
    typeof start !== "number" ||
    typeof end !== "number" ||
    !Number.isInteger(start) ||
    !Number.isInteger(end) ||
    start < 0 ||
    end < 0
  ) {
    return "ERROR";
  }

  if (start > end) {
    [start, end] = [end, start];
  }

  let bigStart = BigInt(start);
  let bigEnd = BigInt(end);
  let sum = 0n;

  for (let i = bigStart; i <= bigEnd; i++) {
    sum += i;
  }

  const MAX_SAFE = BigInt(Number.MAX_SAFE_INTEGER);
  if (sum <= MAX_SAFE) {
    return Number(sum);
  }

  return sum;
};

// Do not edit below this line
module.exports = sumAll;
