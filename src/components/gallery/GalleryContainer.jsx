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
        return Array(numberOfCards).fill("placeholder").map((_value, index) => 
            <PlaceholderCard key={index} />
        )
    }

    return (
        <div className="galleryContainer">
            {createCards()}
            {loading && createPlaceholders()}
        </div>
    )
}

export default GalleryContainer