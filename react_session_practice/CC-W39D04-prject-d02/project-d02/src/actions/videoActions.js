import { videoTypes } from '../actionTypes';
import loaderActions from './loaderActions';
import googleConfig from '../config/google.json';

const videoActions = {
    list: (search) => (dispatch) => {
        dispatch(loaderActions.start());

        const params = new URLSearchParams ({
            q:search,
            part:"snippet",
            maxResults:50,
            key:googleConfig.apiKey
        });

        const url = `https://www.googleapis.com/youtube/v3/search?${params}`;
        console.log("Video API URL: ",url)
        fetch(url)
            .then(res => res.json())
            .then(data => {
                console.log("Data from API::", data)
                dispatch({
                    type:videoTypes.list,
                    payload:data.items
                });
                dispatch(loaderActions.stop());
            }).catch(error => {
                console.log("Error: ", error.message)
                dispatch(loaderActions.stop());
            })

        

    }
}

export default videoActions;