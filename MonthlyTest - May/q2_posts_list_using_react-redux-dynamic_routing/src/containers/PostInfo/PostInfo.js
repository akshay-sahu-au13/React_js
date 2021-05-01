import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useRouteMatch } from "react-router";
import postDetailsAction from '../../redux/actions/postDetailsAction';

import './PostInfo.css';


const PostInfo = ({history}) => {

    const dispatch = useDispatch();
    const match = useRouteMatch();

    const postInfo = useSelector(state => state.postDetails.postInfo);

    useEffect(() => {
        dispatch(postDetailsAction.postInfo(match.params.id));
    },[match.params.id, dispatch])

    const goBack = () => {
        // console.log(location, match, history);
        history.push('/');
    }

    return (
        <>
        <h1 style={{textAlign: 'center'}}>Post Details</h1>
        <div className="post-info">
                
            <h2>User Id: {postInfo?.userId}</h2>
            <h3>{postInfo?.title}</h3>
            <p>{postInfo?.body}</p>
                <button type="button" onClick={goBack} style={{ width: "8rem", padding: "5px", backgroundColor: "#59C5AA", color: "white", border: '1px solid #FFF', borderRadius: "3px", cursor: 'pointer' }}>Go Back</button>
        </div>
        </>
    )

}

export default PostInfo;