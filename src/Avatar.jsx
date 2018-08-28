import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

export const colors = [
    'blue',
    'azure',
    'indigo',
    'purple',
    'pink',
    'red',
    'orange',
    'yellow',
    'lime',
    'green',
    'teal',
    'cyan',
    'gray',
    'gray-dark'
];

export const sizes = [
    'sm',
    'normal',
    'md',
    'lg',
    'xl',
    'xxl'
];

export const statusList = [
    'none',
    'green',
    'yellow',
    'red'
];

const propTypes = {
    /**
     * Background color of avatar.
     */
    color: PropTypes.oneOf(colors),
    /**
     * Size of avatar.
     */
    size: PropTypes.oneOf(sizes),
    /**
     * Status color of avatar.
     */
    status: PropTypes.oneOf(statusList),
    /**
     * HTML additional className.
     */
    className: PropTypes.string,
    /**
     * Image source to be placed as background of avatar.
     * This property use <Image /> component.
     */
    src: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.bool
    ])
};

const defaultProps = {
    color: 'gray',
    size: 'normal',
    status: 'none',
    src: false,
    className: ''
};

const Avatar = (props) => {
    const {
        className,
        children,
        status,
        size,
        color,
        src,
        ...attributes
    } = props;

    const statusClass = status !== 'none' ? `avatar-status bg-${status}` : '';
    const sizeClass = size !== 'normal' ? `avatar-${size}` : '';
    const colorClass = color !== '' ? `avatar-${color}` : '';
    const __className = classnames('avatar', colorClass, sizeClass, className);

    let style = {};
    let __children = children;

    if (src !== '' && src !== false) {
        style.backgroundImage = `url(${src})`;
        __children = null;
    }

    return (
        <span className={__className} style={style} {...attributes}>
            {__children}
            {statusClass && <span className={statusClass} />}
        </span>
    );
};

Avatar.propTypes = propTypes;
Avatar.defaultProps = defaultProps;

export default Avatar;
