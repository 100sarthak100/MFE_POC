import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Product from './Product/Product';
import { getProducts, getProductByName } from '../../actions/products';
// import { Alert } from 'react-bootstrap';

const Products = () => {
    const [msg, setMsg] = useState('');
    const [productSearch, setProductSearch] = useState("");
    const dispatch = useDispatch();

    useEffect(() => {
        // var data = JSON.parse(localStorage.getItem('data'));
        var data = localStorage.getItem('data');
        console.log(data);
        // var product = data?.productSearch;
        // if (data == '') {
        //     console.log("data", data);
        // }

        var product = data;
        var res = product.replaceAll("^[\"']+|[\"']+$", "");
        setProductSearch(res);
        console.log("log", productSearch);
        // if (productSearch.length === 0) {
        //     console.log("get all");
        //     dispatch(getProducts());
        // } else {
        //     console.log("get one");
        //     dispatch(getProducts());
        //     // dispatch(getProductByName(productSearch));
        //     setProductSearch("");
        // }
        // // console.log("sasa", productSearch);
        // if ((productSearch === "" || productSearch === 'null' || productSearch === undefined)) {
        //     console.log("all")
        //     dispatch(getProducts());
        // } else if ((productSearch !== 'null' || productSearch !== "")) {
        //     console.log("One", productSearch);
        //     dispatch(getProductByName(productSearch));
        //     // setProductSearch('');
        // }
        // dispatch(getProducts());
        // console.log(productSearch)
        // dispatch(getProducts());
    })

    const products = useSelector(state => state.products);
    console.log("products", products);

    return (
        <>{msg && <div>{msg}</div>}
            {
                products.length === 0 ? (
                    <h4 style={{ color: "green" }}>Loading React Product Cards Plugin...</h4>
                ) : (
                        <div style={{ display: 'flex', flexDirection: 'row', alignContent: 'flex-start', justifyContent: 'center', flexFlow: "row wrap" }}>
                            {
                                products.map((p) =>
                                    <Product p={p} key={p.productId} />
                                )
                            }
                        </div>
                    )
            }
        </>
    )
}

export default Products;
