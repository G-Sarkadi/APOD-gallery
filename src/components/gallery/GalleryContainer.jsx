import GalleryCard from "./GalleryCard"

const GalleryContainer = ({ galleryContent, setModalOpen, setModalContent }) => {

    function createCards() {
        if (galleryContent) {
            return galleryContent.map((content, index) =>
                <GalleryCard
                    content={content}
                    key={index}
                    setModalOpen={setModalOpen}
                    setModalContent={setModalContent}
                />)
        }
    }


    return (
        <div className="galleryContainer">
            {createCards()}
        </div>
    )
}

export default GalleryContainer