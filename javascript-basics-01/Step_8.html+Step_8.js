var age = prompt ("your age");
document.getElementById("age").value = age;
document.getElementById("validate").onclick = function(){
    var age = document.getElementById("age").value;
    if (age>18){
        alert("you are over 18")
    }
    else{
        alert("you are under 18")
    }
}