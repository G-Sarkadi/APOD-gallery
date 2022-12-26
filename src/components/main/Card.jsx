import FormatedDate from "../FormatedDate";
import Credits from "../Credits";
import CardPicture from "./CardPicture";

const Card = ({ selectedDate, starData }) => {

    return (
        <div className="mainCard">
            <h3 className="pictureTitle">
                {starData.title}
            </h3>
            <CardPicture starData={starData} className={"mainPicture"} />
            <FormatedDate date={selectedDate} />
            <Credits starData={starData} />
            <p className="mainText">
                {starData.explanation}
            </p>
        </div>
    )
}

export default Card