import React, { useState, useEffect } from 'react';
import {
	BrowserRouter,
	Route,
	Routes,
} from 'react-router-dom'

import NoPage from './Components/Pages/NoPage';

import Layout from './Components/Layout/Layout';
import Dashboard from './Components/Pages/Dashboard'
import LoginSignup from './Components/Pages/LoginSignup';

import AdminLayout from './Components/Layout/AdminLayout';
import AdminHome from './Components/Pages/Admin/AdminHome';

import './Sass/Main.scss';

function App () {
	return (
		<BrowserRouter>
				<Routes>

        <Route path="/" element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path="/login" element={<LoginSignup />} />
          <Route path='*' element={ <NoPage /> } />
        </Route>

        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<AdminHome />} />
          <Route path='*' element={ <NoPage /> } />
        </Route>
        
      </Routes>
		</BrowserRouter>
	);
}

export default App;
