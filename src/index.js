import React from 'react';
import ReactDOM from 'react-dom';
import Home from './Home';
import {Provider} from "react-redux";
import store from "./redux/store/configureStore";

ReactDOM.render(
	<React.StrictMode>
		<Provider store={store}>
			<Home />
		</Provider>
	</React.StrictMode>,
	document.getElementById('root')
);