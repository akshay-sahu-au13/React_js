import React, {useState, useCallback} from 'react';
import './search.css'
import videoAction from '../../actions/videoActions';
import {useDispatch} from 'react-redux';


function SearchBar() {

    const dispatch = useDispatch();
    // const [search, setSearch] = useState('');

    const debounce = (fn) => {
        let timer;
        return function (...args) {
            let context = this;
            clearTimeout(timer);
            timer = setTimeout(() => {
                fn.apply(context,args);
            }, 1000)
        }
    }

    const handleChange =(event)=> {
        console.log(event.target.value)
        dispatch(videoAction.list(event.target.value));
    }

    const optimisedChangeHandler = useCallback(debounce(handleChange),[]);


    return (
        <div className="search-bar">
            <input type="text" name="search"  placeholder="Search videos here" onChange={optimisedChangeHandler} />
            <span id="search-icon" class="material-icons">
                search
            </span>
        </div>
    )
}

export default SearchBar
