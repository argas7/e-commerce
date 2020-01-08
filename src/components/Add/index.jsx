import React from 'react';
import PropTypes from 'prop-types';
import './Add.scss';

function Add({ id, name, description, handleDelete }) {
    const handleDeleteAdd = () => {
        handleDelete(id);
    };

    return (
        <div className="newProduct" id={id}>
            <span>{name}...........................{description}</span>
            <button className="delete" type="button" onClick={handleDeleteAdd}>X</button>
        </div>
    );
}

Add.propTypes = {
    id: PropTypes.number,
    name: PropTypes.string,
    description: PropTypes.string,
    handleDelete: PropTypes.func,
}

Add.defaultProps = {
    id: new Date().getTime(),
    name: "some name",
    description: "text that describes the product",
    handleDelete: () => {},
}

export default Add;
