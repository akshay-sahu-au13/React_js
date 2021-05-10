import React, {useState, useEffect} from 'react';

function Posts() {

    const [posts, setPosts] = useState([]);
    

    const fetchData = ()=> {
        const url = "https://jsonplaceholder.typicode.com/posts";
        fetch(url)
        .then(res => res.json())
        .then(data => {
            setPosts(data);
        }).catch(err=> console.log(err.message))
    }

    useEffect(()=> {
        fetchData();
    },[])

    return (
        <div className="container">
            <div className="heading">
                <h1>Posts</h1>
            </div>

            <div className="body">
                <div className="posts">
                    {
                        posts.map(post=> {
                            return <div className="post" key={[post.id]}>
                                <h3>{post.title}</h3>
                                <p>post.body</p>
                            </div>
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default Posts;
