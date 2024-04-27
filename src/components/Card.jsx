import React, { useState } from 'react';
import {Link} from 'react-router-dom';
import { supabase } from '../client';
import './Card.css';

const Card = (props) => {
    const [likes, setLikes] = useState(0);

    const updateLikes = async (event) => {
        event.preventDefault();
        await supabase
            .from("Posts")
            .update({
                likes: likes + 1
            })
            .eq('id', props.id)
        setLikes((likes) => likes + 1);
    }

    return (
        <div className='Card'>
            <h2 className="title">{props.title}</h2>
            <h3 className="author">{"by " + props.author}</h3>
            <p className="description">{props.description}</p>
            <button className='likes-button' onClick={updateLikes}> Likes: {likes} </button>
            <Link className="edit button" to={'edit/'+props.id}>Edit</Link>
        </div>
    )
}

export default Card;
