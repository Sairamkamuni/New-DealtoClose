import React, { useState, useEffect } from "react";
import { Row, Col } from "reactstrap";
import Select from "react-select";
import { contactRoles } from "AllDummyData/DealsDummyData";
import { FaPlusButton, FaTrashCanButton } from "pages/utils/allButton";

const Contact = ({ onContactChange }) => {

    const [inputFields, setInputFields] = useState([{ contact_role: "", contact_name: "" }]);

    useEffect(() => {
        onContactChange(inputFields);
    }, [inputFields]);

    const handleAddFields = () => {
        setInputFields([...inputFields, { contact_role: "", contact_name: "" }]);
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
                <div className="inner form-group mb-0">
                    <div id="repeater">

                        {inputFields.map((field, key) => (
                            <div key={key} id={`nested${key}`}>
                                <Row>
                                    {/* Contact Role */}
                                    <Col>
                                        <label>Select a Role</label>
                                        <Select
                                            id={`contact_role_${key}`}
                                            name="contact_role"
                                            isClearable={true}
                                            classNamePrefix="select"
                                            options={contactRoles}
                                            onChange={(e) => {
                                                setInputFields(prev => {
                                                    const updated = [...prev];
                                                    updated[key] = {
                                                        ...updated[key],
                                                        contact_role: e?.value || "",
                                                        contact_name: "" // reset on role change
                                                    };
                                                    return updated;
                                                });
                                            }}
                                            placeholder="Select a Role"
                                        />
                                    </Col>

                                    {/* Contact Name */}
                                    <Col>
                                        <label>Select the Contact</label>
                                        <input
                                            type="text"
                                            name="contact_name"
                                            className="form-control"
                                            placeholder="Enter Contact Name"
                                            value={field.contact_name}
                                            onChange={(e) => {
                                                setInputFields(prev => {
                                                    const updated = [...prev];
                                                    updated[key] = {
                                                        ...updated[key],
                                                        contact_name: e.target.value
                                                    };
                                                    return updated;
                                                });
                                            }}
                                        />
                                    </Col>

                                    {/* Buttons */}
                                    <Col md={1} className="d-flex flex-column justify-content-end" style={{ marginBottom: "18px" }}>
                                        {(inputFields.length - 1) === key ? (
                                            <FaPlusButton width="70px" outline={false} onClick={handleAddFields} />
                                        ) : (
                                            <FaTrashCanButton width="70px" color="danger" outline={false} onClick={() => handleRemoveFields(key)} />
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
