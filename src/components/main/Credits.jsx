const Credits = ({ starData }) => {
    return (
        <h5>
            {starData.copyright ? `Image Credit & Copyright: ${starData.copyright}` : 'Image Credit: NASA'}
        </h5>
    )
}

export default Credits