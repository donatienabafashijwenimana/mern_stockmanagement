import React from 'react'

function Warehouse() {
    require('../css/table.css')

    const th_ =['#','name','location','manager','description','action']
  return (
    <div>
      <table border="1">
        <thead>
          {th_.map((_th_,i) => (
            <th className='action'>{_th_}</th>
          
          ))}
            
        </thead>
        <tr>
            <td>1</td>
            <td>kigali warehouse</td>
            <td>kigali</td>
            <td>john smith</td>
            <td>ware house located on kigali city</td>
            <td className='action'>
                <select name="action" className="action-button">
                    <option value="" disabled selected>choose action</option>
                    <option value="update">update</option>
                    <option value="delete">delete</option>
                </select>
            </td>
        </tr>
      </table>
    </div>
  )
}

export default Warehouse
