import React, { useEffect, useState } from 'react'
import moment from 'moment';

import { NavLink } from "react-router-dom"
import { reloadImage } from '../format';





const Commentaire = ({ comment }) => {
    const [channel, setChannel] = useState();
    const [url, setUrl] = useState("");
    const [name, setName] = useState("");
    const [date, setDate] = useState("");
    const [com, setCom] = useState("");

    useEffect(() => {
        setChannel(comment.snippet.topLevelComment.snippet.authorChannelId.value);
        setUrl(comment.snippet.topLevelComment.snippet.authorProfileImageUrl);
        setName(comment.snippet.topLevelComment.snippet.authorDisplayName);
        setDate(comment.snippet.topLevelComment.snippet.publishedAt);
        setCom(comment.snippet.topLevelComment.snippet.textOriginal);

    }, [comment])

    


    console.log(comment)
    return (
        <div className="CommentaireCard">
            <div className="profilePicture">
                <NavLink
                    to={`/channel/${channel}`}
                    className="link"
                >
                    <img
                        onerror={() => reloadImage(this, url)}
                        key={Date.now()}
                        src={url}
                        className="profil"
                        alt="profil"
                    />
                </NavLink>
            </div>
            <div className="text">
                <div className="infos-Commentaire">
                    <span className='name'>
                        <NavLink
                            to={`/channel/${channel}`}
                            className="link"
                        >
                            {name}
                        </NavLink>

                    </span>
                    -
                    <span className='time'>   {moment(date).fromNow()}</span>

                </div>
                <div className="content">

                    {com}

                </div>
            </div>
        </div>
    )
}

export default Commentaire