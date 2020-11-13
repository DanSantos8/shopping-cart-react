import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getProductDetails} from "../redux/reducers/products";
import ProductDetails from "../components/product/details";

const Details = ({match}) => {

	const {id} = match.params;
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(getProductDetails(id));
	}, []);

	const {product} = useSelector(store => store.products);
	//console.log(product);

	return(
		<>
			{product.length > 0 && product.map((item) =>
				<ProductDetails title={item.title} id={item.id} image={item.image} price={item.price} description={item.description}/> )
			}
		</>
	);
}

export default Details;