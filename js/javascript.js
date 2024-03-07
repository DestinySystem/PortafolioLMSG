//let ventanaDesc=window.open("./main/index.html","Sobre mí",height=500,width=400,resizeable=1);


function AbrirVentana(obj,location) {
    let ventana = window.open();
    ventana.location = "hello.com/dummypage.html"; //how to assign the url to the newly opened window
}

let ventanaDesc=AbrirVentana(ventana,"");

