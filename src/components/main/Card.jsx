import { useEffect } from "react"
import FormatedDate from "../FormatedDate";
import Credits from "../Credits";
import Picture from "./CardPicture";

const Card = ({ selectedDate, starData, setStarData }) => {

    return (
        <div className="mainCard">
            <h3 className="pictureTitle">
                {starData.title}
            </h3>
            <Picture starData={starData} className={"mainPicture"} />
            <FormatedDate date={selectedDate} />
            <Credits starData={starData} />
            <p className="mainText">
                {starData.explanation}
            </p>
        </div>
    )
}

export default Card