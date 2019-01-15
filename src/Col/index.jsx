import isobject from 'lodash.isobject';
import classnames from 'classnames';
import React from 'react';
import PropTypes from 'prop-types';

export const colWidths = ['xs', 'sm', 'md', 'lg', 'xl'];

const stringOrNumberProp = PropTypes.oneOfType([PropTypes.number, PropTypes.string]);

const columnProps = PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.string,
    PropTypes.number,
    PropTypes.shape({
        size: PropTypes.oneOfType([PropTypes.bool, PropTypes.number, PropTypes.string]),
        order: stringOrNumberProp,
        offset: stringOrNumberProp
    })
]);

const propTypes = {
    /**
     * One or many css classes.
     */
    className: PropTypes.string,
    /**
     * Extra-small column size.
     *
     * @example size values:
     *   12 || "12" => col-12 or col-`width`-12
     *   auto => col-auto or col-`width`-auto
     *   true => col or col-`width`
     *
     */
    xs: columnProps,
    /**
     * Small column size.
     *
     * @example size values:
     *   12 || "12" => col-12 or col-`width`-12
     *   auto => col-auto or col-`width`-auto
     *   true => col or col-`width`
     *
     */
    sm: columnProps,
    /**
     * Medium column size.
     *
     * @example size values:
     *   12 || "12" => col-12 or col-`width`-12
     *   auto => col-auto or col-`width`-auto
     *   true => col or col-`width`
     *
     */
    md: columnProps,
    /**
     * Large column size.
     *
     * @example size values:
     *   12 || "12" => col-12 or col-`width`-12
     *   auto => col-auto or col-`width`-auto
     *   true => col or col-`width`
     *
     */
    lg: columnProps,
    /**
     * Extra-large column size.
     *
     * @example size values:
     *   12 || "12" => col-12 or col-`width`-12
     *   auto => col-auto or col-`width`-auto
     *   true => col or col-`width`
     *
     */
    xl: columnProps,
    /**
     * Accepted widths of component.
     */
    widths: PropTypes.array,
    /**
     * Column html tag.
     */
    tag: PropTypes.string,
};

const defaultProps = {
    className: '',
    widths: colWidths,
    tag: 'div'
};

const getColumnSizeClass = (isXs, colWidth, colSize) => {
    if (colSize === true || colSize === '') {
        return isXs ? 'col' : `col-${colWidth}`;
    } else if (colSize === 'auto') {
        return isXs ? 'col-auto' : `col-${colWidth}-auto`;
    }

    return isXs ? `col-${colSize}` : `col-${colWidth}-${colSize}`;
};

const Col = (props) => {

    const {
        className,
        children,
        widths,
        tag,
        ...attributes
    } = props;

    const colClasses = [];

    widths.forEach((colWidth, i) => {
        let columnProp = props[colWidth];

        delete attributes[colWidth];

        if (!columnProp && columnProp !== '') {
            return;
        }

        const isXs = !i;

        if (isobject(columnProp)) {
            const colSizeInterFix = isXs ? '-' : `-${colWidth}-`;
            const colClass = getColumnSizeClass(isXs, colWidth, columnProp.size);

            colClasses.push(classnames({
                [colClass]: columnProp.size || columnProp.size === '',
                [`order${colSizeInterFix}${columnProp.order}`]: columnProp.order || columnProp.order === 0,
                [`offset${colSizeInterFix}${columnProp.offset}`]: columnProp.offset || columnProp.offset === 0
            }));
        } else {
            const colClass = getColumnSizeClass(isXs, colWidth, columnProp);
            colClasses.push(colClass);
        }
    });

    if (!colClasses.length) {
        colClasses.push('col');
    }

    const _className = classnames(className, colClasses);

    const Tag = `${tag}`;

    return (
        <Tag className={_className.trim()} {...attributes}>{children}</Tag>
    );
};

Col.propTypes = propTypes;
Col.defaultProps = defaultProps;

export default Col;
