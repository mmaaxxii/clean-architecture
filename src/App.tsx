import { useSelector } from 'react-redux'
import './App.css'
import { Login, Home, Private } from './pages'
import { AppStore } from './redux/store'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { PrivateRoutes, PublicRoutes } from './models'
import {AuthGuard} from './guards'
import { RoutesWithNotFound } from './utilities'


function App() {
  const user = useSelector((state: AppStore) => state.user)
  return (
    <div className='App'>
      <BrowserRouter>
        <RoutesWithNotFound>
          <Route path='/' element={<Navigate to ={PrivateRoutes.PRIVATE} />} />
          <Route path='*' element={<>NOT FOUND</>} />
          <Route path={PublicRoutes.LOGIN} element={<Login />} />
          <Route element= {<AuthGuard/>}>
            <Route path={`${PrivateRoutes.PRIVATE}/*`} element={<Private />} />
          </Route>
        </RoutesWithNotFound>
      </BrowserRouter>
    </div>
  )
}
export default App

//*<p>{JSON.stringify(user)}</p>
