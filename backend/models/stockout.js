const mongoose = require('mongoose')


const stockoutschema = mongoose.Schema({
    product:{type:mongoose.Types.ObjectId,ref:'products'},
    quantity:{type:Number},
    date:{type:Date},
    customer:{type:mongoose.Types.ObjectId,ref:'customer'},
    unit_price:{type:Number}
})

module.exports= mongoose.model('stockout',stockoutschema)