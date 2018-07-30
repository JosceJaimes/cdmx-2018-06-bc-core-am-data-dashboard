
const container = document.getElementById('alumnas'); 
//  Primer acercamiento a la data donde nos muestra las tres generaciones de la sede Lima.
laboratoria = (data) =>{
  document.getElementById('boton1').addEventListener('click', (event) => {
    let estudiante = data.lima.generacion.cuarta.estudiantes;
    let progress = estudiante.progreso;
    let result = '';
    let status = '';
    for (progress of estudiante) {
      let pro = progress.progreso.porcentajeCompletado;
      let percentDuration = progress.progreso.duracionPrograma;
      if (pro >= 60) {
        status = 'Alumna promedio';
      } else if (pro <= 60) {
        status = 'Alumna con con bajo desempeño';
      } else if (pro >= 90) {
        status = 'Alumna sobresaliente';
      }   
      
      for (let i = 0; i < estudiante.length; i++) {
        let nombres = estudiante[i];
        result += `<div class="col-md-4">
      <div class="card">
      <div class = "estudiante">
    
      <p>Nombre: ${nombres.nombre}</p>
      <p>Correo: ${nombres.correo}</p>
      <p>Turno: ${nombres.turno}</p>
      <p>Estatus: ${status}</p>
      <p>Duración del programa: ${percentDuration}</p>
      </div>
      </div>
      </div> `;
      }
      container.innerHTML = result;
      return result;
    };
  });

  // Aplicacion de la segunda sede (Santiago).
  document.getElementById('boton2').addEventListener('click', (event) => {
    let estudiante = data.santiago.generacion.cuarta.estudiantes;
    let progress = estudiante.progreso;
    let result = '';
    for (progress of estudiante) {
      let pro = progress.progreso.porcentajeCompletado;
      let percentDuration = progress.progreso.duracionPrograma;
      //  console.log(percentComplete);
      if (pro >= 60) {
        status = 'Alumna promedio';
      } else if (pro <= 60) {
        status = 'Alumna con con bajo desempeño';
      } else if (pro >= 90) {
        status = 'Alumna sobresaliente';
      }   
      
      for (let i = 0; i < estudiante.length; i++) {
        let nombres = estudiante[i];
 
        result += `<div class="card">
        <div class = "estudiante">
      
        <p>Nombre: ${nombres.nombre}</p>
        <p>Correo: ${nombres.correo}</p>
        <p>Turno: ${nombres.turno}</p>
        <p>Estatus: ${status}</p>
        <p>Duración del programa: ${percentDuration}</p>
        </div>
        </div> `;
      }
      container.innerHTML = result;
      return result;
    }
  }),
  // Tercer boton donde se muestran las generaciones de la sede de Santiago.  
  document.getElementById('boton3').addEventListener('click', (event) => {
    let estudiante = data.santiago.generacion.cuarta.estudiantes;
    let progress = estudiante.progreso;
    let result = '';
    for (progress of estudiante) {
      let pro = progress.progreso.porcentajeCompletado;
      let percentDuration = progress.progreso.duracionPrograma;
      // console.log(percentDuration);
      if (pro >= 60) {
        status = 'Alumna promedio';
      } else if (pro <= 60) {
        status = 'Alumna con con bajo desempeño';
      } else if (pro >= 90) {
        status = 'Alumna sobresaliente';
      }   
      
      for (let i = 0; i < estudiante.length; i++) {
        let nombres = estudiante[i];
        
 
        result += `<div class="card">
        <div class = "estudiante">
      
        <p>Nombre: ${nombres.nombre}</p>
        <p>Correo: ${nombres.correo}</p>
        <p>Turno: ${nombres.turno}</p>
        <p>Estatus: ${status}</p>
        <p>Duración del programa: ${percentDuration}</p>
        </div>
        </div> `;
        // });
      }
    }
    container.innerHTML = result;
    return result;
  });
};

computeStudentsStats = (laboratoria) =>{
  let data = Object.keys(laboratoria);
  console.log(data);
};
computeGenerationsStats = (laboratoria) => {

};
sortStudents = (students, orderBy, orderDirection) =>{

};
filterStudents = (students, search) =>{

};