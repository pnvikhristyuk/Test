import React from 'react';

import { useHistory } from 'react-router-dom';

import Editor from '../../components/Editor';


import {getProductsList, addNewProduct} from "../../redux/actions";
import {useDispatch, useSelector} from "react-redux";

const AddNew = (props) => {
    //redux
    const products = useSelector(state => state.products);
    const dispatch = useDispatch();

    //if product is absent
    const history = useHistory();


    // handlers
    const handleSave = (newProduct) => {
        dispatch(addNewProduct(newProduct));

        history.push('/');
    };

    return (
        <div className="container edit-page">
            <div className="edit-page__header">
                <h1 className="title">Add New Product</h1>
            </div>
            <Editor result={newProduct => handleSave(newProduct)}/>

        </div>
    )
};

export default AddNew;