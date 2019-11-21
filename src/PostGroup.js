import React from "react";
import Post from "./Post";

const PostGroup = ({ posts, status,currentUser }) => {
    const capatilize = (str) => str.charAt(0).toUpperCase() + str.substring(1);
    let filtered = posts.filter(p=>status === 'current' ? p.userId === currentUser ? true : false : p.userId !== currentUser ? true:false);
    return (
        <div className={`postGroup ${status}UserPosts`}>
            <h2>{`${capatilize(status)} User's Posts`}</h2>
            <div className="posts">
                {filtered.map(p => <Post post={p} key={p.id} />)}
            </div>
        </div>
    );
}

export default PostGroup;