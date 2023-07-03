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
  function ListaNuevos(){
    var listaid='';
    var listanombre='';
    var listapaterno='';
    var listamaterno='';
    var listaedad='';
    var listacurso='';
    var listacalificacion='';
    var listagrupo='';
    for(var i=0; i<alumnos.length; i++){
      listaid+=alumnos[i].id+'\n';
      listanombre+=alumnos[i].names+'\n';
      listapaterno+=alumnos[i].apepaterno+'\n';
      listamaterno+=alumnos[i].apematerno+'\n';
      listaedad+=alumnos[i].edad+'\n'; 
      listacurso+=alumnos[i].curso+'\n';
      listacalificacion+=alumnos[i].calificacion+'\n';
      listagrupo+=alumnos[i].grupo+'\n';
    }
   document.getElementById('idListado').innerText =listaid;
       document.getElementById('nombreListado').innerText =listanombre;
    document.getElementById('paternoListado').innerText = listapaterno;
    document.getElementById('maternoListado').innerText = listamaterno;
    document.getElementById('edadListado').innerText = listaedad;
    document.getElementById('cursoListado').innerText = listacurso;
    document.getElementById('calificacionListado').innerText = listacalificacion;
    document.getElementById('grupoListado').innerText = listagrupo;
  }