import React from "react";

function OneTweet({ tweet }) {
    return (
        <li className='one-tweet'>
            <p className="one-tweet__date"></p>
            <div className="one_tweet__container">
                <img src={tweet.urlToImage} alt="" className='one-tweet__img'/>
                <h3 className="one-tweet__header">{tweet.title}</h3>
                <p className="one-tweet__text">{tweet.description}</p>
                <a href={tweet.url} className="one-tweet__link">Continue reading</a>
            </div>
        </li>
    );
}

export default OneTweet;
