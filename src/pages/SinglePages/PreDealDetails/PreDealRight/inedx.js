import React from "react";
import { Row, Col } from "reactstrap";
import MainButton from "../MainButton";
import ContactList from "./ContactList";
import Tasks from "./Tasks";
import Notes from "./Notes";
import FolderCard from "./FolderCard";

const PreDealRight = () => {

    return (
        <Row className="mt-4">
            <Col>
                <MainButton />

                <FolderCard />

                <ContactList />

                <Tasks />

                <Notes />

            </Col>
        </Row>

    );
};

export default PreDealRight;
