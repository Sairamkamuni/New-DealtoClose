import React, { useState } from "react";
import MetaTags from "react-meta-tags";
import { Container, Row, Col, Card, CardBody, Collapse, Modal } from "reactstrap";
import Select from "react-select";
import Datatables from "pages/table/datatable";
import {
    checklistTemplateOptionsFOR, checklistTemplateOptionsSTAGE, checklistTableData,
    UserActionRelativeTo, UserTimings, UserAgents, DocumentsData
} from "AllDummyData/UserProfileDummyData";
import classnames from "classnames"
import AddTaskModal from "pages/AllModals/AddTaskModal";
import { CustomUserTemplatesTableColumns, UserDocumentsTableColumns } from "pages/TableColumns/UserProfileTableColumns";
import AllButton, { AddPlusCircleButton, BackButton } from "pages/utils/allButton";

const CustomUserTemplates = () => {
    const [modalOpen, setModalOpen] = useState(false);
    const [rows, setRows] = useState(checklistTableData);
    const [openFolders, setOpenFolders] = useState(true);
    const [selectedActions, setSelectedActions] = useState({});

    const toggleFolder = () => {
        setOpenFolders(!openFolders)
    }

    const handleUserAction = (id, field, value) => {
        setRows(prev =>
            prev.map(row =>
                row.id === id ? { ...row, [field]: value } : row));
    };

    const handleInput = (id, field, value) => {
        setRows(prev =>
            prev.map(row =>
                row.id === id ? { ...row, [field]: value } : row
            )
        );
    };

    const callback = { handleUserAction, handleInput, edit: (row) => console.log("Editing row:", row) };

    return (
        <div className="page-content">
            <MetaTags>
                <title>Templates | My App</title>
            </MetaTags>

            <Container fluid>

                {/* HEADER */}
                <Row className="d-flex align-items-center justify-content-between">
                    <Col md={2}>
                        <BackButton to="/templates" label="Back to Templates" width="170px" />
                    </Col>

                    <Col className="text-center">
                        <h4 className="fw-bolder">My Custom Buyer Flow</h4>
                    </Col>

                    <Col md={2} className="d-flex justify-content-end">
                        <AddPlusCircleButton label="Save Template" width="160px" />
                    </Col>
                </Row>


                <Card style={{ border: "1px solid #dad1e0", borderRadius: "10px", marginTop: "15px" }}>
                    <CardBody>
                        <Row className="align-items-center mb-4">
                            <Col>
                                <h3 className="mb-1 fw-bold">Template Details</h3>
                                <p className="mb-0">Review and manage the settings for this template.</p>
                            </Col>
                        </Row>

                        <Row className="mb-2">
                            <Col>
                                <label>Template Title</label>
                                <input type="text" defaultValue="My Custom Buyer Flow" name="template_title" className="form-control" />
                            </Col>

                            <Col>
                                <label>Template For</label>
                                <Select name="template_for" isClearable={true} options={checklistTemplateOptionsFOR} defaultValue={checklistTemplateOptionsFOR[0]} />
                            </Col>

                            <Col>
                                <label>Template Stage</label>
                                <Select name="template_stage" isClearable={true} options={checklistTemplateOptionsSTAGE}
                                    defaultValue={checklistTemplateOptionsSTAGE[2]} />
                            </Col>
                        </Row>

                    </CardBody>
                </Card>

                <Card style={{ border: "1px solid #dad1e0", borderRadius: "10px" }}>
                    <CardBody>

                        <Row className="d-flex align-items-center justify-content-between">
                            <Col>
                                <h3 className="mb-1 fw-bold">Checklist Steps</h3>
                                <p className="mb-0">Manage the individual tasks and emails for this template.</p>
                            </Col>

                            <Col className="d-flex justify-content-end">
                                <AddPlusCircleButton label="Add Step" width="120px" onClick={(e) => { e.stopPropagation(); setModalOpen(true) }} />
                            </Col>
                        </Row>

                        <Row>
                            <Col style={{ border: "1px solid #dad1e0", borderRadius: "10px", marginTop: "15px" }}>
                                <Datatables
                                    columns={CustomUserTemplatesTableColumns(callback, UserActionRelativeTo, UserTimings, UserAgents)}
                                    showTableOnly={true}
                                    rows={rows}
                                    keyField={"id"}
                                    loading={false}
                                />
                            </Col>
                        </Row>

                    </CardBody>
                </Card>

                <Card style={{
                    border: "1px solid #dad1e0", borderTopLeftRadius: "10px",
                    borderTopRightRadius: "10px", borderBottomLeftRadius: "0px", borderBottomRightRadius: "0px"
                }}>
                    <CardBody>
                        <Row className="d-flex align-items-center justify-content-between">
                            <Col>
                                <h3 className="mb-1 fw-bold">Documents</h3>
                            </Col>
                            <Col md={2} className="d-flex justify-content-end">
                                <AddPlusCircleButton label="Add Folder" width="120px" />
                            </Col>
                        </Row>
                    </CardBody>
                </Card>

                <div className="accordion" id="folderAccordion">
                    <div className="accordion-item" style={{ border: "1px solid #dad1e0", overflow: "hidden", marginTop: "-25px" }}>
                        <div className={classnames("accordion-button accordion-header", { collapsed: !openFolders })}
                            onClick={toggleFolder}
                            style={{ cursor: "pointer", background: "#fff", borderBottom: openFolders ? "1px solid #dad1e0" : "none" }}
                        >
                            <Row className="w-100 d-flex justify-content-between align-items-center">
                                <Col>
                                    <h4 className="fw-bolder" style={{ margin: 0 }}> Folder 01 </h4>
                                </Col>
                                <Col className="d-flex justify-content-end gap-2">
                                    <AllButton label="Add Form" width="100px" />
                                    <AllButton label="Upload Documents" width="160px" />
                                </Col>
                            </Row>
                        </div>

                        {/* Collapse Body */}
                        <Collapse isOpen={openFolders} className="accordion-collapse">
                            <div className="accordion-body" style={{ padding: "15px" }}>
                                <Row>
                                    <Col >
                                        <Datatables
                                            columns={UserDocumentsTableColumns(selectedActions, setSelectedActions)}
                                            showTableOnly={true}
                                            rows={DocumentsData}
                                            keyField={"id"}
                                            loading={false}
                                        />
                                    </Col>
                                </Row>
                            </div>
                        </Collapse>
                    </div>
                </div>

                <AddTaskModal isOpen={modalOpen} toggle={() => setModalOpen(!modalOpen)} />

            </Container>
        </div>
    );
};

export default CustomUserTemplates;
