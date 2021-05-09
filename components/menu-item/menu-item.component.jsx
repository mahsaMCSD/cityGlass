import React from 'react'


const MenuItem = ({ imageUrl}) => (
    <div className="col-md-4 mb-2">
        <img className="img-fluid" src={imageUrl} alt="" />
    </div>

);

export default MenuItem;