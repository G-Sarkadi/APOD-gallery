
const DateInput = ({ selectedDate, today, setSelectedDate, setStarData }) => {
    // Check the full archive at: https://apod.nasa.gov/apod/archivepixFull.html
    const earliestDate = '1995-06-20'

    return (
        <>
            <span>Select date: </span>
            <input type="date"
                value={selectedDate ?? today}
                max={today}
                min={earliestDate}
                onChange={e => {
                    setSelectedDate(e.target.value);
                    setStarData({})
                }}>
            </input>
        </>
    )
}

export default DateInput