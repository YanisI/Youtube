import React, { useState, useEffect } from 'react'
import axios from 'axios';
import moment from 'moment';
import { NavLink } from "react-router-dom"



const SearchItem = ({ video }) => {

    const [url, setUrl] = useState("");
    const [view, setView] = useState(0);
    const [channelId, setChannelId] = useState("");
    const [channel, setChannel] = useState(true);
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

        if (video.id.kind.localeCompare("youtube#channel")) {
            setChannel(false);
        }
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
                    console.log(res)
                    console.log(res.data.items[0].snippet.thumbnails.default.url)
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
                    console.log("aaa")
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
           { load && loadD && <div> {channel === false ? (
                <div className='container-searchItem'>
                    <div className="miniature">
                        <img
                            src={`${video.snippet.thumbnails.medium.url}`}
                            alt=""
                            className='video'
                        />
                    </div>

                    <div className='info'>

                        <div className="title">
                            {video.snippet.title}
                        </div>

                        <div className="video-infos">
                            <span>{formatView(view)} Views </span>
                            -
                            <span> {moment(video.snippet.publishedAt).fromNow()}</span>
                        </div>

                        <div className="profileImage">

                            <img src={url} className='profilePicture' />

                            <span className='channelTitle'>
                                <NavLink
                                    to={`/channel/${channelId}`}
                                    className="link">
                                    {video.snippet.channelTitle}
                                </NavLink>
                            </span>


                        </div>

                        <div className="othersinfos">
                            <span className='description'>
                                {video.snippet.description /*.replace(new RegExp("(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w\.-]*)"), "")*/}
                            </span>


                        </div>
                    </div>
                </div>) : (<></>)}
            </div>} 
        </>
    )
}

export default SearchItem