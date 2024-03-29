import React, { useEffect } from 'react';
import {
	BrowserRouter,
	Route,
	Routes,
} from 'react-router-dom'

import NoPage from './Components/Pages/NoPage'
import LoginContextProvider from './Components/Context/LoginContext'

import Layout from './Components/Layout/Layout'
import Dashboard from './Components/Pages/Dashboard'
import Login from './Components/Pages/Login'
import Signup from './Components/Pages/Signup'

import Profile from './Components/Pages/Profile'
import Comic from './Components/Pages/Comic'
import Viewer from './Components/Pages/Viewer'

import AdminLayout from './Components/Layout/AdminLayout'
import AdminHome from './Components/Pages/Admin/AdminHome'

import './Sass/Main.scss';
import Test from './Test';

import { keepTheme } from './Components/utils/theme'

function App () {

	useEffect(() => {
		keepTheme();
	})

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

					<Route path="/comic" element={ <Layout /> }>
						<Route path=":id" element={ <Comic /> } />
						<Route path='*' element={ <NoPage /> } />
					</Route>
					<Route path="/viewer" element={ <Layout /> }>
						<Route path=":comic/:page" element={ <Viewer /> } />
						<Route path='*' element={ <NoPage /> } />
					</Route>

					<Route path="/admin" element={ <AdminLayout /> }>
						<Route index element={ <AdminHome /> } />
						<Route path='*' element={ <NoPage /> } />
					</Route>

					<Route path='/test' element={ <Test /> } />

				</Routes>
			</LoginContextProvider>
		</BrowserRouter>
	);
}

export default App;
