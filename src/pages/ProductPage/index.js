import React from 'react';
import { useHistory } from "react-router-dom";
import './index.scss';

//assets
import ProductImgPlaceholder from '../../assets/images/img.png';
import { getProductsList, removeProduct } from "../../redux/actions";
import { useDispatch, useSelector } from "react-redux";

const ProductPage = (props) => {

    const productsList = useSelector(state => state.products);
    const dispatch = useDispatch();
    dispatch(getProductsList());

    const currentProduct = productsList.find(item => item.id === props.match.params.id);
    const productImage = currentProduct && currentProduct.image ? currentProduct.image : ProductImgPlaceholder;

    const history = useHistory();

    // actions
    const handleDelete = () => {
        const approve = window.confirm("Yot are sure?");

        if (approve) {
            dispatch(removeProduct(currentProduct.id));
            history.push('/');
        }

    };

    return (
        <div className="product-page container">
            <figure className="product-page__img">
                <img src={productImage} alt={currentProduct ? currentProduct.name : "product image isn't available"} />
            </figure>
            <div className="product-page__description">
                {currentProduct ? <>
                    <h1 className="title">{currentProduct.name}</h1>
                    <div className="product-page__description-row">
                        <span className="product-page__description-label">ID:</span>
                        <span className="product-page__description-value">{currentProduct.id}</span>
                    </div>
                    <div className="product-page__description-row">
                        <span className="product-page__description-label">SKU:</span>
                        <span className="product-page__description-value">{currentProduct.sku}</span>
                    </div>
                    <div className="product-page__description-row">
                        <span className="product-page__description-label">Available:</span>
                        <span className="product-page__description-value">{currentProduct.available}</span>
                    </div>
                    <div className="product-page__description-row">
                        <span className="product-page__description-label">Price:</span>
                        <span className="product-page__description-value">{currentProduct.price}</span>
                    </div>
                    <div className="btn-holder">
                        <button className="btn btn_gray" onClick={handleDelete}>Delete</button>
                        <button className="btn" onClick={() => history.push(`/editor/id=${currentProduct.id}`)}>Edit</button>
                    </div>
                </> : <>
                    <h1 className="title">Product isn't available</h1>
                    <div className="btn-holder">
                        <button className="btn" onClick={() => history.push('/')}>Return to the product list</button>
                    </div>
                </>}
            </div>
        </div>
    )
};

export default ProductPage;