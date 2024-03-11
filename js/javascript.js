
const btn_monitor = document.getElementById("btn_monitor");
const btn_me = document.getElementById("btn_me");

btn_monitor.addEventListener("click", () => {
    // Crear un div para la ventana emergente
    const ventana = document.createElement("div");
    ventana.className = "ventana";
    
    // Crear un div para la barra de título
    const barraTitulo = document.createElement("div");
    barraTitulo.className = "barra-titulo";
    barraTitulo.textContent = "Experiencia Personal";
    
    // Crear un botón para cerrar la ventana
    const btnCerrar = document.createElement("button");
    btnCerrar.textContent = "x";
    btnCerrar.className = "btn-cerrar";
    btnCerrar.addEventListener("click", () => {
        document.body.removeChild(ventana);
    });
    
    // Crear un div para el contenido de la ventana
    const contenido = document.createElement("div");
    contenido.className = "contenido";
    contenido.innerHTML = 
    "<div style='display:flex;'><div><p>Hola a todos, me llamo Sandra y soy estudiante de informática. Soy una persona divertida y creativa a la que le apasiona la tecnología. siempre estoy dispuesta a aprender cosas nuevas. Me encanta trabajar en equipo y colaborar con otros para crear soluciones innovadoras.Tengo habilidades en Java, HTML, CSS, JavaScript y SQL. <br> <img src='https://static-00.iconduck.com/assets.00/java-icon-256x256-pqr4trbh.png' width='35' alt='java_logo'/> <img src='https://mirayhazlo.com/wp-content/uploads/2018/09/Html5_dise%C3%B1o_web-1.png' width='35' alt='HTML_logo'/><img src='https://cdn.pixabay.com/photo/2017/08/05/11/16/logo-2582747_1280.png' width='35' alt='css_logo'/> <img src='https://mercedesdavila.github.io/img/js.png' width='35' alt='javascript_logo'/>  <img src='https://cdn-icons-png.flaticon.com/512/7487/7487986.png' width='35' alt='sql_logo'/></p></div><img src='https://www.freecodecamp.org/news/content/images/2022/12/main-image.png' alt='programminwallapper' width='280'></div>"+
    "<strong>contáctame</strong> <a href='#contactame'>Contactarme</a>";
    
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
    barraTitulo.style.color="black"
    // Crear un botón para cerrar la ventana
    const btnCerrar = document.createElement("button");
    btnCerrar.textContent = "x";
    btnCerrar.className = "btn-cerrar";
    btnCerrar.addEventListener("click", () => {
        document.body.removeChild(ventana);
    });
    
    // Crear un div para el contenido de la ventana
    const contenido = document.createElement("div");
    contenido.className = "contenido";
    contenido.innerHTML = 
    "<div style='display:flex; justify-content:center;'> <p>Hola a todos, me llamo Sandra. mi vida es una fusión de música, diversión, aventura e inteligencia. Desde los ritmos que me hacen bailar hasta las experiencias que me desafían, cada día es una nueva oportunidad para explorar, aprender y crecer. ¡Gracias por acompañarme en este viaje y que la música siempre esté presente en nuestras vidas!</p>" +
    "<img src='https://www.shutterstock.com/image-illustration/panda-bear-bubu-dudu-couple-600nw-2404973101.jpg' width='240'/></div>"+ 
    "<strong>Más sobre mi 👉</strong><a href='#conocememas'>Conocerme mas</a>";
    

let params = `scrollbars=no,resizable=no,status=no,location=no,toolbar=no,menubar=no,
width=600,height=300,left=100,top=100`;

    // Agregar elementos a la barra de título
    barraTitulo.appendChild(btnCerrar);
    
    // Agregar elementos a la ventana
    ventana.appendChild(barraTitulo);
    ventana.appendChild(contenido);
    
    // Agregar ventana al body del documento
    document.body.appendChild(ventana);

    ventana.style.transform = "translate(0%, -80%)"
});
