import React from 'react'
import VideoLecteur from './VideoLecteur'

const VideoPlayer = ({videoId}) => {
  return (
    <div className='video-videoPlayer'>
        <div className="video">
            <VideoLecteur videoId={videoId}/>
            
        </div>
    </div>
  )
}

export default VideoPlayer