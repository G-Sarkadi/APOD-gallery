import { useState } from "react";

const GalleryCardImage = ({ content }) => {
    const [className, setClassName] = useState("galleryCardImage loading");

    const changeStyle = () => {
        setClassName("galleryCardImage");
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

export default GalleryCardImage
