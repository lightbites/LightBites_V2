import {useState, useEffect} from 'react'

export default function useFetch(url) {
    //Initialize State with an empty array
    const [data, setData] = useState([]);
    //State for loading
    const [loading, setLoading] = useState(true);

    //Fetch API with Async/Await instead of promises
    function fetchUrl() {
        fetch(url).then(res => res.json())
        .then(response => {
            setData(response);
            setLoading(false);
        })
    }

    useEffect(() => {
        fetchUrl();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    return [data, loading];
}