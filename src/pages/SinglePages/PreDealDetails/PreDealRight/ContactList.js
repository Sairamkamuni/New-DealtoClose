import React, { useState } from "react";
import { Collapse, Row, Col, Card } from "reactstrap";
import { AddPlusCircleButton, PencilButton } from "pages/utils/allButton";
import classnames from "classnames";
import NewContactModal from "pages/AllModals/ContactModal";

const ContactList = ({ contacts }) => {
    const [modalOpen, setModalOpen] = useState(false);
    const [openFolders, setOpenFolders] = useState(false);
    const [openGroups, setOpenGroups] = useState(contacts.map((_, i) => i));

    const toggleFolder = () => {
        setOpenFolders(!openFolders);
    };

    const toggleContactGroup = (index) => {
        if (openGroups.includes(index)) {
            setOpenGroups(openGroups.filter((i) => i !== index));
        } else {
            setOpenGroups([...openGroups, index]);
        }
    };

    return (
        <>
            <Card className="accordion" id="accordion">
                <div className="accordion-item">
                    {/* Accordion Header */}
                    <div className={classnames("accordion-button accordion-header", { collapsed: !openFolders })} onClick={toggleFolder} style={{ cursor: "pointer" }} >
                        <div className="w-100 me-3 d-flex justify-content-between align-items-center">
                            <h2 style={{ fontSize: "18px", fontWeight: "bold", margin: 0 }}> Contacts </h2>

                            <div className="d-flex gap-2">
                                <AddPlusCircleButton label="Add Contact" onClick={(e) => { e.stopPropagation(); setModalOpen(true) }} />
                            </div>
                        </div>
                    </div>

                    {/* Main Collapse */}
                    <Collapse isOpen={openFolders} className="accordion-collapse">
                        {contacts.map((contact, index) => (
                            <div key={index} className="mb-3 shadow-sm border rounded">
                                {/* Contact Group Header */}
                                <div className="p-2 d-flex justify-content-between align-items-center bg-light" style={{ cursor: "pointer" }}
                                    onClick={() => toggleContactGroup(index)} >
                                    <h5 className="fw-bold text-dark mb-0"> {contact.contactTitle} </h5>
                                    <i className={`mdi ${openGroups.includes(index) ? "mdi-chevron-up" : "mdi-chevron-down"}`} />
                                </div>

                                {/* Contact Group Collapse */}
                                <Collapse isOpen={openGroups.includes(index)}>
                                    <div className="p-2">
                                        {contact.contactNames.length > 0 ? (
                                            contact.contactNames.map((c, i) => (
                                                <Row key={i} className="p-2 border-top align-items-center">
                                                    <Col>{c.name}</Col>
                                                    <Col>{c.role}</Col>
                                                    {c.company && <Col>{c.company}</Col>}
                                                    <Col>{c.phone}</Col>
                                                    <Col>{c.email}</Col>
                                                    <Col xs="auto">
                                                        <PencilButton width="30px" onClick={() => console.log("Edit Contact Clicked")} />
                                                    </Col>
                                                </Row>
                                            ))
                                        ) : (
                                            <p className="text-muted p-2 mb-0">No contacts found</p>
                                        )}
                                    </div>
                                </Collapse>

                            </div>
                        ))}
                    </Collapse>
                </div>
            </Card>

            <NewContactModal isOpen={modalOpen} toggle={() => setModalOpen(!modalOpen)} />
        </>
    );
};

export default ContactList;
