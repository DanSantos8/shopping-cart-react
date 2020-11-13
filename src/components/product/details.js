import React from 'react';
import AddToCart from "../buttons/addToCart";

const ProductDetails = ({title, price, id, description, image}) => {
	console.log('ok');
	return (
		<div className="p-details">
			<div className="p-details__row">
				<div className="p-details__image">
					<img src={image} alt={title} />
				</div>
				<div className="p-details__content">
					<h4 className="p-details__title">{title}</h4>
					<div className="p-details__price">R$ {price}</div>
					<AddToCart />
				</div>
			</div>
			<h4 className="p-details__description">
				{description}
			</h4>
		</div>
	)
}

export default ProductDetails;