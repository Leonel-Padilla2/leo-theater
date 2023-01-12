import { HashRouter, Route, Routes } from 'react-router-dom';
import NavBar from '../Components/NavBar/NavBar';
import './App.css';

const App = () => {
  return (
    <div className="app-container">
      <HashRouter>
        <NavBar/>
        
        <Routes>
          <Route path='/' element={<h1>HOME</h1>}/>
          <Route path='/movies' element={<h1>MOVIES</h1>}/>
          <Route path='/shows' element={<h1>TV SHOWS</h1>}/>
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
