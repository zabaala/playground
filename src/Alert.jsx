import React from 'react';
import PropTypes from 'prop-types';

export const types = ['primary', 'secondary', 'success', 'info', 'warning', 'danger'];

const propTypes = {
    /**
     * One or many css classes.
     */
    className: PropTypes.string,
    /**
     * Type of alert.
     */
    type: PropTypes.oneOf(types),
    /**
     * Define if alert is dismissible or not.
     */
    dismissible: PropTypes.bool
};

const defaultProps = {
    type: 'info',
    dismissible: false
};

const Alert = (props) => {

    const {
        className,
        type,
        dismissible,
        children,
        ...attributes
    } = props;


    const dismissibleClass = dismissible  ? 'alert-dismissible' : '';
    const alertClass = `alert-${type}`;
    const cssClass = `alert ${alertClass} ${dismissibleClass} ${className}`;

    return (
        <div className={cssClass} {...attributes}>
            {dismissible && <button type="button" className="close" data-dismiss="alert" />}
            {children}
        </div>
    );
};

Alert.propTypes = propTypes;
Alert.defaultProps = defaultProps;

export default Alert;