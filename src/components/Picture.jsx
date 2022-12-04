import LoadingPlaceholder from "./LoadingPlaceholder"

const Picture = ({ starData, className }) => {
    const openInNewTab = (url) => {
        window.open(url, '_blank', 'noopener,noreferrer');
    };

    function checkUrl() {
        if (starData.media_type === "video") {
            return <iframe src={starData.url} title={starData.title} className="starVideo"></iframe>
        }
        if (starData.media_type === "image") {
            return (
                <button className="starPictureButton" onClick={() => openInNewTab(starData.hdurl ?? starData.url)}>
                    <img src={starData.url} alt={starData.title} className={className} />
                </button>
            )
        }
        return <LoadingPlaceholder />
    };

    return (
        <>
            {checkUrl()}
        </>
    )
}

export default Picture