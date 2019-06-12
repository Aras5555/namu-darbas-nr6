
'use strict';
// if readyState = 4
var dataContainer = document.getElementById("user");
var btn = document.getElementById("btn");
btn.addEventListener("click", function () {
    var jsn = new XMLHttpRequest();
    jsn.open("GET", "https://jsonplaceholder.typicode.com/posts", true);
    jsn.onload = function() {
        var data = JSON.parse(jsn.responseText);
       myFunction(data);
console.log(data);
    }; jsn.send();

});

   function myFunction(data) {
         let text = "";
         for (let i = 0; i <=9; i++) {
             text += "<p>" + data[i].userId + "<br> " + data[i].id + "<br> " + data[i].title + " <br> " +
                 data[i].body + "</p>";
             document.getElementById("user1").innerHTML = text;
        }

         for (let i = 10; i <=19; i++) {
         text += "<p>" + data[i].userId + " <br>" + data[i].id + " <br>" + data[i].title + "<br> " +
            data[i].body + "</p>";
             document.getElementById("user2").innerHTML = text;

         }
        for (let i = 19; i <=29; i++) {
            text += "<p>" + data[i].userId + " <br>" + data[i].id + " <br>" + data[i].title + " <br>" +
                data[i].body + "</p>";
            document.getElementById("user3").innerHTML = text;

        }
        for (let i = 29; i <=39; i++) {
            text += "<p>" + data[i].userId + " <br>" + data[i].id + "<br> " + data[i].title + "<br> " +
                data[i].body + "</p>";
            document.getElementById("user4").innerHTML = text;

        }
        for (let i = 39; i <=49; i++) {
            text += "<p>" + data[i].userId + "<br> " + data[i].id + " <br>" + data[i].title + " <br>" +
                data[i].body + "</p>";
            document.getElementById("user5").innerHTML = text;

        }
        for (let i = 49; i <=59; i++) {
            text += "<p>" + data[i].userId + "<br> " + data[i].id + "<br> " + data[i].title + " <br>" +
                data[i].body + "</p>";
            document.getElementById("user6").innerHTML = text;

        }
        for (let i = 59; i <=69; i++) {
            text += "<p>" + data[i].userId + "<br> " + data[i].id + "<br> " + data[i].title + " <br>" +
                data[i].body + "</p>";
            document.getElementById("user7").innerHTML = text;

        }
        for (let i = 69; i <=79; i++) {
            text += "<p>" + data[i].userId + " <br>" + data[i].id + " <br>" + data[i].title + "<br> " +
                data[i].body + "</p>";
            document.getElementById("user8").innerHTML = text;

        }
        for (let i = 79; i <=89; i++) {
            text += "<p>" + data[i].userId + " <br>" + data[i].id + "<br> " + data[i].title + "<br> " +
                data[i].body + "</p>";
            document.getElementById("user9").innerHTML = text;

        }
        for (let i = 89; i <=99; i++) {
            text += "<p>" + data[i].userId + "<br> " + data[i].id + "<br> " + data[i].title + " <br>" +
                data[i].body + "</p>";
            document.getElementById("user10").innerHTML = text;

        }

    dataContainer.insertAdjacentHTML("beforeend",text);
}





































/*function myFunction() {



var arr = [this.responseText];
for (var i =0; i < arr.length; i++) {
    var user = arr[1];
    console.log(user)
}}
*/





