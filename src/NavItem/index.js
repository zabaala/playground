import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import Link, { targetList as targetListOfLink } from '../Link';
import Icon from '../Icon';

export const targetList = targetListOfLink;

const propTypes = {
    active: PropTypes.bool,
    icon: PropTypes.oneOfType([
        PropTypes.bool,
        PropTypes.string
    ]),
    href: PropTypes.string,
    target: PropTypes.oneOf(targetList)
};
const defaultProps = {
    active: false,
    icon: false,
    target: '_parent'
};

const NavItem = (props) => {

    const {
        className,
        children,
        active,
        icon,
        href,
        target,
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
            <Link href={href} target={target} className="nav-link" style={__activeStyle} >
                { icon && <Icon name={icon} /> }
                {children}
            </Link>
        </li>
    );
};

NavItem.propTypes = propTypes;
NavItem.defaultProps = defaultProps;

export default NavItem;
