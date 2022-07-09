import React from 'react'
import moment from 'moment';

const Card = ({video}) => {
  return (
    <div className='card'>
        <img 
        src={`${video.snippet.thumbnails.medium.url}`}
        alt="" 
        className='video'
        />
        <div className="titre">
            <h3>{video.snippet.title}</h3>
        </div>
            <span className='channelTitle'>{video.snippet.channelTitle}</span>
            <div className='info'>
                <span>{moment(video.snippet.publishedAt).fromNow()}</span>
                <span>10 Views</span>
            </div>

    </div>
  )
}

export default Card