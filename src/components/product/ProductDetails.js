import React from 'react';
import Button from "../buttons/Button";
import {useDispatch} from "react-redux";
import {addItemCart, removeItemCart} from "../../redux/reducers/cart";

const ProductDetails = ({title, price, id, description, image}) => {
	const dispatch = useDispatch();

	const dataProduct = {
		id,
		image,
		title,
		price,
		totalAmount: price,
		quantity: 1,
	}

	const handleAddItem = () => dispatch(addItemCart(dataProduct));
	const handleRemoveItem = () => dispatch(removeItemCart(id));

	return (
		<div className="p-details">
			<div className="p-details__row">
				<div className="p-details__image">
					<img src={image} alt={title} />
				</div>
				<div className="p-details__content">
					<h4 className="p-details__title">{title}</h4>
					<span className="p-details__price">R$ {price}</span>
					<Button handleAddItem={handleAddItem} handleRemoveItem={handleRemoveItem} id={id} />
				</div>
			</div>
			<h4 className="p-details__description">
				{description}
			</h4>
		</div>
	)
}

export default ProductDetails;