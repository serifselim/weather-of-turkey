import React from 'react';

const City = ({ d, id, currentCity, handleClick }) => {
    return (
        <path d={d} id={id} data-testid={id} onClick={handleClick} fill={currentCity === id && '#ff9d00'} />
    );
};

export default City;