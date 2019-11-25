import React,{useEffect,useState} from 'react';
import './App.css';
import useFetch from "./useFetch";
import PostGroup from "./PostGroup";
import {useDispatch} from "react-redux";

function App() {
  const [ready, setReady] = useState(false);
  const dispatch = useDispatch();
  const { fetching, error } = useFetch("https://jsonplaceholder.typicode.com/posts");

  useEffect(()=>{
    if(!fetching){
      dispatch({type:"SET_CURRENT_USER",currentUser:1});
      setReady(true);
    }
  },[dispatch, fetching]);

  if (fetching || !ready) {
    return (<div className="loading">Loading ...</div>);
  }

  if (error) {    
    return (<div className="error">There was a <span className="errorType">{error.message}</span> Error. Please try again later</div>);
  }

  console.log(fetching,ready);
  return (
    <div className="main">
      <h1>Posts</h1>
      <div className="allPosts">
        <PostGroup status={'current'} />        
        <PostGroup status={'other'} />
      </div>
    </div>
  );
}

export default App;
