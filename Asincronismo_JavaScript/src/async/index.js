const doSomethingAsyns = () =>{
    return new Promise((resolve, reject) =>{

        (true)
        ? setTimeout(() => resolve('Do Somenthing Async'), 3000)
        : reject(new Error('Test Error'))
    });
}

const doSomething = async ( ) =>{
    const somenthing = await doSomethingAsyns()
    console.log(somenthing);
}

console.log('Before');
doSomething()
console.log('After')

const anotherFuntion = async () =>{
    try {
        const something = await doSomethingAsyns();
        console.log(something)
    } catch (error) {
        console.error(error)
    }
}


console.log('Before 1');
anotherFuntion()
console.log('After 1')
