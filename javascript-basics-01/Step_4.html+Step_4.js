var name = prompt("what is your name?");
document.getElementById("name").value = name;
var surname = prompt("what is your surname?");
document.getElementById("surname").value = surname;
var city = prompt("Your city?");
document.getElementById("city").value = city;


document.getElementById("validate").onclick = function() {
    alert(
       `Name: ${name}
        Surname: ${surname}
        City: ${city}
        `
    )
};
