let edad = prompt("Ingrese su edad")
if(edad >= 18){
    alert("Sos mayor, podes inscribirte en  nuestros cursos")
}else{
    alert("Sos menor, igualmente podes consultar por nuestros cursos")
}


let cursos = prompt("Escriba un curso de programacion")
 switch (cursos){
    case "php":
        document.write("Php se dicta lunes y miercoles")
    break
    
    case "javascript":
        document.write("Java Script se dicta martes y jueves")
    break

    case "desarrollo web":
        document.write("Php se dicta los sabados")
    break

    case "python":
        document.write("Python se dicta lunes y miercoles")
    break

    default:
        document.write("No dictamos " + cursos)
        break

 }
