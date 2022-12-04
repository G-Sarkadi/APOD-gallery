const GalleryCard = ({ content, setModalOpen, setModalContent }) => {

    return (
        <button className="galleryPictureButton"
            onClick={() => {
                setModalOpen(true);
                setModalContent(content)
            }}
        >
            <img className="galleryCard" src={content.thumbnail_url || content.url} alt={content.title} />
        </button>
    )
}

export default GalleryCard