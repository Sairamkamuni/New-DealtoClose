import React, { useState, useEffect } from "react"
import { Row, Col, Modal } from "reactstrap"
import {
    FamilyMembersOption, RelationshipTypeOption, TypeOption, StatusOption, TitleOption, SourceOption, TagsOption, AgentsName
} from "AllDummyData/ContacsDummyData"
import { InputField, SelectField, AsyncSelectField, DatePickerField } from "pages/InputFields/InputFields"
import AllButton, { FaPlusButton, FaTrashCanButton } from "pages/utils/allButton"
import { FormHandlers } from "pages/InputFields/FormHandlers"

const ContactModal = ({ isOpen, toggle }) => {
    const [formType, setFormType] = useState("Client");
    const [inputFields, setInputFields] = useState([{ family_member: "", relation_type: "" }]);
    const { formData, handleChange, handleSubmit, handleSelectChange, handleDateChange, handleContactChange } =
        FormHandlers({ apiUrl: "/api/deals", toggle: toggle, entity: "Contact", });


    useEffect(() => {
        handleContactChange(inputFields);
    }, [inputFields]);

    const handleAddFields = () => {
        setInputFields([
            ...inputFields,
            { family_member: "", relation_type: "" }
        ]);
    };

    const handleRemoveFields = (index) => {
        const values = [...inputFields];
        values.splice(index, 1);
        setInputFields(values);
    };

    return (
        <Modal isOpen={isOpen} toggle={toggle} scrollable={true} style={{ maxWidth: "650px" }} >
            <div className="modal-header d-block">
                <h3 className="modal-title fw-bold mb-1">Add New Contact</h3>
                <h6 className="modal-subtitle text-muted">Fill in the details below to add a new contact.</h6>
                <button type="button" onClick={toggle} className="close" aria-label="Close"></button>
            </div>

            <div className="modal-body">
                <div className="mb-4">
                    <button className={`btn me-3 w-25 ${formType === "Client" ? "btn-primary" : "btn-outline-primary"}`}
                        onClick={() => setFormType("Client")}>Client</button>
                    <button className={`btn w-25 ${formType === "Collaborator" ? "btn-primary" : "btn-outline-primary"}`}
                        onClick={() => setFormType("Collaborator")}>Collaborator</button>
                </div>

                <Row className="g-3">
                    <Col md="6">
                        <InputField label="First Name" type="text" name="first_name" placeholder="Enter First Name" value={formData?.first_name}
                            onChange={handleChange} />
                    </Col>
                    <Col md="6">
                        <InputField label="Last Name" type="text" name="last_name" placeholder="Enter Last Name" value={formData?.last_name}
                            onChange={handleChange} />
                    </Col>

                    <Col md="12">
                        <InputField label="Company Name" type="text" name="company_name" placeholder="Enter Company Name" value={formData?.company_name}
                            onChange={handleChange} />
                    </Col>

                    <Col md="6">
                        <InputField label="Phone Number" type="number" name="phone" placeholder="Enter Phone Number" value={formData?.phone}
                            onChange={handleChange} />
                    </Col>
                    <Col md="6">
                        <InputField label="Email Address" type="email" name="email" placeholder="Enter Email Address" value={formData?.email}
                            onChange={handleChange} />
                    </Col>

                    <Col md="12">
                        <SelectField label="Type" name="type" options={TypeOption} value={formData?.type}
                            onChange={handleSelectChange} placeholder="Select Type..." />
                    </Col>

                    {formType === "Collaborator" && (
                        <Col md="12">
                            <SelectField label="Title" name="title" options={TitleOption} value={formData?.title}
                                onChange={handleSelectChange} placeholder="Select Title..." />
                        </Col>
                    )}

                    {formType === "Client" && (
                        <>
                            <Col md="12">
                                <SelectField label="Status" name="status" options={StatusOption} value={formData?.status}
                                    onChange={handleSelectChange} placeholder="Select Status..." />
                            </Col>

                            <Col md="6">
                                <DatePickerField label="Date Of Birth" name="date_of_birth" value={formData?.date_of_birth}
                                    onChange={handleDateChange} placeholder="MM, DD, YYYY" />
                            </Col>

                            <Col md="6">
                                <DatePickerField label="Home Anniversary Date" name="home_anniversary" value={formData?.home_anniversary}
                                    onChange={handleDateChange} placeholder="MM, DD, YYYY" />
                            </Col>

                            <Col md="12">
                                <SelectField label="Source" name="source" options={SourceOption} value={formData?.source}
                                    onChange={handleSelectChange} placeholder="Select Source..." />
                            </Col>
                        </>)}

                    <Col md="12">
                        <SelectField label="Tags" name="tags" options={TagsOption} value={formData?.tags}
                            onChange={handleSelectChange} placeholder="Select Tags..." />
                    </Col>

                    <div style={{ marginTop: "22px" }}>
                        <div className="p-3" style={{ border: "1px solid #dad1e0", borderRadius: "5px", backgroundColor: "#ece4f1" }}>
                            <h5 className="text-primary fw-bolder">Add Family Member</h5>
                            {inputFields.map((field, key) => (
                                <div key={key} id={`nested${key}`}>
                                    <Row>
                                        <Col md="5" className="mb-3">
                                            <AsyncSelectField label="Family Member" name="family_member"
                                                optionsList={FamilyMembersOption} value={field.family_member}
                                                onChange={(e) => {
                                                    setInputFields(prev => {
                                                        const updated = [...prev];
                                                        updated[key] = { ...updated[key], family_member: e?.label || "" };
                                                        return updated;
                                                    });
                                                }}

                                            />
                                        </Col>

                                        <Col md="5">
                                            <AsyncSelectField label="Relation Type" name="relation_type"
                                                optionsList={RelationshipTypeOption} value={field.relation_type}
                                                onChange={(e) => {
                                                    setInputFields(prev => {
                                                        const updated = [...prev];
                                                        updated[key] = { ...updated[key], relation_type: e?.label || "" };
                                                        return updated;
                                                    });
                                                }}
                                            />
                                        </Col>

                                        <Col md="1" className="d-flex flex-column justify-content-end" style={{ marginBottom: "18px" }}>
                                            {(inputFields.length - 1) === key ? (
                                                <FaPlusButton width="70px" outline={false} onClick={handleAddFields} iconMarginRight="0px" />
                                            ) : (
                                                <FaTrashCanButton width="70px" color="danger" outline={false} iconMarginRight="0px"
                                                    onClick={() => handleRemoveFields(key)} />
                                            )}
                                        </Col>
                                    </Row>
                                </div>
                            ))}
                        </div>
                    </div>

                    <Col md="12" className="mb-3">
                        <SelectField label="Agent Name" name="agent_name" options={AgentsName} value={formData?.agent_name}
                            onChange={handleSelectChange} placeholder="Select Agent Name..." />
                    </Col>
                </Row>

                <hr />
                <Row>
                    <Col className="d-flex justify-content-end gap-3">
                        <AllButton label='Cancel' onClick={toggle} width="70px" outline={false} color="danger" />
                        <AllButton label='Add Contact' onClick={handleSubmit} width="120px" outline={false} />
                    </Col>
                </Row>
            </div>
        </Modal>
    )
}

export default ContactModal;