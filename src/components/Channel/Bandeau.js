import React, { useEffect, useState } from 'react'
import axios from "axios"

const Bandeau = ({ channelId }) => {

    const [infos, setInfos] = useState()
    const [loading, setLoading] = useState(1)


    const formatSub = (sub) => {

        if (sub >= 1000000000) {
            return (sub / 1000000000).toFixed(1).replace(/\.0$/, '') + 'Md';
        }
        if (sub >= 1000000) {
            return (sub / 1000000).toFixed(1).replace(/\.0$/, '') + 'M';
        }
        if (sub >= 1000) {
            return (sub / 1000).toFixed(1).replace(/\.0$/, '') + 'K';
        }
        return sub;
    }

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
                    setLoading(0)

                    //          <img className="banner" src={infos.brandingSettings.image.bannerExternalUrl}/>
                });
        }

        getInfos();


    }, [])
    return (
        <>
            {   loading === 0 &&
                <div className='bandeau'>
                    <div className="bandeau-infos">
                        <div className="profile">
                            <div className="profilePicture">
                                <img src={infos.snippet.thumbnails.high.url} />
                            </div>
                            <div className="namesub">
                                <span className='nom'>{infos.snippet.title}</span>
                                <span className='subCount'>{formatSub(infos.statistics.subscriberCount)} abonnées</span>
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