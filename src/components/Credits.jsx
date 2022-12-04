const Credits = ({ starData }) => {
    return (
        <div className="imageCredit">
            {starData.copyright ? `Image Credit & Copyright: ${starData.copyright}` : 'Image Credit: NASA'}
        </div>
    )
}

export default Credits