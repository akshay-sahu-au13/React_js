import React from 'react';
import './navbar.css';
import SearchBar from '../Search';
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
                    <li><span>Home</span></li>
                </ul>
            </div>
            <SearchBar />

            <div className="nav-menu">
                <ul>
                    <li><span>Profile</span></li>
                    <li><span>Logout</span></li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar;
