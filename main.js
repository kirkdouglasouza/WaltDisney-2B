function MudarFundo() {
    // Gere uma cor aleatória
//var randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);

// Aplique a cor ao plano de fundo do body
document.body.style.backgroundImage = "url('../image/madeira.png')";
}
function Filme(){

    //Redireciona para um filme do Mick Mouse
       var win = window.open('https://www.youtube.com/watch?v=BBgghnQF6E4','_blank');
       win.focus();
}