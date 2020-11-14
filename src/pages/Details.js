import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getProductDetails} from "../redux/reducers/products";
import ProductDetails from "../components/product/ProductDetails";
import Header from "../components/header";
import FloatCart from "../components/cart/FloatCart";

const Details = ({match}) => {

	const {id} = match.params;
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(getProductDetails(id));
	}, []);

	const {product} = useSelector(store => store.products);

	return(
		<>
			<div className="content">
				<div className="indent">
					<Header title="REACTBUM" />
					<div className="shelf shelf-details">
						{product.length > 0 && product.map((item) =>
							<ProductDetails key={item.id} title={item.title} id={item.id} image={item.image} price={item.price} description={item.description} /> )
						}
					</div>
					<FloatCart />
				</div>
			</div>

		</>
	);
}

export default Details;