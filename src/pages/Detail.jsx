import React from 'react';
import { useParams } from 'react-router-dom';

const Detail = () => {
    const { id } = useParams();
    
    
    
    return (
        <div>
        <h1>{data.title}</h1>
        <p>{data.body}</p>
        </div>
    );
}

export default Detail;