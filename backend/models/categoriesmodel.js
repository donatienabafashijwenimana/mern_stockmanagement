const mongose = require('mongoose')

const categoriesschema = mongose.Schema({
    category_name:{type:String},
    description:{type:String},
    status:{type:String}
},{ timestamps: true })

const categoriesmodel = mongose.model('categories',categoriesschema)
module.exports= categoriesmodel