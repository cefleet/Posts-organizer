import React from 'react';
import './App.css';
import useFetch from "./useFetch";
import { useSelector } from "react-redux";
import PostGroup from "./PostGroup";

function App() {
  const currentUser = 1;//this is per instructions

  const posts = useSelector(state => state);
  const { loading, error } = useFetch("https://jsonplaceholder.typicode.com/posts");

  if (loading) {
    return (<div className="loading">Loading ...</div>);
  }

  if (error) {    
    return (<div className="error">There was a <span className="errorType">{error.message}</span> Error. Please try again later</div>);
  }

  //just a little extra precaution.
  if (!posts || !posts.data || !Array.isArray(posts.data)) {
    return (
      <div className="error">
        {
        `
        The data was in an incorrect format. 
        Please find the nearest developer for help, because it should never get here.`
        }
      </div>);
  }

  return (
    <div className="main">
      <h1>Posts</h1>
      <div className="allPosts">
        <PostGroup status={'current'} posts={posts.data} currentUser={currentUser}/>        
        <PostGroup status={'other'} posts={posts.data} currentUser={currentUser} />
      </div>
    </div>
  );
}

export default App;
