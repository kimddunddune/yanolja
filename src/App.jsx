import { BrowserRouter } from 'react-router-dom'
import Header from './component/Header'
import Menu from './component/Menu'
import Slide from './component/Slide'
import Tab from './component/Tab'
import Footer from './component/footer'
import './App.css'

function App() {
  

  return (
    <>
    <BrowserRouter>
      <div id="wrap">
        <Header />
        <Menu />
        <Slide />
        <Tab />
        <Footer />
      </div>
      </BrowserRouter>
    </>
  )
}

export default App
