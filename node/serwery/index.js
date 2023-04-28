const net = require("net")

const http = require("http")

const server = http.createServer( (req, res)=>{

    res.setHeader("Content-type","text/html")
    res.write("Hellow from http \n")
    res.end("<h1>koniec polaczenia</h1> ")
} )

// const server = net.createServer( (socked)=> {
//     socked.write("Hejka tu lenka")
//     socked.end("to juz koniec ")
// })

server.listen(8080,()=>{
    console.log("Serwer nasluchuje lenke 127.0.0.1:8080")
})