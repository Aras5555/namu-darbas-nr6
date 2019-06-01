var board = $('.container');
var color;
for (var i = 0; i < 64; i++) {
    color = chooseColor(i);
    makeSquare(color)
}

function makeSquare(color) {
    board.append('<div class="square ' + color + '"></div>');
}

function chooseColor(num) {
    var row = Math.floor(num / 8);
    var color = "";
    if (row % 2 === 0) {
        if (num % 2 === 0) {
            color = "brown";
        }
        else {
            color = "tan";
        }
    }
    else {
        if (num % 2 === 0) {
            color = "tan";
        }
        else {
            color = "brown";
        }
    }

    return color;

}
g