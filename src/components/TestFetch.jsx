import { useEffect, useState } from "react";

const TestFetch = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(response => response.json())
            .then(data => setData(data))
            .catch(error => console.error('Error fetching data:', error));
    }, []);

    return (
        <div className="container">
            <div className="row">
                {data.map(post => (
                    <div className="col-md-4 mb-4" key={post.id}>
                        <div className="card h-100">
                            <img src={post.image} className="card-img-top" alt={post.title} />
                            <div className="card-body">
                                <h5 className="card-title">{post.title}</h5>
                                <p className="card-text">{post.description}</p>
                                <p className="card-text"><strong>Price:</strong> ${post.price}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default TestFetch;
