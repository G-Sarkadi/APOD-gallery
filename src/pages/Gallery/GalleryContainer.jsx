import LoadingError from "../../components/LoadingError"
import PlaceholderCard from "./PlaceholderCard"
import GalleryCard from "./GalleryCard"

const GalleryContainer = ({ galleryContent, loading, numberOfCards, loadingError }) => {

    function createCards() {
        if (galleryContent) {
            return galleryContent.map((content, index) =>
                <GalleryCard content={content} key={index} />)
        }
    }

    function createPlaceholders() {
        return Array(numberOfCards).fill().map((_value, index) =>
            <PlaceholderCard key={index} />
        )
    }

    return (
        <>
            {loadingError ?
                <LoadingError /> :
                <div className="galleryContainer">
                    {createCards()}
                    {loading && createPlaceholders()}
                </div>}
        </>
    )
}

export default GalleryContainer