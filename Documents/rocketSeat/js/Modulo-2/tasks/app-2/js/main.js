//        var attribute = document.createAttribute("boxes");

function getRandomColor() {
    var letters = "0123456789ABCDEF"; var color = "#";
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
var newColor = getRandomColor(); // #E943F0


var container = document.querySelector('#container');
function criaQuadradoVermelho() {
    var box = document.createElement('div');
    box.setAttribute('class', 'boxes');
    container.appendChild(box);
    box.onmouseover = getRandomColor();

}


