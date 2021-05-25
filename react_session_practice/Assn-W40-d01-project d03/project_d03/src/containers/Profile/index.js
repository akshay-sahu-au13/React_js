import React from 'react';
import './Profile.css';
import { Redirect } from 'react-router-dom';
import {useSelector} from 'react-redux';
import PATHS from '../../config/webPaths';

function Profile(props) {
    console.log("Profile/props => ",props)
    const auth = useSelector(state => state.auth)
    const profileData = useSelector(state => state.profile);
    console.log("Profile Data: ", profileData)

    return (<>
        {
            auth ? 
            <>
            <div className="profile">
                <div className="top">
                    <img src={profileData.imageUrl} alt={`${profileData.firstName}'s dp`} />
                    <h1>Welcome, {profileData.firstName} {profileData.lastName}</h1>
                </div>
                <div className="bottom">
                    <h3>User Info here!</h3>
                </div>
            </div>
            </> 
            : <Redirect to={PATHS.HOME} />
            
        }
        </>
    )
}

export default Profile;
