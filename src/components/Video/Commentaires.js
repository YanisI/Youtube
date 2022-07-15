import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Commentaire from './Commentaire'

const Commentaires = ({ id }) => {

    const [comments, setComments] = useState([])
    const [loading, setLoading] = useState(false)



    useEffect(() => {

        const comments = () => {
            axios.get("https://www.googleapis.com/youtube/v3/commentThreads", {
                params: {
                    key: process.env.REACT_APP_KEY,
                    videoId: id,
                    part: "snippet",
                    maxResults: 10
                }
            })
                .then(res => {
                    setComments(res.data.items)
                    setLoading(true);
                })
        }

        comments();

    }, [id])

    return (
        <div>
            { loading &&
                comments.map(com => {
                    return <Commentaire comment={com} />
                })
            }
        </div>
    )
}

export default Commentaires