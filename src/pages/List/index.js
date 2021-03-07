import React from 'react';
import './index.scss';
import { useHistory } from 'react-router-dom';

//redux
import {
    useSelector,
    useDispatch
} from 'react-redux';

import { getProductsList } from "../../redux/actions";

// components
import ProductItem from '../../components/ProductItem';


const Products = () => {
    //redux
    const products = useSelector(state => state.products);
    const dispatch = useDispatch();
    dispatch(getProductsList());

    const history = useHistory();
    return (
        <div className="products container">
            <div className="products__header">
                <h1 className="title">Products{!products.length ? ' are absent' : ` (${products.length})`}</h1>
                <div className="btn-holder">
                    <button className="btn" onClick={() => history.push('/add-new')}>Add new product</button>
                </div>
            </div>
            <div className="products__list">
                {products && products.map((product, index) => {
                    return (
                        <ProductItem
                            key={index}
                            image={product.image}
                            id={product.id}
                            name={product.name}
                            sku={product.sku}
                            price={product.price}
                            available={product.available}
                        />
                    )
                })}
            </div>
        </div>
    )
};

export default Products;