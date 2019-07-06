const url = 'https://raw.githubusercontent.com/Laboratoria/cdmx-2018-06-bc-core-am-data-dashboard/master/data/laboratoria.json';
// Se genera una función y dentro de ella una constante con la url del JSON para llamarlo
window.onload = () => {
  fetch(url)
    .then(respuesta => respuesta.json())
    .then(data => {
      laboratoria(data);
      computeStudentsStats(laboratoria);
    })
    .catch(error =>{
      console.log(error);
    });
};


// const url = 'https://raw.githubusercontent.com/Laboratoria/cdmx-2018-06-bc-core-am-data-dashboard/master/data/laboratoria.json';

// const axios = require('axios');


//   axios.get(url)
//   .then(response => response.json())
//   .then(data =>{
//     console.log(data)
//   })








// axios.get(url)
//   .then(function (response) {
//     // handle success
//     console.log(response);
//   })
//   .catch(function (error) {
//     // handle error
//     console.log(error);
//   })
//   .then(function () {
//     // always executed
//   });


  