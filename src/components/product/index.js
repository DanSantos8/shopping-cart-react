import React, {useCallback} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {addItemCart} from "../../redux/reducers/cart";
import './style.css';

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
	const {data} = useSelector(store => store.cart);

	const handleAddItem = useCallback(() => {
		dispatch(addItemCart(dataProduct));
	})

	return (
		<div className="product">
			<div className="product__image">
				<img src={image} alt={title} />
			</div>
			<div className="product__title">
				<h4>{title}</h4>
			</div>
			<div className="product__price">
				<span>R$ {price}</span>
			</div>
			<div className="product__btn">
				<button onClick={handleAddItem}>Adicionar ao carrinho</button>
			</div>
		</div>
	)
}

export default Product;