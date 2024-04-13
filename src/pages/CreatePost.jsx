import React, { useState } from 'react';
import { supabase } from '../client';

const CreatePost = () => {
    const [post, setPost] = useState({ title: "", fruit: "", description: "" });
    let fruits = [
        { name: "Mera Mera", type: "Logia" },
        { name: "Gomu Gomu", type: "Zoan" },
        { name: "Ice Ice", type: "Logia" },
        { name: "Yami Yami", type: "Paramecia" },
        { name: "Mochi Mochi", type: "Logia"},
    ];

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
                fruit: post.fruit,
                description: post.description,
            })
            .select();
            window.location = "/";
    };


    return (
        <div>
            <form>
                <label htmlFor="title">Title</label>
                <input type="text" id="title" name="title" onChange={handleChange}></input>
                <br></br>

                <label htmlFor="fruit">Fruit</label>
                {fruits.map((fruit) => (
                    <div key={fruit.name}>
                        <input type="radio" id={fruit.name} name="fruit" value={fruit.name} onChange={handleChange} />
                        <label htmlFor={fruit.name}>{fruit.name}</label>
                    </div>
                ))}
                <br></br>

                <label htmlFor="description">Description</label>
                <textarea rows="5" cols="50" id="description" name="description" onChange={handleChange}></textarea>
                <br></br>

                <input type="submit" value="Submit" onClick={createPost}></input>
            </form>
        </div>
    )
}

export default CreatePost;