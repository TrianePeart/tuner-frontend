import { useState, useEffect} from 'react'; 
import { Link, useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

const API = process.REACT_APP_API_KEY; 

export default function EditSong (){
    const { id } = useParams(); 
    const navigate = useNavigate(); 
    const [song, setSong] = useState({
        name:'',
        artist:'', 
        time:'',
        is_favorite: false,
    }); 

    const updateSong = (updatedsong) => {
        axios
        .put(`${API}/songs/${id}`, updatedsong)
        .then(
            () => {
              navigate(`/songs/${id}`);
            },
            (error) => console.error(error)
        )
        .catch((c) => console.warn("catch", c));
    };

    useEffect(() => {
        axios.get(`${API}/songs/${id}`).then(
            (res) => setSong(res.data),
            (error) => (`/not-found`)
        )
    }, [id, navigate]);

    const handleTextChange = (event) =>{
        setSong({...song, [event.target.id]: event.target.value}); 
    }; 

    const handleLiked = () => {
        setSong({...song, is_favorite: !song.is_favorite})
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        updateSong(song, id)
    };

    return(
        <div className='Edit'>
            <form onSubmit={handleSubmit}>
                <label htmlFor='name'>Song Name</label>
                <input 
                id='name'
                type='text'
                value={song.name}
                placeholder='name'
                onChange={handleTextChange}
                required
                />
                <label htmlFor='artist'>Artist</label>
                <input
                id='artist'
                type='text'
                value={song.artist}
                placeholder='artist'
                onChange={handleTextChange}
                required
                />
                <label htmlFor='album'>Album</label>
                <input
                id='album'
                type='text'
                name='album'
                value={song.album}
                placeholder='album'
                onChange={handleTextChange}
                required
                />
                <label htmlFor='time'>Time</label>
                <input
                id='time'
                type='text'
                value={song.time}
                placeholder='time'
                onChange={handleTextChange}
                />
                <label htmlFor='is_favorite'>Favorite</label>
                <input
                id='is_favorite'
                text='checkbox'
                onChange={handleLiked}
                checked={song.is_favorite}
                />
                <br/>
                <input type='submit' />
            </form>
            <Link to={`/song/${id}`}>
                <button>Back</button>
            </Link>
        </div>
    );
};