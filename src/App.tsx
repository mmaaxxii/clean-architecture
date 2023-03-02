import { useSelector } from 'react-redux'
import './App.css'
import { Home } from './pages/home'
import store from './redux/store'
import { AppStore } from './redux/store'


function App() {
  const user = useSelector((state: AppStore) => state.user)
  return (
    <div>
      <p>{JSON.stringify(user)}</p>
      <Home />
    </div>
    )
}

export default App
