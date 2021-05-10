import {useState, useEffect} from 'react';


function Post(props) {
    const { history, match} = props;

    const [data, setData] = useState({})

    const fetchData = (id) => {
        const url = `https://jsonplaceholder.typicode.com/posts/${id}`
        fetch(url)
        .then(res=>res.json())
        .then(data => {
            setData(data);
        })
    }

    const goBack = () => {
        history.push('/posts')
    }

    useEffect(() => {
        fetchData(match.params.id);
    },[match.params.id])

    return (<>

        <div className="back" onClick={goBack}>
            <h3>Go Back</h3>
        </div>
        <div className="post">
            <h3>{data.title}</h3>
            <p>{data.body}</p>
        </div>

        </>
    )
    }




export default Post
