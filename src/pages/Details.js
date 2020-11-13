import React from 'react';

const Details = ({match}) => {
	const {id} = match.params;
	return(
		<div>{id}</div>
	);
}

export default Details;