import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import Link from './Link';
import Icon from './Icon';

const propTypes = {
    active: PropTypes.bool,
    icon: PropTypes.oneOfType([
        PropTypes.bool,
        PropTypes.string
    ])
};
const defaultProps = {
    active: false,
    icon: false
};

const Nav = (props) => {

    const {
        className,
        children,
        active,
        icon,
        ...attributes
    } = props;

    const __activeClass = active === true ? 'active' : '';
    const __className = classnames('nav-item', __activeClass, className);

    let __activeStyle = {};

    if (active) {
        __activeStyle.borderBottom = '1px solid #467fcf';
    }

    return (
        <li className={__className} {...attributes}>
            <Link className="nav-link" style={__activeStyle}>
                { icon && <Icon name={icon} /> }
                {children}
            </Link>
        </li>
    );
};

Nav.propTypes = propTypes;
Nav.defaultProps = defaultProps;

export default Nav;
