import {
    useEffect,
    useState
} from "react";

const useFetch = (url) => {
    const [data, setData] = useState(null)
    const [pending, setPending] = useState(false)
    const [error, setError] = useState(null)

    useEffect(() => {
        setPending(true)
        fetch(url).then((response) => {
            return response.json()
        }).then((responseData) => {
            setData(responseData)
            setPending(false)
            setError(null)
        }).catch((error) => {
            setError(error)
            setPending(false)
        })
    }, [url]);

    return {
        data , pending , error
    }

}

export default useFetch;