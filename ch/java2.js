"use strict";

var board2 = ChessBoard('board2', {
    draggable: true,
    dropOffBoard: 'trash',
    sparePieces: true
});
$('#startBtn').on('click', board2.start);
$('#clearBtn').on('click', board2.clear);

var reverse = function(s){
    return s.split("").reverse().join("");
console.log(reverse);
}
var barista = {
    str1:"ion",
    str2: reverse("rcne"),
    str3:"ypt",
    request:function (preference) {
        return preference+"secret word:"
        + this str2+this str3+this str1;
        console.log(barista)

    }
}
2+2;
console.log(2+2);