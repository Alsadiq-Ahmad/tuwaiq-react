import { useEffect, useState } from "react";
import MainLayout from "../Layouts/MainLayout";
import { Link, useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";

const DetailsProducts = () => {
    const dispatch = useDispatch();
    const { state: phone } = useLocation();

    const [name, setName] = useState("");
    const [price, setPrice] = useState("");
    const [img, setImg] = useState("");

    useEffect(() => {
        if (phone) {
            setName(phone.name);
            setPrice(phone.price);
            setImg(phone.img);
        }
    }, [phone]);

    return (
        <MainLayout>
            <div className="container mt-5 mb-5">
                <div className="row d-flex justify-content-center">
                    <div className="col-md-8 col-lg-8">
                        <div className="card">
                            <div className="row no-gutters">
                                <div className="col-md-5">
                                    <div className="images p-3">
                                        <div className="text-center">
                                            <img id="main-image" src={img} width="200" alt={name} />
                                        </div>
                                        <div className="thumbnail text-center mt-2">
                                            <img src={img} width="50" alt={`${name} thumbnail`} />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-7">
                                    <div className="product p-3 mt-5">
                                        <div className="d-flex justify-content-between align-items-center">
                                            <div className="d-flex align-items-center">
                                                <i className="fa fa-long-arrow-left"></i>
                                                <Link className="ml-1" to="/list"><span>Back</span></Link>
                                            </div>
                                            <i className="fa fa-shopping-cart text-muted"></i>
                                        </div>
                                        <div className="mt-2 mb-2">
                                            <h5 className="text-uppercase">{name}</h5>
                                            <div className="price d-flex flex-row align-items-center">
                                                <h6 className="act-price">Price: ${price}</h6>
                                            </div>
                                        </div>
                                        <div className="cart mt-2 align-items-center">
                                            <button
                                                className="btn btn-danger text-uppercase px-4"
                                                onClick={() => dispatch({ type: 'INCREMENT' })}
                                            >
                                                Add to cart
                                            </button>
                                            <i className="fa fa-heart text-muted ml-3"></i>
                                            <i className="fa fa-share-alt text-muted ml-3"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </MainLayout>
    );
}

export default DetailsProducts;
