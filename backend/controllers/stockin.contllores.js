const express = require('express')
const stockin = require('../models/stockin')
const purchasing_order = require('../models/purchasingorder')

const addstockin = async(req,res)=>{
    
    try {
        const {product,quantity,date,supplier,price,id} = req.body
        // return console.log(req.body)
        const newstockin = new stockin({
            product,quantity,date,supplier,unit_price:price
        })
        await newstockin.save();
        p = quantity*price
        await purchasing_order.findByIdAndUpdate(id,{
            received_date:date,received_quantity:quantity,price:p,status:'received'
        })
       res.json({message:'✔️data well inserted'})

    } catch (error) {
        res.status(200).json({message:error})
        console.log(error)
    }
}

const readstockin = async(req,res)=>{
 try {
    const results = await stockin.find()
                          .populate('supplier')
                          .populate('product')
    res.json(results)

 } catch (error) {
    console.log(error)
 }

}

module.exports = { addstockin,readstockin }