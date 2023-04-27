let msg = "moduł divide"
//console.log(msg)

function divide(x, y){
    if (y == 0){
        return "cant divide by 0"
    }
    else{
        return x / y
    }
    
}

module.exports = divide