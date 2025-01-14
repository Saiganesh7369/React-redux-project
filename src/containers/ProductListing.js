import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ProductComponent from "./ProductComponent";
import axios from "axios";
import { setProducts } from "../redux/actions/productActions";

function ProductListing() {
    const dispatch = useDispatch();
    
    const fetchProduct = async () => {
        const response = await axios
            .get('https://fakestoreapi.com/products')
            .catch((err) => {
                console.log("err", err);
            });
        dispatch(setProducts(response.data));
        console.log(response.data);
    };
    

    useEffect(() => {
        fetchProduct();
    }, []);
   

    return (
        <div className="ui grid container">
            <ProductComponent />
        </div>
    );
}

export default ProductListing;
