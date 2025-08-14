import React from 'react'

function Categories() {
    require('../css/table.css')
  return (
    <div>
      <table border="1">
        <thead>
            <th>#</th>
            <th>category</th>
            <th>description</th>
            <th>status</th>
            <th action>action</th>
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
