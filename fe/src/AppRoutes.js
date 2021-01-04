import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import Home from  '../components/presentationals/Home';
import Category from  '../components/presentationals/Category';
import Product from  '../components/presentationals/Product';

const AppRoutes = () => {
    return (
        <Switch>
        <Route path="/home"><Home /></Route>
        <Route path="/category" component={Category}></Route>
        <Route path="/products" component={Product}></Route>
        </Switch>
    );
};

export default AppRoutes;