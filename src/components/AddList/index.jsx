import React from 'react';
import PropTypes from 'prop-types';
import './AddList.scss';
import Add from '../Add';

function AddList({handleDelete, prodAdds}) {
    return (
        <div id="listAdd">
            {prodAdds.map(({id, name, description}, i) => (
                <Add
                    key={i}
                    id={id}
                    name={name}
                    description={description}
                    handleDelete={handleDelete} 
                />
            ))}
        </div>
    );
}

AddList.propTypes = {
    prodAdds: PropTypes.arrayOf(PropTypes.exact({
        id: PropTypes.number,
        name: PropTypes.string,
        description: PropTypes.string,
    })),
}

AddList.defaultProps = {
    handleDelete: () => { },
    prodAdds: [
        {
            id: 1577122409330,
            name: 'name',
            description: 'decription of the product one'
        },
        {
            id: 1577122409331,
            name: 'other',
            description: 'decription of the product two'
        },
    ],
}

export default AddList;