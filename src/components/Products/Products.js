import React, { useEffect, useState } from 'react';

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
                console.log(filter)
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
    const ShowProducts = () => {
        return (
            <>
                <div className="buttons d-flex justify-content-center mb-5 pb-5">
                    <button className="btn btn-outline-dark me-2">All</button>
                    <button className="btn btn-outline-dark me-2">Men's Clothing</button>
                    <button className="btn btn-outline-dark me-2">Women's Clothing</button>
                    <button className="btn btn-outline-dark me-2">Jewelary</button>
                    <button className="btn btn-outline-dark me-2">Electronics</button>
                </div>
                {filter.map((product) => {
                    return (
                        <div className="col-md-3 mb-3">
                            <div class="card h-100 text-center p-4">
                            <img src={product.image} class="card-img-top img-fluid h-50" alt="Product Image" />
                                <div class="card-body">
                                    <h5 class="card-title">{product.title.substring(0, 12)}</h5>
                                    <p class="card-text">$ {product.price}</p>
                                    <a href="#" class="btn btn-primary">Go somewhere</a>
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