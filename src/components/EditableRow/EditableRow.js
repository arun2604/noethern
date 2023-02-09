import React from 'react'
import './editable.css'

function EditableRow({editData,handleEditDataValue,setEditDetails,handleEditFormSave}) {
  return (
    <div>
        <div className='editableRow'>
            <td>
                <input type='text' name='FirstName' placeholder='enter First name' 
                value={editData.FirstName} onChange={handleEditDataValue}></input>
            </td>
            <td>
                <input type='text' name='LasttName' placeholder='enter Last name'
                value={editData.LastName} onChange={handleEditDataValue}></input>
            </td>
            <td>
                <input type='text' name='gender' placeholder='enter Gender' 
                value={editData.gender} onChange={handleEditDataValue}></input>
            </td>
            <td>
                <input type='text' name='country' placeholder='enter Country' 
                value={editData.country} onChange={handleEditDataValue}></input>
            </td>
            <td>
                <input type='text' name='age' placeholder='enter Age' 
                value={editData.age} onChange={handleEditDataValue}></input>
            </td>
        </div>
        <div>
            <button onClick={handleEditFormSave}>Save</button>
            <button onClick={(e)=>setEditDetails(null)}>Cancel</button>
        </div>
    </div>
  )
}

export default EditableRow