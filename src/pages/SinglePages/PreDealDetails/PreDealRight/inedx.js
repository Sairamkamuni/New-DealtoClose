import React, { useState } from "react";
import { Row, Col } from "reactstrap";
import MainButton from "../MainButton";
import FolderList from "./FolderList";
import ContactList from "./ContactList";
import Tasks from "./Tasks";
import Notes from "./Notes";

import { folders, contacts } from "AllDummyData/PreDealDummyData";

const PreDealRight = () => {
    const [modalOpen, setModalOpen] = useState(false);
    const [contactModalOpen, setContactModalOpen] = useState(false);
    const [selectedDocs, setSelectedDocs] = useState({});

    return (
        <Row className="mt-4">
            <Col>
                <MainButton />

                <FolderList folders={folders} selectedDocs={selectedDocs} setSelectedDocs={setSelectedDocs} />

                <ContactList contacts={contacts} isOpen={contactModalOpen} toggle={() => setContactModalOpen(!contactModalOpen)} />

                <Tasks />

                <Notes />

            </Col>
        </Row>

    );
};

export default PreDealRight;
