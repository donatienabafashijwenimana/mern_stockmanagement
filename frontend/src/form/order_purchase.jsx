import React, { useEffect, useState } from 'react'
import { switchpage } from '../store/pagestore'
import { supplierstore } from '../store/supplier'
import { productstore } from '../store/productstore'
import { warehousestore } from '../store/warehouse'
import { order_purchasestore } from '../store/purchaseorder'
function Orderpurchase() {
    require('../css/form.css')

    const {setform}= switchpage()
    const {supplier_list,setsupplierlist} = supplierstore()
    const {product_list,setproductlist} = productstore()
    const {warehouse_list,setwarehouselist} = warehousestore()
    const {add_p_order,update_p_order} = order_purchasestore()

    const formmatdateforinput = (datestring)=>{
        if(!datestring) return '';
        const d = new Date(datestring);
        return d.toISOString().split("T")[0]
    }
    
    const {form_data}= switchpage()

    const [data,setdata]=useState({
        product:form_data.product && form_data.product._id,
        quantity:form_data.quantity,
        supplier:form_data.supplier && form_data.supplier._id,
        warehouse:form_data.warehouse && form_data.warehouse._id,
        o_date:form_data.order_date && formmatdateforinput(form_data.order_date),
        e_date:form_data.expected_date && formmatdateforinput(form_data.expected_date)
    })
    useEffect(()=>{
        setproductlist();
        setsupplierlist();
        setwarehouselist()
    },[])
    
    const submit_form =()=>{
        
        if(!data.product) return alert('⚠️invalid product')
        if(!data.quantity) return alert('⚠️invalid quantity')
        if(!data.supplier) return alert('⚠️invalid supplier')
        if(!data.warehouse) return alert('⚠️invalid warehouse')
        if(!data.o_date) return alert('⚠️invalid order date')
        if(!data.e_date) return alert('⚠️invalid expected date')
        if(data.o_date > data.e_date) return alert('⚠️expected date can not be before order date')


        if (form_data._id ){
            update_p_order(data.product,data.quantity,data.supplier,data.warehouse,data.o_date,data.e_date,form_data._id);
            setform(null)
        }
        else{
            add_p_order(data.product,data.quantity,data.supplier,data.warehouse,data.o_date,data.e_date);
            setform(null)
        }
    }
  return (
    <div className='form'>
        
        <form action="" onSubmit={(e)=>{e.preventDefault();submit_form()}}>
            <div className="form-title">
                ordering purchase
                <i onClick={()=>setform(null)} className='bi bi-x-circle'></i>
            </div>

            <label htmlFor="" className="fieldname">product</label>
            <select name="" id="" defaultValue={data.product || ''}
             onChange={(e)=>setdata({...data,product:e.target.value})}>
                <option value="" disabled>choose product</option>
                {product_list.map((item,i)=>(
                   <option key={i} value={item._id} >{item.product_name}</option>
                ))}
            </select>

            <label htmlFor="" className="fieldname"> quantity</label>
            <input type="text" name="" id="" value={data.quantity} 
            onChange={(e)=>setdata({...data,quantity:e.target.value})}/>

            <label htmlFor="" className="fieldname">choose supplier</label>
            <select name="" id="" defaultValue={data.supplier || ''}
             onChange={(e)=>setdata({...data,supplier:e.target.value})}>
                <option value="" disabled>choose supplier</option>
                {supplier_list.map((item,i)=>(
                   <option key={i} value={item._id} >{item.supplier_name}</option>
                ))}
            </select>
            
            <label htmlFor="" className="fieldname">warehouse</label>
            <select name="" id="" defaultValue={data.warehouse || ''}
             onChange={(e)=>setdata({...data,warehouse:e.target.value})}>
                <option value="" disabled>choose warehouse</option>
                {warehouse_list.map((item,i)=>(
                   <option key={i} value={item._id} >{item.warehouse_name}</option>
                ))}
            </select>

            <label htmlFor="" className="fieldname">order date</label>
            <input type="date" name="" id="" value={data.o_date}
            onChange={(e)=>setdata({...data,o_date:e.target.value})}/>

            <label htmlFor="" className="fieldname">expected date</label>
            <input type="date" name="" id="" value={data.e_date}
            onChange={(e)=>setdata({...data,e_date:e.target.value})}/>
            
            <button className='save-button'>save</button>
        </form>     
    </div>
  )
}

export default Orderpurchase
