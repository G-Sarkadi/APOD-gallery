import { useEffect, useState } from "react"
import GalleryContainer from "./GalleryContainer"
import LoadingPlaceholder from "../LoadingPlaceholder"
import NavButton from "../NavButton"
import Modal from "./Modal"

const Gallery = () => {
    const [cards, setCards] = useState();
    const [modalOpen, setModalOpen] = useState(false);
    const [modalContent, setModalContent] = useState({});
    const [toggleRefresh, setToggleRefresh] = useState(false)

    const numberOfCards = 20;
    const URL = `/api?count=${numberOfCards}&thumbs=true`

    useEffect(() => {
        const controller = new AbortController();
        const signal = controller.signal;

        async function fetchData() {
            const res = await fetch(URL, { signal: signal })
            const data = await res.json()
            setCards(data)
        }

        fetchData()
            .catch(console.error);

        return () => {
            // cancel the request before component unmounts
            controller.abort();
        };
    }, [URL, toggleRefresh]);

    document.title = 'Picture Gallery'

    return (
        <>
            {modalOpen && <Modal setOpenModal={setModalOpen} modalContent={modalContent} />}
            <div className="container">
                <h1>Gallery</h1>
                {cards ? <GalleryContainer galleryContent={cards} setModalOpen={setModalOpen} setModalContent={setModalContent} /> : <LoadingPlaceholder />}
                <NavButton text="Home" route="/" />
                <button className="btn" onClick={()=> {setToggleRefresh(prev => !prev)}}>More random pictures</button>
                <NavButton text="About" route="/about"/>
            </div>
        </>
    )
}

export default Gallery