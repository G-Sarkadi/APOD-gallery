import React from "react";
import FormatedDate from "../FormatedDate";
import "./Modal.css";
import Picture from "../Picture";
import ReactDom from 'react-dom'

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
                    <p>
                        <FormatedDate date={modalContent.date} />
                    </p>
                </div>
                <div className="body">
                    <Picture starData={modalContent} className={"starPicture"} />
                    <p className="explanation">{modalContent.explanation}</p>
                </div>
                <div className="footer">
                    <button
                        onClick={() => {
                            setOpenModal(false);
                        }}
                        id="cancelBtn"
                    >
                        Close
                    </button>
                </div>
            </div>
        </div>,
        document.getElementById("portal")
    );
}

export default Modal;