import { useState, useEffect} from 'react'; 
import { Link, useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

const API = process.REACT_APP_API_KEY; 

export default function SongDetails(){
    const { id } = useParams(); 
    const [song, setSong] = useState({});
    const navigate = useNavigate(); 

    const deleteSong = () => {
        axios 
        .delete(`${API}/songs/${id}`)
        .then(() => {
                navigate(`/songs`);
            },
            (error) => console.error(error)
        )
        .catch((c) => console.warn('catch', c));
    }


    useEffect(() => {
        axios
        .get(`${API}/songs/${id}`)
        .then((res) => {
            setSong(res.data)
        })
        .catch((c) => {
            console.warn('catch', c);
        });
    }, [id]);

    return(
        <article className='Song-Details'>
            {song.is_favorite ? <span>⭐️</span> : null}
            <h2>{song.name} By {song.artist}</h2>
            <br/>
            <h3>Album: {song.album}</h3>
            <h3>Time: {song.time}</h3>
            <div className='Display'>
                <Link to={`/songs`}>
                    <button>Back</button>
                </Link>
            </div>
            <div>
                <button onClick={deleteSong}>Delete</button>
            </div>
        </article>
    );
};