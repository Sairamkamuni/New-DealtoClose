import React, { useState } from "react";
import { Row, Col, Modal } from "reactstrap";
import { showSuccessAlert, showErrorAlert } from "helpers/alert_helper";

const CreateFolder = ({ isOpen, toggle }) => {
    const [formData, setFormData] = useState({ folderName: "" });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = () => {
        if (!formData.folderName.trim()) {
            showErrorAlert("Please enter a folder name before adding!");
            return;
        }
        console.log("Created Folder:", formData);
        showSuccessAlert("Created Folder successfully!");
        toggle();
    }

    return (
        <Modal style={{ maxWidth: "600px" }} isOpen={isOpen} toggle={toggle} className="custom-modal">
            <div className="modal-header d-block">
                <h5 className="modal-title fw-bold mb-1">Create Folder</h5>
                <button type="button" onClick={toggle} className="close" data-dismiss="modal" aria-label="Close" >
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div className="modal-body">
                <Row className="mb-3">
                    <Col>
                        <div className="mb-2">
                            <label>Folder Name</label>
                            <input type="text" name="folderName" className="form-control" placeholder="Search/Create Folder..."
                                value={formData.folderName} onChange={handleChange} />
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
                                <i className="mdi mdi-plus me-1" /> Create Folder
                            </button>
                        </div>
                    </Col>
                </Row>
            </div>
        </Modal>
    )
}

export default CreateFolder;
