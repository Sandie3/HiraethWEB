import React from 'react'
import { imgUrl } from '../Helpers/Image'

const ComicThumbs = ( props ) => {
	return (
		<>
			<div className='comicWrap'>
				<div className="comicImgWrap">
					<img src={ imgUrl + props.c.images[ 0 ].destination + "thumbnail/thumb-" + props.c.images[ 0 ].filename } alt={ props.c.title + " image" } />
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