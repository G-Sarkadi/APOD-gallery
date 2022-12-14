import PlaceholderCard from "./PlaceholderCard";

const LoadingPlaceholder = () => {

    function createPlaceholders() {
        let placeholders = []
        for (let i = 0; i < 20; i++) {
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