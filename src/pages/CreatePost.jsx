import React, { useState } from 'react';
import { supabase } from '../client';

const CreatePost = () => {
    const [post, setPost] = useState({ title: "", description: "" });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setPost( (prev) => {
            return {
                ...prev,
                [name]: value,
            }
        })
    }

    const createPost = async (event) => {
        event.preventDefault();
        const { data, error } = await supabase
            .from("Posts")
            .insert({
                title: post.title,
                author: post.author,
                description: post.description,
            })
            .select();
            window.location = "/";
    };


    return (
        <div>
            <form>
                <input type="text" id="title" placeholder="Title" name="title" onChange={handleChange}></input> 

                <input type="text" id="author" placeholder="Author" name="author" onChange={handleChange}></input>
                <br></br>
                
                <textarea rows="5" cols="50" placeholder="Description" id="description" name="description" onChange={handleChange}></textarea>
                <br></br>

                <input type="submit" value="Submit" onClick={createPost}></input>
            </form>
        </div>
    )
}

export default CreatePost;