import React from 'react'

function Supplier() {
    require('../css/table.css')

    const th_ =['#','supplier','phone','email','address','product can supply','action']
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
            <td>john smith</td>
            <td>0789581223</td>
            <td>josimith@gmail.com</td>
            <td>kigali-rwanda</td>
            <td>irish potato,rice,beans</td>
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

export default Supplier
