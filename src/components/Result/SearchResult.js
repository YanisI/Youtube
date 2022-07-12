import axios from 'axios'
import React, { useEffect, useState } from 'react'
import SearchItem from './SearchItem';

const SearchResult = ({ query }) => {

    const [result, setResult] = useState([]);
    const [load, setLoad] = useState(false);
    const [max, setMax] = useState(20);

    window.onscroll = function () {
        if(
          window.innerHeight + document.documentElement.scrollTop > (document.documentElement.offsetHeight-200) && max < 50
        ){
          setMax(max+12)
        }
      }


    useEffect(() => {
        const search = () => {
            axios.get("https://www.googleapis.com/youtube/v3/search", {
                params: {
                    part: 'snippet',
                    q: query,
                    maxResults: max,
                    key: process.env.REACT_APP_KEY
                }
            })
                .then(res => {
                    console.log("1 appel ");
                    console.log(res.data.items);
                    setResult(res.data.items);
                    setLoad(true)
                });
        }

        search();
    }, [query,max])


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