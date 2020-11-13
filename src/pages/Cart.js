import React from 'react';
import {useSelector} from "react-redux";
import Item from "../components/cart/item";

function Cart() {
	const {data} = useSelector(store => store.cart);
	console.log(data);
	//TODO criar total do carrinho e finalizar pedido
  return (
  	<>
		<div className="content">
			<div className="indent">
				<div className="content__title">
					<h4>Meu carrinho</h4>
				</div>
				<div className="content__shelf">
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
