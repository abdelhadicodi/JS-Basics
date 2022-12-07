var first_number = prompt("first number");
document.getElementById("first_number").value = first_number;
var second_number = prompt("second_number");
document.getElementById("second_number").value = second_number;
var result = first_number * second_number


document.getElementById("validate").onclick = function() {
    alert(
       `result: ${result}
        `
    )
};
