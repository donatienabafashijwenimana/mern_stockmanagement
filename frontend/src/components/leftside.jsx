import React from 'react'
import Product from '../alltables/product'
import Categories from '../alltables/categories'
import Addproduct from '../form/addproduct'
import Addcategories from '../form/addcategories'

import { switchpage} from '../store/pagestore'
import Warehouse from '../alltables/warehouse'
import Supplier from '../alltables/supplier'
import Customer from '../alltables/customer'
import Porder from '../alltables/purchasing_order'
import Sorder from '../alltables/sales_order'
import Addcustomer from '../form/addcustomer'
import Adddwarehouse from '../form/addwarehouse'
import Addsupplier from '../form/addsupplier'
import Order_purchase from '../form/order_purchase'
import Sales_order from '../form/addsales_order'
import Addstockin from '../form/addstockin'
import Stockin from '../alltables/stockin'
import Orderpurchase from '../form/order_purchase'
import Salesorder from '../form/addsales_order'
import Addstockout from '../form/addstockout'
import Stockout from '../alltables/stockout'

function Leftside() {
    require('../css/left-side.css')

    const {page,setform,form_} = switchpage()
  return (
    <div className='leftside-container'>
        <div className="left-title">
            stock management system
        </div>
        <div className="leftside-subtitle">
            <span>{page}</span>
            {page!=='dashboard' ? <button className='add-button' onClick={()=>setform('add',{})}> ➕ new</button>:''}
        </div>
        <div className="leftside-content">
            {page==='categories' && <Categories/>}
            {page==='product' && <Product/>}
            {page==='warehouse' && <Warehouse/>}
            {page==='supplier' && <Supplier/>}
            {page==='customer' && <Customer/>}
            {page=== 'purchasing order' && <Porder/>}
            {page=== 'sales order' && <Sorder/>}
            {page=== 'stock in' && <Stockin/>}
            {page=== 'stock out' && <Stockout/>}

        </div>
        {form_ &&
         <div className="form-container">
            {form_==='categories' && <Addcategories/>}
            {form_==='product' && <Addproduct/>}
            {form_==='customer' && <Addcustomer/>}
            {form_==='warehouse' && <Adddwarehouse/>}
            {form_==='supplier' && <Addsupplier/>}
            {form_=== 'purchasing order' && <Orderpurchase/>}
            {form_=== 'sales order' && <Salesorder/>}
            {form_=== 'received' && <Addstockin/>}
            {form_=== 'delivered' && <Addstockout/>}

         </div>
        }
    </div>
  )
}

export default Leftside
