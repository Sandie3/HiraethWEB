import React from 'react'

const PostThumb = ( props ) => {
	return (
		<>
			<div className='comicWrap'>
				<div className="comicImgWrap">
					<img src={ props.c.images[ 0 ].path } alt={ props.c.title + " image" } />
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

export default PostThumb