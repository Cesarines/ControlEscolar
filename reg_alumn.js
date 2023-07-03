function Alumno(id, names,apepaterno,apematerno, edad,curso,calificacion,grupo) {
    this.id = id;
    this.names =names;
    this.apepaterno=apepaterno;
    this.apematerno=apematerno;
    this.edad = edad;
    this.curso=curso;
    this.calificacion=calificacion;
    this.grupo=grupo;
  }
  var alumnos = [];
  function obtenerMatricula(){
  var obtenerM = document.getElementById("matricula").value;
  
  return obtenerM; 
  }
  function obtenerNombre() { 
  var obtenerN = document.getElementById("nombre").value;

  return obtenerN; 
  }
  function obtenerApepat(){
  var obtenerAp=document.getElementById("apepaterno").value;
  return obtenerAp;
  }
  function obtenerApemat(){
  var obtenerAm=document.getElementById("apematerno").value;  
  return obtenerAm;
  }
  function obtenerEdad() { // Obtengo la edad del input
    var obtenerE = document.getElementById("edad").value;
    obtenerE = parseInt(obtenerE); 
    return obtenerE;
  }
  function crearAlumno() {
    var registroAlu= new Alumno (obtenerMatricula(), obtenerNombre(),obtenerApepat(),obtenerApemat(), obtenerEdad(),'-','-','-');
    alumnos.push(registroAlu);
    mostrarListado();
    ListaNuevos();
    calcupro();
   
  }  
   function mostrarListado(){
      var mensaje=confirm("Verifique los Datos Antes de Guardar");
      if(mensaje){
      alert("Alumnos Registrado Exitosamente");
      document.getElementById("idAlumno").innerHTML=obtenerMatricula();
      document.getElementById("nombreAlumno").innerHTML=obtenerNombre();
      document.getElementById("apepaternos").innerHTML=obtenerApepat();
      document.getElementById("apematernos").innerHTML=obtenerApemat();
      document.getElementById("edadAlumno").innerHTML=obtenerEdad();
      }
  }