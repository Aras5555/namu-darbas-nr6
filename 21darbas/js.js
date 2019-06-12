(function() {
    'use strict';
    window.addEventListener('load', function() {
        // Get the forms we want to add validation styles to
        var forms = document.getElementsByClassName('needs-validation');
        // Loop over them and prevent submission
        var validation = Array.prototype.filter.call(forms, function(form) {
            form.addEventListener('submit', function(event) {
                if (form.checkValidity() === false) {
                    event.preventDefault();
                    event.stopPropagation();
                }
                form.classList.add('was-validated');
            }, false);
        });
    }, false);
})();
var dataContainer = document.getElementById("user");
var btn = document.getElementById("btn");
btn.addEventListener("click", function () {
let post = new XMLHttpRequest();
post.open("GET", "https://postit.lt/data/?address=K.+Baršausko+g.+59,+Kaunas&key=qBOw5GDoouifSy9EBPa9", true);
post.onload = function() {
    let data = JSON.parse(post.responseText);

    console.log(data);
   myFunction(data);

   };
   post.send();
});
function myFunction(data) {
    let text = "";
    for (let i = 0; i <=9; i++) {
        text += "<p>" + data[i].status + "</p>";




        dataContainer.insertAdjacentHTML("beforeend",text);
    }};
