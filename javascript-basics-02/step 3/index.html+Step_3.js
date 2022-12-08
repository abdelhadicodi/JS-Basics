var div_1 = document.createElement("div");
document.body.appendChild(div_1);
div_1.className="out";
var add = document.querySelector(".out");
var put = document.getElementById("name");
document.getElementById("name").onkeyup = function(){
    add.innerHTML = put.value;
}