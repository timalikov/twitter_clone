import React, { useState } from 'react';
import '../css/NewTweet.css';



function NewTweet() {
    const [tweetContent, setTweetContent] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (tweetContent.trim()) {
            // Here, send the tweetContent to backend API to post the tweet.
            console.log("New Tweet:", tweetContent);
            setTweetContent(''); // Clear the textarea
        } else {
            alert("Tweet content can't be empty!");
        }
    };

    return (
        <div className="new-tweet-container">
            <form onSubmit={handleSubmit}>
                <textarea
                    className="tweet-textarea"
                    value={tweetContent}
                    onChange={(e) => setTweetContent(e.target.value)}
                    placeholder="What's happening?"
                ></textarea>
                <button type="submit" className="submit-btn">Tweet</button>
            </form>
        </div>
    );
}

export default NewTweet;
