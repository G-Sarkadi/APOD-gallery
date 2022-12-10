
const GalleryCardPicture = ({ content, setModalContent, setModalOpen }) => {
    return (
        <img className="galleryCardPicture"
            src={content.thumbnail_url || content.url}
            alt={content.title}
            onClick={() => {
                setModalOpen(true);
                setModalContent(content)
            }}
        />
    )
}

export default GalleryCardPicture