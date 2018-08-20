import React from 'react';
import PropTypes from 'prop-types';

export const targetList = ['_blank', '_self', '_parent', '_new', 'warning', 'danger'];

const propTypes = {
    /**
     * One or many css classes.
     */
    className: PropTypes.string,
    /**
     * Define if alert is dismissible or not.
     */
    href: PropTypes.string,
    /**
     * Type of alert.
     */
    target: PropTypes.oneOf(targetList),
};

const defaultProps = {
    href: '#',
    target: '_parent',
    className: ''
};

const Link = (props) => {

    const {
        className,
        href,
        target,
        children,
        ...attributes
    } = props;

    return (
        <a href={href} target={target} className={className} {...attributes}>
            {children}
        </a>
    );
};

Link.propTypes = propTypes;
Link.defaultProps = defaultProps;

export default Link;