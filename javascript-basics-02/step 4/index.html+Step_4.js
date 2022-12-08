document.querySelector("button").onclick = function() {
var boolean = prompt ("Reset is pressed, clear all fields in the form");
if (boolean == "yes"){
document.getElementById("name").value="";
document.getElementById("surname").value="";
document.getElementById("city").value="";
alert("all fields are cleared");
}
else
{
    alert("fields not cleared");
}

    

}