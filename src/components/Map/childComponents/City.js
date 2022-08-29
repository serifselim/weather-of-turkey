import React from 'react';
import {OverlayTrigger, Tooltip} from 'react-bootstrap'

const City = ({ d, id, currentCity, handleClick }) => {

    return (
        <OverlayTrigger placement="top" overlay={<Tooltip><h6 className='text-warning'>{id}</h6></Tooltip>}>
        <path d={d} id={id} data-testid={id} onClick={handleClick} fill={currentCity === id && '#ff9d00'} />
        </OverlayTrigger>
    );
};

export default City;