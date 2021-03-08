import React from 'react';
import './index.scss';

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

    return (
        <div className="products container">
            <h1 className="title">Products{!products.length ? ' are absent' : ` (${products.length})`}</h1>
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