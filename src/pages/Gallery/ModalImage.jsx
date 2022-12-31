const ModalImage = ({ content }) => {
    const openInNewTab = (url) => {
        window.open(url, '_blank', 'noopener,noreferrer');
    };

    function showProperTypeOfMedia() {
        if (content.media_type === "video") {
            return <iframe src={content.url} title={content.title} className="video"></iframe>
        }
        if (content.media_type === "image") {
            return (
                <button className="imageButton" onClick={() => openInNewTab(content.hdurl ?? content.url)}>
                    <img src={content.url} alt={content.title} className="modalImage" />
                </button>
            )
        }
        return <div>Incorrect data</div>
    }

    return (
        <>
            {showProperTypeOfMedia()}
        </>
    )
}

export default ModalImage