import axios from 'axios'
import { baseUrl } from './Api'

export const getUserPfp = async ( userId ) => {

	let res = await axios.get( baseUrl + 'usericon/' + userId )
		.then( res => { return res.data } )
		.catch( err => { return err.response.data } )
	return res;

}

export const getComics = async () => {

	let res = await axios.get( baseUrl + 'comic' )
		.then( res => { return res.data; } )
		.catch( err => { return err.response.data } )
	return res;

}
