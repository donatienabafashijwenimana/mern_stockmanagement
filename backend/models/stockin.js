const mongoose = require('mongoose')


const stockinschema = mongoose.Schema({
    date:{type:Date},
    product:{type:mongoose.Types.ObjectId,ref:'products'},
    quantity:{type:Number},
    supplier:{type:mongoose.Types.ObjectId,ref:'supplier'},
    unit_price:{type:Number}
})

module.exports= mongoose.model('stockin',stockinschema)