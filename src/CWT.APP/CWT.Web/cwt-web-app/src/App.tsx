import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/home/Home';
import LoginModal from './components/landingpage/LoginModal';

function App() {
  //pass data to see which chef it is to get relevant data
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/'  element={<Home />}/>
        <Route path='/login' element={<LoginModal />}/>
      </Routes>
    </BrowserRouter>
    
  );
}

export default App;
