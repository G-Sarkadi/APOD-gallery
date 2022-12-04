import { useEffect, useState } from "react"
import FormatedDate from "../FormatedDate";
import Credits from "./Credits";
import Picture from "../Picture";

const Card = ({ date }) => {
    const [starData, setStarData] = useState({});

    const URL = `/api?date=${date}`

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


    return (
        <div className="card">
            <p>
                <FormatedDate date={date} />
            </p>
            <Picture starData={starData} className={"mainPicture"} />
            <h4>
                {starData.title}
            </h4>
            <Credits starData={starData} />
            <p className="starExplanation">
                <strong>Explanation: </strong>{starData.explanation}
            </p>
        </div>
    )
}

export default Card