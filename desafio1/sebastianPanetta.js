let data = require('./data');

// crear un array separando el listado por cada salto de linea
let items = data.split("\n");

console.log("Items: ");
console.log(items);
console.log();

// filtrar para dejar solo los items que incluyen Flexbox
const onlyFlexbox = items.filter(i => i.includes('Flexbox'));

console.log("Solo videos FlexBox: ");
console.log(onlyFlexbox);
console.log();

// filtrar para dejar solo los tiempos
// .map crea un nuevo array con los resultados de la llamada a la función indicada 
var durations = onlyFlexbox.map(function (x) {
    return x.split("<li data-time=")[1]
            .split(">")[0]
            .split("\"")[1];
});

console.log("Duración de cada video FlexBox: ");
console.log(durations);
console.log();

let total = sumarDurations(durations);

// sumar segundos de video con un reduce
function sumarDurations(durations) {
    return durations.reduce((sum, string) => {
        var mins, segs;
        // parseInt(n) parsear cada elemento a entero
        [mins, segs] = string.split(":").map(n => parseInt(n));
        return sum + mins * 60 + segs;
    }, 0);
}

console.log("Segundos totales Flexbox Video: ");
console.log(total);
console.log();