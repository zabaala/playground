import React from 'react';
import PropTypes from 'prop-types';

export const sizes = ['8', '9', '10', '12', '14', '16', '18', '20', '24', '30', '32', '36', '48', '60', '72'];

const propTypes = {
    size: PropTypes.string.isRequired
};

const Size = ({ size, children }) => {

    return (
        <span className={`s-${size}`}>{children}</span>
    );
};

Size.propTypes = propTypes;

export default Size;
