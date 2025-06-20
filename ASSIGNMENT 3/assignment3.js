// Q1 - Remove states starting with vowels
let states = ["rajasthan", "Bihar", "punjab", "Maharashtra", "Uttar Pradesh", "hariyana"];
let filteredStates = states.filter(function(state) {
  let firstChar = state.charAt(0).toLowerCase();
  return !['a', 'e', 'i', 'o', 'u'].includes(firstChar);
});
console.log("Q1:", filteredStates); // ['rajasthan', 'Bihar', 'punjab', 'hariyana']


// Q2 - Reverse the sentence words
let str = "this is my assignment";
let reversed = str.split(" ").reverse().join(" ");
console.log("Q2:", reversed); // assignment my is this


// Q3 - Change 'INDIA' to 'INDONESIA' using splice
let arr = ['I', 'N', 'D', 'I', 'A'];
arr.splice(3, 2, 'O', 'N', 'E', 'S', 'I', 'A');
console.log("Q3:", arr.join("")); // INDONESIA


// Q4 - Count vowels and consonants
let myStr = "this is a demo sentence";
let vowels = "aeiouAEIOU";
let vowelCount = 0;
let consonantCount = 0;

for (let char of myStr) {
  if (/[a-z]/i.test(char)) {
    if (vowels.includes(char)) {
      vowelCount++;
    } else {
      consonantCount++;
    }
  }
}
console.log("Q4 - Vowels:", vowelCount);      // Vowels: 9
console.log("Q4 - Consonants:", consonantCount); // Consonants: 13


// Q5 - Replace wrong word with correct word
function correctfn(sentence, wrong, correct) {
  return sentence.replace(wrong, correct);
}
console.log("Q5:", correctfn("I have a pen", "pen"));


// Q6 - Filter numbers greater than 5
let inputArr = [1, 2, 3, 9, 10, 7, 5, 4, 3];
let result = inputArr.filter(function(num) {
  return num > 5;
});
console.log("Q6:", result); // [9, 10, 7]


// Q7 - Get average scores
const students = [
  { name: "pawan", scores: [90, 70, 50] },
  { name: "pankaj", scores: [60, 80, 80] },
  { name: "aadi", scores: [60, 70, 80] },
  { name: "gaurav", scores: [40, 30, 50] },
];

const resultAvg = students.map(function(student) {
  let sum = student.scores.reduce((a, b) => a + b, 0);
  let avg = sum / student.scores.length;
  return { name: student.name, average: avg.toFixed(2) }; // rounded to 2 decimals
});
console.log("Q7:", resultAvg);


// Q8 - Repeated sum of digits until single digit
function digitSum(num) {
  while (num > 9) {
    num = num.toString().split('').reduce((a, b) => a + Number(b), 0);
  }
  return num;
}
console.log("Q8:", digitSum(456)); // 6


// Q9 - Count words in paragraph
function countWords(paragraph) {
  let words = paragraph.trim().split(/\s+/);
  return words.length;
}
console.log("Q9:", countWords("Hello I am an engineering student.")); // 6


// Q10 - Reverse a string
function reverseString(str) {
  return str.split("").reverse().join("");
}
console.log("Q10:", reverseString("pawan")); // nawap


// Q11 - Average for students
let data = {
  student1: {
    subject1: 44,
    subject2: 56,
    subject3: 87,
    subject4: 97,
    subject5: 37
  },
  student2: {
    subject1: 44,
    subject2: 56,
    subject3: 87,
    subject4: 97,
    subject5: 37
  },
  student3: {
    subject1: 44,
    subject2: 56,
    subject3: 87,
    subject4: 97,
    subject5: 37
  }
};

let finalOutput = {};

for (let student in data) {
  let marks = Object.values(data[student]);
  let avg = marks.reduce((a, b) => a + b, 0) / marks.length;
  finalOutput[student] = { average: Math.round(avg) };
}
console.log("Q11:", finalOutput);
