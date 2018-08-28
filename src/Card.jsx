import React from 'react';
import PropTypes from 'prop-types';
import CardHeader from '../src/CardHeader';
import CardBody from '../src/CardBody';
import CardFooter from "../src/CardFooter";
import classnames from 'classnames';

const propTypes = {};
const defaultProps = {};

const Card = (props) => {

    const {
        className,
        children,
        ...attributes
    } = props;

    const __className = classnames('card', className);

    return (
        <div className={__className} {...attributes}>
            {children}
        </div>
    );
};

Card.propTypes = propTypes;
Card.defaultProps = defaultProps;

// additional components...
Card.Header = CardHeader;
Card.Body = CardBody;
Card.Footer = CardFooter;

export default Card;