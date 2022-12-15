
const CardPicture = ({ starData, className }) => {
    const openInNewTab = (url) => {
        window.open(url, '_blank', 'noopener,noreferrer');
    };

    function checkUrl() {
        if (starData.media_type === "video") {
            return <iframe src={starData.url} title={starData.title} className="starVideo"></iframe>
        }
        if (starData.media_type === "image") {
            return (
                <button className="pictureButton" onClick={() => openInNewTab(starData.hdurl ?? starData.url)}>
                    <img src={starData.url} alt={starData.title} className={className} />
                </button>
            )
        }
        return <div>Incorrect data</div>
    };

    return (
        <>
            {checkUrl()}
        </>
    )
}

export default CardPicture