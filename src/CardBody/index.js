import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

const propTypes = {
};
const defaultProps = {};

const CardBody = (props) => {

    const {
        className,
        children,
        ...attributes
    } = props;

    const __className = classnames('card-body', className);

    return (
        <div className={__className} {...attributes}>
            {children}
        </div>
    );
};

CardBody.propTypes = propTypes;
CardBody.defaultProps = defaultProps;

export default CardBody;
