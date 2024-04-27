import React from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { supabase } from '../client';

const EditPost = ({data}) => {
    const { id } = useParams();
    const [post, setPost] = useState({id: null, title: "", description: ""});


    const handleChange = (event) => {
        const { name, value } = event.target;
        setPost( (prev) => {
            return {
                ...prev,
                [name]: value,
            }
        })
    }

    const updatePost = async (event) => {
        event.preventDefault();
        await supabase
            .from("Posts")
            .update({
                title: post.title,
                description: post.description,
                likes: post.likes,
                author: post.author

            })
            .eq('id', id)
            window.location = "/";
    }

    const deletePost = async (event) => {
        event.preventDefault();
        await supabase
            .from("Posts")
            .delete()
            .eq('id', id)
            window.location = "/";
    }

    return (
        <div>
            <form>
                <input type="text" id="title" placeholder="Title" name="title" onChange={handleChange}></input> 

                <input type="text" id="author" placeholder="Author" name="author" onChange={handleChange}></input>
                <br></br>

                <textarea rows="5" cols="50" placeholder="Description" id="description" name="description" onChange={handleChange}></textarea>
                <br></br>

                <button className='submit-button' onClick={updatePost}>Update</button>
                <button className='delete-button' onClick={deletePost}>Delete</button>
            </form>
        </div>
    )
}

export default EditPost;