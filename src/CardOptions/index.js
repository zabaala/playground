import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

const propTypes = {};
const defaultProps = {};

const CardOptions = (props) => {

    const {
        className,
        children,
        ...attributes
    } = props;

    const __className = classnames('card-options', className);

    return (
        <div className={__className} {...attributes}>
            {children}
        </div>
    );
};

CardOptions.propTypes = propTypes;
CardOptions.defaultProps = defaultProps;

export default CardOptions;
