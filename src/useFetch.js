import { useState, useEffect } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";

const useFetch = (url) => {
    const [error,setError] = useState(null);
    const [loading, setLoading] = useState(true);
    const dispatch = useDispatch();

    useEffect(() => {
        const fetchData = async function () {
            try {
                setLoading(true);
                const response = await axios.get(url);
                if (response.status === 200) {
                   dispatch({type:"FETCH_DATA",data: response.data})
                }
            } catch (error) {
                setError(error);
               //throw error;
            } finally {
                setLoading(false);
            }
        };
        fetchData();
    }, [url,dispatch]);

    return { loading,error };

};

export default useFetch;