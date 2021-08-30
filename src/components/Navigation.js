import React from 'react'

function Navigation() {
    return (
        <div>
            <section className="smart-scroll">
                <div className="container-fluid">
                    <nav className="navbar navbar-expand-md navbar-dark">
                        <a className="navbar-brand heading-black" href="index.html">
                            Ixata
                        </a>
                        <button className="navbar-toggler navbar-toggler-right border-0" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                            <span data-feather="grid" />
                        </button>
                        <div className="collapse navbar-collapse" id="navbarCollapse">
                            <ul className="navbar-nav ml-auto">
                                <li className="nav-item">
                                    <a className="nav-link page-scroll" href="#features">Features</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link page-scroll" href="#pricing">Pricing</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link page-scroll" href="#faq">FAQ</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link page-scroll" href="https://dashboard.ixata.tk">
                                        Sign In
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </div>
            </section>
        </div>
    )
}

export default Navigation
