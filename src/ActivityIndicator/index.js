import React from 'react';
import PropTypes from 'prop-types';
import Rolling from '../../images/svg/rolling.svg'

const propTypes = {
    /**
     * Width of element.
     */
    width: PropTypes.oneOfType([
        PropTypes.number,
        PropTypes.string
    ]),
    /**
     * Height of element.
     */
    height: PropTypes.oneOfType([
        PropTypes.number,
        PropTypes.string
    ])
};

const defaultProps = {
    width: 100,
    height: 100
};

const ActivityIndicator = (props) =>  <Rolling {...props} />;

ActivityIndicator.propTypes = propTypes;
ActivityIndicator.defaultProps = defaultProps;

export default ActivityIndicator;