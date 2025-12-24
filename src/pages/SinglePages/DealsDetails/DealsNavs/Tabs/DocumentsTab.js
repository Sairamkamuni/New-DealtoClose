import React, { useState } from "react";
import { Row, Col, Nav, NavItem, NavLink, TabContent, TabPane, Input } from "reactstrap";
import classnames from "classnames";
import AllButton, { AddPlusCircleButton, } from "pages/utils/allButton";
import Searchbar from "pages/utils/search_bar";
import AddDocumentModal from "pages/AllModals/AddDocumentModal";
import DocButtons from "./DocButtons";
import { OptionsDropdown } from "pages/utils/filterDropdown";

import { dealsDocumentsTabs, foldersRows, DealsFoldersOptions } from "AllDummyData/DealsDummyData";

const DocumentsTab = () => {
    const [docTags, setDocTags] = useState(1)
    const [docModalOpen, setDocModalOpen] = useState(false);
    const [selectedDocs, setSelectedDocs] = useState([]);

    const handleCheckboxChange = (index) => {
        setSelectedDocs((prev) =>
            prev.includes(index)
                ? prev.filter((i) => i !== index)
                : [...prev, index]
        );
    };

    const clearSelection = () => {
        setSelectedDocs([]);
    };

    const toggleDoc = (tab) => {
        if (docTags !== tab) setDocTags(tab);
    };

    const handleFolderAction = (item) => {
        console.log("Selected:", item);
    };


    return (
        <>
            <Row>
                <Col className="d-flex justify-content-between align-items-center" style={{ borderRadius: "12px", padding: "5px", backgroundColor: "#ece4f1", gap: "5px" }}>
                    <Nav pills>
                        {
                            dealsDocumentsTabs.map((tab) => (
                                <NavItem key={tab.id}>
                                    <NavLink
                                        style={{
                                            border: "1px solid #dad1e0",
                                            borderRadius: "6px", fontWeight: "500", color: docTags === tab.id ? "#fff" : "#000000ff",
                                            backgroundColor: docTags === tab.id ? "#7f5fbbff" : "transparent", transition: "all 0.3s ease",
                                        }}
                                        className={classnames({ active: docTags === tab.id })} onClick={() => toggleDoc(tab.id)} >
                                        <span className="d-none d-sm-block">{tab.label}</span>
                                    </NavLink>
                                </NavItem>
                            ))
                        }
                    </Nav>
                    <AddPlusCircleButton width="36px" borderless onClick={() => console.log("clicked")} className="ms-2" />
                </Col>
                <Col md={7} className="d-flex justify-content-end align-item-center">
                    <Searchbar style={{ width: "300px", height: "36px" }} />
                    <AddPlusCircleButton label="Add Document" width="150px" height="36px" borderless onClick={(e) => { e.stopPropagation(); setDocModalOpen(true) }} className="ms-2" />
                    <AllButton label="Archive" width="100px" height="36px" borderless onClick={clearSelection} className="ms-2" />
                </Col>
            </Row >

            <TabContent activeTab={docTags} className="p-2 text-muted">
                <TabPane tabId={1} >
                    {selectedDocs.length > 0 && <DocButtons />}

                    {foldersRows.map((folder, index) => (
                        <Row key={index} className="align-items-center py-2" style={{ borderBottom: "1px solid #dad3deff" }}>
                            <Col className="d-flex justify-content-between gap-2">
                                <Input type="checkbox" checked={selectedDocs.includes(index)} onChange={() => handleCheckboxChange(index)} />
                                <p className="text-primary fw-bold mb-0">{folder.title}</p>
                            </Col>
                            <Col>
                                <p className="text-primary fw-bold mb-0">{folder.added_by}</p>
                            </Col>
                            <Col>
                                <p className="text-primary fw-bold mb-0">{folder.time}</p>
                            </Col>
                            <Col>
                                {folder.sing_status === "Signed" ? (
                                    <AllButton label="Signed" color="success" outline={false} width="180px" onClick={() => console.log("Click")} />
                                ) : (
                                    <AllButton label="Signature Requested" color="info" width="180px" onClick={() => console.log("Click")} />
                                )}
                            </Col>
                            <Col>
                                <AllButton label="Download" outline={false} />
                            </Col>
                            <Col>
                                <OptionsDropdown options={DealsFoldersOptions} onSelect={handleFolderAction} />
                            </Col>
                        </Row>
                    ))}
                </TabPane>


            </TabContent>

            <AddDocumentModal isOpen={docModalOpen} toggle={() => setDocModalOpen(!docModalOpen)} />
        </>
    )
}

export default DocumentsTab;