import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import Home from  './components/presentationals/Home';
import Login from './components/login.component';
import Registration from './components/registration.component';
import Category from  './components/presentationals/Category';
import Product from  './components/presentationals/Product';
import Student from './components/student/Student';
import StudentList from './components/student/StudentList';
import * as AppPaths from './AppPaths.js';
import compose from 'compose-function';
import { withRouter } from 'react-router';

const AppRoutes = () => {
    return (
        <Switch>
        <Route path="/home"><Home /></Route>
        <Route path="/category" component={Category}></Route>
        <Route path="/products" component={Product}></Route>
        <Route path={AppPaths.PATH_LOGIN_USER} component={Login} />
        <Route path={AppPaths.PATH_REGISTRATION_USER} component={Registration} />
        <Route path={AppPaths.PATH_STUDENT_NEW} component={Student} />
        <Route path={AppPaths.PATH_STUDENT_ID} component={Student} />
        <Route path={AppPaths.PATH_STUDENT_LIST} render={() => (<StudentList cookies={null} />)} />
        </Switch>
    );
};

export default AppRoutes;