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
  function registrarCurso(){
  var curso= parseInt(document.getElementById('id_curso').value);
  var id = parseInt(document.getElementById('matriculaa').value);
  if (!(isNaN(curso) || isNaN(id))){
    for (var i=0; i<alumnos.length; i++){
      if (alumnos[i].id==id){
        alumnos[i].curso= curso;
      }
    }
    ListaNuevos();
  }
  
}
function grupos(){
  var grupo= parseInt(document.getElementById('grupo').value);
  var id = parseInt(document.getElementById('matriculados').value);
  if (!(isNaN(grupo) || isNaN(id))){
    for (var i=0; i<alumnos.length; i++){
      if (alumnos[i].id==id){
        alumnos[i].grupo=grupo;
      }
    }
    ListaNuevos();
  }
  
}
function califi(){
  var calificacion= parseFloat(document.getElementById('cali').value);
  var id = document.getElementById('matriculadosq').value;
  if (!(isNaN(calificacion) || isNaN(id))){
    for (var ii=0; ii<alumnos.length; ii++){
      if (alumnos[ii].id==id){
        alumnos[ii].calificacion=calificacion;
      }
    }
    ListaNuevos();
  } 
}
function buscarAlum(){
  var ref=document.getElementById('dato').value;
  var resultadoss=alumnos.find(alu=>alu.names==ref);
  document.getElementById('datouno').innerHTML=resultadoss.id;
  document.getElementById('datodos').innerHTML=resultadoss.names;
  document.getElementById('datotres').innerHTML=resultadoss.apepaterno;
  document.getElementById('datocuatro').innerHTML=resultadoss.apematerno;
  document.getElementById('datocinco').innerHTML=resultadoss.edad;
  document.getElementById('datoseis').innerHTML=resultadoss.curso;
  document.getElementById('datosiete').innerHTML=resultadoss.calificacion;
  document.getElementById('datoocho').innerHTML=resultadoss.grupo;
}
function buscarApe(){
  var refe=document.getElementById('ape').value;
  var resultadosss=alumnos.find(alu=>alu.apepaterno==refe);
  document.getElementById('datounoo').innerHTML=resultadosss.id;
  document.getElementById('datodoss').innerHTML=resultadosss.names;
  document.getElementById('datotress').innerHTML=resultadosss.apepaterno;
  document.getElementById('datocuatroo').innerHTML=resultadosss.apematerno;
  document.getElementById('datocincoo').innerHTML=resultadosss.edad;
  document.getElementById('datoseiss').innerHTML=resultadosss.curso;
  document.getElementById('datosietee').innerHTML=resultadosss.calificacion;
  document.getElementById('datoochoo').innerHTML=resultadosss.grupo;
}
function calcupro(){
  var proo=document.getElementById('progrupo').value;
  var listaidg='';
  var listanombreg='';
  var listapaternog='';
  var listamaternog='';
  var listaedadg='';
  var listacursog='';
  var listacalificaciong='';
  var listagrupog='';
  var listapromedio=0;
  var num=0;
  var p=0;
  for(var i=0; i<alumnos.length; i++){
    if(alumnos[i].grupo==proo){
    listaidg+=alumnos[i].id+'\n';
    listanombreg+=alumnos[i].names+'\n';
    listapaternog+=alumnos[i].apepaterno+'\n';
    listamaternog+=alumnos[i].apematerno+'\n';
    listaedadg+=alumnos[i].edad+'\n'; 
    listacursog+=alumnos[i].curso+'\n';
    listacalificaciong+=alumnos[i].calificacion+'\n';
    listagrupog+=alumnos[i].grupo+'\n';
    listapromedio+=alumnos[i].calificacion;
    num++;
    p=(listapromedio/num);
  }}
 document.getElementById('idListadog').innerText = listaidg;
     document.getElementById('nombreListadog').innerText = listanombreg;
  document.getElementById('paternoListadog').innerText = listapaternog;
  document.getElementById('maternoListadog').innerText = listamaternog;
  document.getElementById('edadListadog').innerText = listaedadg;
  document.getElementById('cursoListadog').innerText = listacursog;
  document.getElementById('calificacionListadog').innerText = listacalificaciong;
  document.getElementById('grupoListadog').innerText = listagrupog;
  document.getElementById('promediototal').innerText=listapromedio;
  document.getElementById('num').innerText=num;
  document.getElementById('p').innerText=p;

 
}
function ascendente(){
var n='';
var n1='';
var n2='';
var n3='';
var n4='';
var n5='';
var n6='';
var n7='';
 alumnos.sort((a,b)=>a.calificacion-b.calificacion);

 
      for (var i=0; i<alumnos.length; i++){
    
      
      n+= alumnos[i].id+'\n';
      n1+=alumnos[i].names+'\n';
      n2+=alumnos[i].apepaterno+'\n';
      n3+=alumnos[i].apematerno+'\n';
      n4+=alumnos[i].edad+'\n';
      n5+=alumnos[i].curso+'\n';
      n6+=alumnos[i].calificacion+'\n';
      n7+=alumnos[i].grupo+'\n';
      
 
   }
   document.getElementById('asc').innerText=n;
   document.getElementById('asc1').innerText=n1;
   document.getElementById('asc2').innerText=n2;
   document.getElementById('asc3').innerText=n3;
   document.getElementById('asc4').innerText=n4;
   document.getElementById('asc5').innerText=n5;
   document.getElementById('asc6').innerText=n6;
   document.getElementById('asc7').innerText=n7;
   
   
  
}   
 