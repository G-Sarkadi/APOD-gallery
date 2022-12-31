import Card from "./Card"
import DateInput from "./DateInput"
import { useEffect, useState } from "react"
import Spinner from "../../components/Spinner";
import LoadingError from "../../components/LoadingError";

const Home = () => {
    const [selectedDate, setSelectedDate] = useState("");
    const [content, setContent] = useState({});
    const [latestDate, setLatestDate] = useState("");
    const [loading, setLoading] = useState(true);
    const [loadingError, setLoadingError] = useState(false);

    document.title = 'Astronomy Picture of the Day'

    useEffect(() => {
        const controller = new AbortController();
        const signal = controller.signal;
        const URL = `/api?date=${selectedDate}`

        async function fetchData() {
            setLoading(true)
            setLoadingError(false)
            const res = await fetch(URL, { signal: signal })
            if (!res.ok) {
                setLoadingError(true)
            }
            const data = await res.json()
            setContent(data)
            // Set the latest date with the first fetch
            if (latestDate === "") {
                setLatestDate(data.date)
            }
            setLoading(false)
        }

        fetchData()
            .catch(err => console.error(err))

        return () => {
            // cancel the request before component unmounts
            controller.abort();
        };
    }, [selectedDate]);

    return (
        <>
            <div className="contentContainer">
                {loadingError ?
                    <LoadingError /> :
                    loading ? <Spinner /> :
                        <>
                            <Card content={content}
                                selectedDate={selectedDate || latestDate} />
                            <DateInput selectedDate={selectedDate}
                                latestDate={latestDate}
                                setSelectedDate={setSelectedDate}
                                setContent={setContent} />
                        </>
                }
            </div>
        </>
    )
}

export default Home