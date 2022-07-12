import React from 'react'
import Navbar from '../components/Navbar'
import SearchResult from '../components/Result/SearchResult'
import Sidebar from '../components/Sidebar'
import {useParams} from "react-router-dom"

const Result = () => {  

  const params = useParams();

  console.log(params.query)

  return (
    <div className='resultPage'>
      <Navbar />
      <Sidebar />
      <div className="resPage">
        <SearchResult query={params.query} />
      </div>
    </div>
  )
}

export default Result