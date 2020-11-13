import React, {useState, useEffect} from 'react';
import {refreshTotalAmountCart, removeItemCart} from "../../redux/reducers/cart";
import './style.css';
import {useDispatch, useSelector} from "react-redux";

const BtnUpdate = ({id, price}) => {
	const dispatch = useDispatch();
	const [qty, setQty] = useState(1);

	const handleAdd = () => setQty(qty + 1);
	const handleDecrease = () => setQty(qty - 1);

	useEffect(() => {
		if (qty === 0) dispatch(removeItemCart(id));
	}, [qty])

	const handleCartUpdate = () => {
		const data = {
			id,
			quantity: qty,
		};
		dispatch(refreshTotalAmountCart(data));
	}

	return (
		<div className="b-update">
			<div className="b-update__qty">
				<button className="b-update__btn" onClick={handleAdd}>+</button>
				<input className="b-update__input" type="text" value={qty} readOnly/>
				<button className="b-update__btn" onClick={handleDecrease}>-</button>
			</div>
			<div className="b-update__submit">
				<button className="b-update__btn--a" onClick={handleCartUpdate}>Atualizar</button>
			</div>
		</div>
	)
}

export default BtnUpdate;