import React from 'react';
import PropTypes from 'prop-types';

const Red = props => <span style={{ color: 'red' }} {...props} />;
const TableComponent = ({ propDefinitions }) => {
    const props = propDefinitions.map(
        ({ property, propType, required, description, defaultValue }) => (
            <tr key={property}>
                <td wrap="">
                    <code><strong>{property}{required ? <Red> *</Red> : null}</strong></code><br/>
                    <span
                        className="text-muted"
                        style={{fontWeight: '500', fontSize: '12px'}}
                        dangerouslySetInnerHTML={{__html: description && description.replace(/(?:\r\n|\r|\n)/g, '<br/>')}}>
                    </span>
                </td>
                <td className="s-14">{propType.name}</td>
                <td className="s-14">{JSON.stringify(defaultValue)}</td>
            </tr>
        )
    );

    const table = (
        <table className="table table-hover table-outline table-vcenter text-wrap mt-3">
            <thead>
            <tr>
                <th>name</th>
                <th>type</th>
                <th>default</th>
            </tr>
            </thead>
            <tbody>{props}</tbody>
        </table>
    );

    if (props.length > 0) {
        return table;
    }

    return null;
};

TableComponent.defaultProps = {
    propDefinitions: [],
};

TableComponent.propTypes = {
    propDefinitions: PropTypes.arrayOf(
        PropTypes.shape({
            property: PropTypes.string.isRequired,
            propType: PropTypes.oneOfType([PropTypes.object, PropTypes.string]).isRequired,
            required: PropTypes.bool,
            description: PropTypes.string,
            defaultValue: PropTypes.any,
        })
    ),
};

export default TableComponent;