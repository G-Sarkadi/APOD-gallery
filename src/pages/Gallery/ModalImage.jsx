const ModalImage = ({ content }) => {
    const openInNewTab = (url) => {
        window.open(url, '_blank', 'noopener,noreferrer');
    };

    function showProperTypeOfMedia() {
        switch (content.media_type) {
            case "video":
                return <iframe src={content.url} title={content.title} className="video"></iframe>
            case "image":
                return (
                    <button className="imageButton" onClick={() => openInNewTab(content.hdurl || content.url)}>
                        <img src={content.url} alt={content.title} className="modalImage" />
                    </button>
                )
            default:
                return <div>Incorrect data</div>
        }
    }

    return (
        <>
            {showProperTypeOfMedia()}
        </>
    )
}

export default ModalImage