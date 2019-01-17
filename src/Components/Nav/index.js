import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import NavItem from '../NavItem/index';

export const alignments = ['left', 'center', 'right'];

const propTypes = {
    className: PropTypes.string,
    align: PropTypes.oneOf(alignments)
};
const defaultProps = {
    align: 'left'
};

const Nav = (props) => {

    const {
        className,
        children,
        align,
        ...attributes
    } = props;

    const __alignStyle = {
        left: {
            justifyContent: 'flex-start'
        },
        center: {
            justifyContent: 'center'
        },
        right: {
            justifyContent: 'flex-end'
        },
    };

    const __className = classnames('nav nav-tabs flex-column flex-lg-row border-0', className);

    return (
        <ul className={__className} {...attributes} style={__alignStyle[align]}>
            {children}
        </ul>
    );
};

Nav.propTypes = propTypes;
Nav.defaultProps = defaultProps;
Nav.Item = NavItem;

export default Nav;
