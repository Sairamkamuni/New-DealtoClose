import React, { useState } from "react";
import MetaTags from "react-meta-tags";
import { Row, Col, Container } from "reactstrap";
import { PencilButton } from "pages/utils/allButton";

import ContactModal from "pages/Contacts/ContactFrom/ContactModal";
import ContactInfo from "./comps/ContactInfo/ContactInfo";
import AdditionalInfo from "./comps/AdditoinalInfo";

import { Link } from "react-router-dom";

const ContactDetails = () => {
    const [modalOpen, setModalOpen] = useState(false)


    return (
        <div className="page-content">
            <MetaTags>
                <title>Contact Details | {process.env.REACT_APP_TITLE}</title>
            </MetaTags>
            <Container fluid>
                <Row>
                    <Col md={3}>
                        <Row className="align-items-center mb-3" >
                            <Col md={4} className="d-flex align-items-center">
                                <h6 className="back-link mb-0">
                                    <Link to="/contacts" className="d-flex align-items-center">
                                        <i className="bx bx-chevron-left me-1" />
                                        Back
                                    </Link>
                                </h6>
                            </Col>

                            <Col md={8} className="d-flex justify-content-end">
                                <PencilButton label="Edit Contact" width="100%" outline={false} onClick={() => setModalOpen(true)} />
                            </Col>
                        </Row>


                        <Row>
                            <Col>
                                <ContactInfo />
                                <AdditionalInfo />
                            </Col>
                        </Row>
                    </Col>
                </Row>

            </Container>
            <ContactModal isOpen={modalOpen} toggle={() => setModalOpen(!modalOpen)} />
        </div>
    );
};

export default ContactDetails;
