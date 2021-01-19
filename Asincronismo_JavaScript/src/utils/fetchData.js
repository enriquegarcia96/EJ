//para hacer instancias  a un llamado a una API desde JS
let XMLHttpRequets = require('xmlhttprequest').XMLHttpRequest;

const  fetchData = (url_api) => {
    return new Promise((resolve, reject) =>{
        const xhttp = new XMLHttpRequets();
    xhttp.open('GET',url_api, true); //activa el asincronismo 
    xhttp.onreadystatechange = (( ) => {
        if (xhttp.readyState === 4) {//estado en el que se encuentra
             (xhttp.status === 200) 
                ? resolve(JSON.parse(xhttp.responseText))
                : reject(new Error('Error', url_api))
        }
    });
    xhttp.send();
    });
}



module.exports = fetchData;