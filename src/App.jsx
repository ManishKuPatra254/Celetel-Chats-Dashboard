import { Fragment } from 'react'
import './App.css'
import { Navbar } from './CustomNavbar/Navbar'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Chats } from './components/Chats'
import { Messages } from './components/Messages'
import { Contact } from './components/Contact'

function App() {

  return (
    <Fragment>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Chats />} />
          <Route path='/messages' element={<Messages />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </Fragment>
  )
}

export default App
