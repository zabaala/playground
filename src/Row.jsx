import React from 'react';
import PropTypes from 'prop-types';
import classnames  from 'classnames';

const propTypes = {
    /**
     * One or many css classes.
     */
    className: PropTypes.string,
    noGutters: PropTypes.bool
};

const defaultProps = {
    className: '',
    noGutters: false
};

const Row = (props) => {

    const {
        className,
        noGutters,
        children,
        ...attributes
    } = props;

    const _className = classnames([
        'row',
        className,
        noGutters ? 'no-gutters' : null
    ]);

    return (
        <div className={_className} {...attributes}>{children}</div>
    );
};

Row.propTypes = propTypes;
Row.defaultProps = defaultProps;

export default Row;