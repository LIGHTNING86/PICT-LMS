import './App.css';
import { Routes, Route } from 'react-router-dom';
import Navbar from '../src/components/Navbar';
import Home from '../src/pages/Home';
import Register from '../src/pages/Register';
import Login from '../src/pages/Login';
import Dashboard from './pages/Dashboard';
import LeavePage from './pages/LeavePage';
import axios from 'axios';
import { Toaster } from 'react-hot-toast'
import { UserContextProvider } from '../context/userContext';

axios.defaults.baseURL = 'http://localhost:8000'
axios.defaults.withCredentials = true

function App() {

  return (
      <UserContextProvider>
        <Toaster position='bottom-right' toastOptions={{duration: 2000}} />
        <Routes>  
          <Route path='/' element={
            <div className='text-white h-[100vh] flex items-center justify-center bg-cover' style={{"backgroundImage": "url('../src/assets/background.jpg')"}}>
              <Login />
            </div>
          } />
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
          <div className='h-[100vh] flex bg-cover' style={{"backgroundImage": "url('../src/assets/background.jpg')"}}>
            <Dashboard />
          </div>
          }/>
          <Route path='/home' element={
          <div className='h-[100vh] flex justify-center bg-cover'>
            <Dashboard />
          </div>
          }/>
          <Route path='/leavepage' element={
          <div className='h-[100vh] flex bg-cover' style={{"backgroundImage": "url('../src/assets/background.jpg')"}}>
            <LeavePage />
          </div>
          }/>
        </Routes>
      </UserContextProvider>
  );
}

export default App
