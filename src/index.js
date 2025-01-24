var data=require('./random-names.json');
var randArr=require('unique-random-array')
module.exports={
    all:data,
    random:randArr(data)
}