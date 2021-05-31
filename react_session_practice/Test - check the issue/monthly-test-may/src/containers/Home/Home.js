
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Posts from '../../components/Posts/Posts';
import PostDetails from '../../components/PostDetails/PostDetails';
import postsAction from "../../redux/actions/postsAction";
import postDetailsAction from "../../redux/actions/postDetailsAction";

import './Home.css';

const Home = () => {

    const [showDetails, setShowDetail] = useState(false);

    const dispatch = useDispatch();

    const posts = useSelector(state => state.posts.posts);

    const postInfo = useSelector(state => state.postDetails.postInfo);

    useEffect(() => {
        dispatch(postsAction.postsList);
    }, [dispatch]);


    const getPostInfo = (id) => {
        dispatch(postDetailsAction.postInfo(id));
        setShowDetail(true);
    }

    return (
        <div className="Home">
            <div className="mainHeading">
                <h1>Post Lists</h1>
                {showDetails && <h1>Post Details</h1>}
            </div>
            <div className="postSection">
                <div className="postList">
                    {
                        posts.map((post,index) => {
                            return (
                                <Posts key={index} title={post.title} clicked={() => getPostInfo(post.id)}/>
                            )
                        })
                    }
                </div>
                {showDetails && <div className="postDetails">
                    <PostDetails userId={postInfo.userId} title={postInfo.title} body={postInfo.body} />
                </div> }
            </div>
      </div>
    )
}

export default Home;
