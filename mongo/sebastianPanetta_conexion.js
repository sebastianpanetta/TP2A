const mongoclient = require('mongodb').MongoClient;
const chalk = require('chalk');

const uri = "mongodb+srv://admin:betp2@cluster0-zdy6w.mongodb.net/test?retryWrites=true&w=majority";
const client = new mongoclient(uri, {useNewUrlParser:true, useUnifiedTopology:true});

client.connect((err, result) =>{
    if(!err){
        console.log(chalk.blue('Cliente conectado'));
        let collection = result.db("sample_betp2").collection("inventors");
            
        collection.find().limit(20).toArray((err, result) => {
            console.log(result);
            crud(collection);
        });
    } else {
        console.log(chalk.red(err));
    }
});

// Insert inventor
function insertInventor(collection){
    return new Promise((resolve)=>{
        const nuevoInventor = {
                    first: "Pedro1234",
                    last: "Perez1234",
                    year: 1987
                }
        resolve(collection.insertOne(nuevoInventor));
    });
}

// Update inventor
function updateInventor(collection){
    return new Promise((resolve)=>{
        resolve(collection.updateOne({last: "Perez1234"}, {$set: {year: 2000}}));
    });
}

// Delete inventor
function deleteInventor(collection){
    return new Promise((resolve)=>{
        resolve(collection.deleteOne({last: "Perez1234"}));
    });
}

// CRUD function
async function crud(collection){
    
    await insertInventor(collection)
        .then( () => {
            console.log(chalk.yellow("Inventor insertado correctamente"));
        })
        .catch(error => {
            console.log("Error!", error);
        });
    
    await updateInventor(collection)
        .then( () => {
            console.log(chalk.yellow("Inventor actualizado correctamente"));
        })
        .catch(error => {
            console.log("Error!", error);
        });
    
    await deleteInventor(collection)
        .then( () => {
            console.log(chalk.yellow("Inventor eliminado correctamente"));
        })
        .catch(error => {
            console.log("Error!", error);
        });
    
}
