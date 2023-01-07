import { HashRouter, Route, Routes } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="App">
      <HashRouter>
        <Routes>
          <Route path='/' element={<h1>home</h1>}/>
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
