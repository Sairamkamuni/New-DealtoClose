import React, { useState } from "react";
import { Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap"
import AllButton, { FaTelegramButton } from "pages/utils/allButton";

// Import Editor
import { Editor } from "react-draft-wysiwyg"
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css"

const EmailCompose = ({ isOpen, toggle }) => {

    return (
        <Modal isOpen={isOpen} role="dialog" autoFocus={true} centered={true} className="exampleModal" tabIndex="-1" toggle={toggle} >
            <div className="modal-content">
                <ModalHeader toggle={toggle} > New Message </ModalHeader>
                <ModalBody>
                    <form>
                        <div className="mb-3">
                            <input type="email" className="form-control" placeholder="To" />
                        </div>

                        <div className="mb-3">
                            <input type="text" className="form-control" placeholder="Subject" />
                        </div>
                        <Editor toolbarClassName="toolbarClassName" wrapperClassName="wrapperClassName" editorClassName="editorClassName" />
                    </form>
                </ModalBody>
                <ModalFooter>
                    <AllButton label="Close" width={80} outline={false} color="danger" onClick={toggle} />
                    <FaTelegramButton width={80} label="Send" outline={false} color="primary" onClick={() => console.log("Button Click")} />
                </ModalFooter>
            </div>
        </Modal >
    );
};

export default EmailCompose;
