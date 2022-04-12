import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import '../../Sass/pages/Viewer.scss'
// Slider code
// https://codesandbox.io/s/elastic-hill-cmbz1?from-embed=&file=/src/App.js

export const ViewerItem = ( { children, width } ) => {

	return (
		<div className="carousel-item" style={ { width: width } }>
			{ children }
		</div>
	)
}

const ViewerWrapper = ( { children } ) => {

	const params = useParams()

	const [ activeIndex, setActiveIndex ] = useState( params.page - 1 );

	const updateIndex = ( newIndex ) => {
		if ( newIndex < 0 ) {
			newIndex = React.Children.count( children ) - 1;
		} else if ( newIndex >= React.Children.count( children ) ) {
			newIndex = 0;
		}
		setActiveIndex( newIndex );
		window.history.replaceState(null, '', newIndex +1);
	};
	return (
		<div className="carousel" >
			<div className="inner" style={ { transform: `translateX(-${ activeIndex * 100 }%)` } } >
				{
					React.Children.map( children, ( child, index ) => {
						return React.cloneElement( child, { width: "100%" } );
					} )
				}
			</div>
			<div className="indicators">
				<div className='prev' onClick={ () => { updateIndex( activeIndex - 1 ); } }></div>
				<div className='next' onClick={ () => { updateIndex( activeIndex + 1 ); } }></div>
			</div>
		</div>
	);

};

export default ViewerWrapper;
