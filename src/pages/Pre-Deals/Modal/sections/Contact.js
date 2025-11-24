import React, { useState } from "react";
import { Row, Col } from "reactstrap";
import Select from "react-select";
import { contactRoles } from "constants/config";
import { FaPlusButton, FaTrashCanButton } from "pages/utils/allButton";

const Contact = () => {
    const [inputFields, setInputFields] = useState([{ contact_role: "", contact_name: "" }]);

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

    const handleRoleChange = (selected, index) => {
        setInputFields(prev => {
            const updated = [...prev];
            updated[index].contact_role = selected ? selected.value : "";
            return updated;
        });
    };

    const handleNameChange = (e, index) => {
        setInputFields(prev => {
            const updated = [...prev];
            updated[index].contact_name = e.target.value;
            return updated;
        });
    };

    return (
        <div id="section-4">
            <div className="d-block mt-2">
                <h3 className="modal-title fw-bold mb-1">Contact</h3>
            </div>

            <div className="inner-repeater">
                <div className="inner form-group mb-0">
                    <div id="repeater">

                        {inputFields.map((field, index) => (
                            <div key={index} id={`nested${index}`}>
                                <Row>

                                    {/* Role */}
                                    <Col md="5">
                                        <div className="mb-3">
                                            <label>Select a Role</label>

                                            <Select
                                                id={`contact_role_${index}`}
                                                name="contact_role"
                                                isClearable
                                                classNamePrefix="select"
                                                options={contactRoles}
                                                value={
                                                    contactRoles.find(
                                                        r => r.value === field.contact_role
                                                    ) || null
                                                }
                                                onChange={(selected) => handleRoleChange(selected, index)}
                                                placeholder="Select a Role"
                                            />
                                        </div>
                                    </Col>

                                    {/* Contact Name */}
                                    <Col md="5">
                                        <div className="mb-3">
                                            <label>Select the Contact</label>

                                            <input
                                                type="text"
                                                name="contact_name"
                                                className="form-control"
                                                placeholder="Select Contact"
                                                value={field.contact_name}
                                                onChange={(e) => handleNameChange(e, index)}
                                            />
                                        </div>
                                    </Col>

                                    {/* Add / Remove Button */}
                                    <Col
                                        md={1}
                                        className="d-flex flex-column justify-content-end"
                                        style={{ marginBottom: "18px" }}
                                    >
                                        {index === inputFields.length - 1 ? (
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
                                                onClick={() => handleRemoveFields(index)}
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
