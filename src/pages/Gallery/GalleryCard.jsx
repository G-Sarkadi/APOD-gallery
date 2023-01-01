import { useContext } from "react";
import GalleryCardImage from "./GalleryCardImage";
import { ModalContext } from "./Gallery";

const GalleryCard = ({ content }) => {
    const { setModalContent } = useContext(ModalContext)

    return (
        <div className="galleryCard" onClick={() => setModalContent(content)}>
            <GalleryCardImage content={content} />
            <div className="galleryCardFooter">
                {content.title}
            </div>
        </div>
    )
}

export default GalleryCard