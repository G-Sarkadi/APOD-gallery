import Card from "./Card"
import DateInput from "./DateInput"
import { useEffect, useState } from "react"
import Spinner from "../Spinner";

const Home = () => {
    const [selectedDate, setSelectedDate] = useState("");
    const [starData, setStarData] = useState({});
    const [latestDate, setLatestDate] = useState("");
    const [loading, setLoading] = useState(false)

    document.title = 'Astronomy Picture of the Day'

    useEffect(() => {
        const controller = new AbortController();
        const signal = controller.signal;
        const URL = `/api?date=${selectedDate}`

        async function fetchData() {
            setLoading(true)
            const res = await fetch(URL, { signal: signal })
            const data = await res.json()
            setStarData(data)
            // Set the latest date with the first fetch
            if (latestDate === "") {
                setLatestDate(data.date)
            }
            setLoading(false)
        }

        fetchData()
            .catch(console.error)

        return () => {
            // cancel the request before component unmounts
            controller.abort();
        };
    }, [selectedDate]);

    return (
        <>
            <div className="contentContainer">
                {loading ? <Spinner /> :
                    <>
                        <Card starData={starData} selectedDate={selectedDate || latestDate} />
                        <DateInput selectedDate={selectedDate} latestDate={latestDate} setSelectedDate={setSelectedDate} setStarData={setStarData} />
                    </>
                }
            </div>
        </>
    )
}

export default Home