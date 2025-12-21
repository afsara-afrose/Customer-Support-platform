import './App.css'
import BannerSection from './Components/BannerSection'

import Navbar from './Components/Navbar'

function App() {
  

  return (
    <>
    <Navbar></Navbar>
    <section className='w-11/12 mx-auto'>
      <BannerSection></BannerSection>
      
    </section>
 
    </>
  )
}

export default App
