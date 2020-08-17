let num = parseInt(prompt("Enter a number: "));
let total = 0;
while( num != -1 ) {
    num = parseInt(prompt("Enter a number: "));
    alert(num);
    total += num;
}
alert(total);

let j = 1;

while (j < 100) {
    document.write("<hr width = " + j + "%>");
    j++;
}