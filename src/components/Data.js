import React, { Fragment, useState } from 'react'
import EditableRow from './EditableRow/EditableRow'
import IndividualData from './IndividualExcelData'

function Data(props) {
    const {excelData, search ,setExcelData} =props;
    const [editDetails ,setEditDetails] = useState(null);
    const [editData, setEditData] = useState({
        FirstName: '',
        LastName: '',
        gender: '',
        country: '',
        age: ''
    });

    const handleEditClick = (e,individualExcelData) => {
        e.preventDefault();
        setEditDetails(individualExcelData.Id);

        const formvalue = {
            FirstName: individualExcelData.FirstName,
            LastName: individualExcelData.LastName,
            gender: individualExcelData.gender,
            country: individualExcelData.country,
            age: individualExcelData.age
        }
        setEditData(formvalue)
    }

    const handleEditDataValue = (e) => {
        e.preventDefault();

        const fieldName = e.target.getAttribute('name');
        const fieldValue = e.target.value;

        const newFormData = {...editData};
        newFormData[fieldName] = fieldValue;

        setEditData(newFormData);
    }

    const handleEditFormSave = (e) => {
        e.preventDefault();
        const editedData = {
            Id: editDetails,
            FirstName: editData.FirstName,
            LastName: editData.LastName,
            gender: editData.gender,
            country: editData.country,
            age: editData.age
        }
        const newExcelData = [...excelData]
        const index = excelData.findIndex((item)=> item.Id === editDetails);
        
        newExcelData [index] = editedData;
        setExcelData(newExcelData)
        setEditDetails(null)
    }

    const handleDelete =(e,id) => {
        e.preventDefault()
        const newExcelData = [...excelData]
        const index = excelData.findIndex((item)=> item.Id === id);

        newExcelData.splice(index,1);
        setExcelData(newExcelData)
    }

    return excelData.filter((item)=>{
        if(search === ''){
            return item
        }
        else if(item.LastName.toLowerCase().includes(search.toLowerCase())|| item.FirstName.toLowerCase().includes(search.toLowerCase()) ){
            return item;
        }
    }).map((individualExcelData)=>(
        <tr key={individualExcelData.Id}>
            <Fragment>
                {editDetails === individualExcelData.Id ? <EditableRow handleEditFormSave={handleEditFormSave} setEditDetails={setEditDetails} editData={editData} handleEditDataValue={handleEditDataValue} /> 
                : <IndividualData handleDelete={handleDelete} individualExcelData={individualExcelData} handleEditClick={handleEditClick}/>
                }
            </Fragment>
        </tr>        
    ))
}

export default Data
