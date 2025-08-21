let size = 10;
let table = "";

for(let i = 1; i <= size; i++){
    let row = ""; // Reset row for each new line
    for(let j = 1; j <= size; j++){
        row += `${i} * ${j} = ${i * j}\t`;
    }
    table += row + "\n"; // Add newline for each row
}

console.log("        Multiplication Table\n" + table);
