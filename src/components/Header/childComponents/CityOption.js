import React from 'react';

const CityOption = ({ city, currentCity }) => {
    return (
        <option selected={currentCity === city.id}>{city.id}</option>
    );
};

export default CityOption;