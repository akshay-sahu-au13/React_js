import { useState } from 'react';
import './search.css';
import { useDispatch } from 'react-redux';
import videoActions  from '../../actions/videoActions';

function SearchBar() {

    const dispatch = useDispatch();

    const [search, setSearch] = useState("");
    const handleChange = (e) => {
        setSearch(e.target.value);
        dispatch(videoActions.list(e.target.value))

    }

    return (
        <div className="search-bar">
            <input type="text" name="search" value={search} placeholder="Search videos here" onChange={handleChange}/>
            <span id="search-icon" class="material-icons">
                search
            </span>
        </div>
    )
}

export default SearchBar
