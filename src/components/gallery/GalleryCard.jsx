import { useContext } from "react";
import GalleryCardPicture from "./GalleryCardPicture";
import { ModalContext } from "./Gallery";

const GalleryCard = ({ content }) => {
    const {setModalOpen,setModalContent} = useContext(ModalContext)

    return (
        <div className="galleryCard" onClick={() => {
            setModalOpen(true);
            setModalContent(content)
        }}>
            <GalleryCardPicture content={content} />
            <div className="galleryCardFooter">
                {content.title}
            </div>
        </div>
    )
}

export default GalleryCard