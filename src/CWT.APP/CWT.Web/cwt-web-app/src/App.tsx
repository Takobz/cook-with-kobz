import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/home/Home';
import Login from './components/pages/Login';

function App() {
  //pass data to see which chef it is to get relevant data
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/'  element={<Home />}/>
        <Route path='/login' element={<Login />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
