import React, { useState } from "react";
import { Row, Col, Collapse } from "reactstrap";
import Searchbar from "pages/utils/search_bar";
import { UserPlusButton, PencilButton } from "pages/utils/allButton";
import NewContactModal from "pages/AllModals/NewContactModal";
import { contactsDummyData } from "AllDummyData/DealsDummyData";

const ContactTabs = () => {
    const [modalOpen, setModalOpen] = useState(false)
    const [openGroups, setOpenGroups] = useState(contactsDummyData.map((_, i) => i));

    const toggleContactGroup = (index) => {
        if (openGroups.includes(index)) {
            setOpenGroups(openGroups.filter((i) => i !== index));
        } else {
            setOpenGroups([...openGroups, index]);
        }
    };

    return (
        <>
            <Row>
                <Col className="d-flex align-items-center justify-content-end gap-2">
                    <Searchbar style={{ width: "300px" }} />
                    <UserPlusButton label="Add Contact" height="36px" outline={false} onClick={(e) => { e.stopPropagation(); setModalOpen(true) }} />
                </Col>
            </Row>

            <Row className="mt-3">
                <Col>
                    <div className="accordion accordion-item" id="accordion" >
                        {contactsDummyData.map((contact, index) => (
                            <div key={index} className="mb-3">
                                <div className="p-2 d-flex justify-content-between align-items-center bg-primary bg-opacity-10" style={{ cursor: "pointer" }}
                                    onClick={() => toggleContactGroup(index)} >
                                    <h5 className="fw-bold text-dark mb-0">{contact.contactTitle}</h5>
                                    <i className={`mdi ${openGroups.includes(index) ? "mdi-chevron-up" : "mdi-chevron-down"}`} />
                                </div>

                                <Collapse isOpen={openGroups.includes(index)} >
                                    <div className="p-2">
                                        {contact.contactNames?.length > 0 ? (
                                            contact.contactNames.map((c, i) => (
                                                <Row key={i} className=" mt-2 ms-1 me-1 align-items-center">
                                                    <Col>{c.name}</Col>
                                                    <Col>{c.role}</Col>
                                                    {c.company && <Col>{c.company}</Col>}
                                                    <Col>{c.phone}</Col>
                                                    <Col>{c.email}</Col>
                                                    <Col xs="auto">
                                                        <PencilButton width="30px" borderless onClick={() => console.log("Edit Contact Clicked")} />
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

                    </div>
                </Col>
            </Row>


            <NewContactModal isOpen={modalOpen} toggle={() => setModalOpen(!modalOpen)} />
        </>
    )
}

export default ContactTabs;