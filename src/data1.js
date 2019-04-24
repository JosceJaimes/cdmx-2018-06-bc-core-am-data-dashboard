laboratoria = (data) => {
    fetch(data)
    .then(resp=> resp.json())
    .then(sedes =>{
        console.log(sedes)
    })
}