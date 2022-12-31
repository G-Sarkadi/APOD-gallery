import { useState } from "react";
import Spinner from "../../components/Spinner";

const MainImage = ({ content }) => {
    const [loading, setLoading] = useState(true);

    const openInNewTab = (url) => {
        window.open(url, '_blank', 'noopener,noreferrer');
    };

    function showProperTypeOfMedia() {
        switch (content.media_type) {
            case "video":
                return <iframe src={content.url} title={content.title} className="video"></iframe>
            case "image":
                return (
                    <>
                        {loading && <div><Spinner /></div>}
                        <button className="imageButton" onClick={() => openInNewTab(content.hdurl || content.url)}>
                            <img src={content.url}
                                alt={content.title}
                                className={loading ? "mainImage loading" : "mainImage"}
                                onLoad={() => setLoading(false)} />
                        </button>
                    </>)
            default:
                return <div>Incorrect data</div>
        }
    }

    return (
        <>
            {showProperTypeOfMedia()}
        </>
    )
}

export default MainImage