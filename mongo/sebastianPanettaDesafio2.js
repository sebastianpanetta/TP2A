function resolver3segundos(){
    return new Promise((resolve, reject)=>{
        let error = false;
        if (!error) {
            setTimeout(() => {
                resolve('called resolver3segundos');
            }, 3*1000);
        } else {
            reject('Something bad happened');
        }
    });
}

function resolver2segundos(){
    return new Promise((resolve, reject)=>{
        let error = false;
        if (!error) {
            setTimeout(() => {
                resolve('called resolver2segundos');
            }, 2*1000);
        } else {
            reject('Something bad happened');
        }
    });
}

async function asyncCall(){
    await resolver3segundos()
        .then((result) => {
            console.log("Success resolver3segundos", result);
        })
        .catch(error => {
            console.log("Error!", error);
        });
    await resolver2segundos()
        .then((result) => {
            console.log("Success resolver2segundos", result);
        })
        .catch(error => {
            console.log("Error!", error);
        });
}

asyncCall();