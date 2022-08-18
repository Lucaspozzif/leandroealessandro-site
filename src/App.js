//Dependencies
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom'

//Pages
import { InicialPage } from './Pages/InicialPage/inicialPage';
import { ErrorPage } from './Pages/ErrorPage/errorPage';
import { ProfessionalPage } from './Pages/ProfessionalPage/professionalPage';
import { ServicePage } from './Pages/ServicePage/servicePage';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<InicialPage/>}></Route>
        <Route path='/select-professional' element={<ProfessionalPage/>}></Route>
        <Route path='/select-service/:professional' element={<ServicePage/>}></Route>
        <Route path='/select-service/:professional/:service' element={<ServicePage/>}></Route>
        <Route path='*' element={<ErrorPage/>}></Route>
      </Routes>
    </Router>
  )
}