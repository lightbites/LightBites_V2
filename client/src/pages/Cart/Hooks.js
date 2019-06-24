import {useState, useEffect} from 'react'

export default function useFetch(url) {
    //Initialize State with an empty array
    const [data, setData] = useState([]);
    //State for loading
    const [loading, setLoading] = useState(true);

    //Fetch API with Async/Await instead of promises
    async function fetchUrl() {
        const response = await fetch(url);
        const json = await response.json();

        setData(json.slice(0, 10));
        setLoading(false);
    }

    useEffect(() => {
        fetchUrl();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    return [data, loading];
}