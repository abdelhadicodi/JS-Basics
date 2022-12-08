const images = document.querySelectorAll("img")
images.forEach( function(e){
    e.addEventListener("mouseover", function(e) {
        e.target.src = `images/${e.target.id}_2.jpg`
    })
})
images.forEach( function(a){
    a.addEventListener("mouseout", function(a) {
        a.target.src = `images/${a.target.id}.jpg`
    })
})