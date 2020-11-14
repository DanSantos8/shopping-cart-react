import React, {useCallback} from 'react';
import {useDispatch} from "react-redux";
import {addItemCart, removeItemCart} from "../../redux/reducers/cart";
import './Product.css';
import {Link} from "react-router-dom";
import Button from "../buttons/Button";

export const Product = ({id, image, title, price}) => {
	const dataProduct = {
		id,
		image,
		title,
		price,
		totalAmount: price,
		quantity: 1,
	}
	const dispatch = useDispatch();

	const handleAddItem = () => dispatch(addItemCart(dataProduct));
	const handleRemoveItem = () => dispatch(removeItemCart(id));

	return (
		<div className="product">
			<Link to={`/details/${id}`} className="product__box">
				<div className="product__image">
					<img src={image} alt={title} />
				</div>
				<div className="product__title">
					<h4>{title}</h4>
				</div>
				<div className="product__price">
					<span>R$ {price}</span>
				</div>
			</Link>
			<Button home={true} handleAddItem={handleAddItem} handleRemoveItem={handleRemoveItem} id={id} />
		</div>


	)
}

export default Product;