function myFunctionClose() {
    document.getElementById("image-block").setAttribute("style", "display:none;");
}

function myFunctionCloseTwo() {
    document.getElementById("image-block-2").setAttribute("style", "display:none;");
}

function myFunctionCloseThree() {
    document.getElementById("image-block-3").setAttribute("style", "display:none;");
}

function myFunctionCloseFour() {
    document.getElementById("image-block-4").setAttribute("style", "display:none;");
}

function myFunctionCloseSix() {
    document.getElementById("readme").setAttribute("style", "display:none;");
}



function myFunction() {
    var x = document.getElementById("image-block");
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
}

function myFunctionTwo() {
    var x = document.getElementById("image-block-4");
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
}

function myFunctionFour() {
    var x = document.getElementById("image-block-3");
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
}

function myFunctionFive() {
    var x = document.getElementById("image-block-2");
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
}function myFunctionNine() {
    var x = document.getElementById("image-block-6");
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
}
function myFunctionSix() {
    var x = document.getElementById("readme");
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
}





dragElement(document.getElementById("main-container"));

dragElement(document.getElementById("main-container-2"));

dragElement(document.getElementById("main-container-3"));

dragElement(document.getElementById("main-container-4"));

dragElement(document.getElementById("main-container-5"));
dragElement(document.getElementById("main-container-6"));
dragElement(document.getElementById("main-container-7"));
dragElement(document.getElementById("image-block"));

dragElement(document.getElementById("image-block-2"));

dragElement(document.getElementById("image-block-3"));

dragElement(document.getElementById("image-block-4"));

dragElement(document.getElementById("image-block-5"));
dragElement(document.getElementById("image-block-6"));
dragElement(document.getElementById("image-block-7"));
dragElement(document.getElementById("readme"));





function dragElement(elmnt) {
    var pos1 = 0,
        pos2 = 0,
        pos3 = 0,
        pos4 = 0;
    if (document.getElementById(elmnt.id + "container")) {
        /* if present, the header is where you move the DIV from:*/
        document.getElementById(elmnt.id + "container").onmousedown = dragMouseDown;
    } else {
        /* otherwise, move the DIV from anywhere inside the DIV:*/
        elmnt.onmousedown = dragMouseDown;
    }

    function dragMouseDown(e) {
        e = e || window.event;
        e.preventDefault();
        // get the mouse cursor position at startup:
        pos3 = e.clientX;
        pos4 = e.clientY;
        document.onmouseup = closeDragElement;
        // call a function whenever the cursor moves:
        document.onmousemove = elementDrag;
    }

    function elementDrag(e) {
        e = e || window.event;
        e.preventDefault();
        // calculate the new cursor position:
        pos1 = pos3 - e.clientX;
        pos2 = pos4 - e.clientY;
        pos3 = e.clientX;
        pos4 = e.clientY;
        // set the element's new position:
        elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
        elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
    }

    function closeDragElement() {
        /* stop moving when mouse button is released:*/
        document.onmouseup = null;
        document.onmousemove = null;
    }
}