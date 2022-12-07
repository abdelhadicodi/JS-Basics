alert("shoes size? and your birth year?");
    var shoe=prompt ("what is your shoes size?")
    document.getElementById("shoe_size").value = shoe;
    var year= prompt("year");
    document.getElementById("year").value = year;
    var a=shoe*2;
    var b=a+5;
    var c=b*50;
    var d=c-year;
    var e=d+1766;

    
    document.getElementById("validate").onclick = function user() {
        alert(
           `result: ${e};
            `
        )
    };
