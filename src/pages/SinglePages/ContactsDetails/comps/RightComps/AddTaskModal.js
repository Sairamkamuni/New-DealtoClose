import React, { useState } from "react";
import { Modal, Row, Col } from "reactstrap";
import AllButton, { FaPlusButton } from "pages/utils/allButton";

const AddTaskModal = ({ isOpen, toggle, onSave }) => {
    const [taskText, setTaskText] = useState("");
    const [addedBy, setAddedBy] = useState("");

    const handleSave = () => {
        if (taskText.trim()) {
            onSave(taskText, addedBy || "Raj"); // default if empty
            setTaskText("");
            setAddedBy("");
            toggle();
        }
    };

    return (
        <Modal isOpen={isOpen} toggle={toggle}>
            <div className="modal-header d-block">
                <h4 className="modal-title fw-bold mb-1">Add Task</h4>
                <button type="button" onClick={toggle} className="close" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div className="modal-body">
                <Row>
                    <Col>
                        <div className="mb-2">
                            <input type="text" className="form-control" placeholder="Task description" value={taskText} onChange={(e) => setTaskText(e.target.value)} />
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col className="mt-2">
                        <input type="text" className="form-control" placeholder="Added by" value={addedBy} onChange={(e) => setAddedBy(e.target.value)} />
                    </Col>
                </Row>

                <Row>
                    <Col>
                        <div className="modal-footer mt-2">
                            <AllButton onClick={toggle} label="Cancel" color="danger" width="80px" outline={false} />
                            <FaPlusButton onClick={handleSave} label="Save" width="80px" outline={false} />
                        </div>
                    </Col>
                </Row>
            </div>
        </Modal>
    );
};

export default AddTaskModal;
