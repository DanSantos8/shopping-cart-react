import React, {useEffect} from 'react';
import { useSelector, useDispatch } from "react-redux";
import {dataProducts} from "../redux/reducers/products";
import '../assets/style.css';
import '../assets/reset.css';
import Product from "../components/product";
import FloatCart from "../components/cart/float-cart";

function Home() {
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(dataProducts());
	}, [])

	const {loading, data} = useSelector(store => store.products);
  return (
  	<>
		<div className="content">
			<div className="indent">
				<div className="content__title">
					<h4>LOJEACT</h4>
				</div>
				<div className="shelf">
					{loading ? <p> Carregando...</p> : data.map((product) =>
						<Product key={product.id} id={product.id} image={product.image} title={product.title.substring(0,100)} price={product.price}/>
					)}
				</div>
			</div>
		</div>
		<FloatCart />
	</>

  );
}

export default Home;
