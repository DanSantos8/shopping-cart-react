import React, {useState, useEffect} from 'react';
import {refreshTotalAmountCart, removeItemCart} from "../../redux/reducers/cart";
import './Cart.css';
import {useDispatch} from "react-redux";
import Alert from "../alerts";
//TODO criar alerta perguntando se o usuário deseja remover o item do carrinho (ao clicar em excluir e quando input for 0)

const BtnUpdate = ({id, price}) => {
	const dispatch = useDispatch();
	const [qty, setQty] = useState(1);
	const [active, setActive] = useState(false);

	const handleAdd = () => {
		setQty(qty + 1);
	};
	const handleDecrease = () => {
		setQty(qty - 1);
	};

	useEffect(() => {
		qty === 0 && setActive(!active);
	}, [qty]);

	useEffect(() => {
		const data = {
			id,
			quantity: qty,
		};
		dispatch(refreshTotalAmountCart(data));
	})

	return (
		<div className="b-update">
			<div className="b-update__qty">
				<button className="b-update__btn" onClick={handleAdd}>+</button>
				<input className="b-update__input" type="text" value={qty} readOnly/>
				<button className="b-update__btn" onClick={handleDecrease} disabled={qty === 1 && true}>-</button>
			</div>
			{
				active && <Alert id={id} setActive={setActive} setQty={setQty} qty={qty} />
			}

		</div>
	)
}

export default BtnUpdate;