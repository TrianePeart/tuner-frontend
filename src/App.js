import { BrowserRouter as Router, Routes, Route  } from "react-router-dom";
import Nav from './Components/Nav'
import './index.css'



import Home from './Pages/Home'
import Index from './Pages/Index'
import New from './Pages/New'
import Edit from './Pages/Edit'
import FourOhFour from './Pages/FourOhFour'

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar/>
        <main>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/songs' element={<Index/>}/>
            <Route path='/songs/new' element={<New/>}/>
            <Route path='/song/:id' element={<Show/>}/>
            <Route path='/song/:id/edit' element={<Edit/>}/>
            <Route path='*' element={<FourOhFour/>}/>
          </Routes>
        </main>
      </Router>
    </div>
  );
}

export default App;
