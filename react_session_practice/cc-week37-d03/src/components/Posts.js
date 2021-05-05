import { Component } from 'react';
import Post from './Post';
export default class Posts extends Component {

    state = {
        posts : [],
        postInfo: null,
        selectedPost: null
    }

    fetchData = (id) => {
        const url = id ? `https://jsonplaceholder.typicode.com/posts/${id}` : `https://jsonplaceholder.typicode.com/posts`
        fetch(url)
            .then(res => res.json())
            .then(data => {
                console.log(`Data: `, data);
                if (id) {
                    this.setState({
                        postInfo:data
                    })
                } else {
                    this.setState({
                        posts:data
                    })
                }
                console.log(this.state)
            })
    }

    componentDidMount() {
        console.log("Component did mount")
        this.fetchData();
    }

    clickHandler = (id) => {
        console.log("clicked ", id)
        this.fetchData(id)
    }

    render() {

        return (
            <div className="container">
                <div className="heading">
                    <h1>Welcome User, click on posts to read!</h1>
                </div>
                <div className="body">
                    <div className="post-list">
                        <div><h2>Post List</h2></div>
                        {
                            this.state.posts.map((post, idx) => {
                                return <Post key={post.id} data={post} onClick={()=>this.clickHandler(post.id)}/>
                            })
                        }
                    </div>

                    <div className="post-details">
                        {
                            this.state.postInfo && 
                            <div className="post">
                                <h3>{this.state.postInfo.title}</h3>
                                <p>{this.state.postInfo.body}</p>
                            </div>
                        }
                    </div>
                </div>
            </div>
        )
    }

}