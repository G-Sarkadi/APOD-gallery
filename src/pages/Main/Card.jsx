import FormatedDate from "../../components/FormatedDate";
import Credits from "../../components/Credits";
import MainImage from "./MainImage";

const Card = ({ selectedDate, content }) => {

    return (
        <div className="mainCard">
            <h3 className="imageTitle">
                {content.title}
            </h3>
            <MainImage content={content} />
            <FormatedDate date={selectedDate} />
            <Credits content={content} />
            <p className="mainText">
                {content.explanation}
            </p>
        </div>
    )
}

export default Card