import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { getComic } from '../Helpers/Comic'

const Comic = () => {

	let param = useParams()

	const [comic, setComic] = useState()

	useEffect( () => {
		getComic( param ).then( res => {
			if (res) {
				setComic(res)
			}else{
				setComic()
			}
		} )

	}, [] )


	return (
		<div>Comic</div>
	)
}

export default Comic