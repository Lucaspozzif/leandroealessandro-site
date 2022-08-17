//Dependencies
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom'

//Pages
import { InicialPage } from './Pages/InicialPage/inicialPage'

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<InicialPage/>}></Route>
      </Routes>
    </Router>
  )
}