import React, { useState, useEffect } from "react";
import { Row, Col } from "reactstrap";
import Select, { components } from "react-select"
import { contactRoles } from "constants/config";
import { FaPlusButton, FaTrashCanButton } from "pages/utils/allButton";

const Contact = () => {

    const [inputFields, setInputFields] = useState([
        { contact_role: "", contact_name: "" },
    ]);

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
            <div className="d-block mt-2">
                <h3 className="modal-title fw-bold mb-1">Contact</h3>
            </div>
            <div className="inner-repeater">
                <div className="inner form-group mb-0">
                    <div id="repeater">
                        {inputFields.map((field, key) => (
                            <div key={key} id={`nested${key}`}>
                                <Row>
                                    <Col>
                                        <div className="mb-3">
                                            <label>Select a Role</label>
                                            <Select
                                                id={`contact_role_${key}`}
                                                name="contact_role"
                                                isClearable={true}
                                                className="basic-single"
                                                classNamePrefix="select"
                                                options={contactRoles}
                                                onChange={(e) => {
                                                    setInputFields(prev => {
                                                        const updated = [...prev];
                                                        updated[key] = {
                                                            ...updated[key],
                                                            contact_role: e.value,
                                                            contact_name: ""
                                                        };
                                                        return updated;
                                                    });
                                                }}
                                                placeholder="Select a Role"
                                            />
                                        </div>
                                    </Col>

                                    <Col>
                                        <div className="mb-3">
                                            <label>Select the Contact</label>
                                            <input
                                                type="text"
                                                name="contact"
                                                className="form-control"
                                                placeholder="Select Contact"
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
                                        </div>
                                    </Col>

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
    )
};

export default Contact;
