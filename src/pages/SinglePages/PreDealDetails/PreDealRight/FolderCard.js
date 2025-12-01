import React, { useState, useEffect } from "react";
import { Row, Col, Card, Collapse, Input, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem } from "reactstrap";
import AllButton, { AddPlusCircleButton, UploadButton } from "pages/utils/allButton";
import { preDealsFolderHeaderOptions, preDealsFoldersOptions } from "AllDummyData/PreDealDummyData";
import { EllipsisVDropdown, DropExample } from "pages/utils/filterDropdown";
import classnames from "classnames"
import AddDocumentModal from "pages/AllModals/AddDocumentModal";

const FolderCard = ({ folder, index, selectedDocs, handleFolderCheckbox, handleDocCheckbox }) => {
    const allDocsChecked = folder.documents.every((_, i) => selectedDocs[`${index}-${i}`]);
    const [openFolders, setOpenFolders] = useState(true)
    const [selected, setSelected] = useState("rename");
    const [selectedOption, setSelectedOption] = useState("open");
    const [docModalOpen, setDocModalOpen] = useState(false);

    const newToggleFolder = () => {
        setOpenFolders(!openFolders)
    }

    return (
        <>
            <Card className="accordion" id="accordion">
                <div className="accordion-item">
                    <div className={classnames("accordion-button accordion-header", { collapsed: !openFolders })} onClick={newToggleFolder}
                        style={{ cursor: "pointer" }}>
                        <Input type="checkbox" checked={allDocsChecked}
                            onChange={() => handleFolderCheckbox(index, folder.documents)}
                            className="me-3 mb-2" style={{ width: "30px", height: "20px", cursor: "pointer" }}
                        />
                        <div className="w-100 me-3 d-flex justify-content-between align-items-center">
                            <h2 style={{ fontSize: "18px", fontWeight: "bold", margin: 0 }} >{folder.folderName} </h2>
                        </div>

                        <div className="d-flex gap-2 me-3" onClick={(e) => e.stopPropagation()} >
                            <AddPlusCircleButton label="Add Form" onClick={(e) => { console.log("Button 1 Clicked") }} />
                            <UploadButton label="Upload Document" width="180px" onClick={(e) => { e.stopPropagation(); setDocModalOpen(true) }} />
                            {/* <div className="d-flex justify-content-center">
                                <UncontrolledDropdown
                                    className="me-2"
                                    direction="up"
                                >
                                    <DropdownToggle
                                        caret
                                        color="primary"
                                    >
                                        Dropup
                                    </DropdownToggle>
                                    <DropdownMenu>
                                        <DropdownItem header>
                                            Header
                                        </DropdownItem>
                                        <DropdownItem disabled>
                                            Action
                                        </DropdownItem>
                                        <DropdownItem>
                                            Another Action
                                        </DropdownItem>
                                        <DropdownItem divider />
                                        <DropdownItem>
                                            Another Action
                                        </DropdownItem>
                                    </DropdownMenu>
                                </UncontrolledDropdown>
                                <UncontrolledDropdown
                                    className="me-2"
                                    direction="down"
                                >
                                    <DropdownToggle
                                        caret
                                        color="primary"
                                    >
                                        Dropdown
                                    </DropdownToggle>
                                    <DropdownMenu>
                                        <DropdownItem header>
                                            Header
                                        </DropdownItem>
                                        <DropdownItem disabled>
                                            Action
                                        </DropdownItem>
                                        <DropdownItem>
                                            Another Action
                                        </DropdownItem>
                                        <DropdownItem divider />
                                        <DropdownItem>
                                            Another Action
                                        </DropdownItem>
                                    </DropdownMenu>
                                </UncontrolledDropdown>
                                <UncontrolledDropdown
                                    className="me-2"
                                    direction="end"
                                >
                                    <DropdownToggle
                                        caret
                                        color="primary"
                                    >
                                        Dropend
                                    </DropdownToggle>
                                    <DropdownMenu>
                                        <DropdownItem header>
                                            Header
                                        </DropdownItem>
                                        <DropdownItem disabled>
                                            Action
                                        </DropdownItem>
                                        <DropdownItem>
                                            Another Action
                                        </DropdownItem>
                                        <DropdownItem divider />
                                        <DropdownItem>
                                            Another Action
                                        </DropdownItem>
                                    </DropdownMenu>
                                </UncontrolledDropdown>
                                <UncontrolledDropdown
                                    className="me-2"
                                    direction="right"
                                >
                                    <DropdownToggle
                                        caret
                                        color="primary"
                                    >
                                        Dropstart
                                    </DropdownToggle>
                                    <DropdownMenu>
                                        <DropdownItem header>
                                            Header
                                        </DropdownItem>
                                        <DropdownItem disabled>
                                            Action
                                        </DropdownItem>
                                        <DropdownItem>
                                            Another Action
                                        </DropdownItem>
                                        <DropdownItem divider />
                                        <DropdownItem>
                                            Another Action
                                        </DropdownItem>
                                    </DropdownMenu>
                                </UncontrolledDropdown>
                            </div> */}

                            <DropExample />
                        </div>
                    </div>

                    <Collapse isOpen={openFolders} className="accordion-collapse">
                        <div className="p-3">
                            {folder.documents.length > 0 ? (
                                folder.documents.map((doc, i) => (
                                    <Row key={i} className="align-items-center py-2" style={{ borderBottom: "1px solid #dad3deff" }}>
                                        <Col xs="auto">
                                            <Input type="checkbox" checked={!!selectedDocs[`${index}-${i}`]} onChange={() => handleDocCheckbox(index, i)} />
                                        </Col>
                                        <Col>
                                            <p className="text-primary fw-bold mb-0">{doc.title}</p>
                                        </Col>
                                        <Col xs="auto">
                                            {doc.status === "Signed" ? (
                                                <AllButton label="Signed" color="success" width="160px" borderless={true} onClick={() => console.log("Click")} />
                                            ) : (
                                                <AllButton label="Request Signature" color="info" width="160px" borderless={true} onClick={() => console.log("Click")}
                                                />
                                            )}
                                        </Col>
                                        <Col xs="auto">
                                            {/* <EllipsisVDropdown width="30px" dropdownFilterOptions={preDealsFoldersOptions}
                                                selectedOption={selectedOption} setSelectedOption={setSelectedOption} isVertical={false}
                                                style={{ position: "absolute", left: "-140px", border: "1px solid #353435ff", borderRadius: "12px" }} /> */}
                                        </Col>
                                    </Row>
                                ))
                            ) : (
                                <p className="text-muted p-2 mb-0">No documents found</p>
                            )}
                        </div>
                    </Collapse>
                </div>
            </Card>

            <AddDocumentModal isOpen={docModalOpen} toggle={() => setDocModalOpen(!docModalOpen)} />
        </>
    );
};

export default FolderCard;
