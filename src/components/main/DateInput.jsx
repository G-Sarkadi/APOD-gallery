
const DateInput = ({ selectedDate, today, setSelectedDate }) => {
    // Check the full archive at: https://apod.nasa.gov/apod/archivepixFull.html
    const earliestDate = '1995-06-20'

    // Corrects single-digit days and months
    function correctToday() {
        const dateArr = today.split('-');
        if (dateArr[1] < 10) {
            dateArr[1] = '0' + dateArr[1];
        }
        if (dateArr[2] < 10) {
            dateArr[2] = '0' + dateArr[2];
        }
       return dateArr.join('-')
    }

    return (
        <>
            <label>Select date: </label>
            <input type="date"
                value={selectedDate ?? today}
                max={correctToday()}
                min={earliestDate}
                onChange={e => setSelectedDate(e.target.value)}>
            </input>
        </>
    )
}

export default DateInput