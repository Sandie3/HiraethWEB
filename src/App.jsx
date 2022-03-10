import React, { useState, useEffect } from 'react';
import {
	BrowserRouter,
	Route,
	Routes,
} from 'react-router-dom'

import NoPage from './Components/Pages/NoPage'

import Layout from './Components/Layout/Layout'
import Dashboard from './Components/Pages/Dashboard'
import Login from './Components/Layout/LoginBox'
import Signup from './Components/Layout/SignupBox'

import Profile from './Components/Pages/Profile'

import AdminLayout from './Components/Layout/AdminLayout'
import AdminHome from './Components/Pages/Admin/AdminHome'

import { loggedin } from './Components/Helpers/Login';
import { getUser } from './Components/Helpers/User';

import './Sass/Main.scss';

function App () {

	const [ isLoggedIn, setIsLoggedIn ] = useState( null )

	useEffect( () => {

		loggedin().then( res => {
			if ( res.login == true ) {
				setIsLoggedIn( true )
				// console.log(res)
			} else {
				setIsLoggedIn( false )
			}
		} )

	}, [] )


	return (
		<BrowserRouter>
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

				<Route path="/" element={ <Layout loggedIn={ isLoggedIn } /> }>
					<Route index element={ <Dashboard /> } />
					<Route path="/login" element={ isLoggedIn ? <NoPage /> : <Login /> } />
					<Route path="/signup" element={ isLoggedIn ? <NoPage /> : <Signup /> } />
					<Route path='*' element={ <NoPage /> } />
				</Route>

				<Route path="/user" element={ <Layout loggedIn={ isLoggedIn } /> }>
					{/* <Route path=":user" element={ !isLoggedIn ? <Profile /> : <Profile user={ 'sandie' } /> } /> */ }
					<Route path=":user" element={ <Profile /> } />
					<Route path='*' element={ <NoPage /> } />
				</Route>

				<Route path="/admin" element={ <AdminLayout loggedIn={ isLoggedIn } /> }>
					<Route index element={ <AdminHome /> } />
					<Route path='*' element={ <NoPage /> } />
				</Route>

			</Routes>
		</BrowserRouter>
	);
}

export default App;
