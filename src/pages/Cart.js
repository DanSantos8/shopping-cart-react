import React, {useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import Item from "../components/cart/Item";
import Header from "../components/header";
import {cleanCart} from "../redux/reducers/cart";
import {getTotal, formatBrl} from "../redux/helper/format";

function Cart() {
	const dispatch = useDispatch();
	const {data} = useSelector(store => store.cart);
	const [order, setOrder] = useState(false);

	let total = formatBrl(data.reduce(getTotal,0));
	console.log(formatBrl(total));

	const handleCleanCart = () => {
		dispatch(cleanCart());
		setOrder(true);
		const timer = setTimeout(() => {
			setOrder(false);
		}, 2000);
		return () => clearTimeout(timer);
	}
  return (
  	<>
		<div className="content">
			<div className="indent">
				<Header title="Meu carrinho"/>

				<div className="content__shelf">
					{data.length > 0 &&
					<div className="content__order">
						<span className="content__total">
							Total: R$ {total}
						</span>
						<button className="content__button" onClick={handleCleanCart}>
							Finalizar Pedido
						</button>
					</div>
					}
					{
						order &&
						<div className="content__container">
							<span className="content__message">Obrigado!</span>
						</div>
					}
					<div className="content__item">

						{data.length > 0 ?
							data.map((item, index) =>
								<Item key={item.id} index={index + 1} totalAmount={item.totalAmount} quantity={item.quantity} title={item.title} price={item.price} image={item.image} id={item.id} />)
							:
							<p>Carrinho vazio! :(</p>}
					</div>
				</div>
			</div>
		</div>
	</>

  );
}

export default Cart;
