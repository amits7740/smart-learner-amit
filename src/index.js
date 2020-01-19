import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './components/home/home';
import Product from './components/product/product'
import Tshirt from './components/tshirt/tshirt'
import P from './components/p/p'
import T from './components/t/t'
import PS from './components/ps/ps'
import Server from './components/ps/server';
import Cart from './components/cart/cart'
import * as serviceWorker from './serviceWorker';
import { Router, Route, browserHistory, IndexRoute } from "react-router";
import 'bootstrap/dist/css/bootstrap.min.css'

ReactDOM.render(
    <Router history={browserHistory}>
        <Route path="/" component={Home}>
            <IndexRoute component={Home} />
        </Route>
        <Route path="product" component={Product} />
        {/* <Route path="search" component={Search} /> */}
        <Route path="tshirt" component={Tshirt} />
        <Route path="p" component={P} />
        <Route path="t" component={T} />
        <Route path="ps" component={PS} />
        <Route path="server" component={Server} />
        <Route path="cart" component={Cart} />
    </Router>, 
    
    document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
