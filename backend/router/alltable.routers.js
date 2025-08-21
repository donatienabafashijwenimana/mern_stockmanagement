const express = require('express')
const router = express.Router()
const {addcategories, readcategories, updatecategory, deletecategory} = require('../controllers/categories.contllores')
const {addproduct, readproduct, updateproduct, deleteproduct} = require('../controllers/product.contllores')
const { addcustomer, updatecustomer, readcustomer, deletecustomer } = require('../controllers/customer.contllores')
const { addwarehouse, readwarehouse, deletewarehouse, updatewarehouse } = require('../controllers/warehouse.contllores')
const { addsupplier, updatesupplier, readsupplier, deletesupplier } = require('../controllers/supplier.controlles')
const { add_p_order, update_p_order, read_p_order, delete_p_order } = require('../controllers/puchasing_order')
const { add_s_order, update_s_order, read_s_order, delete_s_order } = require('../controllers/salesorder')
const {addstockin,readstockin} = require('../controllers/stockin.contllores')
const {addstockout, readstockout} = require('../controllers/stockout.contlllores')


router.post('/category/addcategory',addcategories)
router.get('/category/readcategories',readcategories)
router.post('/category/updatecategory',updatecategory)
router.delete('/category/deletecategory/:id',deletecategory)

router.post('/product/addproduct',addproduct)
router.put('/product/updateproduct/:id',updateproduct)
router.get('/product/readproduct',readproduct)
router.delete('/product/deleteproduct/:id',deleteproduct)

router.post('/customer/addcustomer',addcustomer)
router.put('/customer/updatecustomer/:id',updatecustomer)
router.get('/customer/readcustomer',readcustomer)
router.delete('/customer/deletecustomer/:id',deletecustomer)

router.post('/warehouse/addwarehouse',addwarehouse)
router.put('/warehouse/updatewarehouse/:id',updatewarehouse)
router.get('/warehouse/readwarehouse',readwarehouse)
router.delete('/warehouse/deletewarehouse/:id',deletewarehouse)

router.post('/supplier/addsupplier',addsupplier)
router.put('/supplier/updatesupplier/:id',updatesupplier)
router.get('/supplier/readsupplier',readsupplier)
router.delete('/supplier/deletesupplier/:id',deletesupplier)

router.post('/porder/addporder',add_p_order)
router.put('/porder/updateporder/:id',update_p_order)
router.get('/porder/readporder',read_p_order)
router.delete('/porder/deleteporder/:id',delete_p_order)

router.post('/sorder/addsorder',add_s_order)
router.put('/sorder/updatesorder/:id',update_s_order)
router.get('/sorder/readsorder',read_s_order)
router.delete('/sorder/deletesorder/:id',delete_s_order)

router.post('/stock/addstockin',addstockin)
router.get('/stock/readstockin',readstockin)

router.post('/stock/addstockout',addstockout)
router.get('/stock/readstockout',readstockout)

module.exports= router