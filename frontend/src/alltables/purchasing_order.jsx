import React from 'react'

function Porder() {
    require('../css/table.css')

    const th_ =['#','product','quantity','supplier','warehouse','order date','expected date','status','action']
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
            <td>rice</td>
            <td>100kg</td>
            <td>john smith</td>
            <td>kigali warehouse</td>
            <td>1/1/2024</td>
            <td>5/4/2024</td>
            <td>received</td>
            <td className='action'>
                <select name="action" className="action-button">
                    <option value="" disabled selected>choose action</option>
                    <option value="update">update</option>
                    <option value="delete">delete</option>
                    <option value="c_received"> confirm received</option>
                </select>
            </td>
        </tr>
      </table>
    </div>
  )
}

export default Porder
