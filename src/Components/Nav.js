import { Link } from 'react-router-dom'


export default function Nav (){
    return(
      
      <nav className='Nav'>
            <Link to="/Home"><button>Home</button></Link>
            
            <Link to='/songs'><button>Songs</button></Link>
                
            <Link to='/songs/new'><button>New Song</button></Link>
        </nav>
    )
}