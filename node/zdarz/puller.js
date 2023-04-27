const EventEmitter = require("events")

class Puller extends EventEmitter{
    constructor(url){
        super();
        this.url = url;
    }

    pull(){
        this.interval = setInterval(
            () => this.emit("data", {
                data: "cokolwiek",
                url: this.url
            })
            , 1)
    }

}

module.exports = Puller;