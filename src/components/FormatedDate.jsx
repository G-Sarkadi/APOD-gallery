const FormatedDate = ({ date }) => {
    function formatDate() {
        // Firefox parses the date differently -> needs a different Date object
        let dateObject;
        let isFirefox = typeof InstallTrigger !== 'undefined';
        if (isFirefox) {
            dateObject = new Date(date);
        } else {
            dateObject = new Date(date + "z");
        }
        
        return dateObject.getFullYear()
            + " "
            + dateObject.toLocaleDateString("en-GB", { month: "long" })
            + " "
            + dateObject.getDate();
    }

    return (
        <div>
            {formatDate()}
        </div>
    )
}

export default FormatedDate