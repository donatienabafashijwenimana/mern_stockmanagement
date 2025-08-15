import React from 'react'

function Categories() {
    require('../css/table.css')

    const th_ =['#','category','description','status','action']
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
            <td>food</td>
            <td>this categories is composed by only food like beans,rici,...</td>
            <td>active</td>
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

export default Categories
