// notation.js

function mean(scores) {
 if (!Array.isArray(scores) || scores.length === 0) {
     throw new Error("Input must be a non-empty array of scores.");
 }

 const total = scores.reduce((acc, score) => acc + score, 0);
 return total / scores.length;
}

const scores = [85, 90, 78, 92, 88];
console.log(`Mean score: ${mean(scores)}`);

module.exports = mean;
