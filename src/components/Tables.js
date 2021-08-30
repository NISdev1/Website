import React from 'react'

function Tables() {
    return (
        <div>
            <div className="row pt-5 pricing-table">
                <div className="col-12 mx-auto">
                    <div className="card-deck pricing-table">
                        <div className="card">
                            <div className="card-body">
                                <h3 className="card-title pt-3">Free</h3>
                                <h2 className="card-title text-primary mb-0 pt-4">$0</h2>
                                <div className="text-muted font-weight-medium mt-2">per month</div>
                                <ul className="list-unstyled pricing-list">
                                    <li>1 Container</li>
                                    <li>Custom Domain</li>
                                    <li>Shared CPU Core &amp; 248MB Ram</li>
                                    <li>2GB Storage (SSD)</li>
                                    <li>Unlimited Bandwith</li>
                                </ul>
                                <a href="https://dashboard.ixata.tk" className="btn btn-primary">
                                    Get Started
                                </a>
                            </div>
                        </div>
                        <div className="card">
                            <div className="card-body">
                                <h3 className="card-title pt-3">Developer</h3>
                                <h2 className="card-title text-info mb-0 pt-4">$10</h2>
                                <div className="text-muted font-weight-medium mt-2">per month</div>
                                <ul className="list-unstyled pricing-list">
                                    <li>1 Container</li>
                                    <li>Custom Domain</li>
                                    <li>2vCPU Core &amp; 1GB Ram</li>
                                    <li>2GB Storage (SSD)</li>
                                    <li>Unlimited Bandwith</li>
                                </ul>
                                <a href="https://dashboard.ixata.tk" className="btn btn-info">
                                    Coming Soon
                                </a>
                            </div>
                        </div>
                        <div className="card">
                            <div className="card-body">
                                <h3 className="card-title pt-3">Enterprise</h3>
                                <h2 className="card-title text-primary mb-0 pt-4">$50</h2>
                                <div className="text-muted font-weight-medium mt-2">per month</div>
                                <ul className="list-unstyled pricing-list">
                                    <li>1 Container</li>
                                    <li>Custom Domain</li>
                                    <li>4vCPU Core &amp; 8GB Ram</li>
                                    <li>100GB Storage (SSD)</li>
                                    <li>Unlimited Bandwith</li>
                                </ul>
                                <a href="https://dashboard.ixata.tk" className="btn btn-info">
                                    Coming Soon
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row mt-6">
                <div className="col-md-4 mr-auto">
                    <h3>Global Data Centers.</h3>
                    <p className="lead">
                        More Coming Soon
                    </p>
                </div>
                <div className="col-md-7 offset-md-1">
                    <ul className="features-list">
                        <li>New Jersey, United States</li>
                        <li>Dallas, United States</li>
                        <li>London, United Kingdom</li>
                        <li>Paris, France</li>
                        <li>Singapore</li>
                    </ul>
                </div>
            </div>
            <div className="row mt-5">
                <div className="col-md-8 col-12 divider top-divider mx-auto pt-5 text-center">
                    <h3>Try IXATA free! *with Ads</h3>
                </div>
            </div>
        </div>
    )
}

export default Tables
