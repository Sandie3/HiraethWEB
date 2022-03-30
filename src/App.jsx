import React, { useState, useEffect } from 'react';
import {
	BrowserRouter,
	Route,
	Routes,
} from 'react-router-dom'

import NoPage from './Components/Pages/NoPage'
import LoginContextProvider from './Components/Context/LoginContext';

import Layout from './Components/Layout/Layout'
import Dashboard from './Components/Pages/Dashboard'
import Login from './Components/Pages/Login'
import Signup from './Components/Pages/Signup'

import Profile from './Components/Pages/Profile'

import AdminLayout from './Components/Layout/AdminLayout'
import AdminHome from './Components/Pages/Admin/AdminHome'

import './Sass/Main.scss';

function App () {

	return (
		<BrowserRouter>
			<LoginContextProvider>
				<Routes>
					
					<Route path="/" element={ <Layout /> }>
						<Route index element={ <Dashboard /> } />
						<Route path="/login" element={ <Login /> } />
						<Route path="/signup" element={ <Signup /> } />
						<Route path="/u/:user" element={ <Profile /> } />
						<Route path='*' element={ <NoPage /> } />
					</Route>

					<Route path="/admin" element={ <AdminLayout /> }>
						<Route index element={ <AdminHome /> } />
						<Route path='*' element={ <NoPage /> } />
					</Route>

				</Routes>
			</LoginContextProvider>
		</BrowserRouter>
	);
}

export default App;
