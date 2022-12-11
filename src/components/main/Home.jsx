import Card from "./Card"
import DateInput from "./DateInput"
import { useState } from "react";

const Home = () => {
    const [selectedDate, setSelectedDate] = useState();

    function calculateToday() {
        const newDate = new Date();
        return `${newDate.getFullYear()}-${newDate.getMonth() + 1}-${newDate.getDate()}`;
    }

    const today = calculateToday();

    document.title = 'Astronomy Picture of the Day'

    return (
        <>
            <div className="contentContainer">
                <Card date={selectedDate ?? today} />
                <DateInput selectedDate={selectedDate} today={today} setSelectedDate={setSelectedDate} />
            </div>
        </>
    )
}

export default Home