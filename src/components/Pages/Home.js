import React from 'react'
import '../../css/Pages/Home.css'
import '../../css/Pages/Tweets.css'



import Feed from '../Feed'
import NewTweet from '../NewTweet'


function Home() {
    return (
        <div className='home'>

            <NewTweet />

            <Feed />
            <div className='clients-section'>
                <div className="container">
                </div>
            </div>
        </div>
    );
}

export default Home;