// Multiplication tables using nested loops

for (let i = 1; i <= 5; i++) {

    for (let j = 1; j <= 10; j++) {
        console.log(i + " x " + j + " = " + (i * j));
    }

    console.log("------------");
}


// Multiplication tables using while loops
// i = number , j = multiplier

let i = 1;

while (i <= 5) {
    
    let j = 1;

    while (j <= 10) {
        console.log(i + " x " + j + " = " + (i * j));
        j++;
    }

    console.log("-------------");

    i++;
}
