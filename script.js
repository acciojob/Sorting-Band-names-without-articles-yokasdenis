//your code here

let arr=[
    "The Virupasksha Temple",
    "a Victoria Memorial",
    "an Tajmahal"
];
let articleLessArray=[];
let anotherObject={};
//console.log(arr);
for (let i= 0; i< arr.length; i++) {
    let aLessItem=arr[i].replace(/\bthe\b|\ban\b|\ba\b/gi,"").trim();
    articleLessArray.push(aLessItem);
    anotherObject[aLessItem]=arr[i];
}
console.log(anotherObject);
console.log(articleLessArray);
articleLessArray.sort();

let ans = [];

for (let i of articleLessArray) {
  ans.push(anotherObject[i]);
}

console.log(ans);

