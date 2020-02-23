import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Dashboard extends Component {
    state = {}
    render() {
        return (

            <div className="main-content">
                <div className="container mt-2">
                    <h2 className="mb-1">Profile Card</h2>
                    <div className="row">
                        <div className="col-xl-8 m-auto order-xl-2 mb-5 mb-xl-0">
                            <div className="card card-profile shadow">
                                <div className="row justify-content-center">
                                    <div className="col-lg-3 order-lg-2">
                                        <div className="card-profile-image">
                                            <Link>
                                                {/* <img src="https://raw.githack.com/creativetimofficial/argon-dashboard/master/assets/img/theme/team-4-800x800.jpg" className="rounded-circle" /> */}
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="card-header text-center border-0 pt-8 pt-md-4 pb-0 pb-md-4">
                                    <div className="d-flex justify-content-between">
                                            <Link to="/" className="btn btn-sm btn-info mr-4">
                                                Home
                                            </Link>
                                        <Link to="/" className="btn btn-sm btn-default float-right">
                                                Message
                                            </Link>
                                    </div>
                                </div>
                                <div className="card-body pt-0 pt-md-4">
                                    <div className="text-center">
                                        <h3>
                                            Marcio Zebedeu<span className="font-weight-light">, 30</span>
                                        </h3>
                                        <div className="h5 font-weight-300">
                                            <i className="ni location_pin mr-2"></i>Luanda, Angola
</div>
                                        <div className="h5 mt-4">
                                            <i className="ni business_briefcase-24 mr-2"></i>Solution Manager - Creative Tim Officer
</div>
                                        <div>
                                            <i className="ni education_hat mr-2"></i>University of Computer Science
</div>
                                        <hr className="my-4" />
                                            <p>Specialist and developer in WordPress. Focused on creating great web experiences and SEO compatible projects.</p>

</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                );
           }
       }
        
export default Dashboard;