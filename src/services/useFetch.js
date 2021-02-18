import { useState, useEffect } from 'react';

const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [isError, setIsError] = useState(null);  

    useEffect(() => {
        fetch(url)
            .then(res => {
                if(!res.ok) {
                    throw new Error('could not fetch the data...')
                }
                return res.json();
            })
            .then((data) => {
                setData(data);
                setIsPending(false);
                setIsError(null);
            })
            .catch(err => {
                setIsPending(false);
                setIsError(err.message);
            });
    }, [url]);

    return { data, isPending, isError }
};

export default useFetch;
