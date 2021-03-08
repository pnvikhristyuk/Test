import React from 'react';
import './App.scss';

import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";

import Header from './components/Header';
import Products from './pages/List';
import ProductPage from './pages/ProductPage';
import ProductEditor from './pages/ProductEditor';
import ErrorPage from './pages/ErrorPage';
import AddNew from './pages/AddNew';


function App() {
    return (
        <div className="app">
            <Router>
                <Header />
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
