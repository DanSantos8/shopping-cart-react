import React from 'react';
import './style.css';

export const Product = ({image, title, price}) => (
	<div className="product">
		<div className="product__image">
			<img src={image} alt={title} />
		</div>
		<div className="product__title">
			<h4>{title}</h4>
		</div>
		<div className="product__price">
			<span>{price}</span>
		</div>
	</div>
);

export default Product;