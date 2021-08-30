import React from 'react'

function Footer() {
    return (

        <footer className="py-6">
            <div className="container">
                <div className="row">
                    <div className="col-sm-5 mr-auto">
                        <h5>Ixata LLC</h5>
                        <p className="text-muted">
                            Docker and the Docker logo are registered trademarks of Docker, Inc.
                            in the United States and other countries.
                            <br />
                            Portainer.io and the Portainer logo are registered trademarks of Portainer.
                        </p>
                        <ul className="list-inline social social-sm">
                            <li className="list-inline-item">
                                <a href="
                                https://twitter.com/ixata"><i className="fa fa-twitter" /></a>
                            </li>
                            <li className="list-inline-item">
                                <a href="
                                https://github.com/ixata"><i className="fa fa-github" /></a>
                            </li>
                        </ul>
                    </div>
                    <div className="col-sm-2">
                        <h5>Company</h5>
                        <ul className="list-unstyled">
                            <li><a href="https://github.com/ixata">Careers</a></li>
                            <li><a href="https://support.ixata.tk/aboutus">About us</a></li>
                            <li><a href="https://github.com/ixata">Open Source</a></li>
                        </ul>
                    </div>
                    <div className="col-sm-2">
                        <h5>Legal</h5>
                        <ul className="list-unstyled">
                            <li><a href="https://ixata.tk">Terms</a></li>
                            <li><a href="https://ixata.tk">Privacy</a></li>
                        </ul>
                    </div>
                    <div className="col-sm-2">
                        <h5>Support</h5>
                        <ul className="list-unstyled">
                            <li><a href="https://support.ixata.tk">Support</a></li>
                            <li><a href="https://dashboard.ixata.tk">Log in</a></li>
                            <li><a href="https://dashboard.ixata.tk">Sign up</a></li>
                            <li><a href="https://docs.ixata.tk">Docs</a></li>
                        </ul>
                    </div>
                </div>
                <div className="row mt-5">
                    <div className="col-12 text-muted text-center small-xl">
                        © 2021 Ixata - All Rights Reserved
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
