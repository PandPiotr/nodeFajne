const EventEmitter = require("events")


const emitter = new EventEmitter()
// on - addListener
emitter.on("message", function(msg){
    console.log("wiadomosc "+ msg)
})

emitter.emit("message", "pochodze z metody emit")