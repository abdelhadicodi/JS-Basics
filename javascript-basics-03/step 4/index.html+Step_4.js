var password = document.getElementById("password");
var config = document.getElementById("confirmation");
document.querySelector("button").onclick = function (result) {
    result.preventDefault();
    if (password.value == "" && config.value == ``){
        password.style.border = "2px solid red";
    }
    else if (password.value==config.value){
        alert("password confirmed");
    }
    else{
        confirmation.style.border = "2px solid red"
        alert("password doesn't match")
    }
}