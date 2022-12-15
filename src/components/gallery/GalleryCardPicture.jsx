
const GalleryCardPicture = ({ content }) => {
    return (
        <img className="galleryCardPicture"
            src={content.thumbnail_url || content.url}
            alt={content.title}
            loading="lazy"
        />
    )
}

export default GalleryCardPicture
