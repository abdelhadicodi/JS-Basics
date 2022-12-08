var button = document.querySelectorAll(`a`)
var paragraph = document.querySelectorAll(`texte`)
button.forEach( (showandhide)=>{
    showandhide.addEventListener(`click`,(showandhide)=>{
    if (showandhide.target.id==`hide`){

        texte.style = `display: none`;
    }
    else{
        texte.style = `display:block`;
    }
})
})