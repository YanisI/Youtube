import axios from 'axios'
import React, { useEffect, useState } from 'react'
import SearchItem from './SearchItem';

const SearchResult = ({ query }) => {

    const [result, setResult] = useState([]);
    const [load, setLoad] = useState(0);

    useEffect(() => {
        const search = () => {
            axios.get("https://www.googleapis.com/youtube/v3/search", {
                params: {
                    part: 'snippet',
                    q: query,
                    key: process.env.REACT_APP_KEY
                }
            })
                .then(res => {
                    console.log("1 appel ");
                    console.log(res.data.items);
                    setResult(res.data.items);
                    setLoad(1)
                });
        }

        search();
    }, [query])


    return (
        <>
            {load &&
                <div className='result'>
                    {result.map((video, index) => {
                        return <SearchItem video={video} key={index} />
                    })}
                </div>
            }
        </>
    )
}

export default SearchResult