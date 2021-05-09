import React from 'react'


const FilterItem = ({id, name}) => (
    <li key={id} className="list-group-item px-0">{name}</li>


);

export default FilterItem;