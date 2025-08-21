import React, { useEffect } from 'react'
import { customerstore } from '../store/customer'
import { switchpage } from '../store/pagestore'

function Customer() {
    require('../css/table.css')

    const th_ =['#','customer','phone number','email','address','action']

    const {setcustomerlist,customer_list,deletecustomer} = customerstore()
        const {setform} = switchpage()
        
        useEffect(()=>{
          setcustomerlist()
        })
        const submit_action = (id,action)=>{
          if (action=='update'){
            const form_data=customer_list.find(c=>c._id==id)
            setform('update',form_data)
          }
          if(action== 'delete'){
            deletecustomer(id)
          }
        }
  return (
    <div>
      <table border="1">
        <thead>
          {th_.map((_th_,i) => (
            <th className='action'>{_th_}</th>
          
          ))}
            
        </thead>
        <tbody>
          {customer_list.map((item,i)=>(
            
            <tr>
                <td>{i+1}</td>
                <td>{item.customer_name}</td>
                <td>{item.contact}</td>
                <td>{item.email}</td>
                <td>{item.address}</td>
                <td className='action'>
                    <select name="action" className="action-button" defaultValue={''}
                     onChange={(e)=>{submit_action(item._id ,e.target.value)
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

export default Customer
