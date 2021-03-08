import React from 'react';

import { useHistory } from 'react-router-dom';

import Editor from '../../components/Editor';


import {addNewProduct} from "../../redux/actions";
import {useDispatch} from "react-redux";

const AddNew = (props) => {
    //redux
    const dispatch = useDispatch();
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