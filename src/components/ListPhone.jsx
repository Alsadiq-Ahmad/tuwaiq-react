import MainLayout from "../Layouts/MainLayout";
import { Link } from "react-router-dom";

const ListPhone = () => {
    const phones = [
        {
            id: 1,
            name: "iPhone 14 Pro",
            price: 2500,
            img: "./img/iphone.jpeg"
        },
        {
            id: 2,
            name: "iPhone 12 Pro",
            price: 2500,
            img: "./img/iphone2.jpg"
        },
        {
            id: 3,
            name: "Samsung 12 Pro",
            price: 1990,
            img: "./img/samsung.jpeg"
        }
    ];

    return (
        <MainLayout>
            <div className="container">
                <h2 className="text-center my-4">List of Phones</h2>
                <div className="row justify-content-center">
                    <div className="col-sm-8 col-md-6">
                        {phones.map((phone) => (
                            <div key={phone.id} className="card mb-3">
                                <div className="row g-0">
                                    <div className="col-md-4">
                                        <img
                                            src={phone.img}
                                            alt={phone.name}
                                            className="img-fluid rounded-start"
                                        />
                                    </div>
                                    <div className="col-md-8 d-flex flex-column justify-content-center">
                                        <div className="card-body">
                                            <h3 className="card-title alert alert-success">{phone.name}</h3>
                                            <h4 className="card-text">Price: ${phone.price}</h4>
                                            <Link className="btn btn-success mt-2" state={phone} to="/details">Details</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </MainLayout>
    );
}

export default ListPhone;
