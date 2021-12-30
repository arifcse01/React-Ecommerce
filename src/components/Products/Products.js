import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Products = () => {

    const [data, setData] = useState([]);
    const [filter, setFilter] = useState(data);
    const [loading, setLoding] = useState(false);

    let componentMounted = true;

    useEffect(() => {
        const getProducts = async () => {
            setLoding(true);
            const response = await fetch('https://fakestoreapi.com/products');
            if (componentMounted) {
                setData(await response.clone().json());
                setFilter(await response.json());
                setLoding(false);
            }
            return () => {
                componentMounted = false;
            }

        }

        getProducts();
    }, []);

    const Loading = () => {
        return (
            <>
                Loading....
            </>
        )
    }
    const productCategory = (category) => {
        const newProduct = data.filter(pd => pd.category === category);
        setFilter(newProduct);
    }

    const ShowProducts = () => {
        return (
            <>
                <div className="buttons d-flex justify-content-center mb-2 pb-3">
                    <button className="btn btn-outline-dark me-2" onClick={() => console.log(data)}>All</button>
                    <button className="btn btn-outline-dark me-2" onClick={() => productCategory("men's clothing")}>Men's Clothing</button>
                    <button className="btn btn-outline-dark me-2" onClick={() => productCategory("women's clothing")}>Women's Clothing</button>
                    <button className="btn btn-outline-dark me-2" onClick={() => productCategory("jewelery")}>Jewelery</button>
                    <button className="btn btn-outline-dark me-2" onClick={() => productCategory("electronics")}>Electronics</button>
                </div>
                {filter.map((product) => {
                    return (
                        <div className="col-md-3">
                            <div class="card h-75 text-center p-3">
                                <img src={product.image} class="card-img-top img-fluid h-50" alt="Product Image" />
                                <div class="card-body">
                                    <h5 class="card-title">{product.title.substring(0, 12)}</h5>
                                    <p class="card-text">$ {product.price}</p>
                                    <Link to={`/productDetails/${product.id}`} className="btn btn-secondary">See Details</Link>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </>
        )

    }

    return (
        <div className="container my-5 py-3">
            <div className="row">
                <div className="col-12">
                    <h1 className="display-6 fw-bolder text-center">Latest Products</h1>
                    <hr />
                </div>
            </div>
            <div className="row justify-content-center">
                {loading ? <Loading /> : <ShowProducts />}
            </div>
        </div>
    );
};

export default Products;