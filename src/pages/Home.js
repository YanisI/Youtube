import React from 'react'
import { useEffect } from 'react'
import axios from 'axios'
import { useState } from 'react'
import moment from 'moment';
import Card from '../components/Card';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';



const Home = () => {

  const [videos, setVideos] = useState([]);
  const [max, setMax] = useState(20);
  const [load, setLoad] = useState(false);



  /* Disable to save resources*/
  
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
          key: process.env.REACT_APP_KEY
        }
      })
        .then(res => {
          console.log(res.data.items[0].snippet.publishedAt);
          let a = moment(res.data.items[0].snippet.publishedAt);
          console.log(a.fromNow());
          setVideos(res.data.items);
          setLoad(true);
          return true;
        })
        .catch(err => {
          call();
        });
    }

    call();
  }, [max])


  return (
    <>
      {load &&
        <div className="home">
          <Navbar />
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