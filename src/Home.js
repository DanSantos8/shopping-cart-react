import React, {useEffect} from 'react';
import { useSelector, useDispatch } from "react-redux";
import {dataProducts} from "./redux/reducers/products";
import './assets/style.css';
import './assets/reset.css';
import Product from "./components/product";

function Home() {
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(dataProducts());
	}, [])

	const {loading, data} = useSelector(store => store.products);
  return (
    <div className="wrap-index">
		<div className="wrap-header">
			<div className="indent"></div>
		</div>
		<div className="wrap-content">
			<div className="indent">
				<div className="shelf">
					{loading ? <p> Carregando...</p> : data.map((product) =>
						<Product image={product.image} title={product.title.substring(0,100)} price={product.price}/>
						)}
				</div>
			</div>
		</div>
    </div>
  );
}

export default Home;
