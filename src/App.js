//Dependencies
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

//Pages
import { InicialPage } from './Pages/InicialPage/inicialPage';
import { ErrorPage } from './Pages/ErrorPage/errorPage';
import { ProfessionalPage } from './Pages/ProfessionalPage/professionalPage';
import { ServicePage } from './Pages/ServicePage/servicePage';
import { TimePage } from './Pages/TimePage/timePage';
import { ConfirmPage } from './Pages/ConfirmPage/confirmPage';
import { Test } from './Content/test';
import { LastConfirmPage } from './Pages/LastConfirmPage/lastConfirmPage';
import { ProfessionalSchedulePage } from './Pages/ProfessionalSchedulePage/professionalSchedulePage';
import { IndividualSchedule } from './Pages/IndividualSchedule/individualSchedule';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<InicialPage />}></Route>
        <Route path='/test' element={<Test />}></Route>
        <Route path='/select-professional' element={<ProfessionalPage />}></Route>
        <Route path='/select-service/:profIndex' element={<ServicePage />}></Route>
        <Route path='/select-time/:profIndex/:servIndex/:dayIndex' element={<TimePage />}></Route>
        <Route path='/confirm/:profIndex/:servIndex/:dayIndex/:timeIndex' element={<ConfirmPage />}></Route>
        <Route path='/confirmed/:profIndex/:servIndex/:dayIndex/:timeIndex' element={<LastConfirmPage />}></Route>
        <Route path='/p' element={<ProfessionalSchedulePage />}></Route>
        <Route path='/p/:profIndex/:dayIndex' element={<IndividualSchedule />}></Route>
        <Route path='*' element={<ErrorPage />}></Route>
      </Routes>
    </Router>
  )
}