import { useState } from "react";
import Spinner from "../../components/Spinner";


const MainImage = ({ content }) => {
    const [imageClassName, setImageClassName] = useState("mainImage loading");
    const [loading, setLoading] = useState(true);

    const openInNewTab = (url) => {
        window.open(url, '_blank', 'noopener,noreferrer');
    };

    function showProperTypeOfMedia() {
        if (content.media_type === "video") {
            return <iframe src={content.url} title={content.title} className="video"></iframe>
        }
        if (content.media_type === "image") {
            return (
                <>
                    {loading && <div><Spinner /></div>}
                    <button className="imageButton" onClick={() => openInNewTab(content.hdurl ?? content.url)}>
                        <img src={content.url}
                            alt={content.title}
                            className={imageClassName}
                            onLoad={() => {
                                setLoading(false);
                                setImageClassName("mainImage");
                            }} />
                    </button>
                </>
            )
        }
        return <div>Incorrect data</div>
    }

    return (
        <>
            {showProperTypeOfMedia()}
        </>
    )
}

export default MainImage