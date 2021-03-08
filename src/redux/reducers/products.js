import {
    GET_PRODUCTS,
    REMOVE_PRODUCT,
    EDIT_PRODUCT,
    ADD_PRODUCT
} from "../constants";

import Faker from 'faker';

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

const products = (state = [], action) => {
    switch (action.type) {
        case GET_PRODUCTS:
            return productsList;

        case EDIT_PRODUCT:
            const product = productsList.find(item => item.id === action.id);

            product.name = action.newProps.name;
            product.sku = action.newProps.sku;
            product.price = action.newProps.price;
            product.available = action.newProps.available;
            product.image = action.newProps.image;

            return productsList;

        case REMOVE_PRODUCT:
            return productsList = productsList.filter(item => item.id !== action.id);

        case ADD_PRODUCT:
            const {name, image, sku, available, price} = action.product;
            productsList.push({name, image, sku, available, price, id: Faker.address.zipCode()});
            
            return productsList;

        default:
            return state;
    }
};

export default products;