import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

const propTypes = {
};
const defaultProps = {};

const CardHeader = (props) => {

    const {
        className,
        children,
        ...attributes
    } = props;

    const __className = classnames('card-header', className);

    return (
        <div className={__className} {...attributes}>
            {children}
        </div>
    );
};

CardHeader.propTypes = propTypes;
CardHeader.defaultProps = defaultProps;

export default CardHeader;
