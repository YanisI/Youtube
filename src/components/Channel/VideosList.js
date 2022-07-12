import axios from 'axios';
import React, { useState, useEffect } from 'react'
import Card from '../Card';

const VideosList = ({ channelId }) => {

    const [videos, setVideos] = useState([]);
    const [load, setLoad] = useState(false);

    useEffect(() => {

        const getVideos = () => {

            axios.get("https://www.googleapis.com/youtube/v3/search", {
                params: {
                    part: 'snippet',
                    key: process.env.REACT_APP_KEY,
                    channelId: channelId,
                    maxResults: 7
                }
            })
                .then(res => {
                    console.log(res.data.items)
                    setVideos(res.data.items)
                    setLoad(true);
                    return true;
                });
        }

        getVideos();

    }, [channelId]);


    return (
        <>
            {load &&
                <div className='videosList'>
                    {videos.map((video, index) => {
                        return <Card video={video} key={index} />
                    })
                    }
                </div>
            }
        </>
    )
}

export default VideosList