import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './pages/Header/Header';
import Home from './pages/Home/Home';

function App() {
  return (
    <div className='px-16'>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
      </Routes>
    </div>
 );
}

export default App;
