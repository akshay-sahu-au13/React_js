import React from "react";

const Posts = (props) => {

    const postCard = {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        margin: "30px 30px",
        width: "33rem",
        padding: "10px",
        borderRadius: "3px",
        boxShadow: "2px 2px 5px #02475e",
        color: "#2b2b2b",
        cursor: "pointer"
    }

    return (
        <div style={postCard} onClick={props.clicked}>
            <h3>{props.title}</h3>
        </div>
    )
}

export default Posts