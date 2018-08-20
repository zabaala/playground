import React from 'react';
import PropTypes from 'prop-types';

export const colors = [
    'blue',
    'indigo',
    'purple',
    'pink',
    'red',
    'orange',
    'yellow',
    'green',
    'teal',
    'cyan',
    'white',
    'gray',
    'gray-dark',
    'azure',
    'lime',
    'primary',
    'secondary',
    'success',
    'info',
    'warning',
    'danger',
    'light',
    'dark',
    'black'
];

const _colors = {
     blue: '#467fcf',
     indigo: '#6574cd',
     purple: '#a55eea',
     pink: '#f66d9b',
     red: '#cd201f',
     orange: '#fd9644',
     yellow: '#f1c40f',
     green: '#5eba00',
     teal: '#2bcbba',
     cyan: '#17a2b8',
     white: '#fff',
     gray: '#868e96',
     'gray-dark': '#343a40',
     azure: '#45aaf2',
     lime: '#7bd235',
     primary: '#467fcf',
     secondary: '#868e96',
     success: '#5eba00',
     info: '#45aaf2',
     warning: '#f1c40f',
     danger: '#cd201f',
     light: '#f8f9fa',
     dark: '#343a40',
     black: '#000'
};

const propTypes = {
    color: PropTypes.string.isRequired
};

const Color = ({ color, children }) => {

    const style = {
        color: _colors[color]
    };

    return (
        <span style={style}>{children}</span>
    );
};

Color.propTypes = propTypes;

export default Color;
