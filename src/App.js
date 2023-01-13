import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter,Routes,Route, Navigate} from 'react-router-dom'
import "./App.css";
import Home from './common/Home';
import NavBar from './common/NavBar';
import Contact from './Pages/contact/Contact';
import Footer from './common/Footer';
import Test from './Test';

// import Test from './Test';
function App() {
  return (
    <div >
      <div className='app'>
       <BrowserRouter> 
        <NavBar/>
        <Routes>
          <Route path='/' element = {<Home/>}></Route>
          <Route path='/contact' element={<Contact/>}></Route>
          <Route path='/*' element={<Navigate to="/"/>}></Route>
        </Routes>
        {/* <Footer/> */}
        </BrowserRouter>
      </div>
      <Test/>
    </div>
  );
}
export default App;
