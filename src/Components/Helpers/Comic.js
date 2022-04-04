import axios from 'axios'
import { baseUrl } from './Api'

export const getComic = async (id) => {

	let res = await axios.get( baseUrl + 'comic/' + id )
		.then( res => { return res.data; } )
		.catch( err => { return err.response.data } )
	return res;

}