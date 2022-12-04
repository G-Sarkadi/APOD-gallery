const FormatedDate = ({ date }) => {
    function formatDate() {
        let dateObject = new Date(date + "z");
        return dateObject.getFullYear()
        + " "
        + dateObject.toLocaleDateString("en-GB", { month: "long" })
        + " "
        + dateObject.getDate();
    }

    return (
        <>
            {formatDate()}
        </>
    )
}

export default FormatedDate