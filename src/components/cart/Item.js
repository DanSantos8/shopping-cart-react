import React, {useState} from 'react';
import BtnUpdate from "./Update";
import Alert from "../alerts";
import Remove from '../../assets/images/remove.png'
import {Link} from "react-router-dom";

const Item = ({id, image, title, price, quantity, index, totalAmount}) => {
	const [active, setActive] = useState(false);
	const handleAlert = () => setActive(!active);
	return(
		<div className="c-item">
			<div className="c-item__head">
				<h4 className="c-item__h4">Produto {index}</h4>
				<button className="c-item__btn" onClick={handleAlert}>Excluir <img className="c-item__remove" src={Remove} alt="Excluir"/></button>
				{
					active && <Alert id={id} setActive={setActive} active={active} />
				}
			</div>
			<div className="c-item__row">
				<Link to={`/details/${id}`} className="c-item__block">
					<div className="c-item__image c-item__margin">
						<img className="c-item__img" src={image} alt={title}/>
					</div>
					<div className="c-item__col c-item__margin">
						<span className="c-item__title">{title}</span>
					</div>
				</Link>
				<div className="c-item__block c-item__block--update">
					<div className="c-item__margin">
						<span className="c-item__price">R$ {price}</span>
					</div>
					<div className="c-item__qty c-item__margin">
						<BtnUpdate id={id} price={price}/>
					</div>
				</div>
				<div className="c-item__col c-item__margin">
					<span className="c-item__totalAmount">R$ {totalAmount}</span>
				</div>
			</div>
		</div>

	);
}

export default Item;