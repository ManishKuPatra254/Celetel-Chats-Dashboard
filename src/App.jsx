import { Fragment } from 'react'
import './App.css'
import { Route, BrowserRouter, Routes } from 'react-router-dom'
import { Sidebar } from './components/Sidebar/Sidebar'
import { Dashboard } from './pages/Dashboard'
import { UsersDash } from './pages/UsersDash'
import { Messages } from './pages/Messages'

function App() {

  return (
    <Fragment>
      <BrowserRouter>
        <Sidebar>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/users" element={<UsersDash />} />
            <Route path="/messages" element={<Messages />} />
            <Route path="*" element={<> not found</>} />
          </Routes>
        </Sidebar>
      </BrowserRouter>
    </Fragment>
  )
}

export default App
