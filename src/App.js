import logo from './logo.svg';
import './App.css';
import { Routes, Route, BrowserRouter } from 'react-router-dom';

import {Home} from './pages/home';
import {About} from './pages/about';
import {Projects} from './pages/projects';
import {Header} from './components/header';
import {Footer} from './components/footer';

function App() {
  return (
   <div class="bg-darkBackground">
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/projects" element={<Projects />}></Route>
      </Routes>
      <Footer />
    </BrowserRouter>
      
   </div>
  );
}

export default App;
