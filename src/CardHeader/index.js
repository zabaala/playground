import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import CardTitle from '../CardTitle';
import CardOptions from '../CardOptions';

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
CardHeader.Title = CardTitle;
CardHeader.Options = CardOptions;

export default CardHeader;
