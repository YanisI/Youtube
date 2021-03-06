import React from 'react'
import { useEffect } from 'react'
import axios from 'axios'
import { useState } from 'react'
import Card from '../components/Card';
import Sidebar from '../components/Sidebar';



const Home = () => {

  const [videos, setVideos] = useState([]);
  const [max, setMax] = useState(20);
  const [load, setLoad] = useState(false);

  
  window.onscroll = function () {
    if(
      window.innerHeight + document.documentElement.scrollTop === document.documentElement.offsetHeight && max < 50
    ){
      setMax(max+12)
    }
  }



  useEffect(() => {
    const call = () => {
      axios.get("https://www.googleapis.com/youtube/v3/search", {
        params: {
          part: 'snippet',
          maxResults: max,
          key: process.env.REACT_APP_KEY,
          videoCategoryId: 17,
          type: "video"
        }
      })
        .then(res => {
          setVideos(res.data.items);
          setLoad(true);
          return true;
        })
        .catch(err => {
          console.log(err)
        });
    }

    call();
  }, [max])


  return (
    <>
      {load &&
        <div className="home">
          <Sidebar />

          <div className='HomePage'>
            {videos.map((video, index) => {
              return <Card video={video} key={index} />
            })}
          </div>
        </div>
      }
    </>
  )
}

export default Home