import React from 'react';
import PropTypes from 'prop-types';

const Separator = ({className}) => {
    return (
        <div>
            <hr className={ className + ' separator' } />
        </div>
    );
};



Separator.propTypes = {
    className: PropTypes.string
};

Separator.defaultProps = {
    className: "m-0"

};

export default Separator;