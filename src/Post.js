import React from "react";

const Post = ({post})=>{
    return(
        <div className="post" id={`post_${post.id}`}>
            <h3 className="title">{post.title}</h3>
            <div className="body">{post.body}</div>
        <div className="createdBy">Created by User #{post.userId}</div>
        </div>
    )
};

export default Post;