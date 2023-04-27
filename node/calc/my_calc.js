const divide = require("./divide")
const add = require("./skrypt")
const minus = require("./minus")
module.exports = {
    add: add,
    divide: divide,
    minus: minus,
    config: require("./config.json")
}