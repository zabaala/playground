import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import Title from '../Title/index';

const propTypes = {};
const defaultProps = {};

const CardTitle = (props) => {

    const {
        className,
        children,
        ...attributes
    } = props;

    const __className = classnames('card-title', className);

    return (
        <Title size={3} className={__className} {...attributes}>
            {children}
        </Title>
    );
};

CardTitle.propTypes = propTypes;
CardTitle.defaultProps = defaultProps;

export default CardTitle;
