import { useState } from "react";

const GalleryCardPicture = ({ content }) => {
    const [className, setClassName] = useState("galleryCardPicture loading");

    const changeStyle = () => {
        setClassName("galleryCardPicture");
    };

    return (
        <img className={className}
            src={content.thumbnail_url || content.url}
            alt={content.title}
            loading="lazy"
            onLoad={changeStyle}
        />
    )
}

export default GalleryCardPicture
