import Card from "./Card"
import DateInput from "./DateInput"
import { useEffect, useState } from "react"
import Spinner from "../Spinner";

const Home = () => {
    const [selectedDate, setSelectedDate] = useState("");
    const [starData, setStarData] = useState({});
    const [today, setToday] = useState("");
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
            if (today === "") {
                setToday(data.date)
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
                        <Card starData={starData} selectedDate={selectedDate || today} />
                        <DateInput selectedDate={selectedDate} today={today} setSelectedDate={setSelectedDate} setStarData={setStarData} />
                    </>
                }
            </div>
        </>
    )
}

export default Home