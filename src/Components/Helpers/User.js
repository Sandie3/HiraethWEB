import axios from 'axios'
import { baseUrl } from './Api'

export const getUsers = async () => {

	let res = await axios.get( baseUrl + 'user' )
		.then( res => { return res.data; } )
		.catch( err => { return err.response.data } )
	return res;

}

export const getUser = async ( userId ) => {

	let res = await axios.get( baseUrl + 'user/' + userId )
		.then( res => { return res.data; } )
		.catch( err => { return err.response.data } )
	return res;

}

export const createUser = async ( formData ) => {

	let formdata = new FormData( formData )

	let res = await axios.post( baseUrl + 'user', formdata, { withCredentials: true } )
		.then( res => { return res.data; } )
		.catch( err => { return err.response.data } )
	return res;

}

export const editBio = async ( user, data ) => {

	let res = await axios.put( baseUrl + 'user/' + user, data, { withCredentials: true } )
		.then( res => { return res.data; } )
		.catch( err => { return err.response.data } )
	return res;

}