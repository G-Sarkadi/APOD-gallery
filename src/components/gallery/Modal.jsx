import React from "react";
import FormatedDate from "../FormatedDate";
import Picture from "../main/CardPicture";
import ReactDom from 'react-dom'
import Credits from "../Credits";

function Modal({ setOpenModal, modalContent }) {
    return ReactDom.createPortal(
        <div className="modalBackground">
            <div className="modalContainer">
                <div className="titleCloseBtn">
                    <button
                        onClick={() => {
                            setOpenModal(false);
                        }}
                    >
                        X
                    </button>
                </div>
                <div className="title">
                    <h2>
                        {modalContent.title}
                    </h2>
                </div>
                <div className="body">
                    <Picture starData={modalContent} className={"modalPicture"} />
                    <FormatedDate date={modalContent.date} />
                    <Credits starData={modalContent} />
                    <p className="explanation">{modalContent.explanation}</p>
                </div>
                <div className="footer">
                    <button className="btn" onClick={() => { setOpenModal(false) }}>
                        Close
                    </button>
                </div>
            </div>
        </div>,
        document.getElementById("portal")
    );
}

export default Modal;