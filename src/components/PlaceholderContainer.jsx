import PlaceholderCard from "./PlaceholderCard";

const LoadingPlaceholder = ({ numberOfCards }) => {

    function createPlaceholders() {
        let placeholders = []
        for (let i = 0; i < numberOfCards; i++) {
            placeholders.push(<PlaceholderCard key={i} />)
        }
        return placeholders;
    }

    return (
        <div className="galleryContainer">
            {createPlaceholders()}
        </div>
    )
}

export default LoadingPlaceholder