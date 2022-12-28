import GalleryCardPicture from "./GalleryCardPicture";

const GalleryCard = ({ content, setModalOpen, setModalContent }) => {

    return (
        <div className="galleryCard" onClick={() => {
            setModalOpen(true);
            setModalContent(content)
        }}>
            <GalleryCardPicture content={content} />
            <div className="galleryCardFooter">
                {content.title}
            </div>
        </div>
    )
}

export default GalleryCard