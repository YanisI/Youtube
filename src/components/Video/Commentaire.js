import React from 'react'
import moment from 'moment';

import { NavLink } from "react-router-dom"

const Commentaire = ({ comment }) => {


    console.log(comment)
    return (
        <div className="CommentaireCard">
            <div className="profilePicture">
                <NavLink
                    to={`/channel/${comment.snippet.topLevelComment.snippet.authorChannelId.value}`}
                    className="link"
                >
                    <img
                        src={comment.snippet.topLevelComment.snippet.authorProfileImageUrl}
                        className="profil"
                        alt="profil"
                    />
                </NavLink>
            </div>
            <div className="text">
                <div className="infos-Commentaire">
                    <span className='name'>
                        <NavLink
                            to={`/channel/${comment.snippet.topLevelComment.snippet.authorChannelId.value}`}
                            className="link"
                        >
                            {comment.snippet.topLevelComment.snippet.authorDisplayName}
                        </NavLink>

                    </span>
                    -
                    <span className='time'>   {moment(comment.snippet.topLevelComment.snippet.publishedAt).fromNow()}</span>

                </div>
                <div className="content">

                    {comment.snippet.topLevelComment.snippet.textOriginal}

                </div>
            </div>
        </div>
    )
}

export default Commentaire