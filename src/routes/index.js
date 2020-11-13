import React from 'react';

import {Switch, Route} from 'react-router-dom';
import Home from '../pages/Home';
import Cart from '../pages/Cart';
import Details  from "../pages/Details";

const Routes = () => (
	<Switch>
		<Route path="/" component={Home} exact/>
		<Route path="/cart" component={Cart} />
		<Route path="/details/:id" component={Details} />
	</Switch>
)

export default Routes;
