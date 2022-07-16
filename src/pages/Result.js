import React from 'react'
import SearchResult from '../components/Result/SearchResult'
import Sidebar from '../components/Sidebar'
import {useParams} from "react-router-dom"

const Result = () => {  

  const params = useParams();


  return (
    <div className='resultPage'>
      <Sidebar />
      <div className="resPage">
        <SearchResult query={params.query} />
      </div>
    </div>
  )
}

export default Result