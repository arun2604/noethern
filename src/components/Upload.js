import React, { useState } from 'react'
import * as XLSX from 'xlsx'
import './upload.css'

function Upload( props) {
    const { setExcelData } = props
    const [ excelFile,setExcelFile ] = useState(null);
    const [ excelFileError,setExcelFileError ] = useState(null);
    const fileType = ['application/vnd.ms-excel','application/vnd.openxmlformats-officedocument.spreadsheetml.sheet']

    console.log(excelFile)

    const handleFile = (e) => {
        let seletedFile = e.target.files[0];
        if(seletedFile) {
            // console.log(seletedFile.type)
            if(seletedFile && fileType.includes(seletedFile.type)){
                let reader = new FileReader();
                reader.readAsArrayBuffer(seletedFile);
                reader.onload = (e) => {
                    setExcelFileError(null)
                    setExcelFile(e.target.result)
                }
            }
            else{
                setExcelFileError('Please select only Excel file')
                setExcelFile(null)
                console.log('Please select only Excel file')
            }
        }
        else{
            console.log('plz select file')
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if(excelFile !== null){
            const workbook = XLSX.read(excelFile,{type:'buffer'})
            const workbookName = workbook.SheetNames[0]
            const workSheet = workbook.Sheets[workbookName]
            const data = XLSX.utils.sheet_to_json(workSheet)
            setExcelData(data)
            console.log(data)
        }
        else{
            setExcelData(null)
        }
    }

  return (
    <div className='container'>
        <form className='inputForm'>
            <div className="inputFiled">
                <label><h5>Select Excel file</h5></label><br />
                <input className='excelInput' type="file" required
                onChange={handleFile}/>
                {excelFileError ? <div style={{color: 'red'}}>{excelFileError}</div> : ''}
            </div>
            <div className="inputButton">
                <button onClick={handleSubmit}>Submit</button>
            </div>
        </form>
        <hr />      
    </div>
  )
}

export default Upload