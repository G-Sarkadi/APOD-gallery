import { useEffect, useState } from "react"
import GalleryContainer from "./GalleryContainer"
import PlaceholderContainer from "../PlaceholderContainer"
import Modal from "./Modal"

const Gallery = () => {
    const [cards, setCards] = useState();
    const [modalOpen, setModalOpen] = useState(false);
    const [modalContent, setModalContent] = useState({});
    const [toggleRefresh, setToggleRefresh] = useState(false);
    const [loading, setLoading] = useState(true);

    const NUMBER_OF_CARDS = 20;
    const URL = `/api?count=${NUMBER_OF_CARDS}&thumbs=true`

    document.title = 'Picture Gallery'

    useEffect(() => {
        const controller = new AbortController();
        const signal = controller.signal;
        setLoading(true)

        async function fetchData() {
            const res = await fetch(URL, { signal: signal })
            const data = await res.json()
            setCards(prevData => {
                if (prevData){
                    return [...prevData, ...data]
                }
                return data
            })
            setLoading(false);
        }

        fetchData()
            .catch(console.error);

        return () => {
            // cancel the request before component unmounts
            controller.abort();
        };
    }, [URL, toggleRefresh]);

    const onScroll = () => {
        const scrollTop = document.documentElement.scrollTop
        const scrollHeight = document.documentElement.scrollHeight
        const clientHeight = document.documentElement.clientHeight

        if (scrollTop + clientHeight >= scrollHeight) {
            setToggleRefresh(prev => !prev)
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', onScroll)
        return () => window.removeEventListener('scroll', onScroll)
    }, [cards])

    return (
        <>
            {modalOpen && <Modal setOpenModal={setModalOpen} modalContent={modalContent} />}
            <div className="contentContainer">
                <h3>Gallery</h3>
                {cards ? <GalleryContainer galleryContent={cards} setModalOpen={setModalOpen} setModalContent={setModalContent} loading={loading}/> : <PlaceholderContainer numberOfCards={NUMBER_OF_CARDS} />}
            </div>
        </>
    )
}

export default Gallery