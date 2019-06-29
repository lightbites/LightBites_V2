import {useState, useEffect} from 'react'

export default function useFetch2(url) {
    //Initialize State with an empty array
    const [info, setInfo] = useState([]);
    //State for loading
    const [searching, setSearching] = useState(true);

    function getHistory() {
        fetch(url).then(res => res.json())
        .then(response => {
            setInfo(response[0]);
            setSearching(false);
        })
    }

    useEffect(() => {
        getHistory();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    return [info, searching];
}