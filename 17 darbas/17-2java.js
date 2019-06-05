document.getElementById('load').style.visibility='hidden';

document.getElementById('psw').addEventListener("submit",function (e) {
    e.preventDefault();
    passMatch();
    return false;
});


function passMatch(){
    var password1=document.getElementById("psw").pas1.value;
    var password2=document.getElementById("psw").pas2.value;
    if(password1,password2==="") {
        alert("Įveskite slaptažodį");
        return false;
    }

    if(password1===password2) {
            document.getElementById('load').style.visibility = 'visible';
    }

    else{
        alert("Slaptažodžiai nesutampa, perkraukite puslapį ir pakartokite dar kartą!");


}}

