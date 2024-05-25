import React, { useState, useEffect } from "react";
import axios from "axios";

const TestAxios = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get('https://fakestoreapi.com/products')
            .then(response => setData(response.data))
            .catch(error => console.error(error));
    }, []);

    return (
        <>
            <div className="container">
            <h2 className="text-center">Welcome to Axios</h2>
                <div className="row">
                    {data.map(product => (
                        <div key={product.id} className="col-md-4 mb-4">
                            <div className="card h-100">
                                <img src={product.image} className="card-img-top" alt={product.title} />
                                <div className="card-body">
                                    <h5 className="card-title">{product.title}</h5>
                                    <p className="card-text">{product.description}</p>
                                    <p className="card-text"><strong>Price: ${product.price}</strong></p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}

export default TestAxios;
