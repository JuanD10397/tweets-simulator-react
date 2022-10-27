import React from 'react';
import { Grid } from '@mui/material';
import './ListTweets.scss';
import Tweet from '../Tweet';

export default function ListTweets(props) {

    const { allTweets, deleteTweet } = props;

    if(!allTweets || allTweets.length === 0){
        return (
            <div>
                <h2 className="list-tweets-empty">No hay Tweets...</h2>
            </div>
        )
    }

    return(
        <Grid container spacing={3} className="list-tweets">
            {allTweets.map((tweet, index) => (
                <Grid key={index} item xs={4}>
                    <Tweet
                        tweet={tweet}
                        index={index}
                        deleteTweet={deleteTweet}
                    ></Tweet>
                </Grid>  
            ))}
        </Grid>
    );
}