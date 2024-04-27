import React, { useState, useEffect } from 'react';
import Card from '../components/Card';
import { supabase } from '../client';
import './ReadPosts.css';

const ReadPosts = (props) => {
    const [posts, setPosts] = useState([]);
    const [orderBy, setOrderBy] = useState('created_at');

    useEffect(() => {
        const fetchPost = async () => {
            const { data } = await supabase
                .from("Posts")
                .select()
                .order(orderBy, { ascending: false });

            setPosts(data);
        };

        fetchPost();
    }, [props]);

    return (
        <div className='ReadPosts'>
            {
                posts && posts.length > 0 ?
                posts.map((post, index) =>
                    <Card key={index} id={post.id} title={post.title} author={post.author} description={post.description} />
                ) : (
                    <h2>No posts on feed</h2>
                )
            }
        </div>
    )
}

export default ReadPosts;