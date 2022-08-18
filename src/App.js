//Dependencies
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

//Pages
import { InicialPage } from './Pages/InicialPage/inicialPage';
import { ErrorPage } from './Pages/ErrorPage/errorPage';
import { ProfessionalPage } from './Pages/ProfessionalPage/professionalPage';
import { ServicePage } from './Pages/ServicePage/servicePage';
import { TimePage } from './Pages/TimePage/timePage';
import { ConfirmPage } from './Pages/ConfirmPage/confirmPage';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<InicialPage />}></Route>
        <Route path='/select-professional' element={<ProfessionalPage />}></Route>
        <Route path='/select-service/:profIndex' element={<ServicePage />}></Route>
        <Route path='/select-time/:profIndex/:servIndex' element={<TimePage />}></Route>
        <Route path='/confirm/:profIndex/:servIndex/:dayIndex/:timeIndex' element={<ConfirmPage />}></Route>
        <Route path='*' element={<ErrorPage />}></Route>
      </Routes>
    </Router>
  )
}