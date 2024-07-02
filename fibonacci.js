//fibonacci sequence using iteration
const fibs = (num) => {
  const result = [0, 1];
  for (i = 2; i < num; i++) {
    result.push(result[i - 1] + result[i - 2]);
  }
  return result;
};
