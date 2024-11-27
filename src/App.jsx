import {Routes, Route} from 'react-router-dom'

import FooterComponent from './components/FooterComponent'

import HomePage from './pages/HomePage'
import ClassificationPage from './pages/ClassificationPage'

function App() {

  return (
    <div>
      <Routes>
        <Route path='/' Component={HomePage} />
        <Route path='/classification' Component={ClassificationPage} />
      </Routes>

      <FooterComponent />

      <a href="#" id="scroll-top" className="scroll-top d-flex align-items-center justify-content-center"><i className="bi bi-arrow-up-short"></i></a>

      {/* <div id="preloader"></div> */}
    </div>
  )
}

export default App
