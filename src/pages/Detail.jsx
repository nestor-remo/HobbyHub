import React, { Component, useEffect, useState } from "react";
import { supabase } from '../client';
import { useParams } from "react-router-dom";
import { Link } from 'react-router-dom';
import './Detail.css';

const Detail = ({data}) => {
    const [posts, setPosts] = useState([]);
    const { id } = useParams();

    useEffect(() => {
        const fetchPost = async () => {
            const { data } = await supabase
                .from("Posts")
                .select()
                .eq('id', id);

            setPosts(data);
        };

        fetchPost();
    }, [id]);

    return (
        <div className='Detail'>
            {posts.map((post) => (
                <div key={post.id}>
                    <h2 className="title">{post.title}</h2>
                    <h3 className="author">{post.author}</h3>
                    <p className="description">{post.description}</p>
                    <button className='likes-button'> Likes: {post.likes} </button>
                </div>
            ))}
        </div>
    );
};

export default Detail;