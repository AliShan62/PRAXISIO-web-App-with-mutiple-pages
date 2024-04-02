import Home from './pages/Index'
import 'aos/dist/aos.css'; // Import AOS CSS
import AOS from 'aos';
import { BrowserRouter , Routes ,Route}  from 'react-router-dom'
import Categories from './pages/Categories';
import Medicines from './pages/Medicines'
import Chemicals from './pages/Chemicals'
import Calculations from './pages/Calculations'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { } from 'react-router-dom';




   AOS.init();
const App = () => {
  return (


     <BrowserRouter>
        <Routes>
          <Route index element={<Home/>}/>
          <Route   path="/Categories" element={<Categories/>}/>
          <Route   path="/Medicines" element={< Medicines/>}/>
          <Route   path="/Chemicals" element={< Chemicals/>}/>
          <Route   path="/Calculations" element={<Calculations/>}/>
        </Routes>
      </BrowserRouter>
 
  )
}

export default App