import React from "react";
import Post from "./Post";
import { useSelector } from 'react-redux';

const PostGroup = ({ status }) => {
    const capatilize = (str) => str.charAt(0).toUpperCase() + str.substring(1);
    const currentUser = useSelector(state=>state.status.currentUser);
    const filtered = useSelector(state => state.posts.filter(p=>status === 'current' ? p.userId === currentUser ? true : false : p.userId !== currentUser ? true:false));

    return (
        <div className={`postGroup ${status}UserPosts`}>
            <h2>{`${capatilize(status)} User's Posts`}</h2>
            <div className="posts">
                {filtered.map(p => <Post postId={p.id} key={p.id} />)}
            </div>
        </div>
    );
}

export default PostGroup;