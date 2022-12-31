const DateInput = ({ selectedDate, latestDate, setSelectedDate, setContent }) => {
    // Check the full archive at: https://apod.nasa.gov/apod/archivepixFull.html
    const earliestDate = '1995-06-20'

    return (
        <>
            <span>Select a date: </span>
            <input type="date"
                value={selectedDate || latestDate}
                max={latestDate}
                min={earliestDate}
                onChange={e => {
                    setSelectedDate(e.target.value);
                    setContent({})
                }}>
            </input>
        </>
    )
}

export default DateInput