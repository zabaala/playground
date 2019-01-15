import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

export const alignments = ['left', 'center', 'right', 'justify'];

const propTypes = {
    /**
     * One or many css classes.
     */
    className: PropTypes.string,
    /**
     * Size of element.
     */
    align: PropTypes.oneOf(alignments)
};

const defaultProps = {
    align: 'left'
};

const Align = (props) => {

    const {
        className,
        children,
        align,
        ...attributes
    } = props;

    const __className = classnames(className, `text-${align}`);

    return (
        <div className={__className} {...attributes}>
            {children}
        </div>
    );
};

Align.propTypes = propTypes;
Align.defaultProps = defaultProps;

export default Align;