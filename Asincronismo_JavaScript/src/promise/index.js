const somethingWillHappen = () =>{
    //retorna una nueva promesa
    return new Promise((resolve, reject)=>{
        if (true) {
            resolve('Hey!');
        }else{
            reject('Whooooops!');
        }
    });
};


somethingWillHappen()
    .then(response => console.log(response))
    .catch(error => console.error(error))



const somethingWillHappen2 = () =>{
    return new Promise((resolve, reject)=>{
        if (true) {
            setTimeout(() => {
                    resolve('True')
            },3000);     
        }else{
            const error = new Error('Whooops');
            reject (error);
        }
    });
}

somethingWillHappen2()
    .then(response => console.log(response))
    .then(() => console.log('hola'))
    .catch(err => console.error(err)) 



//Ejecuta  varias promesas a la vez,  en un arreglo []
Promise.all([somethingWillHappen(), somethingWillHappen2()])
.then(response =>{
    console.log('Array of result', response);
})
.catch(err => {
    console.error(err);
})
