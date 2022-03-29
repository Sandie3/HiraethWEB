import axios from 'axios'

const api = {
	baseUrl: 'http://localhost:4010/',
	imageUrl: 'http://localhost:4010/images'
}

export let imgUrl = api.imageUrl

export const getUserPfp = async ( userId ) => {

	let res = await axios.get( api.baseUrl + 'userpfp' + '/' + userId )
		.then( res => { return res.data } )
		.catch( err => { return err.response.data } )
	return res;

}

export const getComics = async () => {

	let res = await axios.get( api.baseUrl + 'comic' )
		.then( res => { return res.data; } )
		.catch( err => { return err.response.data } )
	return res;

}
