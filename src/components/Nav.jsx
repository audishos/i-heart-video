import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './_components.nav.scss';

const Nav = () => {
    const location = useLocation();

    return (
        <nav className="nav">
            <Link className={getLinkClassName(location, '/')} to="/">
                Home
            </Link>
            <Link
                className={getLinkClassName(location, '/favorites')}
                to="/favorites"
            >
                Favorites
            </Link>
        </nav>
    );
};

export default Nav;

function getLinkClassName(location, pathname) {
    return location.pathname === pathname
        ? 'nav__link nav__link--active'
        : 'nav__link';
}
