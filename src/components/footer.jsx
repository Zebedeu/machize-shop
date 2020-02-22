import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Footer extends Component {
    state = {}
    render() {
        return (
            <React.Fragment>
                <footer className="my-5 pt-5 text-muted text-center text-small">
                    <p className="mb-1">© 2020 MACHIZE</p>
                    <ul className="list-inline">
                        <li className="list-inline-item">
                            <Link >
                                Privacy
                    </Link>
                        </li>
                        <li className="list-inline-item">
                            <Link >
                                Terms
                    </Link>

                        </li>
                        <li className="list-inline-item">
                            <Link >
                                Support
                    </Link>

                        </li>
                    </ul>
                </footer>

            </React.Fragment>
        );
    }
}

export default Footer;