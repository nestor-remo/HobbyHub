import React, { useState } from 'react';
import {Link} from 'react-router-dom';

const Card = (props) => {
    return (
        <div className='Card'>
            <h1>{props.title}</h1>
            <p><strong>Fruit:</strong> {props.fruit}</p>
            <Link to={'edit/'+props.id}>Edit</Link>
        </div>
    )
}

export default Card;
