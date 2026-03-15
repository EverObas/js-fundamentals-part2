 
 const OldStudents = [
    { name: "Cynthia", age: 20, score: 20 },
    { name: "Mathew", age: 22, score: 40 },
    { name: "Caspian", age: 19, score: 30 },
    { name: "Sewa", age: 26, score: 95 },
    { name: "Michael", age: 23, score: 70 },
    { name: "Emma", age: 20, score: 95 },
    { name: "Daniel", age: 24, score: 65 },
    { name: "Olivia", age: 22, score: 88 },
    { name: "James", age: 21, score: 72 },
    { name: "Sophia", age: 19, score: 91 }

];

// Filter
var result;

result = OldStudents.filter(item => item.score)
result = OldStudents.filter(item => item.score  >= 80 )


// Map 
// (map is more specific than filter and it doesn't work with a condition unlike filter)

result = OldStudents.map(item => item.score )


//  Reduce
result = OldStudents.reduce((acc, item) => acc + item.score, 0);


// Sort
result = OldStudents.sort(item => (a, b) => item.score(a.score - b.score) );

// Some
result = OldStudents.some(item => item.score > 90 );

// Every

result = OldStudents.every(item => item.failed );


console.log(result);


