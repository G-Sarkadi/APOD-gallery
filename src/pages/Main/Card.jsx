import FormatedDate from "../../components/FormatedDate";
import Credits from "../../components/Credits";
import MainImage from "../../components/MainImage";

const Card = ({ selectedDate, starData }) => {

    return (
        <div className="mainCard">
            <h3 className="imageTitle">
                {starData.title}
            </h3>
            <MainImage starData={starData} className={"mainImage"} />
            <FormatedDate date={selectedDate} />
            <Credits starData={starData} />
            <p className="mainText">
                {starData.explanation}
            </p>
        </div>
    )
}

export default Card