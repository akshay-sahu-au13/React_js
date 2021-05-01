
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Posts from '../../components/Posts/Posts';
import postsAction from "../../redux/actions/postsAction";


import './Home.css';

const Home = (props) => {

    const dispatch = useDispatch();

    const posts = useSelector(state => state.posts.posts);

    useEffect(() => {
        dispatch(postsAction.postsList);
    }, [dispatch]);


    const getPostInfo = (id) => {
        props.history.push(`/posts/${id}`)
    }

    return (
        <div className="Home">
            <div className="mainHeading">
                <h1>Post List</h1>
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
            </div>
      </div>
    )
}

export default Home;
