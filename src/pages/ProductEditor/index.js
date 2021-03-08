import React from 'react';
import './index.scss';
import {useHistory} from 'react-router-dom';

import Editor from '../../components/Editor';


import {getProductsList, editProduct} from "../../redux/actions";
import {useDispatch, useSelector} from "react-redux";

const ProductEditor = (props) => {
    //redux
    const products = useSelector(state => state.products);
    const dispatch = useDispatch();
    dispatch(getProductsList());

    const currentProduct = products.find(item => item.id === props.match.params.id);

    //if product is absent
    const history = useHistory();
    if (!currentProduct) history.push('/');


    // handlers
    const handleSave = (newProps) => {
        dispatch(editProduct({
            id: currentProduct.id,
            newProps
        }));

        history.push('/');
    };

    return (
        <div className="container edit-page">
            <div className="edit-page__header">
                <div className="btn-holder">
                    <button className="btn btn_gray" onClick={() => history.push(`/product-page/id=${currentProduct.id}`)}>&larr; Back to the product page</button>
                </div>
                <h1 className="title">Product Editor</h1>
            </div>
            {currentProduct && <Editor product={currentProduct} result={result => handleSave(result)}/>}

        </div>
    )
};

export default ProductEditor;