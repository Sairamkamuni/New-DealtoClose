import React, { useState, useEffect } from "react";
import { Row, Col } from "reactstrap";
import { FaPlusButton, FaTrashCanButton } from "pages/utils/allButton";
import { AsyncSelectField } from "pages/InputFields/InputFields";
import { contactRoles, contactNames } from "AllDummyData/DealsDummyData";

const Contact = ({ onContactChange }) => {

    const [inputFields, setInputFields] = useState([
        { contact_role: "", contact_name: "" }
    ]);

    useEffect(() => {
        onContactChange(inputFields);
    }, [inputFields]);

    const handleAddFields = () => {
        setInputFields([
            ...inputFields,
            { contact_role: "", contact_name: "" }
        ]);
    };

    const handleRemoveFields = (index) => {
        const values = [...inputFields];
        values.splice(index, 1);
        setInputFields(values);
    };

    return (
        <div id="section-4">
            <div className="d-block mb-3 mt-1">
                <h3 className="modal-title fw-bold mb-1">Contact</h3>
            </div>

            <div className="inner-repeater">
                <div className="inner form-group">
                    <div id="repeater">

                        {inputFields.map((field, key) => (
                            <div key={key} id={`nested${key}`}>
                                <Row>

                                    {/* ------- CONTACT ROLE -------- */}
                                    <Col md="5" className="mb-3">
                                        <AsyncSelectField
                                            label="Select a Role"
                                            name="contact_role"
                                            optionsList={contactRoles}
                                            value={field.contact_role}
                                            onChange={(e) => {
                                                setInputFields(prev => {
                                                    const updated = [...prev];
                                                    updated[key] = { ...updated[key], contact_role: e?.label || "" };
                                                    return updated;
                                                });
                                            }}

                                        />
                                    </Col>

                                    {/* ------- CONTACT NAME -------- */}
                                    <Col md="5">
                                        <AsyncSelectField
                                            label="Select the Contact"
                                            name="contact_name"
                                            optionsList={contactNames}
                                            value={field.contact_name}
                                            onChange={(e) => {
                                                setInputFields(prev => {
                                                    const updated = [...prev];
                                                    updated[key] = { ...updated[key], contact_name: e?.label || "" };
                                                    return updated;
                                                });
                                            }}
                                        />
                                    </Col>

                                    <Col
                                        md="1"
                                        className="d-flex flex-column justify-content-end"
                                        style={{ marginBottom: "18px" }}
                                    >
                                        {(inputFields.length - 1) === key ? (
                                            <FaPlusButton
                                                width="70px"
                                                outline={false}
                                                onClick={handleAddFields}
                                            />
                                        ) : (
                                            <FaTrashCanButton
                                                width="70px"
                                                color="danger"
                                                outline={false}
                                                onClick={() => handleRemoveFields(key)}
                                            />
                                        )}
                                    </Col>

                                </Row>
                            </div>
                        ))}

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
