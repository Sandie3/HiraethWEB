import axios from 'axios'

const api = {
	baseUrl: 'http://localhost:4010/',
	imageUrl: 'http://localhost:4010/images'
}

export let imgUrl = api.imageUrl

export const getUsers = async () => {

	let res = await axios.get( api.baseUrl + 'user' )
		.then( res => { return res.data; } )
		.catch( err => { return err.response.data } )
	return res;

}

export const getUser = async ( userId ) => {

	let res = await axios.get( api.baseUrl + 'user' + '/' + userId )
		.then( res => { return res.data; } )
		.catch( err => { return err.response.data } )
	return res;

}

export const createUser = async ( formData ) => {

	let formdata = new FormData( formData )

	let res = await axios.post( api.baseUrl + 'user', formdata, { withCredentials: true } )
		.then( res => { return res.data; } )
		.catch( err => { return err.response.data } )
	return res;

}