import React, {useCallback} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {addItemCart} from "../../redux/reducers/cart";
import './style.css';
import {Link} from "react-router-dom";

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

	const handleAddItem = useCallback(() => {
		dispatch(addItemCart(dataProduct));
	})

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
			<div className="product__btn">
				<button onClick={handleAddItem}>Adicionar ao carrinho</button>
			</div>

		</div>


	)
}

export default Product;