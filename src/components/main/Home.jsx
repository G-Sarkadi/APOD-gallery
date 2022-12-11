import Card from "./Card"
import DateInput from "./DateInput"
import { useState } from "react";
import NavButton from "../NavButton";

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
                <h1>Astronomy Picture of the Day</h1>
                <DateInput selectedDate={selectedDate} today={today} setSelectedDate={setSelectedDate} />
                <Card date={selectedDate ?? today} />
                <NavButton text={"Gallery"} route="/gallery" />
                <NavButton text={"About"} route="/about" />
            </div>
        </>
    )
}

export default Home