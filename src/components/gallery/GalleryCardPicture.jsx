
const GalleryCardPicture = ({ content, setModalContent, setModalOpen }) => {
    return (
        <div className="galleryCardPicture">
            <img
                src={content.thumbnail_url || content.url}
                alt={content.title}
                onClick={() => {
                    setModalOpen(true);
                    setModalContent(content)
                }}
            />
        </div>
    )
}

export default GalleryCardPicture