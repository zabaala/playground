import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

const propTypes = {
    /**
     * Define the list as stacked.
     */
    stacked: PropTypes.bool,
    /**
     * HTML additional className.
     */
    className: PropTypes.string,
};

const defaultProps = {
    stacked: false
};

const AvatarList = (props) => {
    const {
        className,
        children,
        stacked,
        ...attributes
    } = props;

    const stackedClass = stacked === true ? 'avatar-list-stacked' : '';
    const __className = classnames('avatar-list', stackedClass, className);

    return (
        <span className={__className} {...attributes}>
            {children}
        </span>
    );
};

AvatarList.propTypes = propTypes;
AvatarList.defaultProps = defaultProps;

export default AvatarList;
