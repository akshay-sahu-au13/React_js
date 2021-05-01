import React from "react";

const Header = () => {

    const headerStyle = {
        textAlign: "center",
        boxSizing: "border-box",
        width: "100%",
        border: "2px solid #687980",
        backgroundColor: "#193549",
        borderRadius: "5px",
        color: "#dedede",
        padding: "15px",
        marginBottom: "30px"
    }

    return (
        <div style={headerStyle}>
            <span style={{fontSize: "2rem"}}>Users</span>
        </div>
    )
}

export default Header;