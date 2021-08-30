import React from 'react'

function Faq() {
    return (
        <section className="py-7" id="faq">
            <div className="container">
                <div className="row">
                    <div className="col-md-6 mx-auto text-center">
                        <h2>Frequently asked questions</h2>
                    </div>
                </div>
                <div className="row mt-5">
                    <div className="col-md-10 mx-auto">
                        <div className="row">
                            <div className="col-md-6 mb-5">
                                <h6>Can I try it for free?</h6>
                                <p className="text-muted">Yes Try us free with our Free Plan.</p>
                            </div>
                            <div className="col-md-6 mb-5">
                                <h6>Do you have hidden fees?</h6>
                                <p className="text-muted">No.</p>
                            </div>
                            <div className="col-md-6 mb-5">
                                <h6>What are the payment methods you accept?</h6>
                                <p className="text-muted">Credit Cards, Debit Cards Support (Coming soon).</p>
                            </div>
                            <div className="col-md-6 mb-5">
                                <h6>What Linux Kernel you use?</h6>
                                <p className="text-muted">5+.</p>
                            </div>
                            <div className="col-md-6 mb-5">
                                <h6>What Linux distros are avilable?</h6>
                                <p className="text-muted">Debian, Ubuntu, Fedora, Alpine Linux</p>
                            </div>
                            <div className="col-md-6 mb-5">
                                <h6>How can I buy a KVM Based VM Instead of Docker Container?</h6>
                                <p className="text-muted">Please contact us. <a href="mailto">sales@ixata.tk</a></p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row mt-4">
                    <div className="col-md-6 mx-auto text-center">
                        <h5 className="mb-4">Have questions?</h5>
                        <a href="https://support.ixata.tk" className="btn btn-primary">Contact us</a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Faq
