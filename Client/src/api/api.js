import {fetchProductsPending, fetchProductsSuccess, fetchProductsError} from '../redux/actions/coinactions';

function fetchProducts() {
    return dispatch => {
        dispatch(fetchProductsPending());
        fetch('http://localhost:3002/movements')
        .then(res => res.json())
        .then(res => {
            if(res.error) {
                throw(res.error);
            }
            dispatch(fetchProductsSuccess(res.products);
            return res.products;
        })
        .catch(error => {
            dispatch(fetchProductsError(error));
        })
    }
}

export default fetchProducts;