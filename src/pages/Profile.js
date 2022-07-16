import React from 'react'
import {useParams} from "react-router-dom"
import Channel from '../components/Channel/Channel'
import Sidebar from '../components/Sidebar'

const Profile = () => {
    
  const params = useParams();

  

  return (
    <div className='profilPage'>
      <Sidebar />
      <div className="channelPage">
        <Channel channelId={params.query} />
      </div>

    </div>
  )
}

export default Profile