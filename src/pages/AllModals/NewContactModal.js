import React, { useState } from "react";
import { Modal, Row, Col } from "reactstrap";
import AsyncSelect from "react-select/async";
import Select, { components } from "react-select";
import { contactRoles, buyerTypeOptions } from "constants/config";
import { FaPlusButton } from "pages/utils/allButton";
import ContactModal from "pages/Contacts/ContactFrom/ContactModal";

const NewContactModal = ({ isOpen, toggle }) => {
    const [modalOpen, setModalOpen] = useState(false);
    const [selectedContact, setSelectedContact] = useState(null);

    const loadOptions = (inputValue, callback) => {
        const filtered = buyerTypeOptions.filter((opt) =>
            opt.label.toLowerCase().includes(inputValue.toLowerCase())
        );
        callback(filtered);
    };

    const CustomMenuList = (props) => (
        <components.MenuList {...props}>
            {props.children}
            <FaPlusButton label="Add New" width="100%" outline={false} className="mt-2" onClick={(e) => { e.stopPropagation(); setModalOpen(true); }} />
        </components.MenuList>
    );

    return (
        <>
            {/* Parent Modal */}
            <Modal style={{ maxWidth: "500px" }} isOpen={isOpen} toggle={toggle} className="custom-modal" >
                <div className="modal-header d-block">
                    <h4 className="modal-title fw-bold mb-1">Add Contact to Pre-Deal</h4>
                    <p className="modal-subtitle text-muted"> Select a role and an existing contact to add them to this transaction. </p>
                    <button type="button" className="close" onClick={toggle}> <span>&times;</span> </button>
                </div>

                <div className="modal-body">
                    <Row>
                        <Col>
                            <label>Select a Role</label>
                            <Select name="contact_role" isClearable={true} classNamePrefix="select" options={contactRoles} placeholder="Select a Role" />
                        </Col>
                    </Row>

                    <Row>
                        <Col className="mt-2">
                            <div className="mb-2">
                                <label>Select the Contact</label>
                                <AsyncSelect loadOptions={loadOptions} defaultOptions isClearable={true} onChange={(e) => setSelectedContact(e)} components={{ MenuList: CustomMenuList }}
                                    placeholder="Select an option" />
                            </div>
                        </Col>
                    </Row>

                    <Row>
                        <Col className="d-flex justify-content-end mt-3 gap-2">
                            <button type="button" className="btn btn-danger" onClick={toggle}> Close </button>
                            <button type="button" className="btn btn-primary">Save </button>
                        </Col>
                    </Row>
                </div>
            </Modal>

            <ContactModal isOpen={modalOpen} toggle={() => setModalOpen(!modalOpen)} contact={selectedContact} isFromContacts={false} />
        </>
    );
};

export default NewContactModal;
