import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './pages/About/About';
import Appoinment2 from './pages/Appoinment2/Appoinment2';
import ContactUs from './pages/ContactUs/ContactUs';
import Header from './pages/Header/Header';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import RequireAuth from './pages/RequireAuth/RequireAuth';
import Reviews from './pages/Reviews/Reviews';

function App() {
  return (
    <div className='max-w-7xl mx-auto px-16'>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/appoinment2' element={
          <RequireAuth>
            <Appoinment2></Appoinment2>
          </RequireAuth>}>
        </Route>
        <Route path='/reviews' element={<Reviews></Reviews>}></Route>
        <Route path='/contactUs' element={<ContactUs></ContactUs>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
      </Routes>
    </div>
  );
}

export default App;
