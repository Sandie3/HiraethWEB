import React from 'react'
import { Link } from 'react-router-dom'
import { imgUrl } from '../Helpers/Api'

const ComicThumbs = ( props ) => {
	return (
		<>
			<div className='comicWrap'>
				<div className="comicImgWrap">
					<Link to={ "/comic/" + props.c._id }>
						<img src={ imgUrl + props.c.images[ 0 ].destination + "thumbnail/thumb-" + props.c.images[ 0 ].filename } alt={ props.c.title + " image" } />
					</Link>
				</div>
				<div className="comicTitle">
					<h1>{ props.c.title }</h1>
				</div>
				<div className="comicTitleShadow">
				</div>
			</div>
		</>
	)
}

export default ComicThumbs