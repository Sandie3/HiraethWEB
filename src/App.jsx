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
import Login from './Components/Layout/LoginBox'
import Signup from './Components/Layout/SignupBox'

import Profile from './Components/Pages/Profile'

import AdminLayout from './Components/Layout/AdminLayout'
import AdminHome from './Components/Pages/Admin/AdminHome'

import './Sass/Main.scss';

import LoginContextProvider from './Components/Context/LoginContext';

function App () {

	return (
		<BrowserRouter>
			<LoginContextProvider>
				<div className="colWrap">
					<div className='bgCol'></div>
					<div className='col2'></div>
					<div className='col3'></div>
					<div className='col4'></div>
					<div className='col5'></div>
					<div className='col6'></div>
					<div className='col7'></div>
					<div className='col8'></div>
					<div className='col9'></div>
				</div>
				<Routes>

					<Route path="/" element={<Layout />}>
						<Route index element={<Dashboard />} />
						<Route path="/login" element={<Login />} />
						<Route path="/signup" element={<Signup />} />
						<Route path=":user" element={<Profile />} />
						<Route path='*' element={<NoPage />} />
					</Route>

					{/* <Route path="/user" element={ <Layout /> }>
						<Route path=":user" element={ <Profile /> } />
						<Route path='*' element={ <NoPage /> } />
					</Route> */}

					<Route path="/admin" element={<AdminLayout />}>
						<Route index element={<AdminHome />} />
						<Route path='*' element={<NoPage />} />
					</Route>

				</Routes>
			</LoginContextProvider>
		</BrowserRouter>
	);
}

export default App;
