import React from 'react'

function Features() {
    return (
        <div>
            <section className="pt-6 pb-7" id="features">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 mx-auto text-center">
                            <h2 className="heading-black">Ixata offers everything you need.</h2>
                        </div>
                    </div>
                    <div className="row mt-5">
                        <div className="col-md-10 mx-auto">
                            <div className="row feature-boxes">
                                <div className="col-md-6 box">
                                    <div className="icon-box box-primary">
                                        <div className="icon-box-inner">
                                            <span data-feather="edit-3" width={35} height={35} />
                                        </div>
                                    </div>
                                    <h5>Deploy Live</h5>
                                </div>
                                <div className="col-md-6 box">
                                    <div className="icon-box box-success">
                                        <div className="icon-box-inner">
                                            <span data-feather="monitor" width={35} height={35} />
                                        </div>
                                    </div>
                                    <h5>Unlimited Bandwith</h5>
                                </div>
                                <div className="col-md-6 box">
                                    <div className="icon-box box-danger">
                                        <div className="icon-box-inner">
                                            <span data-feather="layout" width={35} height={35} />
                                        </div>
                                    </div>
                                    <h5>Portainer Panel</h5>
                                </div>
                                <div className="col-md-6 box">
                                    <div className="icon-box box-info">
                                        <div className="icon-box-inner">
                                            <span data-feather="globe" width={35} height={35} />
                                        </div>
                                    </div>
                                    <h5>Available globally</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row mt-6">
                        <div className="col-md-6 mr-auto">
                            <h2>Helping Developers...</h2>
                            {/* <p class="mb-5"></p> */}
                            <a href="https://docs.ixata.tk" className="btn btn-light">
                            Documentation
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Features
