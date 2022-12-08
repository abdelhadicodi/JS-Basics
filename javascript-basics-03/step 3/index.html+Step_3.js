var color1 = document.querySelector(".green");
var color2 = document.querySelector(".red");
var color3 = document.querySelector(".blue");
var text = document.getElementById("text");
color1.onclick = function(){
    text.style.color = "green";
};
color2.onclick = function(){
    text.style.color = "red";
};
color3.onclick = function(){
    text.style.color = "blue"
};