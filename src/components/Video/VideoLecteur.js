import React, { useEffect, useState } from 'react'
import ReactPlayer from 'react-player'
import axios from "axios"
import moment from 'moment';
import { NavLink } from "react-router-dom"

import Commentaires from './Commentaires';

const VideoLecteur = ({ videoId }) => {

    const [infos, setInfos] = useState();
    const [channelInfos, setChannelInfos] = useState();
    const [loading, setLoading] = useState(false);
    const [url, setUrl] = useState("");

    const format = (num) => {

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

        const infos = () => {
            var params = new URLSearchParams();
            params.append("part", "statistics");
            params.append("part", "snippet");
            params.append("key", process.env.REACT_APP_KEY);
            params.append("id", videoId);

            var request = {
                params: params
            };

            axios.get("https://www.googleapis.com/youtube/v3/videos", request)
                .then(res => {
                    console.log(res.data.items[0])
                    setInfos(res.data.items[0])
                    var paramsS = new URLSearchParams();
                    paramsS.append("part", "statistics");
                    paramsS.append("part", "snippet");
                    paramsS.append("key", process.env.REACT_APP_KEY);
                    paramsS.append("id", res.data.items[0].snippet.channelId);

                    var requestS = {
                        params: paramsS
                    };
                    axios.get("https://www.googleapis.com/youtube/v3/channels", requestS)
                        .then(res => {
                            console.log(res.data.items[0]);
                            setUrl(res.data.items[0].snippet.thumbnails.default.url);
                            setChannelInfos(res.data.items[0])
                            setLoading(true)
                            return true;
                        });
                })
        }



        infos();

    }, [videoId])
    return (
        <>
            {loading &&
                <div className='videoLecteur'>
                    <div className='videoLecteurS'>
                        <ReactPlayer
                            url={`https://www.youtube.com/watch?v=${videoId}`}
                            controls
                            playing
                            width="100%"
                            height="75%"
                            className="player-video"
                        />

                        <div className="infos">
                            <div className="title">
                                {infos.snippet.title}

                            </div>
                            <div className="info">
                                <div className="view">
                                    <span>{format(infos.statistics.viewCount)} Views </span>
                                    -
                                    <span> {moment(infos.snippet.publishedAt).fromNow()}</span>
                                </div>
                                <div className="likes">
                                    <span>{format(infos.statistics.likeCount)} Likes</span>
                                </div>
                            </div>
                            <div className="description">
                                <div className="profileImage">
                                <NavLink
                                        to={`/channel/${infos.snippet.channelId}`}
                                        className="link"
                                    >
                                    <img src={url} className='profilePicture' alt="profilePicture" />
                                    </NavLink>
                                </div>
                                <div className="count">
                                    <NavLink
                                        to={`/channel/${infos.snippet.channelId}`}
                                        className="link"
                                    >
                                        <span className='title'>{format(channelInfos.snippet.title)} </span>
                                    </NavLink>
                                    <span className='sub'>{format(channelInfos.statistics.subscriberCount)} Abonnées </span>
                                </div>
                            </div>
                            <div className="commentaire">
                                <Commentaires id={videoId} />
                            </div>
                        </div>
                    </div>
                </div>
            }
        </>

    )
}

export default VideoLecteur