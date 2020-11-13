import React from 'react';
import BtnUpdate from "../buttons/update";
import {removeItemCart} from "../../redux/reducers/cart";
import {useDispatch} from "react-redux";

const Item = ({id, image, title, price, quantity, index, totalAmount}) => {
	const dispatch = useDispatch();
	const handleRemoveItem = () => dispatch(removeItemCart(id));
	return(
		<div className="c-item">
			<div className="c-item__head">
				<h4 className="c-item__h4">Produto {index}</h4>
				<button onClick={handleRemoveItem}>Excluir</button>
			</div>
			<div className="c-item__row">
				<div className="c-item__block">
					<div className="c-item__image c-item__margin">
						<img className="c-item__img" src={image} alt={title}/>
					</div>
					<div className="c-item__col c-item__margin">
						<span className="c-item__title">{title}</span>
					</div>
				</div>
				<div className="c-item__block">
					<div className="c-item__price c-item__margin">
						<span>{price}</span>
					</div>
					<div className="c-item__qty c-item__margin">
						<BtnUpdate id={id} price={price}/>
					</div>
				</div>
				<div className="c-item__col c-item__margin">
					<span className="c-item__totalAmount">{totalAmount}</span>
				</div>
			</div>

		</div>

	);
}

export default Item;