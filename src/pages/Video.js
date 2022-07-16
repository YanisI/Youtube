import React from 'react'
import {useParams} from "react-router-dom"
import VideoPlayer from '../components/Video/VideoPlayer';

const Video = () => {

    
  const params = useParams();

  


  return (
    <div className='videoPage'>
        <div className="videoPlayer">
            <VideoPlayer videoId={params.link}/>  

        </div> 
    </div>
  )
}

export default Video