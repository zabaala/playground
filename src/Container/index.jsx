import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
    /**
     * One or many css classes.
     */
    className: PropTypes.string,
    /**
     * Size of element.
     */
    fluid: PropTypes.bool
};

const defaultProps = {
    fluid: false,
    className: ''
};

const Container = ({className, children, fluid, ...attributes}) => {

    const containerClass = fluid ? 'container-fluid' : 'container';
    const _className = `${containerClass} ${className}`;

    return (
        <div className={_className.trim()} {...attributes}>{children}</div>
    );
};

Container.propTypes = propTypes;
Container.defaultProps = defaultProps;

export default Container;