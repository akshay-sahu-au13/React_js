import React from 'react'
import {Link} from 'react-router-dom';
import './pnf.css'

function PageNotFound() {
    return (
        <>
        <div className="not-found">
                <h1> This route doesn't exist </h1>
        </div>

        <div className="go-back">
            <Link to="/" className="go-back-link"> Go Back to Home </Link>
        </div>
        </>
    )
}

export default PageNotFound
