import React from 'react'
import tweet from "../tweets.json"
import style from "./tweet.css"

const tweets = tweet.tweet

const Tweet = () =>{
    return (
        <div>
        {tweets.map(s=>(
            <div>
                <span className='nom'>{s.name}</span>
                <span className='email'>{s.email}</span>
                <span className='date'>{s.date}</span>
                <p>{s.tweet}</p>
            </div>
        ))}
    </div>
    )
}

export default Tweet