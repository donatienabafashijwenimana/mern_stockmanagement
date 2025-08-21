import React, { useEffect, useState } from 'react'
import { switchpage } from '../store/pagestore'
import { productstore } from '../store/productstore'
import { warehousestore } from '../store/warehouse'
import { sales_store } from '../store/salesoerder'
import { customerstore } from '../store/customer'
function Salesorder() {
    require('../css/form.css')

    const {setform}= switchpage()
    const {customer_list,setcustomerlist} = customerstore()
    const {product_list,setproductlist} = productstore()
    const {warehouse_list,setwarehouselist} = warehousestore()
    const {add_s_order,update_s_order} = sales_store()

    const formmatdateforinput = (datestring)=>{
        if(!datestring) return '';
        const d = new Date(datestring);
        return d.toISOString().split("T")[0]
    }
    
    const {form_data}= switchpage()

    const [data,setdata]=useState({
        product:form_data.product && form_data.product._id,
        quantity:form_data.quantity,
        customer:form_data.customer && form_data.customer._id,
        warehouse:form_data.warehouse && form_data.warehouse._id,
        o_date:form_data.order_date && formmatdateforinput(form_data.order_date),
        e_date:form_data.expected_date && formmatdateforinput(form_data.expected_date)
    })
    useEffect(()=>{
        setproductlist();
        setcustomerlist();
        setwarehouselist()
    },[])
    
    const submit_form =()=>{
        if(!data.product) return alert('⚠️invalid product')
        if(!data.quantity) return alert('⚠️invalid quantity')
        if(!data.customer) return alert('⚠️invalid customer')
        if(!data.warehouse) return alert('⚠️invalid ware house')
        if(!data.e_date) return alert('⚠️invalid order date')
        if(!data.product) return alert('⚠️invalid expected date')
        if(data.o_date>data.expected_date) return alert('⚠️order date con not be before expected date')
        
        if (form_data._id ){
            update_s_order(data.product,data.quantity,data.customer,data.warehouse,data.o_date,data.e_date,form_data._id);
            setform(null)
        }
        else{
            add_s_order(data.product,data.quantity,data.customer,data.warehouse,data.o_date,data.e_date);
            setform(null)
        }
    }
  return (
    <div className='form'>
        
        <form action="" onSubmit={(e)=>{e.preventDefault();submit_form()}}>
            <div className="form-title">
                sales order
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

            <label htmlFor="" className="fieldname">choose customer</label>
            <select name="" id="" defaultValue={data.customer || ''}
             onChange={(e)=>setdata({...data,customer:e.target.value})}>
                <option value="" disabled>choose customer</option>
                {customer_list.map((item,i)=>(
                   <option key={i} value={item._id} >{item.customer_name}</option>
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

export default Salesorder
