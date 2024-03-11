
/*const btn_monitor = document.getElementById("btn_monitor");
const btn_me = document.getElementById("btn_me");
const btn_cont = document.getElementById("btn_cont");
const btn_exp = document.getElementById("btn_exp");

btn_monitor.addEventListener("click", () => {
    // Crear un div para la ventana emergente
    const ventana = document.createElement("div");
    ventana.className = "ventana";
    
    // Crear un div para la barra de título
    const barraTitulo = document.createElement("div");
    barraTitulo.className = "barra-titulo";
    barraTitulo.textContent = "Documento Profesional";
    
    // Crear un botón para cerrar la ventana
    const btnCerrar = document.createElement("button");
    btnCerrar.textContent = "X";
    btnCerrar.className = "btn-cerrar";
    btnCerrar.addEventListener("click", () => {
        document.body.removeChild(ventana);
    });
    
    // Crear un div para el contenido de la ventana
    const contenido = document.createElement("div");
    contenido.className = "contenido";
    contenido.innerHTML = 
    "<p>Tengo habilidades en Java, HTML, CSS, JavaScript y SQL. <br> <img src='https://static-00.iconduck.com/assets.00/java-icon-256x256-pqr4trbh.png' width='35' alt='java_logo'/> <img src='https://mirayhazlo.com/wp-content/uploads/2018/09/Html5_dise%C3%B1o_web-1.png' width='35' alt='HTML_logo'/>            <img src='https://cdn.pixabay.com/photo/2017/08/05/11/16/logo-2582747_1280.png' width='35' alt='css_logo'/> <img src='https://mercedesdavila.github.io/img/js.png' width='35' alt='javascript_logo'/>  <img src='https://cdn-icons-png.flaticon.com/512/7487/7487986.png' width='35' alt='sql_logo'/></p>" +
    
    "<img src='https://www.misclientesparasiempre.es/wp-content/uploads/2018/01/012018-JavaLenguajeProgramacion.jpg' width='300' alt='imagen-profesional'/>";
    
    // Agregar elementos a la barra de título
    barraTitulo.appendChild(btnCerrar);
    
    // Agregar elementos a la ventana
    ventana.appendChild(barraTitulo);
    ventana.appendChild(contenido);
    
    // Agregar ventana al body del documento
    document.body.appendChild(ventana);
});

btn_me.addEventListener("click", () => {
    // Crear un div para la ventana emergente
    const ventana = document.createElement("div");
    ventana.className = "ventana";
    
    // Crear un div para la barra de título
    const barraTitulo = document.createElement("div");
    barraTitulo.className = "barra-titulo";
    barraTitulo.textContent = "Sobre mi";
    barraTitulo.style.backgroundColor = "pink"
    barraTitulo.style.color="#634160"
    // Crear un botón para cerrar la ventana
    const btnCerrar = document.createElement("button");
    btnCerrar.textContent = "X";
    btnCerrar.className = "btn-cerrar";
    btnCerrar.addEventListener("click", () => {
        document.body.removeChild(ventana);
    });
    
    // Crear un div para el contenido de la ventana
    const contenido = document.createElement("div");
    contenido.className = "contenido";
    contenido.innerHTML = 
    "<p>Hola a todos, me llamo Sandra y soy estudiante de informática. Soy una persona divertida y creativa a la que le apasiona la tecnología. siempre estoy dispuesta a aprender cosas nuevas. Me encanta trabajar en equipo y colaborar con otros para crear soluciones innovadoras.<br>Mi vida es una fusión de música, diversión, aventura e inteligencia. Desde los ritmos que me hacen bailar hasta las experiencias que me desafían, cada día es una nueva oportunidad para explorar, aprender y crecer.</p>" +
    "<img src='https://www.shutterstock.com/image-illustration/panda-bear-bubu-dudu-couple-600nw-2404973101.jpg'/>";

    // Agregar elementos a la barra de título
    barraTitulo.appendChild(btnCerrar);
    
    // Agregar elementos a la ventana
    ventana.appendChild(barraTitulo);
    ventana.appendChild(contenido);
    
    // Agregar ventana al body del documento
    document.body.appendChild(ventana);

    ventana.style.transform = "translate(0%, -80%)"
});

btn_cont.addEventListener("click", () => {
    // Crear un div para la ventana emergente
    const ventana = document.createElement("div");
    ventana.className = "ventana";
    
    // Crear un div para la barra de título
    const barraTitulo = document.createElement("div");
    barraTitulo.className = "barra-titulo";
    barraTitulo.textContent = "Contacto";
    barraTitulo.style.backgroundColor = "#88a4f8"
    barraTitulo.style.color="#384469"
    // Crear un botón para cerrar la ventana
    const btnCerrar = document.createElement("button");
    btnCerrar.textContent = "X";
    btnCerrar.className = "btn-cerrar";
    btnCerrar.addEventListener("click", () => {
        document.body.removeChild(ventana);
    });
    
    // Crear un div para el contenido de la ventana
    const contenido = document.createElement("div");
    contenido.className = "contenido";
    contenido.innerHTML = 
    "<p>Introduce tu información de contacto:<br></br> <form></form></p>";

    // Agregar elementos a la barra de título
    barraTitulo.appendChild(btnCerrar);
    
    // Agregar elementos a la ventana
    ventana.appendChild(barraTitulo);
    ventana.appendChild(contenido);
    
    // Agregar ventana al body del documento
    document.body.appendChild(ventana);

    ventana.style.transform = "translate(0%, -80%)"
});

btn_exp.addEventListener("click", () => {
    // Crear un div para la ventana emergente
    const ventana = document.createElement("div");
    ventana.className = "ventana";
    
    // Crear un div para la barra de título
    const barraTitulo = document.createElement("div");
    barraTitulo.className = "barra-titulo";
    barraTitulo.textContent = "Experiencia";
    barraTitulo.style.backgroundColor = "#88a4f8"
    barraTitulo.style.color="#384469"
    // Crear un botón para cerrar la ventana
    const btnCerrar = document.createElement("button");
    btnCerrar.textContent = "X";
    btnCerrar.className = "btn-cerrar";
    btnCerrar.addEventListener("click", () => {
        document.body.removeChild(ventana);
    });
    
    // Crear un div para el contenido de la ventana
    const contenido = document.createElement("div");
    contenido.className = "contenido";
    contenido.innerHTML = 
    "<p></p>";

    // Agregar elementos a la barra de título
    barraTitulo.appendChild(btnCerrar);
    
    // Agregar elementos a la ventana
    ventana.appendChild(barraTitulo);
    ventana.appendChild(contenido);
    
    // Agregar ventana al body del documento
    document.body.appendChild(ventana);

    ventana.style.transform = "translate(0%, -80%)"
});
*/
document.addEventListener('DOMContentLoaded', function() 
{
    let params = `scrollbars=no,resizable=no,status=no,location=no,toolbar=no,menubar=no,width=600,height=300,left=100,top=100`;
    const btn_monitor = document.getElementById("btn_monitor");
    const btn_me = document.getElementById("btn_me");
    const btn_cont = document.getElementById("btn_cont");
    const btn_exp = document.getElementById("btn_exp");

    function crearVentana(titulo, estiloFondo, estiloTexto, contenidoHTML) {
        const ventana = document.createElement("div");
        ventana.className = "ventana";

        const barraTitulo = document.createElement("div");
        barraTitulo.className = "barra-titulo";
        barraTitulo.textContent = titulo;
        barraTitulo.style.backgroundColor = estiloFondo;
        barraTitulo.style.color = estiloTexto;

        const btnCerrar = document.createElement("button");
        btnCerrar.textContent = "X";
        btnCerrar.className = "btn-cerrar";
        btnCerrar.addEventListener("click", () => {
            document.body.removeChild(ventana);
        });

        const contenido = document.createElement("div");
        contenido.className = "contenido";
        contenido.innerHTML = contenidoHTML;

        barraTitulo.appendChild(btnCerrar);
        ventana.appendChild(barraTitulo);
        ventana.appendChild(contenido);

        document.body.appendChild(ventana);

        ventana.style.transform = "translate(0%, -80%)";
    }

    btn_monitor.addEventListener("click", () => {
        const contenidoHTML = `<p>Tengo habilidades en Java, HTML, CSS, JavaScript y SQL. <br> <img src='https://static-00.iconduck.com/assets.00/java-icon-256x256-pqr4trbh.png' width='35' alt='java_logo'/> <img src='https://mirayhazlo.com/wp-content/uploads/2018/09/Html5_dise%C3%B1o_web-1.png' width='35' alt='HTML_logo'/> <img src='https://cdn.pixabay.com/photo/2017/08/05/11/16/logo-2582747_1280.png' width='35' alt='css_logo'/> <img src='https://mercedesdavila.github.io/img/js.png' width='35' alt='javascript_logo'/> <img src='https://cdn-icons-png.flaticon.com/512/7487/7487986.png' width='35' alt='sql_logo'/></p><img src='https://www.misclientesparasiempre.es/wp-content/uploads/2018/01/012018-JavaLenguajeProgramacion.jpg' width='300' alt='imagen-profesional'/>`;
        crearVentana("Documento Profesional", "", "", contenidoHTML);
    });

    btn_me.addEventListener("click", () => {
        const contenidoHTML = "<p>Hola a todos, me llamo Sandra y soy estudiante de informática. Soy una persona divertida y creativa a la que le apasiona la tecnología. siempre estoy dispuesta a aprender cosas nuevas. Me encanta trabajar en equipo y colaborar con otros para crear soluciones innovadoras.<br>Mi vida es una fusión de música, diversión, aventura e inteligencia. Desde los ritmos que me hacen bailar hasta las experiencias que me desafían, cada día es una nueva oportunidad para explorar, aprender y crecer.</p><img src='https://www.shutterstock.com/image-illustration/panda-bear-bubu-dudu-couple-600nw-2404973101.jpg'/>";
        crearVentana("Sobre mi", "pink", "#634160", contenidoHTML);
    });

    btn_cont.addEventListener("click", () => {
        const contenidoHTML = "<p>Introduce tu información de contacto:<br></br> <form></form></p>";
        crearVentana("Contacto", "#88a4f8", "#384469", contenidoHTML);
    });

    btn_exp.addEventListener("click", () => {
        const contenidoHTML = "<p></p>";
        crearVentana("Experiencia", "#88a4f8", "#384469", contenidoHTML);
    });
});


