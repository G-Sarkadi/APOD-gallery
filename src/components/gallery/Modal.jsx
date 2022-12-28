import React from "react";
import FormatedDate from "../FormatedDate";
import Picture from "../main/CardPicture";
import ReactDom from 'react-dom'
import Credits from "../Credits";

function Modal({ setOpenModal, modalContent }) {
    return ReactDom.createPortal(
        <div className="modalBackground" onClick={() => setOpenModal(false)}>
            <div className="modalContainer" onClick={e => e.stopPropagation()}>
                <div className="modalHeader">
                    {/* Empty placeholder div, to force the title to the center and the X button to the corner */}
                    <div></div>
                    <h3>
                        {modalContent.title}
                    </h3>
                    <button className="closingXButton"
                        onClick={() => {
                            setOpenModal(false);
                        }}
                    >
                        X
                    </button>
                </div>
                <div className="modalContent">
                    <div className="body">
                        <Picture starData={modalContent} className={"modalPicture"} />
                        <FormatedDate date={modalContent.date} />
                        <Credits starData={modalContent} />
                        <p className="modalText">{modalContent.explanation}</p>
                    </div>
                    <div className="footer">
                        <button className="navBtn" onClick={() => { setOpenModal(false) }}>
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