import React, { useState } from "react";
import MetaTags from "react-meta-tags";
import { Container, Row, Col, Card, CardBody } from "reactstrap";
import ContactTabs from "./Components/ContactTabs";
import Searchbar from "pages/utils/search_bar";
import { FilterDropdown } from "pages/utils/filterDropdown";
import { FilterOptions } from "pages/Options/DropdownOptions";
import { AddPlusCircleButton } from "pages/utils/allButton";
import ContactTable from "./Table/ContactTable";
import { allContacts, clientContacts, collaboratorContacts } from "../../AllDummyData/ContacsDummyData";
import ContactModal from "./ContactFrom/ContactModal";

const Contacts = () => {
    const [activeTab, setActiveTab] = useState(1);
    const [selectedOption, setSelectedOption] = useState("every_one");
    const [selectedContact, setSelectedContact] = useState(null);
    const [modalOpen, setModalOpen] = useState(false);

    const handleEdit = (contact) => {
        setSelectedContact(contact);
        setModalOpen(true);
    };

    const tableRows =
        activeTab === 1
            ? allContacts
            : activeTab === 2
                ? clientContacts
                : collaboratorContacts;

    return (
        <React.Fragment>
            <div className="page-content">
                <MetaTags>
                    <title>Contacts | {process.env.REACT_APP_TITLE}</title>
                </MetaTags>

                <Container fluid>

                    <Card style={{ border: "1px solid #dad1e0", borderRadius: "12px" }} >
                        <CardBody>
                            <Row>
                                <Col md={3}>
                                    {/* ContactTabs */}
                                    <div className="me-3">
                                        <ContactTabs activeTab={activeTab} setActiveTab={setActiveTab} />
                                    </div>
                                </Col>
                                <Col >
                                    <div className="d-flex align-items-center justify-content-end gap-2" style={{ marginTop: "4px" }}>
                                        <Searchbar style={{ width: "600px" }} />
                                        <FilterDropdown dropdownFilterOptions={FilterOptions} selectedOption={selectedOption} setSelectedOption={setSelectedOption}
                                            width="140px" height="36px" />
                                        <AddPlusCircleButton label="Add New" width="120px" outline={false} onClick={() => setModalOpen(true)} height="36px" />
                                    </div>
                                </Col>
                            </Row>

                            <ContactTable rows={tableRows} callback={{ edit: handleEdit }} />
                        </CardBody>
                    </Card>

                </Container>
                <ContactModal isOpen={modalOpen} toggle={() => setModalOpen(!modalOpen)} contact={selectedContact} />

            </div>
        </React.Fragment >
    );
};

export default Contacts;
