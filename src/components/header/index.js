import React from 'react';
import {Link} from "react-router-dom";
import './header.css';

const Header = ({title}) => {
	return (
		<div className="content__title">
			<h4>{title}</h4>
			<div className="content__nav">
				<Link to="/">Home</Link>
				<Link to="/cart" >Carrinho</Link>
			</div>
		</div>
	)

}

export default Header;