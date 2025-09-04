import React, { useEffect } from 'react'
import { order_purchasestore } from '../store/purchaseorder'
import { switchpage } from '../store/pagestore'

function Porder() {
    require('../css/table.css')

    const th_ =['#','product','quantity','supplier','warehouse','order date','expected date','received quantity(yes)','received date(yes)','totalprice','status','action']
  
    const {p_order_list,delete_p_order,set_p_orderlist} = order_purchasestore()
    const {setform}= switchpage()

    useEffect(()=>{
      set_p_orderlist()
    })

    const formatDate = (dateString) => {
    if (!dateString) return null;
    return new Date(dateString).toLocaleDateString("en-GB"); 
  };
    const submit_action = (id,action)=>{
      const form_data=p_order_list.find(po=>po._id==id)
      if (action=='update'){
        if(form_data.satatus='received') return alert('⚠️received order can not be edited');
        setform('update',form_data)
      }
      if(action== 'delete'){
        if(form_data.satatus='received') return alert('⚠️received order can not be deleted');
        delete_p_order(id)

      }if(action== 'received'){
        if(form_data.status=='received') return alert('⚠️this order already received')
        setform('received',form_data)
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
          {p_order_list.map((item,i)=>(
            
            <tr key={i}>
                <td>{i+1}</td>
                <td>{item.product && item.product.product_name}</td>
                <td>{item.quantity}</td>
                <td>{item.supplier.supplier_name}</td>
                <td>{item.warehouse.warehouse_name}</td>
                <td>{formatDate(item.order_date)}</td>
                <td>{formatDate(item.expected_date)}</td>
                <td>{item.received_quantity}</td>
                <td>{formatDate(item.received_date)}</td>
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
                        <option value="received">received</option>
                        <option value="rejected">rejected</option>
                    </select>
                </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default Porder
