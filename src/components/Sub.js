import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useNavigate } from "react-router-dom";

const Sub = ({ channelId }) => {


    const [infos, setInfos] = useState();
    const [loading, setLoading] = useState(false);
    let navigate = useNavigate();

    const handleClick = () => {
        navigate(`/channel/${channelId}`);
    }

    useEffect(() => {

        const getInfos = () => {

            axios.get("https://www.googleapis.com/youtube/v3/channels", {
                params: {
                    id: channelId,
                    part: "snippet",
                    key: process.env.REACT_APP_KEY
                }
            })
                .then(res => {
                    console.log(res.data.items[0].snippet)
                    setInfos(res.data.items[0])
                    setLoading(true)
                });
        }

        getInfos();
    }, [channelId])
    return (
        <>
            {loading &&
                <div className='sub-container'
                    onClick={handleClick}
                >
                    <img
                        src={infos.snippet.thumbnails.default.url}
                        alt="profilPicture"
                        className="profil"
                    />
                    <span
                        className="title">
                        {infos.snippet.title}
                    </span>
                </div>
            }
        </>
    )
}

export default Sub