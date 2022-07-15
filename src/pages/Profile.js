import React from 'react'
import {useParams} from "react-router-dom"
import Channel from '../components/Channel/Channel'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'

const Profile = () => {
    
  const params = useParams();

  

  return (
    <div className='profilPage'>
        <Navbar />
      <Sidebar />
      <div className="channelPage">
        <Channel channelId={params.query} />
      </div>

    </div>
  )
}

export default Profile