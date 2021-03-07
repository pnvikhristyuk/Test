import React from 'react';
import './index.scss';

import { useHistory } from "react-router-dom";

//assets
import Img from '../../assets/images/img.png';

const ProductItem = ({image = "", name = "", sku = "", id = "", price = "", available = 0}) => {
    const history = useHistory();

    const handleClick = () => history.push(`/product-page/id=${id}`);

    return(
        <div className="product" onClick={handleClick}>
            <div className="product__img" style={{backgroundImage: `url(${image ? image : Img})`}}/>
            <div className="product__description">
                <div className="product__description-row">
                    <span className="product__description-label">Name:</span>
                    <span className="product__description-value">{name}</span>
                </div>
                <div className="product__description-row">
                    <span className="product__description-label">SKU:</span>
                    <span className="product__description-value">{sku}</span>
                </div>
                <div className="product__description-row">
                    <span className="product__description-label">ID:</span>
                    <span className="product__description-value">{id}</span>
                </div>
                <div className="product__description-row">
                    <span className="product__description-label">Price</span>
                    <span className="product__description-value">{price}</span>
                </div>
                <div className="product__description-row">
                    <span className="product__description-label">Available:</span>
                    <span className="product__description-value">{available}</span>
                </div>
            </div>
        </div>
    )
};

export default ProductItem;