import React, { useState } from "react";
import { Row, Col, Modal } from "reactstrap";
import { showSuccessAlert, showErrorAlert } from "pages/utils/Alerts/alertMessages";
import { BigDropzone } from "helpers/Dropzone";

const AddDocumentModal = ({ isOpen, toggle }) => {
    const [formData, setFormData] = useState({ files: '' });

    const handleFilesData = (files) => {
        setFormData(p => ({ ...p, files: files }));
    }

    const handleSubmit = () => {
        if (formData.files && formData.files.length > 0) {
            console.log("Uploaded Documents:");
            formData.files.forEach((file) => {
                console.log(`${file.name}`);
            });
            showSuccessAlert("Files successfully uploaded!");
            toggle();
        } else {
            showErrorAlert("No files uploaded.");
        }
    };
    return (
        <Modal size="lg" style={{ marginTop: "233px" }} isOpen={isOpen} toggle={toggle} className="custom-modal" >
            <div className="modal-header d-block" >
                <h5 className="modal-title fw-bold mb-1">Add Document</h5>
                <button type="button" onClick={toggle} className="close" data-dismiss="modal" aria-label="Close" >
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div className="modal-body">
                <Row>
                    <Col>
                        <div className="mb-2">
                            <BigDropzone callback={handleFilesData} />
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <div className="d-flex justify-content-end mt-3 gap-2">
                            <button type="button" className="btn btn-danger d-flex align-items-center" onClick={toggle} >
                                <i className="mdi mdi-close me-1" /> Close
                            </button>
                            <button type="button" className="btn btn-primary d-flex align-items-center" onClick={handleSubmit}>
                                <i className="mdi mdi-plus me-1" /> Submit
                            </button>
                        </div>
                    </Col>
                </Row>
            </div>
        </Modal>
    )
}

export default AddDocumentModal;
