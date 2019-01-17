import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
    /**
     * Width of element.
     */
    width: PropTypes.oneOfType([
        PropTypes.number,
        PropTypes.string
    ]),
    /**
     * Height of element.
     */
    height: PropTypes.oneOfType([
        PropTypes.number,
        PropTypes.string
    ])
};

const defaultProps = {
    width: 100,
    height: 100
};

const code = `data:image/svg+xml;base64,
    PHN2ZyB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMDA
    gMTAwIgogICAgIHByZXNlcnZlQXNwZWN0UmF0aW89InhNaWRZTWlkIiBjbGFzc05hbWU9Imxkcy1yb2xsaW5nIiA+CiAgICA8Y2lyY2xlIGN4PSI1
    MCIgY3k9IjUwIiBmaWxsPSJub25lIiBzdHJva2U9IiMzZDg4ZWMiCiAgICAgICAgICAgIHN0cm9rZS13aWR0aD0iMTAiIHI9IjM1IiBzdHJva
    2UtZGFzaGFycmF5PSIxNjQuOTMzNjE0MzEzNDY0MTUgNTYuOTc3ODcxNDM3ODIxMzgiCiAgICAgICAgICAgIHRyYW5zZm9ybT0icm90YXRlK
    DguMzY5NDkgNTAgNTApIj4KICAgICAgICA8YW5pbWF0ZVRyYW5zZm9ybQogICAgICAgICAgICBhdHRyaWJ1dGVOYW1lPSJ0cmFuc2Zvcm0iC
    iAgICAgICAgICAgIHR5cGU9InJvdGF0ZSIKICAgICAgICAgICAgY2FsY01vZGU9ImxpbmVhciIKICAgICAgICAgICAgdmFsdWVzPSIwI
    DUwIDUwOzM2MCA1MCA1MCIKICAgICAgICAgICAga2V5VGltZXM9IjA7MSIKICAgICAgICAgICAgZHVyPSIwLjdzIgogICAgICAgICAgICBiZWdp
    bj0iMHMiCiAgICAgICAgICAgIHJlcGVhdENvdW50PSJpbmRlZmluaXRlIiAvPgogICAgPC9jaXJjbGU+Cjwvc3ZnPg==`;

const ActivityIndicator = (props) =>  <img src={code} {...props} />;

ActivityIndicator.propTypes = propTypes;
ActivityIndicator.defaultProps = defaultProps;

export default ActivityIndicator;