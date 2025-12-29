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
                <Col className="d-flex justify-content-between align-items-center"
                    style={{ borderRadius: "12px", padding: "5px", backgroundColor: "#ece4f1", gap: "5px" }}>
                    <Nav pills>
                        {
                            dealsDocumentsTabs.map((tab) => (
                                <NavItem key={tab.id}>
                                    <NavLink
                                        style={{
                                            // border: "1px solid #d1cbd5ff",
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
                    <AddPlusCircleButton width="36px" borderless onClick={() => console.log("clicked")} iconMarginRight="0px" />
                </Col>
                <Col md={7} className="d-flex justify-content-end align-item-end">
                    <Searchbar style={{ width: "300px", height: "36px" }} />
                    <AddPlusCircleButton label="Add Document" width="150px" height="36px" borderless onClick={(e) => { e.stopPropagation(); setDocModalOpen(true) }} className="ms-2" />
                    <AllButton label="Archive" width="100px" height="36px" borderless onClick={clearSelection} className="ms-2" />
                </Col>
            </Row >

            <TabContent activeTab={docTags} className="p-2 text-muted">
                <TabPane tabId={1}>
                    {selectedDocs.length > 0 && <DocButtons />}
                    <Row className="align-items-center py-3 px-2" style={{ border: "1px solid #e6dff0", borderRadius: "8px", background: "#faf7fd" }}>
                        <Col md={4} className="d-flex align-items-center gap-3">
                            <Input type="checkbox" className="mb-1 fs-4" checked={selectedDocs.length === foldersRows.length && foldersRows.length > 0}
                                onChange={() => setSelectedDocs(selectedDocs.length === foldersRows.length ? [] : foldersRows.map((_, i) => i))}
                            />
                            <span className="fw-semibold text-muted">File Name</span>
                        </Col>
                        <Col md={2}>
                            <span className="fw-semibold text-muted">Added By</span>
                        </Col>
                        <Col md={2}>
                            <span className="fw-semibold text-muted">Time & Date</span>
                        </Col>
                        <Col md={2}>
                            <span className="fw-semibold text-muted">Signature Status</span>
                        </Col>
                        <Col md={1}>
                            <span className="fw-semibold text-muted">Download</span>
                        </Col>
                        <Col md={1} className="text-end">
                            <span className="fw-semibold text-muted">Actions</span>
                        </Col>
                    </Row>

                    {foldersRows.map((folder, index) => (
                        <Row key={index} className="align-items-center py-3 px-2"
                            style={{ border: "1px solid #e6dff0", borderRadius: "8px", background: "#fff", }} >
                            <Col md={4} className="d-flex align-items-center gap-3">
                                <Input type="checkbox" className="mb-1" checked={selectedDocs.includes(index)} onChange={() => handleCheckboxChange(index)} />
                                <p className="mb-0 fw-semibold text-dark"> {folder.title} </p>
                            </Col>
                            <Col md={2} className="d-flex align-items-center gap-2">
                                <div
                                    style={{
                                        width: 28, height: 28, borderRadius: "50%", background: "#ddd", display: "flex", alignItems: "center",
                                        justifyContent: "center", fontSize: 12, color: "#555",
                                    }}
                                >
                                    {folder.added_by?.charAt(0)}
                                </div>
                                <span className="fw-medium text-dark"> {folder.added_by} </span>
                            </Col>
                            <Col md={2}>
                                <p className="mb-0 fw-medium text-dark">{folder.date}</p>
                                <small className="text-muted">{folder.time}</small>
                            </Col>
                            <Col md={2}>
                                {folder.sing_status === "Signed" ? (
                                    <span className="px-3 py-1 fw-semibold"
                                        style={{ background: "#e7fbee", color: "#1f9254", borderRadius: "8px", display: "inline-block", }} >
                                        Signed
                                    </span>
                                ) : (
                                    <span className="px-3 py-1 fw-semibold"
                                        style={{ background: "#e8f1ff", color: "#2f6fed", borderRadius: "8px", display: "inline-block", }} >
                                        Signature Requested
                                    </span>
                                )}
                            </Col>
                            <Col md={1}>
                                <AllButton label="Download" outline={false} width="110px" />
                            </Col>
                            <Col md={1} className="text-end">
                                <OptionsDropdown options={DealsFoldersOptions} onSelect={handleFolderAction} leftMargin="-85px" />
                            </Col>
                        </Row>
                    ))}
                </TabPane>

            </TabContent >

            <AddDocumentModal isOpen={docModalOpen} toggle={() => setDocModalOpen(!docModalOpen)} />
        </>
    )
}

export default DocumentsTab;