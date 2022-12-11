import './Pages/FrontPage'
import {Route,Routes} from 'react-router-dom'
import FrontPage from './Pages/FrontPage'
import Catalogo from './Pages/Catalogo'
import Carros from './Pages/CarroAlocar'
import Login from './Pages/Login'
import Register from './Pages/Register'
function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<FrontPage />}/>
  
        <Route path='/catalogo' element={<Catalogo />}/>

        <Route path='/carros/:id' element={<Carros />}/>

        <Route path='/login' element={<Login />}/>

        <Route path='/register' element={<Register />}/>

      </Routes>
    </div>
  );
}

export default App;
