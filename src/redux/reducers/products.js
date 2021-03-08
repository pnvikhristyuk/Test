import {
    GET_PRODUCTS,
    REMOVE_PRODUCT,
    EDIT_PRODUCT,
    ADD_PRODUCT
} from "../constants";

import Faker from 'faker';


const getProductList = () => {
    let productsList = [];

    for (let i = 0; i < 10; i++) {
        productsList.push({
            name: Faker.lorem.words(),
            image: Faker.image.imageUrl(),
            sku: Faker.address.zipCode(),
            id: Faker.address.zipCode(),
            available: Faker.random.number(),
            price: String(Faker.random.number()) + '.00'
        })
    }

    return productsList;
};


const initialState = getProductList();


const products = (state = initialState, action) => {
    switch (action.type) {
        case GET_PRODUCTS:
            return state;

        case EDIT_PRODUCT:
            return state.map(item => {
                if (item.id !== action.id) return item;
                return ({
                    id: item.id,
                    name: action.newProps.name,
                    sku: action.newProps.sku,
                    price: action.newProps.price,
                    available: action.newProps.available,
                    image: action.newProps.image,
                });
            });

        case REMOVE_PRODUCT:
            return state.filter(item => item.id !== action.id);

        case ADD_PRODUCT:
            const {name, image, sku, available, price} = action.product;
            return state.concat({
                name,
                image,
                sku,
                available,
                price,
                id: Faker.address.zipCode()
            });
        default:
            return state;
    }
};

export default products;