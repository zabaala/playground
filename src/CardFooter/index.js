import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

const propTypes = {
};
const defaultProps = {};

const CardFooter = (props) => {

    const {
        className,
        children,
        ...attributes
    } = props;

    const __className = classnames('card-footer', className);

    return (
        <div className={__className} {...attributes}>
            {children}
        </div>
    );
};

CardFooter.propTypes = propTypes;
CardFooter.defaultProps = defaultProps;

export default CardFooter;
