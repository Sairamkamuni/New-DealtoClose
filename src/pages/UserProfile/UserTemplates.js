import React, { useState } from "react";
import MetaTags from "react-meta-tags";
import { Container, Row, Col, Card, CardBody, Modal } from "reactstrap";
import { AddPlusCircleButton, FaFileAltButton } from "pages/utils/allButton";
import Searchbar from "pages/utils/search_bar";
import Select from "react-select"
import { checklistTemplateOptionsFOR, checklistTemplateOptionsSTAGE, templateTableData } from "AllDummyData/UserProfileDummyData";
import Datatables from "pages/table/datatable";
import { UserTemplateTableColumns } from "pages/TableColumns/UserProfileTableColumns";

const UserTemplates = () => {
    const [modalOpen, setModalOpen] = useState(false)

    const toggleModal = () => {
        setModalOpen(prev => !prev);
    };

    return (
        <React.Fragment>
            <div className="page-content">
                <MetaTags>
                    <title>Templates | {process.env.REACT_APP_TITLE}</title>
                </MetaTags>
                <Container fluid>
                    <Row className="d-flex align-items-center justify-content-between">
                        <Col>
                            <h3 className="fw-bolder">Your Checklist Templates</h3>
                        </Col>
                        <Col md={3} className="d-flex justify-content-end gap-2">
                            <FaFileAltButton label="Universal Templates" width="180px" onClick={() => console.log("Button Clicked")} />
                            <AddPlusCircleButton label="Add Template" width="150px" outline={false} onClick={toggleModal} />
                        </Col>
                    </Row>

                    <Card className="mt-4" style={{ border: "1px solid #dad1e0", borderRadius: "12px" }}>
                        <CardBody>
                            <Row>
                                <Col>
                                    <div className="d-flex mb-0 gap-2">
                                        <i className="mdi mdi-format-list-checks" style={{ fontSize: "2rem", color: "#243d78" }} />
                                        <div className="mt-1">
                                            <h3 className="mb-0 fw-bold">Your Checklist Templates</h3>
                                            <p className="mb-0"> Manage your custom checklist templates. </p>
                                        </div>
                                    </div>
                                </Col>
                            </Row>

                            <Row className="mt-4">
                                <Col md={5}>
                                    <Searchbar />
                                </Col>
                            </Row>

                            <Row>
                                <Col style={{ border: "1px solid #dad1e0", borderRadius: "10px", marginTop: "15px" }}>
                                    <Datatables
                                        columns={UserTemplateTableColumns()}
                                        showTableOnly={true}
                                        rows={templateTableData}
                                        keyField={"id"}
                                        loading={false}
                                        ssr={() => { }}
                                    />
                                </Col>
                            </Row>
                        </CardBody>
                    </Card>

                </Container>

                <Modal style={{ maxWidth: "500px" }} isOpen={modalOpen} toggle={toggleModal} className="custom-modal">
                    <div className="modal-header d-block">
                        <h4 className="modal-title fw-bold mb-1">Add New Checklist Template</h4>
                        <h6 className="modal-subtitle text-muted">Create a new template to streamline your workflow.</h6>
                        <button type="button" onClick={() => setModalOpen(false)} className="close" data-dismiss="modal" aria-label="Close" >
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        <Row className="mb-3">
                            <Col>
                                <div className="mt-2">
                                    <label>New Checklist Template Title</label>
                                    <input type="text" name="new_checklist_template" className="form-control" />
                                </div>
                            </Col>
                        </Row>
                        <Row className="mb-3">
                            <Col>
                                <div className="">
                                    <label>For</label>
                                    <Select name="template_for" isClearable={true} className="basic-single" classNamePrefix="select"
                                        options={checklistTemplateOptionsFOR} />
                                </div>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <div className="">
                                    <label>Stage</label>
                                    <Select name="template_stage" isClearable={true} className="basic-single" classNamePrefix="select"
                                        options={checklistTemplateOptionsSTAGE} />
                                </div>
                            </Col>
                        </Row>

                        <Row>
                            <Col>
                                <div className="d-flex justify-content-end mt-3 gap-2">
                                    <button type="button" className="btn btn-danger d-flex align-items-center" onClick={toggleModal} >
                                        <i className="mdi mdi-close me-1" /> Close
                                    </button>
                                    <button type="button" className="btn btn-primary d-flex align-items-center" >
                                        <i className="mdi mdi-plus me-1" /> Add Contact
                                    </button>
                                </div>

                            </Col>
                        </Row>
                    </div>
                </Modal>
            </div>
        </React.Fragment>
    )
};

export default UserTemplates;