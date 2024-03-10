import './App.css';
import { Routes, Route } from 'react-router-dom';
import Navbar from '../src/components/Navbar';
import Home from '../src/pages/Home';
import Register from '../src/pages/Register';
import Login from '../src/pages/Login';
import Dashboard from './pages/Dashboard';
import axios from 'axios';
import { Toaster } from 'react-hot-toast'
import { UserContextProvider } from '../context/userContext';

axios.defaults.baseURL = 'http://localhost:8000'
axios.defaults.withCredentials = true

function App() {

  return (
      <UserContextProvider>
        {/* <Navbar /> */}
        <Toaster position='bottom-right' toastOptions={{duration: 2000}} />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/register' element={
          <div className='text-white h-[100vh] flex items-center justify-center bg-cover' style={{"backgroundImage": "url('../src/assets/background.jpg')"}}>
            <Register />
          </div>
          } />
          <Route path='/login' element={
          <div className='text-white h-[100vh] flex items-center justify-center bg-cover' style={{"backgroundImage": "url('../src/assets/background.jpg')"}}>
            <Login />
          </div>
          } />
          <Route path='/dashboard' element={
          <div className='text-white h-[100vh] flex items-center justify-center bg-cover' style={{"backgroundImage": "url('../src/assets/background.jpg')"}}>
            <Dashboard />
          </div>
          }/>
        </Routes>
      </UserContextProvider>
  );
  return (
    <div className='text-white'>
      <Login />
    </div>
  );
}

export default App
