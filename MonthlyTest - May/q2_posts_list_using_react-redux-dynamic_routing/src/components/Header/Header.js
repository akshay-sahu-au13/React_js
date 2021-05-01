import React from "react";

const Header = () => {

    const headerStyle = {
        textAlign: "center",
        boxSizing: "border-box",
        width: "100%",
        border: "2px solid #687980",
        backgroundColor: "#9C88FF",
        borderRadius: "0px 0px 30px 30px",
        color: "#dedede",
        padding: "15px",
        marginBottom: "30px"
    }

    return (
        <div style={headerStyle}>
            <span style={{fontSize: "2rem"}}>Post Feed</span>
        </div>
    )
}

export default Header;