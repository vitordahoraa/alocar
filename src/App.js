import './Pages/FrontPage'
import {Route,Routes} from 'react-router-dom'
import FrontPage from './Pages/FrontPage'
import Catalogo from './Pages/Catalogo'
import Carros from './Pages/CarroAlocar'
function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<FrontPage />}/>
  
        <Route path='/catalogo' element={<Catalogo />}/>

        <Route path='/carros/:id' element={<Carros />}/>

      </Routes>
    </div>
  );
}

export default App;
