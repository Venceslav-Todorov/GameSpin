import { BrowserRouter, Outlet } from 'react-router-dom'
import Router from './Router'
import Header from './views/components/Header'

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Router>
          <Outlet />
        </Router>
      </BrowserRouter>
    </>
  )
}

export default App
