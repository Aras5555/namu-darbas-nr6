

    var jsn = new XMLHttpRequest();
    var main = [];
    jsn.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            main = JSON.parse(this.responseText);
        }//console.log(main);
        //generateTable();
    };
    jsn.open("GET", "https://jsonplaceholder.typicode.com/posts", true);
    jsn.send();



    function generateTable() {
        var html = "";
        for (var i = 0; i < main.length; i++) {
            var item = main[i];
            console.log(html);
            html += '<tr>' +
                '<td>' + item.userId + '</td>' +
                '<td>' + item.id + '</td>' +
                '<td>' + item.title + '</td>' +
                '<td>' + item.body + '</td>' +
                '</tr>';
        }
        document.getElementById("table1").innerHTML = html;


    }
    window.onload = generateTable;













