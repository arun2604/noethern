import React, { useState } from 'react'
import CollapseTable from '../components/Table'
import Upload from '../components/Upload'

function Home() {
  const [excelData, setExcelData] = useState([])

  return (
    <div>
      <Upload setExcelData={setExcelData} />
      <CollapseTable excelData={excelData}  setExcelData={setExcelData}/> 
    </div>
  )
}

export default Home
