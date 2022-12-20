import Card from "./Card"
import DateInput from "./DateInput"
import { useEffect, useState } from "react"
import Spinner from "../Spinner";

const Home = () => {
    const [selectedDate, setSelectedDate] = useState(calculateToday());
    const [starData, setStarData] = useState({});

    const URL = `/api?date=${selectedDate ?? calculateToday()}`

    useEffect(() => {
        const controller = new AbortController();
        const signal = controller.signal;

        setStarData({})

        async function fetchData() {
            const res = await fetch(URL, { signal: signal })
            const data = await res.json()
            setStarData(data)
        }

        fetchData()
            .catch(console.error)

        return () => {
            // cancel the request before component unmounts
            controller.abort();
        };
    }, [URL]);

    // Create a new Date object, use East Coast Time, and parse it to a yyyy-mm-dd string
    function calculateToday() {
        const todayInFlorida = new Date();
        return todayInFlorida.toLocaleDateString('en-CA', { timeZone: 'EST' });
    }

    function isDataLoading() {
        return Object.keys(starData).length === 0;
    }

    document.title = 'Astronomy Picture of the Day'

    return (
        <>
            <div className="contentContainer">
                {isDataLoading() ? <Spinner /> :
                    <>
                        <Card starData={starData} selectedDate={selectedDate} />
                        <DateInput selectedDate={selectedDate} today={calculateToday()} setSelectedDate={setSelectedDate} setStarData={setStarData} />
                    </>
                }
            </div>
        </>
    )
}

export default Home