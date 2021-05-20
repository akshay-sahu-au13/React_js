import React from 'react'
import './search.css'
function SearchBar() {
    return (
        <div className="search-bar">
            <input type="text" name="search" placeholder="Search videos here"/>
            <span id="search-icon" class="material-icons">
                search
            </span>
        </div>
    )
}

export default SearchBar
