import React from 'react'

const IndividualData = ({individualExcelData,handleEditClick,handleDelete}) => {
  return (
      <>
          <td>{individualExcelData.Id}</td>
          <td>{individualExcelData.FirstName}</td>
          <td>{individualExcelData.LastName}</td>
          <td>{individualExcelData.gender}</td>
          <td>{individualExcelData.country}</td>
          <td>{individualExcelData.age}</td>
          <td>
            <button onClick={(e)=>handleEditClick(e,individualExcelData)}>Edit</button>
            <button onClick={handleDelete}>Delete</button>
          </td>
      </>
  )
}

export default IndividualData