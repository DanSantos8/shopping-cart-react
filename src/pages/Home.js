import React, {useEffect, useState} from 'react';
import { useSelector, useDispatch } from "react-redux";
import {dataProducts} from "../redux/reducers/products";
import '../assets/css/style.css';
import '../assets/css/reset.css';
import Product from "../components/product";
import Header from "../components/header";
import FloatCart from "../components/cart/FloatCart";

function Home() {
	const dispatch = useDispatch();
	const {loading, data} = useSelector(store => store.products);
	const [searchTerm, setSearchTerm] = React.useState("");
	const [searchResult, setsearchResult] = useState([]);

	useEffect(() => {
		dispatch(dataProducts());
	}, [dispatch]);

	useEffect(() => {
		if (data){
			const results = data.filter(product => product.title.toLowerCase().includes(searchTerm) || product.id.toLowerCase().includes(searchTerm));
			setsearchResult(results);
		}

		//console.log(searchResult);
	}, [data, searchTerm]);

	const handleChange = e => {
		setSearchTerm(e.target.value);
	};

  return (
  	<>
		<div className="content">
			<div className="indent">
				<Header title="REACTBUM" />
				<input type="text" className="content__input" placeholder="Pesquisar" value={searchTerm} onChange={handleChange}/>
				<div className="shelf">
					{
						searchTerm === '' ?
							loading ? <p> Carregando...</p> : data.map((product) =>
								<Product key={product.id} id={product.id} image={product.image} title={product.title.substring(0,100)} price={product.price}/>
							) :
							searchResult.map((product) =>
								<Product key={product.id} id={product.id} image={product.image} title={product.title.substring(0,100)} price={product.price}/>
							)
					}
				</div>
			</div>
		</div>
		<FloatCart />
	</>

  );
}

export default Home;
