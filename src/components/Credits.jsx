const Credits = ({ content }) => {
    return (
        <div className="imageCredit">
            {content.copyright ? `Image Credit & Copyright: ${content.copyright}` : 'Image Credit: NASA'}
        </div>
    )
}

export default Credits