import React, { useState, useEffect } from 'react';
import Card from '../components/Card';
import { supabase } from '../client';

const ReadPosts = (props) => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const fetchPost = async () => {
            const { data } = await supabase
                .from("Posts")
                .select()
                .order('created_at', { ascending: true });

            setPosts(data);
        };

        fetchPost();
    }, [props]);

    return (
        <div className='ReadPosts'>
            {
                posts && posts.length > 0 ?
                posts.map((post, index) =>
                    <Card key={index} id={post.id} title={post.title} fruit={post.fruit} description={post.description} />
                ) : (
                    <h2>You are one lonely captain!</h2>
                )
            }
        </div>
    )
}

export default ReadPosts;