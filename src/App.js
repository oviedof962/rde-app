//import icons
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'remixicon/fonts/remixicon.css';

// import bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';

import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Estadistica from './pages/Estadistica';
import Configuracion from './pages/Configuracion';
import Usuario from './pages/Usuario'
import Operaciones from './pages/Operaciones';



import './App.css';
import Header from './static/Header';
import SideBar from './static/SideBar';

function App() {
  return (<>
 <Header/>
 <div className="app">
      <SideBar />
      <div className="content">
        <Routes>
          <Route path="/Home" element={<Home />} />
          <Route path="/Estadistica" element={<Estadistica />} />
          <Route path='/Configuracion' element={<Configuracion/>} />
          <Route path='/Usuario' element={<Usuario/>} />
          <Route path='/Operaciones' element={<Operaciones/>} />
        </Routes>
      </div>
    </div>
  </>);
}

export default App;
