import React from "react";

const Posts = (props) => {

    const postCard = {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        margin: "30px auto",
        width: "80%",
        padding: "10px",
        borderRadius: "1px 1px 30px 30px",
        boxShadow: "2px 2px 5px #10AC84",
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