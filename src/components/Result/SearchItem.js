import React, { useState, useEffect } from 'react'
import axios from 'axios';
import moment from 'moment';
import { NavLink } from "react-router-dom";
import { formatNumber, reloadImage, htmlEnc } from '../format';



const SearchItem = ({ video }) => {

    console.log(video)

    const [url, setUrl] = useState("");
    const [view, setView] = useState(0);
    const [channelId, setChannelId] = useState("");
    const [channel, setChannel] = useState(true);
    const [load, setLoad] = useState(false);
    const [loadD, setLoadD] = useState(false);
    const [pp,setPp] = useState("");

    useEffect(() => {

        setPp(video.snippet.thumbnails.medium.url);

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
                    console.log("aaa")
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
            {load && loadD && <div> {channel === false ? (
                <div className='container-searchItem'>
                    <div className="miniature">
                        <NavLink
                            to={`/video/${video.id.videoId}`}
                            className="link"
                        >
                            <img
                                onerror={() => reloadImage(this, url)}
                                key={Date.now()}
                                src={`${pp}`}
                                alt=""
                                className='video'
                            />
                        </NavLink>

                    </div>

                    <div className='info'>

                        <div className="title">
                            {htmlEnc(video.snippet.title)}
                        </div>

                        <div className="video-infos">
                            <span>{formatNumber(view)} Views </span>
                            -
                            <span> {moment(video.snippet.publishedAt).fromNow()}</span>
                        </div>

                        <div className="profileImage">

                            <img
                                onerror={() => reloadImage(this, url)}
                                key={Date.now()}
                                src={url}
                                className='profilePicture'
                                alt="profilePicture"
                            />

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