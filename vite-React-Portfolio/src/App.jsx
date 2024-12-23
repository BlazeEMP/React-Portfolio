import { Outlet } from 'react-router-dom';
import Header from './components/Header'
import Footer from './components/Footer'
import './styles/reset.css'
import './App.css'

function App() {
  return (
    <>
      <Header />
      <Outlet className='content-section' />
      <Footer />
    </>
  )
}

export default App
