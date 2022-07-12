import React, { useEffect, useState } from 'react';
import axios from "axios";
import { formatNumber } from '../format';

const Bandeau = ({ channelId }) => {

    const [infos, setInfos] = useState()
    const [loading, setLoading] = useState(false)


    useEffect(() => {

        const getInfos = () => {

            var params = new URLSearchParams();
            params.append("part", "statistics");
            params.append("part", "snippet");
            params.append("part", "brandingSettings");
            params.append("key", process.env.REACT_APP_KEY);
            params.append("id", channelId);

            var request = {
                params: params
            };

            axios.get("https://www.googleapis.com/youtube/v3/channels", request)
                .then(res => {
                    console.log(res.data.items[0]);
                    console.log(res.data.items[0].brandingSettings.image.bannerExternalUrl)
                    setInfos(res.data.items[0])
                    setLoading(true)

                    //          <img className="banner" src={infos.brandingSettings.image.bannerExternalUrl}/>
                });
        }

        getInfos();


    }, [channelId])
    return (
        <>
            {   loading &&
                <div className='bandeau'>
                    <div className="bandeau-infos">
                        <div className="profile">
                            <div className="profilePicture">
                                <img 
                                src={infos.snippet.thumbnails.high.url} 
                                alt="profilePicture"
                                />
                            </div>
                            <div className="namesub">
                                <span className='nom'>{infos.snippet.title}</span>
                                <span className='subCount'>{formatNumber(infos.statistics.subscriberCount)} abonnées</span>
                            </div>
                        </div>
                        <div className="sub">
                            <button>S'ABONNER</button>
                        </div>
                    </div>
                </div>
            }
        </>
    )
}

export default Bandeau