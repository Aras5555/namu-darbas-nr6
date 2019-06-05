





var data = [];




document.getElementById('car-form').addEventListener("submit", function(e) {
    e.preventDefault();


function myFunction() {


var date = document.getElementById("dt").value;
var plt = document.getElementById("pln").value;


    var distm = parseInt(document.getElementById("num1").value);
    var times = parseInt(document.getElementById("num2").value);
    var calc = (distm / times) * 3600 / 1000;
    var round =Math.round(calc).toFixed(2);

    document.getElementById("output").innerHTML= round;


}
function adddata(date, plt, distm, times) {
    data.push([date, plt, distm, times]);
}


function generateTable() {
    var html = "";
    for (var i = 0; i < data.length; i++) {
        var item = data[i];
        var kmh = round;
        html += '<tr>' +
            '<td>' + item[0] + '</td>' + // DateTime
            '<td>' + item[1] + '</td>' + // Plate nr
            '<td>' + round + '</td>' + // speed
            '</tr>'}}
 /*
    document.getElementById("content").innerHTML = html;

}}
})*/