import React from 'react';

const PostDetails = (props) => {
    const postdetailscard = {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: "3rem",
        width: "30rem",
        boxShadow: "2px 2px 5px #02475e"
    }
    return (
        <div style={postdetailscard}>
            <h1>userId: {props.userId} </h1>
            <h3>{props.title}</h3>
            <p>{props.body}</p>
        </div>
    )
}

export default PostDetails;