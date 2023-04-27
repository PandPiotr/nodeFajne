const Puller = require("./puller")

const puller = new Puller("html://wiktoria.samochod.pl");

function printData(my_object){
    console.log(`otrzymane dane: ${my_object.data} z adresu: ${my_object.url}`)
}

puller.on("data", printData);

puller.pull()


