
alert ("Bienvenidos a mi sitio");
let confirmacion = confirm ("Esta seguro de querer avanzar");
termina = document.querySelector(".termina");
if (confirmacion == false) {termina.innerHTML = "Lamentamos que no querias continuar tu visita por este sitio increible."}
else if (confirmacion == true) {termina.innerHTML = "¡Qué alegría que quieras seguir con tu visita por este maravilloso sitio!";
nombre = prompt ("¿Cual es su nombre?") ; } 
saludo = document.querySelector(".sigue");
saludo.innerHTML = "Bienvendido " + nombre;

edad = prompt("¿Cual es su edad?");
if(edad <18){acceso= alert("Prohibido su acceso")}
else if (edad>= 18){acceso= alert("Permitido su acceso");oscuro = confirm ("¿Desea usted utilizar el modo oscuro?")
cuerpo = document.querySelector(".cuerpo");
if (oscuro == true) {cuerpo.style.backgroundColor = "dimgray"; cuerpo.style.color = "white";}

diaDeSemana = ("Domingo")
if (diaDeSemana = "Domingo"){alert("¡Hoy es día de descanso!")} }
