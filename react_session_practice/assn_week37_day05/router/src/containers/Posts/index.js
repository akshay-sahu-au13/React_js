import React, { useState, useEffect } from 'react';

function Posts() {

    const [posts, setPosts] = useState([]);
    const [info, setInfo] = useState({});

    const fetchPosts = (id) => {
        const url = id ? `https://jsonplaceholder.typicode.com/posts/${id}` : "https://jsonplaceholder.typicode.com/posts"

        fetch(url)
            .then(res => res.json())
            .then(data => {
                console.log("Data: ",data)
                if (id) {
                    setInfo(data)
                } else {
                    setPosts(data)
                }
            });
    }

    const clickHandler = (id) => {
        fetchPosts(id);
        console.log("Info: ",info)
    }

    useEffect(() => {
        fetchPosts();
        console.log("UseEffect, posts fetched!")

    }, [])

    return (
        <div className="posts">
            <h1>POSTS</h1>
            <div className="body">
                <div className="post-list" >
                    {
                        posts.map((post) => {
                            return <div className="post" onClick={() => clickHandler(post.id)}>
                                <h4>{post.title}</h4>
                                <p>{post.body}</p>
                            </div>
                        })
                    }
                </div>
                <div className="post-details">
                    {   
                        info.title && <div className="post">
                            <h2>{info.id}</h2>
                            <h3>{info.title}</h3>
                            <p>{info.body}</p>
                        </div>
                    }
                </div>
            </div>
        </div>
    )
}

export default Posts
