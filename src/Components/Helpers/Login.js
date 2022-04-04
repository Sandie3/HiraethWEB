import axios from 'axios'
import { baseUrl } from './Api'

export const login = async ( loginData ) => {

	let formdata = new FormData( loginData )

	let res = await axios.post( baseUrl + 'login', formdata, { withCredentials: true } )
		.then( res => { return res.data; } )
		.catch( err => { return err.response.data } )
	return res;
}

export const loggedin = async () => {
	let res = await axios.get( baseUrl + 'login/loggedin', { withCredentials: true } )
		.then( res => { return res.data; } )
		.catch( err => { return err.response.data } )
	return res;
}

export const logout = async () => {
	let res = await axios.get( baseUrl + 'login/logout', { withCredentials: true } )
		.then( res => { return res.data; } )
		.catch( err => { return err.response.data } )
	return res;
}