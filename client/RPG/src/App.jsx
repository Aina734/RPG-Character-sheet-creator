import './App.css'

import { BrowserRouter, Route, Routes} from 'react-router-dom'

//error page
import PageNotFound from './pages/PegeNotFound'

//normal navigation page
import Home from './pages/Home'
import CharacterCreator from './pages/CharacterCreator'
import News from './pages/News'

//user management page
import Login from './pages/User-Management/Login'
import Dashboard from './pages/User-Management/Dashboard'
import Register from './pages/User-Management/Register'
import Recovery from './pages/User-Management/Recovery'
import NewPass from './pages/User-Management/NewPass'
import ProtectedRoutes from './security/ProtectedRoutes'

function App() {


  return (
 <BrowserRouter> 
  <Routes>

  <Route element={<ProtectedRoutes />}>
  
    <Route element={<CharacterCreator />} path= "/create-character" />
    <Route element={<Dashboard />} path= "/dashboard" />

  </Route>

  <Route element={<Home />} path= "/" />

  <Route element={<News />} path= "/news" />

  <Route element={<Login />} path= "/login" />

  <Route element={<Register />} path= "/registration" />

  <Route element={<Recovery />} path= "/recovery" />

  <Route element={<NewPass />} path= "/set-recovery"  />

  <Route element={<PageNotFound />} path= "*" />

</Routes>
</BrowserRouter>
  )
}

export default App
