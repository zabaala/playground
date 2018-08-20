import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
    /**
     * The name of icon.
     */
    name: PropTypes.string.isRequired,
};

const defaultProps = {
};

const Icon = (props) => {
    const {
        name,
        ...attributes
    } = props;

    const _className = `fe fe-${name}`;

    return (
        <i className={_className} {...attributes} />
    );
};

Icon.propTypes = propTypes;
Icon.defaultProps = defaultProps;

export default Icon;
