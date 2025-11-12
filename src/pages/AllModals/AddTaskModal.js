import React, { useState } from "react";
import { Row, Col, Modal } from "reactstrap";
import { checklistAssignedTableData, checklistTimingTableData, checklistOptionsTableData } from "AllDummyData/DealsDummyData";
import Select from "react-select"

const AddTaskModal = ({ isOpen, toggle, formTask }) => {
    const [type, setType] = useState("Task");

    return (
        <Modal size="lg" isOpen={isOpen} toggle={toggle} style={{ maxWidth: "600px" }} className="custom-modal">
            <div className="modal-header d-block">
                <h4 className="modal-title fw-bold mb-1">{formTask ? "Add Task" : "Add Checklist Step"}</h4>
                <h6 className="modal-subtitle text-muted">Fill in the details for this {formTask ? "Task" : "Checklist Step"}</h6>
                <button type="button" onClick={toggle} className="close" data-dismiss="modal" aria-label="Close" >
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div className="modal-body">
                <Row className="mt-2 mb-2">
                    <Col>
                        <label>{formTask ? "Task Name" : "Checklist Name"}</label>
                        <input name="checklist_name" className="form-control" type="text" placeholder="e.g, Send Initial Welcome Email" />
                    </Col>
                </Row>

                <Row className="mt-3">
                    <Col>
                        <div>
                            <label className="d-block mb-2">Type </label>
                            <div className="form-check form-check-inline">
                                <input type="radio" id="customRadioInline1" name="customRadioInline1" className="form-check-input" value="Task" checked={type === "Task"}
                                    onChange={() => setType("Task")} />
                                <label className="form-radio-outline" htmlFor="customRadioInline1" style={{ cursor: "pointer" }} > Task </label>
                            </div>
                            &nbsp;
                            <div className="form-check form-check-inline">
                                <input type="radio" id="customRadioInline2" name="customRadioInline1" className="form-check-input" value="Email" checked={type === "Email"}
                                    onChange={() => setType("Email")} />
                                <label className="form-radio-outline" htmlFor="customRadioInline2" style={{ cursor: "pointer" }} > Email </label>
                            </div>
                        </div>
                    </Col>
                </Row>

                <Row className="align-items-end mb-3">
                    <Col md="4">
                        <div className="mb-3">
                            <label htmlFor="number_of_days" className="form-label">  Number of Days </label>
                            <input id="number_of_days" name="number_of_days" type="number" min="0" defaultValue={0} className="form-control" placeholder="Enter number of days" />
                        </div>
                    </Col>

                    <Col md="4">
                        <div className="mb-3">
                            <label htmlFor="timing" className="form-label"> Timing </label>
                            <Select id="timing" name="timing" isClearable classNamePrefix="select" options={checklistTimingTableData} defaultValue={checklistTimingTableData?.[0]}
                                placeholder="Select timing" onChange={(selectedOption) => console.log("Timing:", selectedOption)} />
                        </div>
                    </Col>

                    <Col md="4">
                        <div className="mb-3">
                            <label htmlFor="checklist" className="form-label"> Checklist </label>
                            <Select id="checklist" name="checklist" isClearable classNamePrefix="select" options={checklistOptionsTableData} defaultValue={checklistOptionsTableData?.[0]} placeholder="Select checklist" onChange={(selectedOption) => console.log("Checklist:", selectedOption)} />
                        </div>
                    </Col>
                </Row>

                <Row className="mt-3 mb-2">
                    <Col>
                        <label>Assigned To</label>
                        <Select name="assigned_to" isClearable={true} options={checklistAssignedTableData} defaultValue={checklistAssignedTableData[0]}
                            onChange={(selectedOption) => console.log("Selected:", selectedOption)} />
                    </Col>
                </Row>
                <Row className="mt-3 mb-2">
                    <Col>
                        <label>Note</label>
                        <textarea rows="4" name="note" className="form-control" placeholder="Enter any notes or instructions for this step..." />
                    </Col>
                </Row>
                {type === "Email" && (
                    <>
                        <hr />
                        <Row className="mb-2">
                            <div className="mb-2">
                                <h5 className="fw-bold mb-1">Email Details</h5>
                                <Col className="mt-3">
                                    <label>Subject Line</label>
                                    <input name="subject_line" className="form-control" placeholder="Email Subject Line" />
                                </Col>
                            </div>
                        </Row>

                    </>)}

                <Row>
                    <Col>
                        <div className="d-flex justify-content-end mt-3 gap-2">
                            <button type="button" className="btn btn-danger d-flex align-items-center" onClick={toggle} >
                                <i className="mdi mdi-close me-1" /> Close
                            </button>
                            <button type="button" className="btn btn-primary d-flex align-items-center" >
                                <i className="mdi mdi-plus me-1" /> Save {formTask ? "Task" : "Step"}
                            </button>
                        </div>

                    </Col>
                </Row>
            </div>
        </Modal>
    )
}

export default AddTaskModal;