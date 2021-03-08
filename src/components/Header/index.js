import React from 'react';
import './index.scss';
import { Link } from "react-router-dom";

const Header = () => {
    return(
        <header className="header">
            <div className="header__holder container">
                <Link to={'/'} className="header__logo">Header logo</Link>
                <div className="btn-holder">
                    <Link className="btn" to={'/add-new'}>Add new product +</Link>
                </div>
            </div>
        </header>
    )
};

export default Header;