const scores = [1, 2, 3, 4, 5];

console.log("Kết quả forEach");
scores.forEach(function (score) {
  console.log(score * score);
});

const doubleScores = scores.map(function (score) {
  return score * 2;
});

console.log("Kết quả map");
console.log("Mảng doubledScores: ", doubleScores);
console.log("Mảng gốc: ", scores);
