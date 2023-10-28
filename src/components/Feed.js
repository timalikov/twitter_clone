import React, { Component } from 'react';
import OneTweet from './OneTweet';  



class Feed extends Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            tweets: [],
            tweetsCount: 15,  
        };
    }

    componentDidMount() {
        fetch("https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=2b6255f90bd0449a8cdab3ee921be6b4")
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        isLoaded: true,
                        tweets: result.articles 
                    });
                },
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    });
                }
            )
    }

    render() {
        const { error, isLoaded, tweets } = this.state;
        if (error) {
            return <div className='error'>Error: {error.message}</div>;
        } else if (!isLoaded) {
            return <div className='loading'>Loading...</div>;
        } else {
            if (typeof tweets === typeof undefined) {
                return <div className='error'>Error: Content is undefined</div>;
            }
            return (
                <ul className='tweets'>
                    {tweets
                        .map((tweet, id) => <OneTweet key={id} tweet={tweet} /> )
                        .filter((tweet, id) => id < this.state.tweetsCount)
                    }
                </ul>
            );
        }
    }
}

export default Feed;
