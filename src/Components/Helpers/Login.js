import axios from 'axios'

const api = {
	baseUrl: 'http://localhost:4010/',
	imageUrl: 'http://localhost:4010/images'
}

export let imgUrl = api.imageUrl

export const login = async ( loginData ) => {

	let formdata = new FormData( loginData )

	let res = await axios.post( api.baseUrl + 'login', formdata, { withCredentials: true } )
		.then( res => { return res.data; } )
		.catch( err => { return err.response.data } )
	return res;
}

export const loggedin = async () => {
	let res = await axios.get( api.baseUrl + 'login/loggedin', { withCredentials: true } )
		.then( res => { return res.data; } )
		.catch( err => { return err.response.data } )
	return res;
}

export const logout = async () => {
	let res = await axios.get( api.baseUrl + 'login/logout', { withCredentials: true } )
		.then( res => { return res.data; } )
		.catch( err => { return err.response.data } )
	return res;
}