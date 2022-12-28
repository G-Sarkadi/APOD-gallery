import { useEffect, useState } from "react"
import GalleryContainer from "./GalleryContainer"
import Modal from "./Modal"
import useScroll from './useScroll'

const Gallery = () => {
    const [cards, setCards] = useState();
    const [modalOpen, setModalOpen] = useState(false);
    const [modalContent, setModalContent] = useState({});
    const [toggleRefresh, setToggleRefresh] = useState(false);
    const [loading, setLoading] = useState(true);
    const [loadingError, setLoadingError] = useState(false);

    const NUMBER_OF_CARDS = 20;
    const URL = `/api?count=${NUMBER_OF_CARDS}&thumbs=true`
    const VIEWPORT_PERCENT_TO_TRIGGER_NEW_FETCH = 0.8

    document.title = 'Picture Gallery'

    function checkValidity(content) {
        /* Filter out videos without thumbnail URL, or empty string as thumbnail URL or other content (embedded html,
        php, Adobe Flash, etc.) without thumbnails. Doesn't filter broken links. */
        const isDataAnImage = content.media_type === "image" && content.url
        const IsDataANewerVideoWithThumbnail = content.media_type === "video" && content.thumbnail_url && content.thumbnail_url !== ""
        const IsDataAnOlderVideoWithThumbnail = content.media_type === "other" && content.thumbnail_url && content.thumbnail_url !== ""
        return isDataAnImage || IsDataANewerVideoWithThumbnail || IsDataAnOlderVideoWithThumbnail
    }

    useEffect(() => {
        const controller = new AbortController();
        const signal = controller.signal;

        async function fetchData() {
            setLoading(true)
            setLoadingError(false)
            const res = await fetch(URL, { signal: signal })
            if (!res.ok) {
                setLoadingError(true)
            }
            const data = await res.json()
            const filteredData = data.filter(checkValidity)
            setCards(prevData => {
                if (prevData) {
                    return [...prevData, ...filteredData]
                }
                return filteredData
            })
            setLoading(false);
        }

        fetchData()
            .catch(err => console.error(err))

        return () => {
            // cancel the request before component unmounts
            controller.abort();
        };
    }, [URL, toggleRefresh]);

    // Triggers a new fetch if there isn't a running one and the user scrolls below the given percent of the viewport
    useScroll(loading, setToggleRefresh, VIEWPORT_PERCENT_TO_TRIGGER_NEW_FETCH);

    return (
        <>
            {modalOpen && <Modal setOpenModal={setModalOpen} modalContent={modalContent} />}
            <div className="contentContainer">
                <h3>Gallery</h3>
                <GalleryContainer galleryContent={cards}
                    setModalOpen={setModalOpen}
                    setModalContent={setModalContent}
                    loading={loading}
                    numberOfCards={NUMBER_OF_CARDS}
                    loadingError={loadingError} />
            </div>
        </>
    )
}

export default Gallery