import React, { useState } from 'react'
import Buttons from '../Atoms/Buttons'
import './Data.css'
export default function Data() {
  const [showData, setShowData] = useState('')
  const [addToList, setAddtoList] = useState([])
  function AddData() {
    if(showData == ""){
      alert("Please Enter required fields")
    }else{
      setAddtoList((prevList) => {
        let myData = [...prevList, showData]
        return myData

      })
      setShowData("")
      
    }
    
  }

  function deleteTask(id) {
    setAddtoList((prevList) => {
      return prevList.filter((item, index) => index != id)
    })
  }
  return (
    <div className='field-data'>
      <div className='input'>
      <input
        placeholder='Enter Your ToDo Task'
        onChange={(e) => setShowData(e.target.value)}
        value={showData}
      />
      <Buttons text={"Add Task"} performTask={AddData} />

      </div>
      
      <div>
        {
          addToList.map((item, index) => {
            return (
              <>
                <div className='lists'>
                  <li key={index}>
                    <div className='list'>
                      {item}
                      <div className='deleteItem'>
                      <Buttons text={"X"} performTask={() => deleteTask(index)} id={index} name = {"btn"} />
                      </div>
                    </div>
                  </li>
                </div>
              </>
            )
          })
        }
      </div>
    </div>
  )
}
