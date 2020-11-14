import React from 'react';
import './Alert.css';
import Checked from '../../assets/images/check.png';
import Remove from '../../assets/images/remove.png';
import {removeItemCart} from "../../redux/reducers/cart";
import {useDispatch} from "react-redux";

const Alert = ({id, setActive, setQty, qty}) => {
	const dispatch = useDispatch();
	const handleRemoveItem = () => {
		dispatch(removeItemCart(id));
		setActive(false);
	}

	const handleAdd = () => {
		setActive(false);
		qty === 0 && setQty(qty + 1);
	}

	return (
		<div className="alert">
			<div className="alert__box">
				<h4 className="alert__text">
					Deseja remover?
				</h4>
				<div className="alert__buttons">
					<button onClick={handleRemoveItem} className="alert__btn"><img className="alert__image" src={Checked} alt="Sim"/></button>
					<button onClick={handleAdd} className="alert__btn"><img className="alert__image" src={Remove} alt="Não"/></button>
				</div>
			</div>
		</div>
	)
}

export default Alert;