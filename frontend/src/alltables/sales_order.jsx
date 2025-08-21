
import React, { useEffect } from 'react'
import { switchpage } from '../store/pagestore'
import { sales_store } from '../store/salesoerder'

function Sorder() {
    require('../css/table.css')

    const th_ =['#','product','quantity','supplier','warehouse','order date','expected date'
                 ,'delivered quantity(yes)','delivered date(yes)','price','status','action']
  
    const {s_order_list,delete_s_order,set_s_orderlist} = sales_store()
    const {setform}= switchpage()

    useEffect(()=>{
      set_s_orderlist()
    })

    const formatDate = (dateString) => {
    if (!dateString) return null;
    return new Date(dateString).toLocaleDateString("en-GB"); 
  };
    const submit_action = (id,action)=>{
      const form_data=s_order_list.find(so=>so._id==id)
      if (action=='update'){
        if (form_data.status=='delivered') return alert('⚠️delivered can not edited')
        setform('update',form_data)
      }
      if(action== 'delete'){
        if (form_data.status=='delivered') return alert('⚠️delivered order can not deleted')
        delete_s_order(id)
      }
      if(action== 'delivered'){
        if (form_data.status=='delivered') return alert('⚠️this order already delivered')
        setform('delivered',form_data)
      }
    }
    return (
    <div>
      <table border="1">
        <thead>
          <tr>
            {th_.map((_th_,i) => (
            <th key={i} className='action'>{_th_}</th>
          
          ))}
          </tr>
            
        </thead>
        <tbody>
          {s_order_list.map((item,i)=>(
            
            <tr key={i}>
                <td>{i+1}</td>
                <td>{item.product.product_name}</td>
                <td>{item.quantity}</td>
                <td>{item.customer.customer_name}</td>
                <td>{item.warehouse.warehouse_name}</td>
                <td>{formatDate(item.order_date)}</td>
                <td>{formatDate(item.expected_date)}</td>
                <td>{item.delivered_quantity}</td>
                <td>{formatDate(item.delivered_date)}</td>
                <td>{item.price}</td>
                <td>{item.status}</td>
                <td className='action'>
                    <select name="action" className="action-button" defaultValue={''}
                     onChange={(e)=>{submit_action(item._id,e.target.value)
                      e.target.value=''
                     }}>
                        <option value="" disabled>choose action</option>
                        <option value="update">update</option>
                        <option value="delete">delete</option>
                        <option value="delivered">delivered</option>
                    </select>
                </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default Sorder

