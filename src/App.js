import logo from './logo.svg';
import './App.css';
import { HashRouter as Router } from "react-router-dom";
import { Routes, Route } from 'react-router-dom';

import {Home} from './pages/home';
import {About} from './pages/about';
import {Projects} from './pages/projects';
import {Header} from './components/header';
import {Footer} from './components/footer';

function App() {
  return (
   <div class="bg-darkBackground h-[100%]">
    <Router>
      <Header />
      <Routes>
        <Route path="" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/projects" element={<Projects />}></Route>
      </Routes>
      <Footer />
    </Router>
      
   </div>
  );
}

export default App;
