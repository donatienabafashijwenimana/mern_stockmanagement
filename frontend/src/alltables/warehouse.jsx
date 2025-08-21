import React, { useEffect } from 'react'
import { warehousestore } from '../store/warehouse'
import { switchpage } from '../store/pagestore'

function Warehouse() {
    require('../css/table.css')

    const th_ =['#','name','location','manager','description','action']

    const {setform}= switchpage()
    const {warehouse_list,setwarehouselist,deletewarehouse} = warehousestore()
    useEffect(()=>{
          setwarehouselist()
        })
        const submit_action = (id,action)=>{
          if (action=='update'){
            const form_data=warehouse_list.find(w=>w._id==id)
            setform('update',form_data)
          }
          if(action== 'delete'){
            deletewarehouse(id)
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
          {warehouse_list.map((item,i)=>(
            
            <tr key={i}>
                <td>{i+1}</td>
                <td>{item.warehouse_name}</td>
                <td>{item.location }</td>
                <td>{item.manager}</td>
                <td>{item.description}</td>
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

export default Warehouse
