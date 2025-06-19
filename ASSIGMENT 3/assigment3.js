// 1.Remove states starting with vowels

let states = ["Odisha", "Bihar", "Assam", "Maharashtra", "Uttar Pradesh", "Karnataka"];

let filteredStates = states.filter(function(state) {
  let firstChar = state.charAt(0).toLowerCase();
  return !['a', 'e', 'i', 'o', 'u'].includes(firstChar);
});

console.log(filteredStates);


//Q2 - Reverse the sentence words

let str = "I love my India";
let reversed = str.split(" ").reverse().join(" ");
console.log(reversed); 

//Q3 - Change 'INDIA' to 'INDONESIA' using splice

let arr = ['I', 'N', 'D', 'I', 'A'];
arr.splice(3, 2, 'O', 'N', 'E', 'S', 'I', 'A');
console.log(arr.join("")); 


//Q4 - Count vowels and consonants

let myStr = "JavaScript is very powerful!";
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

console.log("Vowels:", vowelCount);
console.log("Consonants:", consonantCount);


 //Q5 - Replace wrong word with correct word

function correctfn(sentence, wrong, correct) {
  return sentence.replace(wrong, correct);
}

console.log(correctfn("I have a pen", "pen", "pencil")); // I have a pencil


// Q6 - Filter numbers greater than 5

let inputArr = [1,2,3,9,10,7,5,4,3];
let result = inputArr.filter(function(num) {
  return num > 5;
});

console.log(result); // [9, 10, 7]


//Q7 - Get average scores

const students = [
  { name: "Ram", scores: [80, 70, 60] },
  { name: "Mohan", scores: [80, 70, 90] },
  { name: "Sai", scores: [60, 70, 80] },
  { name: "Hemang", scores: [90, 90, 80, 80] },
];

const resultAvg = students.map(function(student) {
  let sum = student.scores.reduce((a, b) => a + b, 0);
  let avg = sum / student.scores.length;
  return { name: student.name, average: avg };
});

console.log(resultAvg);


//Q8 -  Repeated sum of digits until single digit

function digitSum(num) {
  while (num > 9) {
    num = num.toString().split('').reduce((a, b) => a + Number(b), 0);
  }
  return num;
}

console.log(digitSum(456)); // 6


//Q9 - Count words in paragraph

function countWords(paragraph) {
  let words = paragraph.trim().split(/\s+/);
  return words.length;
}

console.log(countWords("Hello this is a sample paragraph with some words."));

//Q10 - Reverse a string

function reverseString(str) {
  return str.split("").reverse().join("");
}

console.log(reverseString("Hello")); // olleH


//Q11 - Average for students

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

console.log(finalOutput);
