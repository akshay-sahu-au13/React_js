import React, { useState, useEffect} from 'react'
// import Post from '../components/Post';

function Posts() {

    const [posts, setPosts] = useState([]);
    const [info, setInfo] = useState({})


    const fetchData = (id) => {
        const url = id ? `https://jsonplaceholder.typicode.com/posts/${id}` : "https://jsonplaceholder.typicode.com/posts"

        fetch(url)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (id) {
                    setInfo(data)
                } else {
                    setPosts(data);
                }
            })


    }

    useEffect(()=> {
        console.log("UseEffect");
        fetchData();
    }, [])

    const clickHandler = (id) => {
        console.log("Clicked: ", id)
        fetchData(id);
        console.log("Post Info", info )

    }

    return (
        <div className="container">
            <div className="heading">
            <h1>Welcome User, Please find all the posts below...</h1>
            </div>

            <div className="body">
                <div className="post-list">
                    <h3>Post List</h3>
                    {
                        posts.map((post) => {
                            // console.log("POST: ", post)
                            return <div className="post" key={post.id} onClick={() => clickHandler(post.id)}>
                                <h3> {post.title} </h3>
                                <p>{post.body}</p>
                            </div>
                        })
                    }
                </div>  

                <div className="post-details">
                    <h3>Post Details</h3>
                    { 
                        <div className="posted">
                            <h3>{info.title}</h3>
                            <p>{info.body}</p>
                        </div>
                    }
                </div>
            </div>

        </div>
    )
}

export default Posts;
