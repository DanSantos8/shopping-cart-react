import React from 'react';
import './Cart.css';
import Cart from '../../assets/images/ico-cart.png';
import { Link } from 'react-router-dom';

const FloatCart = () => (
	<div className="cart">
		<Link to="/cart" className="cart__ico">
			<img className="cart__img" src={Cart} alt=""/>
		</Link>
	</div>
)

export default FloatCart;