import React from 'react'
import { useEffect } from 'react'
import axios from 'axios'
import { useState } from 'react'
import moment from 'moment';
import Card from '../components/Card';



const Home = () => {

  const [videos,setVideos] = useState([])

  useEffect(() => {
    const call = () => {
      axios.get("https://www.googleapis.com/youtube/v3/search", {
      params : {
        part: 'snippet',
        maxResults: 20,
        key: process.env.REACT_APP_KEY
      }})
        .then(res => {
          console.log(res.data.items[1].snippet.publishedAt)
          //console.log(res.data[0].publishTime)
          
          let a = moment(res.data.items[1].snippet.publishedAt)
          console.log(a.fromNow())
          setVideos(res.data.items)
          return true;
        });
    }

    call();
  }, [])


  return (
    <div>
      {videos.map((video,index)=> {
        return <Card video={video} key={index} />
      })}
    </div>
  )
}

export default Home