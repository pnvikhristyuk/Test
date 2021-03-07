import React from 'react';
import './App.scss';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

import Products from './pages/List';
import ProductPage from './pages/ProductPage';
import ProductEditor from './pages/ProductEditor';
import ErrorPage from './pages/ErrorPage';
import AddNew from './pages/AddNew';


function App() {
    return (
        <div className="app">
            <Router>
                <header className="header">
                    <div className="header__holder container">
                        <Link to={'/'} className="header__logo">Header logo</Link>
                    </div>
                </header>
                <Switch>
                    <Route path='/' exact component={Products}/>
                    <Route path='/product-page/id=:id' exact component={ProductPage}/>
                    <Route path='/editor/id=:id' exact component={ProductEditor}/>
                    <Route path='/add-new' exact component={AddNew}/>

                    {/*404, when we haven't any correct route*/}
                    <Route path="*" component={ErrorPage}/>
                </Switch>
            </Router>
        </div>
    );
}

export default App;
