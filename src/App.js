import './App.css';
import Login from './pages/Login';
import Register from './pages/Register';
import HistoryPembayaran from  './pages/HistoryPembayaran';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './font.css'

import { GlobalProvider } from './context/GlobalContext';
import Navbar from './components/navbar';
import Tagihan from './components/tagihan';
import ListPembayaran from './components/listPembayaran';
import UserDashboard from './pages/UserDashboard';
import Pembayaran from './pages/Pembayaran';
import AdminDashboard from './pages/adminDashboard';
import Pembukuan from './pages/Pembukuan';
import EventPage from './pages/EventPage';
import DetailEvent from './pages/DetailEvent';


function App() {
  return (
    <BrowserRouter>
     <GlobalProvider>
        <Routes>
          <Route path='/register' element={<Register/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/historyPembayaran/:billId' element={<HistoryPembayaran/>}/>
          <Route path='/' element={<UserDashboard/>}/>
          <Route path='/pembayaran/:billId' element={<Pembayaran/>}/>
          <Route path='/admin/' element={<AdminDashboard/>}/>
          <Route path='/admin/pembukuan' element={<Pembukuan/>}/>
          <Route path='/admin/event' element={<EventPage/>}/>
          <Route path='/admin/event/1' element={<DetailEvent/>}/>
        </Routes>
      </GlobalProvider>
    </BrowserRouter>
  );
}

export default App;
