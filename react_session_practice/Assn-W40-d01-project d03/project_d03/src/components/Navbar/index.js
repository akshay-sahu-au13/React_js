import React from 'react';
import './navbar.css';
import SearchBar from '../Search';
import AuthButtons from '../AuthButtons';
import { Link } from 'react-router-dom';
import PATHS from '../../config/webPaths';
function Navbar() {
    return (
        <nav>
            <div className="nav-menu">
                <ul>
                    <li>
                        <span id="logo" class="material-icons">
                            movie_filter
                        </span>
                    </li>
                    <li><Link className="link" to={PATHS.HOME}> Home </Link></li>
                </ul>
            </div>
            <SearchBar />

            <div className="nav-menu">
                <AuthButtons />
            </div>
        </nav>
    )
}

export default Navbar;
