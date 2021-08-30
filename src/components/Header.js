import React from 'react'


function Header() {
    return (
        <div>
            <section className="py-7 py-md-0 bg-hero" id="home">
                <div className="container">
                    <div className="row vh-md-100">
                        <div className="col-md-8 col-sm-10 col-12 mx-auto my-auto text-center">
                            <h1 className="heading-black text-capitalize">CaaS Based Platform for Developers</h1>
                            <a href="https://dashboard.ixata.tk">
                            <button className="btn btn-primary d-inline-flex flex-row align-items-center">
                                Sign Up
                                <em className="ml-2" data-feather="arrow-right" />
                            </button>
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Header
