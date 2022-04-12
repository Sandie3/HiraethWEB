import axios from 'axios'
import { baseUrl } from './Api'

export const getComics = async () => {

	let res = await axios.get( baseUrl + 'comic' )
		.then( res => { return res.data; } )
		.catch( err => { return err.response.data } )
	return res;

}

export const getComic = async ( id ) => {

	let res = await axios.get( baseUrl + 'comic/' + id )
		.then( res => { return res.data; } )
		.catch( err => { return err.response.data } )
	return res;

}

export const getComicsFromUser = async ( id ) => {

	let res = await axios.get( baseUrl + 'comic/user/' + id )
		.then( res => { return res.data; } )
		.catch( err => { return err.response.data } )
	return res;

}