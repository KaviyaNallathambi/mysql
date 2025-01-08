import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-danger">
            <div className="container-fluid">
                <Link className="navbar-brand" color='white'     to="/">Home</Link>
                <div className="collapse navbar-collapse">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link className="nav-link" to="/create">Create Post</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navigation;
