var dragged;

/* events fired on the draggable target */
document.addEventListener("drag", function (event) {

}, false);

document.addEventListener("dragstart", function (event) {
    // store a ref. on the dragged elem
    dragged = event.target;
    // make it half transparent
    //stiliu perkelti i css
    event.target.style.opacity = 1;
    },false);

document.addEventListener("dragend", function(event) {
    // reset the transparency
    event.target.style.opacity = "";
    },false);

//events fired on the drop targets
document.addEventListener("dragover", function(event) {
    // prevent default to allow drop
    event.preventDefault();
}, false);

document.addEventListener("dragenter", function(event) {
// highlight potential drop target when the draggable element enters it
    if (event.target.className === "black") {
        //event.target.style.background = "grey";
    }
    },false);

document.addEventListener("dragleave", function(event) {
// reset background of potential drop target when the draggable element leaves it
    if (event.target.class === " black") {
        //event.target.style.background = "grey";
    }
},false);

document.addEventListener("drop", function(event) {
// prevent default action (open as link for some elements)
    event.preventDefault();
// move dragged elem to the selected drop target
    if (event.target.className === "black") {
        //event.target.style.background = "grey";
        dragged.parentNode.removeChild(dragged);
        event.target.appendChild(dragged);
    }
},false);



//https://jsfiddle.net/api/mdn/