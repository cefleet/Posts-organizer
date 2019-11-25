import React from "react";
import { useSelector } from 'react-redux';

const Post = ({postId})=>{

    const post = useSelector(state=>state.posts.filter(p=>p.id === postId));
    
    if(!post){
        return (<div className="error">The Post is Missing.</div>)
    }

    if(post.length > 1){
        return (<div className="error">There is more than one post with this id</div>)
    }

    let p = post[0];

    return(
        <div className="post" id={`post_${p.id}`}>
            <h3 className="title">{p.title}</h3>
            <div className="body">{p.body}</div>
        <div className="createdBy">Created by User #{p.userId}</div>
        </div>
    )
};

export default Post;