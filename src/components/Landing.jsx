import MainLayout from "../Layouts/MainLayout";
import { Link } from "react-router-dom";
import { useEffect,useState } from "react";

const Landing = () => {
    const[counter,SetCounter]=useState(0);
    const[counter1,SetCounter1]=useState(0);

    useEffect(()=>(
        alert('welcome')
    ),[counter]);
    return (
        <MainLayout>
            <button onClick={()=>SetCounter(counter+1)} className="btn btn-success">counter</button>
            <button onClick={()=>SetCounter1(counter1+1)} className="btn btn-success">counter1</button>

            {counter} - {counter1}
            <div className="background">
                <div className="row d-flex justify-content-center">
                    <div className="col-sm-8 mt-5">
                        <div className="row">
                            <div className="col-sm-4">
                                <Link to='/list'>
                                    <div className="card bg-success">
                                        <div className="card-body text-center">
                                            <i className="bi bi-phone"></i>
                                            <h6>الهواتف الذكية</h6>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                            <div className="col-sm-4">
                                <div className="card bg-primary">
                                    <div className="card-body text-center">
                                        <i className="bi bi-phone"></i>
                                        <h6>الادوات المنزلية</h6>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-4">
                                <div className="card bg-info">
                                    <div className="card-body text-center">
                                        <i className="bi bi-phone"></i>
                                        <h6>المفروشات</h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div id="carouselExampleAutoplaying" className="carousel slide mt-4" data-bs-ride="carousel">
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                    <img src="https://inhouse.sa/media/catalog/product/cache/374449341643a9dc7b1eb5634b01a040/9/0/906316202609_1.jpg" width={200} height={200} alt="كنب مكتبي" />
                                    <span className="badge bg-body-secondary text-dark">كنب مكتبي 5000 ريال سعودي</span>
                                </div>
                                <div className="carousel-item">
                                    <img src="https://m.media-amazon.com/images/I/5155intNaDL.__AC_SX300_SY300_QL70_ML2_.jpg" width={200} height={200} alt="طاولة مجلس" />
                                    <span className="badge bg-body-secondary text-dark">طاولة مجلس 100 ريال سعودي</span>
                                </div>
                                <div className="carousel-item">
                                    <img src="https://m.media-amazon.com/images/I/61b+iDqnaHL._AC_SL1500_.jpg" width={200} height={200} alt="كرسي مكتبي" />
                                    <span className="badge bg-body-secondary text-dark">كرسي مكتبي اسود 400 ريال سعودي</span>
                                </div>
                            </div>
                            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
                                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Previous</span>
                            </button>
                            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
                                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Next</span>
                            </button>
                        </div>
                        <section className="py-5 mt-5">
                            <div className="container">
                                <div className="row gx-4 text-end">
                                    <div className="col-md-6">
                                        <div className="ms-md-2 ms-lg-5">
                                            <span className="text-muted">أهلا بكم في متجرنا الإليكتروني</span>
                                            <h2 className="display-5 fw-bold">من نحن</h2>
                                            <p className="lead">شركة رائدة في مجال التجارة الإليكترونية نعتز بعملائنا وبثقتهم بنا.</p>
                                        </div>
                                    </div>
                                    <div className="col-md-5">
                                        <div className="ms-md-2 ms-lg-5">
                                            <img className="img-fluid rounded-3" src="https://freefrontend.dev/assets/square.png" alt="متجر" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        </MainLayout>
    );
}

export default Landing;
