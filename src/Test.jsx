import React, { useState, useEffect, useCallback, useMemo } from 'react'
// * useFull commands
// useE -> returns simple useEffect
// useS -> shorter name
// useM -> only runs when one of its dependencies update ( returns a memoized value )
// useC -> only runs when one of its dependencies update ( returns a memoized callback function )
// rif  -> if with else
// clgt -> log text
// then -> adds .then() with if statement
// rf   -> creact a react arrow function

const Test = () => {

	const [ test, setTest ] = useState( [] )

	// const Test = useCallback( () => {
	// 	setTest( ( c ) => [ ...c, "test" ] );
	// }, [ test ] )

	const tTest = useMemo(() => test, [test])

	const Test = () => {
		setTest( (t) => [...t, "Test"] )
	}

	return (
		<>
		<button onClick={ Test }>Yo</button>
		{tTest}
		</>
	)
}
export default Test