import React,{useState} from 'react'
import "bootstrap/js/src/collapse.js";
import Data from './Data';
import './Table.css'


function CollapseTable(props) {
    const { excelData=[],setExcelData } = props;
    const [order,setOrder]= useState('ASC')
    const [search ,setSearch] = useState('')
    const [ currentPage, setCurrentPage] =useState(0)
    const perPage = 2


    const [collapse,setCollapse] = useState(true)
    console.log("x", excelData.length);


    const sorting = (col) => {
      console.log(col)
      if(order === 'ASC'){
        const sorted = [...excelData].sort((a,b)=>
        a[col].toLowerCase() > b[col].toLowerCase() ? 1 : -1)
        setExcelData(sorted)
        setOrder('DSC')
      }
      if(order === 'DSC'){
        const sorted = [...excelData].sort((a,b)=> 
        a[col].toLowerCase() < b[col].toLowerCase() ? 1 : -1)
        setExcelData(sorted)
        setOrder('ASC')
      }
    }

    const handleCollapse = (e) => {
      e.preventDefault();
      setCollapse(!collapse)
    }


    const slicedData = excelData?.slice(currentPage* perPage, (currentPage+1)*perPage)

  return (
    <div className='viewer'>
        {!excelData.length&&<>No file selected</>}
        {excelData.length!==0 &&(
          <div className='table-responsive'>
            <form>
              <div>
                <input type="text" className="search" placeholder='Search' onChange={(e)=>setSearch(e.target.value)}/>
              </div>
              <button className='collapseButton' onClick={handleCollapse} >{collapse?'Colllapse Table':'Show '}</button>
              {collapse ? <table className='table'>
                <thead>
                <tr>
                  {excelData[0] &&
                    Object.keys(excelData[0]).map((header, index) => (
                      <th key={index} onClick={()=> sorting(header)} >{header.toUpperCase()}</th>
                    ))}
                    <th scope='col'>ACTIONS</th>               
                </tr>          
                </thead>
                <tbody>
                  <Data  excelData={slicedData} search={search} setExcelData={setExcelData}/>
                </tbody>
              </table>
              : ''
              }
              <nav className='d-flex justify-content-center'>
                <ul className='pagination'>
                  {new Array(Math.ceil(excelData.length/perPage)).fill(0).map((item, index)=> (
                   <li className='page-link' onClick={()=>setCurrentPage(index)}>{index+1}</li>
                  ))}
                  
                </ul>
              </nav>
              <p className='instruction'>Click on the column heading to sort</p>
            </form>            
          </div>
        )}       
      </div>
  )
}

export default CollapseTable