import { useEffect } from 'react';
import './Home.css';
import {connect} from 'react-redux';
import videoActions from '../../actions/videoActions'

function Home(props) {

    const {dispatch} = props;
    const search = "";
    useEffect(() => {
        dispatch(videoActions.list(search))
        
    }, [dispatch])

    return (<>
        <div className="loading">{props.loader && "LOADINGGGGG.........."}</div>
        <div className="container-home">
            
            {
                props.video.map((item, id) => {
                    // console.log(item)
                    const { snippet: { title, description, thumbnails: { medium } } } = item;
                    return <div key={id} className="video-card">
                        <img src={medium.url} alt={`video ${id}`}/>
                            <h4>{title}</h4>
                            <p>{description}</p>

                    </div>
                })
            }
        </div>
        </>
    )
}

const mapStatetoProps = (state) => ({...state, video:state.video})

export default connect(mapStatetoProps)(Home);
