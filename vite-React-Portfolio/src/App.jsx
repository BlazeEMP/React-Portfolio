import { Outlet } from 'react-router-dom';
import Header from './components/Header'
import Footer from './components/Footer'
import './App.css'

function App() {
  return (
    <>
      <Header />
      <Outlet id='content-section' />
      <Footer />
    </>
  )
}

export default App
