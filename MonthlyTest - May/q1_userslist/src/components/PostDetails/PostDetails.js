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
            <h1>User Id: {props.id} </h1>
            <h3>Name: {props.name}</h3>
            <h3>Username: {props.username}</h3>
            <p>Email: {props.email}</p>
            <p>Phone: {props.phone}</p>
        </div>
    )
}

export default PostDetails;