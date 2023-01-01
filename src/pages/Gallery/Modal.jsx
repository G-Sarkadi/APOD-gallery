import React, { useContext } from "react";
import ReactDom from 'react-dom'
import Credits from "../../components/Credits";
import { ModalContext } from "./Gallery";
import FormatedDate from "../../components/FormatedDate";
import ModalImage from "./ModalImage";

function Modal() {
    const { modalContent, setModalContent } = useContext(ModalContext);

    return ReactDom.createPortal(
        <div className="modalBackground" onClick={() => setModalContent({})}>
            <div className="modalContainer" onClick={e => e.stopPropagation()}>
                <div className="modalHeader">
                    {/* Empty placeholder div, to force the title to the center and the X button to the corner */}
                    <div></div>
                    <h3>{modalContent.title}</h3>
                    <button className="closingXButton"
                        onClick={() => setModalContent({})}>
                        X
                    </button>
                </div>
                <div className="modalContent">
                    <div className="body">
                        <ModalImage content={modalContent} />
                        <FormatedDate date={modalContent.date} />
                        <Credits content={modalContent} />
                        <p className="modalText">{modalContent.explanation}</p>
                    </div>
                    <div className="footer">
                        <button className="navBtn"
                            onClick={() => setModalContent({})}>
                            Close
                        </button>
                    </div>
                </div>
            </div>
        </div>,
        document.getElementById("portal")
    );
}

export default Modal;