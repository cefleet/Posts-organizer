import { useState, useEffect } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";

const useFetch = (url) => {
    const [error,setError] = useState(null);
    const [fetching, setFetching] = useState(true);
    const dispatch = useDispatch();

    useEffect(() => {
        const fetchData = async function () {
            try {
                setFetching(true);
                const response = await axios.get(url);
                if (response.status === 200) {
                   dispatch({type:"FETCH_POSTS",data: response.data})
                }
            } catch (error) {
                setError(error);
               //throw error;
            } finally {
                setFetching(false);
            }
        };
        fetchData();
    }, [url,dispatch]);

    return { fetching,error };

};

export default useFetch;