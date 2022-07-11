import React, { useEffect, useState } from 'react'
import moment from 'moment';
import axios from 'axios';
import { NavLink } from "react-router-dom"


const Card = ({ video }) => {

  const [url, setUrl] = useState("");
  const [view, setView] = useState(0);
  const [channelId, setChannelId] = useState("");
  const [load, setLoad] = useState(0);
  const [loadD, setLoadD] = useState(0);

  const formatView = (num) => {

    if (num >= 1000000000) {
      return (num / 1000000000).toFixed(1).replace(/\.0$/, '') + 'Md';
    }
    if (num >= 1000000) {
      return (num / 1000000).toFixed(1).replace(/\.0$/, '') + 'M';
    }
    if (num >= 1000) {
      return (num / 1000).toFixed(1).replace(/\.0$/, '') + 'K';
    }
    return num;
  }


  useEffect(() => {

    setChannelId(video.snippet.channelId);

    const getPP = () => {
      axios.get("https://www.googleapis.com/youtube/v3/channels", {
        params: {
          part: 'snippet',
          id: video.snippet.channelId,
          key: process.env.REACT_APP_KEY
        }
      })
        .then(res => {
          console.log(res);
          console.log(res.data.items[0].snippet.thumbnails.default.url);
          setUrl(res.data.items[0].snippet.thumbnails.default.url);
          setLoad(1);
          return true;
        });
    }

    const getView = () => {
      axios.get("https://www.googleapis.com/youtube/v3/videos", {
        params: {
          part: 'statistics',
          id: video.id.videoId,
          key: process.env.REACT_APP_KEY
        }
      })
        .then(res => {
          console.log("aaa");
          setView(res.data.items[0].statistics.viewCount);
          setLoadD(1);
          return true;
        });
    }

    getPP();
    getView();

  }, [])


  return (
    <>
      {load && loadD &&
        <div className='card'>
          <img
            src={`${video.snippet.thumbnails.medium.url}`}
            alt=""
            className='video'
          />
          <div className='info'>
            <div className="profileImage">
              <img src={url} className='profilePicture' />
            </div>
            <div className="othersinfos">
              <div className="title">
                {video.snippet.title}
              </div>
              <NavLink
                to={`/channel/${channelId}`}
                className="link"
              >
                <span className='channelTitle'>{video.snippet.channelTitle}</span>
              </NavLink>


              <div className="video-infos">
                <span>{formatView(view)} Views </span>
                -
                <span> {moment(video.snippet.publishedAt).fromNow()}</span>
              </div>
            </div>
          </div>
        </div>}
    </>
  )
}

export default Card