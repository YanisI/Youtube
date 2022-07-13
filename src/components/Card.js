import React, { useEffect, useState } from 'react'
import moment from 'moment';
import axios from 'axios';
import { NavLink } from "react-router-dom";
import { formatNumber } from './format';


const Card = ({ video }) => {

  const [url, setUrl] = useState("");
  const [view, setView] = useState(0);
  const [channelId, setChannelId] = useState("");
  const [load, setLoad] = useState(false);
  const [loadD, setLoadD] = useState(false);
  const [miniature,setMiniature] = useState("");
  const [title,setTitle] = useState("");
  const [channelTitle,setChannelTitle] = useState("");
  const [publishedAt,setPublishedAt] = useState("");
  

  useEffect(() => {

    setMiniature(video.snippet.thumbnails.medium.url);
    setTitle(video.snippet.title);
    setChannelTitle(video.snippet.channelTitle);
    setChannelId(video.snippet.channelId);
    setPublishedAt(video.snippet.publishedAt)

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
          setLoad(true);
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
          setLoadD(true);
          return true;
        });
    }

    getPP();
    getView();

  }, [video])


  return (
    <>
      {load && loadD &&
        <div className='card'>

          <NavLink
            to={`/video/${video.id.videoId}`}
            className="link"
          >
            <img
              src={`${miniature}`}
              alt=""
              className='video'
            />
          </NavLink>
          <div className='info'>
            <div className="profileImage">
              <img
                src={url}
                className='profilePicture'
                alt="profilePicture" />
            </div>
            <div className="othersinfos">
              <div className="title">
                {title}
              </div>
              <NavLink
                to={`/channel/${channelId}`}
                className="link"
              >
                <span className='channelTitle'>{channelTitle}</span>
              </NavLink>


              <div className="video-infos">
                <span>{formatNumber(view)} Views </span>
                -
                <span> {moment(publishedAt).fromNow()}</span>
              </div>
            </div>
          </div>
        </div>}
    </>
  )
}

export default Card