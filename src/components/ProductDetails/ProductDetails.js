import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const ProductDetails = () => {

    const {id} = useParams();
    const [product, setProduct] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(()=>{
        const getProducts = async ()=>{
            setLoading(true);
            const response = await fetch(`https://fakestoreapi.com/products/${id}`);
            setProduct(await response.json());
        }
        getProducts();
    }, [])

    return (
        <div className="container my-5 pt-5">
            <div className="row mt-5">
                <div className="col-md-6">
                    <div className="card">
                        <img src={product.image} alt="" className="img-fluid p-4" />
                    </div>
                </div>
                <div className="col-md-6">
                    <h4 className="text-uppercase text-black-50">{product.category}</h4>
                    <h1 className="display-5">{product.title}</h1>
                    <p className="lead fw-bolder">Rating: {product.rating && product.rating.rate} <i className="fa fa-star"></i></p>
                    <p className="display-6 fw-bold text-danger">${product.price}</p>  
                    <p className="lead">{product.description}</p>  
                    <button className="btn btn-outline-dark me-2">Add To Cart</button>
                    <button className="btn btn-dark">Go To Cart</button>                
                </div>
            </div>            
        </div>
    );
};

export default ProductDetails;