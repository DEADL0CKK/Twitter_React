import React from 'react'
import Tweet from './tweet'


const Feed = () => {
    return(
        <div>
            <div className="title">
                <h1>Twitter Light</h1>
            </div>
            <div className="tweetbox">
                <div>
                    <form>
                        <div className="tweet">
                            <input placeholder="What's on your mind" type="text"/>
                        </div>
                        <div >
                            <input type="Submit" value="Tweeter" />
                        </div>
                        <div>
                            <input type="file"/>
                        </div>
                    </form>
                </div>
                <Tweet />
            </div>


        </div>
    )
}

export default Feed