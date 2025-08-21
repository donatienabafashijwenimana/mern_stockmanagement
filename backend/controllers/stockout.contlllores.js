const express = require('express')
const stockout = require('../models/stockout')
const sales_order = require('../models/salesorder')

const addstockout = async(req,res)=>{
    
    try {
        const {product,quantity,date,customer,price,id} = req.body
        const newstockout = new stockout({
            product,quantity,date,customer,unit_price:price
        })
        await newstockout.save();
        p = quantity*price
        await sales_order.findByIdAndUpdate(id,{
            delivered_date:date,delivered_quantity:quantity,price:p,status:'delivered'
        })
       res.json({message:'✔️data well inserted'})

    } catch (error) {
        res.status(200).json({message:error})
        console.log(error)
    }
}

const readstockout = async(req,res)=>{
 try {
    const results = await stockout.find()
                          .populate('customer')
                          .populate('product')
    res.json(results)

 } catch (error) {
    console.log(error)
 }

}

module.exports = { addstockout,readstockout }