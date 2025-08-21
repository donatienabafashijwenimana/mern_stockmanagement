import React, { useEffect } from 'react'
import { supplierstore } from '../store/supplier'
import { switchpage } from '../store/pagestore'

function Supplier() {
    require('../css/table.css')

    const th_ =['#','supplier','phone','email','address','product can supply','action']

    const {setform} = switchpage()
      const {supplier_list,setsupplierlist,deletesupplier} = supplierstore()
      useEffect(()=>{
        setsupplierlist()
      })
      const submit_action = (id,action_type)=>{
        if(action_type=='update'){
          const data = supplier_list.find(s=>s._id==id)
          setform('update',data)
        }
        if(action_type=='delete'){
          deletesupplier(id)
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
          {supplier_list.map((item,i)=>(
            
            <tr key={i}>
                <td>{i+1}</td>
                <td>{item.supplier_name}</td>
                <td>{item.contact}</td>
                <td>{item.email}</td>
                <td>{item.address}</td>
                <td>{item.product_supply}</td>
                <td className='action'>
                    <select name="action" className="action-button" defaultValue={''}
                     onChange={(e)=>{submit_action(item._id,e.target.value)
                      e.target.value=''
                     }}>
                        <option value="" disabled>choose action</option>
                        <option value="update">update</option>
                        <option value="delete">delete</option>
                    </select>
                </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default Supplier
