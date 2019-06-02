
function myFunction() {
    var date = document.getElementById("dt").value;
    var date = document.getElementById("pln").value;

    var distm = parseInt(document.getElementById("num1").value);
    var times = parseInt(document.getElementById("num2").value);
    var calc = (distm / times) * 3600 / 1000;
    var round =Math.round(calc).toFixed(2);

    document.getElementById("output").innerHTML= round;


}


function generateTable() {
    var html = "";
    for (var i = 0; i < carArr.length; i++) {
        var item = carArr[i];
        var distance = parseInt(item[2]);
        var time = parseInt(item[3]);
        html += '<tr>' +
            '<td>' + item[0] + '</td>' + // DateTime
            '<td>' + item[1] + '</td>' + // Plate nr
            '<td>' + metersToKilometers(distance) + '</td>' + // Distance
            '<td>' + secondsToMinutes(time) + '</td>' + // Time
            '<td>' + calcKilometersPerHour(distance, time).toFixed(2) + '</td>' + // Speed
            '</tr>';
    }
    document.getElementById("cars-table-content").innerHTML = html;
}