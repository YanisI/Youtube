import React from 'react'
import Bandeau from './Bandeau'
import VideosList from './VideosList'

const Channel = ({channelId}) => {
  return (
    <div className='channel-container'>
        <Bandeau channelId={channelId} />
        <VideosList channelId={channelId} />
    </div>
  )
}

export default Channel