const fs = require("fs")

const path = require("path")

function my_path(filename){
    return path.join(__dirname, "teksty", filename)
}

// try {
//     let data = fs.readFileSync(my_path("lorem_1.txt"))
//     console.log(data.toString())
// }   catch(e){
//     console.log(e.message)
// }
// fs.mkdir(path.join(__dirname, "Drugi_Folder"), (err) => {
//     if (!err){
//         return
//     }
//     if(err.code === "EEXIST"){
//         console.log("juz taki folder istnieje")
//     }
// })

// fs.writeFile(my_path("nowy_plik.txt"), "nowy plik 1 ", (err) => {
//     if (err){
//         console.log("jestes glupi")
//         return
//     }
//     console.log("Ok zrobiles plik")

// })


// fs.appendFile(my_path("nowy_plik.txt"), Date.now() + "\n", (err) => {
//     if (err){
//         console.log("jestes glupi")
//         return
//     }
//     console.log("Ok zrobiles plik")

// })