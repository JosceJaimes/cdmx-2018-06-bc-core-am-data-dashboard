window.data = {
    devolverData: () => {  
        let statusApi = fetch('https://raw.githubuser.content.com/Laboratoria/cdmx-2018-06-bc-core-am-data-dashboard/master/data/laboratoria.json');
        data.computeStudentsStats(statusApi);
    },

//declarar la funcion sacando los datos de la url, pidiendo una respuesta a json
    computeStudentsStats:(statusApi) => {
        statusApi.then(function(res){
            //el return se aplica unicamente en esta parte ya que no se esta ejecutando la función .
            return res.json();
            // console.log(data);
        })
        .then(data.computeStudentsStats)
      
    
    }




}

 

