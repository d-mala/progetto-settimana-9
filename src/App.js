import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Header from './components/Header'
import Films from './components/Films'

function App() {
  return (
    <>
      <div>
        <Navbar />
        <Header />
        <Films />
        <Footer />
      </div>
    </>
  )
}

export default App
