import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
    /**
     * One or many css classes.
     */
    className: PropTypes.string,
};

const defaultProps = {};

const Text = (props) => {

    const {
        className,
        children,
        ...attributes
    } = props;

    const Tag = `span`;

    return (
        <Tag className={className} {...attributes}>{children}</Tag>
    );
};

Text.propTypes = propTypes;
Text.defaultProps = defaultProps;

export default Text;