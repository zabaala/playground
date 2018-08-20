import React from 'react';
import PropTypes from 'prop-types';

export const sizes = ['1', '2', '3', '4', '5', '6'];

const propTypes = {
    /**
     * One or many css classes.
     */
    className: PropTypes.string,
    /**
     * Size of element.
     */
    size: PropTypes.oneOf(sizes)
};

const defaultProps = {
    size: 1
};

const Title = (props) => {

    const {
        className,
        children,
        size,
        ...attributes
    } = props;

    const Tag = `h${size}`;

    return (
        <div>
            <Tag className={className} {...attributes}>{children}</Tag>
        </div>
    );
};


Title.propTypes = propTypes;
Title.defaultProps = defaultProps;

export default Title;