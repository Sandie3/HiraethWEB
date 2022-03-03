import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Nav from './Components/Layout/Nav';
import NoPage from './Components/Pages/NoPage';
import LoginSignup from './Components/Pages/LoginSignup';

import './Sass/Main.scss';

function App () {

	return (
		<BrowserRouter>
		<Nav />
			<Routes>
				<Route path="/" element={ <Nav /> }>
					<Route index element={ <LoginSignup /> }></Route>
					<Route path='*' element={ <NoPage /> }></Route>
				</Route>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
