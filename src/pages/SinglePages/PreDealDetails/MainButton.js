import React, { useState } from "react";
import { Link } from "react-router-dom";
import { CheckButton, EmailButton, FileSignatureButton, AddFolderButton, HistoryButton, ArchiveButton } from "pages/utils/allButton";
import AddTeamMember from "pages/AllModals/AddTeamMember";
import EmailCompose from "pages/AllModals/EmailCompose";
import CreateFolder from "pages/AllModals/CreateFolder";

const MainButton = () => {
    const [modalOpen, setModalOpen] = useState(false);
    const [teamModalOpen, setTeamModalOpen] = useState(false);
    const [folderModalOpen, setFolderModalOpen] = useState(false);

    return (
        <>
            <div className="d-flex justify-content-center gap-2 w-100">
                <Link to="/deals" style={{ textDecoration: "none" }}>
                    <CheckButton label="Open Executed Deal" outline={false} width="185px" />
                </Link>
                <EmailButton label="Compose Email" width="170px" onClick={(e) => { e.stopPropagation(); setModalOpen(true) }} />
                <FileSignatureButton label="Submit Offer to LA" width="175px" onClick={() => console.log('Button Clicked')} />
                <AddTeamMember isOpen={teamModalOpen} toggle={() => setTeamModalOpen(!teamModalOpen)} />
                <AddFolderButton label="Create Folder" width="140px" onClick={(e) => { e.stopPropagation(); setFolderModalOpen(true) }} />
                <HistoryButton label="Activity Log" width="130px" onClick={() => console.log('Button Clicked')} />
                <ArchiveButton label="Archive" width="110px" onClick={() => console.log('Button Clicked')} />
            </div>

            <EmailCompose isOpen={modalOpen} toggle={() => setModalOpen(!modalOpen)} />
            <CreateFolder isOpen={folderModalOpen} toggle={() => setFolderModalOpen(!folderModalOpen)} />
        </>
    )
}

export default MainButton;