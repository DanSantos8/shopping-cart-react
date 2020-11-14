import React from 'react';
import Checked from '../../assets/images/check.png';
import Remove from '../../assets/images/remove.png';
import './Button.css';
import {useSelector} from "react-redux";

const Button = ({handleRemoveItem, handleAddItem, id, home}) => {
	const {data} = useSelector(store => store.cart);
	const [active, setActive] = React.useState(false);


	React.useEffect(() => {
		const item = data.find(item => item.id === id);
		setActive(item);
	}, [data, id]);

	return (
		<div className="btn">
			{ active ?
				<button onClick={handleRemoveItem} className={`btn__button ${home && 'btn__button-home'}`} >
					Remover <img className="btn__image" src={Remove} alt="Remove"/>
				</button>
				:
				<button onClick={handleAddItem} className={`btn__button ${home && 'btn__button-home'}`}>
					adicionar ao carrinho <img className="btn__image" src={Checked} alt="checked"/>
				</button>
			}
		</div>
	)
}

export default Button;