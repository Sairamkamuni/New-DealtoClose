import React, { useState } from "react";
import { Row, Col } from "reactstrap";
import { EmailButton, AddFolderButton, RegStickyNoteButton, HistoryButton } from "pages/utils/allButton";
import EmailCompose from "pages/AllModals/EmailCompose";
import AddTeamMember from "pages/AllModals/AddTeamMember";
import AddDocumentModal from "pages/AllModals/AddDocumentModal";

const CenterButtons = ({ onAddNote }) => {
    const [modalOpen, setModalOpen] = useState(false);
    const [docModalOpen, setDocModalOpen] = useState(false);
    const [teamModalOpen, setTeamModalOpen] = useState(false);


    return (
        <>
            <Row className="mt-5">
                <Col md={5}>
                    <p className="text-start fw-bold" style={{ color: "#6a1b9a", cursor: "pointer" }} > FileIDTeamName@DealToClose.App </p>
                </Col>
                <Col md={7}>
                    <div className="d-flex justify-content-end gap-2 w-100">
                        <EmailButton label="Compose Email" width="160px" onClick={(e) => { e.stopPropagation(); setModalOpen(true) }} />
                        <AddFolderButton label="Add Document" width="160px" color="primary" onClick={(e) => { e.stopPropagation(); setDocModalOpen(true) }} />
                        <AddTeamMember isOpen={teamModalOpen} toggle={() => setTeamModalOpen(!teamModalOpen)} style={{ marginTop: "2px" }} />
                        <RegStickyNoteButton label="Add Note" width="130px" color="primary" onClick={onAddNote} />
                        <HistoryButton label="Activity Log" width="140px" color="primary" onClick={() => console.log("Button Click")} />
                    </div>
                </Col>
            </Row>

            <EmailCompose isOpen={modalOpen} toggle={() => setModalOpen(!modalOpen)} />
            <AddDocumentModal isOpen={docModalOpen} toggle={() => setDocModalOpen(!docModalOpen)} />
        </>
    );
};

export default CenterButtons;
