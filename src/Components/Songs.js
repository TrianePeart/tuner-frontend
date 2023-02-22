import { useState, useEffect } from "react";
import Song from './Song';
import axios from "axios";

const API = process.REACT_APP_API_KEY; 

export default function Songs(){
    const [songs, setSong] = useState([])

    useEffect(() => {
        axios
        .get(`${API}/songs/`)
        .then((res) => {
            setSong(res.data)
        })
        .catch((c) => {
            console.warn('catch', c);
        });
    }, []);

    return(
        <div>
            <h2></h2>
            <div>
                {songs.maps((song) => {
                    return(
                        <Song key={song.id} song={song}/>
                    )
                })}
            </div>
        </div>
    );
};