import PlaceholderCard from "../PlaceholderCard"
import GalleryCard from "./GalleryCard"

const GalleryContainer = ({ galleryContent, setModalOpen, setModalContent, loading, numberOfCards }) => {

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

    function createPlaceholders() {
        let placeholders = []
        for (let i = 0; i < numberOfCards; i++) {
            placeholders.push(<PlaceholderCard key={i} />)
        }
        return placeholders;
    }

    return (
        <div className="galleryContainer">
            {createCards()}
            {loading && createPlaceholders()}
        </div>
    )
}

export default GalleryContainer