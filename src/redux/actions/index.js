import {
    GET_PRODUCTS,
    REMOVE_PRODUCT,
    EDIT_PRODUCT,
    ADD_PRODUCT
} from "../constants";

export const getProductsList = () => {
    return {
        type: GET_PRODUCTS
    }
};

export const removeProduct = (ID) => {
    return {
        type: REMOVE_PRODUCT,
        id: ID
    }
};

export const editProduct = (PRODUCT) => {
    return {
        type: EDIT_PRODUCT,
        id: PRODUCT.id,
        newProps: PRODUCT.newProps
    }
};

export const addNewProduct = (PRODUCT) => {
    return {
        type: ADD_PRODUCT,
        product: PRODUCT
    }
};