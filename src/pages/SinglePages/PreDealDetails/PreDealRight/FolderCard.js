import React, { useState } from "react";
import { Row, Col, Card, Collapse, Input } from "reactstrap";
import AllButton, { AddPlusCircleButton, UploadButton } from "pages/utils/allButton";
import { preDealsFolderHeaderOptions, preDealsFoldersOptions, folders } from "AllDummyData/PreDealDummyData";
import { OptionsDropdown, OptionsDropdownNew } from "pages/utils/filterDropdown";
import classnames from "classnames";
import AddDocumentModal from "pages/AllModals/AddDocumentModal";
import ActionButtons from "../ActionButtons";

const FolderCard = () => {
    const [openFolders, setOpenFolders] = useState(true);
    const [docModalOpen, setDocModalOpen] = useState(false);
    const [selectedDocs, setSelectedDocs] = useState([]);

    const toggleFolder = () => {
        setOpenFolders(!openFolders);
    }

    const handleFolderAction = (item) => {
        console.log("Selected:", item);
    };

    const handleFolderCheckboxChange = (folderIndex, documents) => {
        const folderId = `folder-${folderIndex}`;
        const docIds = documents.map((_, i) => `doc-${folderIndex}-${i}`);

        setSelectedDocs((prev) => {
            const isFolderSelected = prev.includes(folderId);
            if (isFolderSelected) {
                return prev.filter((id) => id !== folderId && !docIds.includes(id));
            } else { return [...new Set([...prev, folderId, ...docIds])]; }
        });
    };

    const handleCheckboxChange = (id) => {
        setSelectedDocs(prev =>
            prev.includes(id)
                ? prev.filter(item => item !== id)
                : [...prev, id]
        );
    };

    return (
        <>
            {selectedDocs.length > 0 && <ActionButtons />}

            {folders.map((item, index) => (
                <Card key={index} className="accordion mt-3" id="accordion">
                    <div className="accordion-item">
                        <div className={classnames("accordion-button accordion-header", { collapsed: !openFolders })} onClick={toggleFolder}
                            style={{ cursor: "pointer" }}>
                            <Input type="checkbox" className="me-3 mb-3 fs-4" checked={selectedDocs.includes(`folder-${index}`)} onClick={(e) => e.stopPropagation()}
                                onChange={() => handleFolderCheckboxChange(index, item.documents || [])}
                            />
                            <div className="w-100 me-3 d-flex justify-content-between align-items-center">
                                <h4 className="fw-bolder"> {item.folderName} </h4>
                            </div>

                            <div className="d-flex gap-2" onClick={(e) => e.stopPropagation()}>
                                <AddPlusCircleButton label="Add Form" />
                                <UploadButton label="Upload Document" width="180px" onClick={(e) => { e.stopPropagation(); setDocModalOpen(true) }} />
                                <OptionsDropdown options={preDealsFolderHeaderOptions} onSelect={handleFolderAction} />
                            </div>
                        </div>

                        <Collapse isOpen={openFolders} className="accordion-collapse">
                            <div className="accordion-body">
                                {item?.documents?.length > 0 ? (
                                    item.documents.map((doc, i) => (
                                        <Row key={i} className="align-items-center py-1" style={{ borderBottom: "1px solid #dad3deff" }} >
                                            <Col xs="auto">
                                                <Input type="checkbox" checked={selectedDocs.includes(`doc-${index}-${i}`)}
                                                    onChange={() => handleCheckboxChange(`doc-${index}-${i}`)} />
                                            </Col>
                                            <Col>
                                                <p className="fw-bold mb-0"> {doc.title} </p>
                                            </Col>
                                            <Col md="3">
                                                {doc.status === "Signed" ? (
                                                    <span className="px-3 py-1 fw-semibold"
                                                        style={{
                                                            background: "#e7fbee", color: "#1f9254", borderRadius: "8px",
                                                            display: "inline-block"
                                                        }} >
                                                        Signed
                                                    </span>
                                                ) : (
                                                    <span className="px-3 py-1 fw-semibold"
                                                        style={{
                                                            background: "#e8f1ff", color: "#2f6fed", borderRadius: "8px",
                                                            display: "inline-block"
                                                        }} >
                                                        Signature Requested
                                                    </span>
                                                )}
                                            </Col>
                                            <Col xs="auto">
                                                <OptionsDropdownNew options={preDealsFoldersOptions} onSelect={handleFolderAction} />
                                            </Col>
                                        </Row>
                                    ))
                                ) : (
                                    <p className="text-muted mb-0">No documents found</p>
                                )}
                            </div>
                        </Collapse>
                    </div>
                </Card>
            ))}

            <AddDocumentModal isOpen={docModalOpen} toggle={() => setDocModalOpen(!docModalOpen)} />
        </>
    );
};

export default FolderCard;
