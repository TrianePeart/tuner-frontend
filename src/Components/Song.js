import { Link } from 'react-router-dom';

export default function Song ({song}){
    return(
        <div>
            {song.isFavorite ? <span>⭐️</span> : null}
            <Link to={`/songs/${song.id}`}>{song.name}</Link>
        </div>
    )
}