import React, { useState } from "react"
import { Row, Col, Modal } from "reactstrap"
import Select from "react-select"
import "flatpickr/dist/themes/material_blue.css"
import Flatpickr from "react-flatpickr"
import CreatableSelect from 'react-select/creatable';
import { FamilyMembersOption, RelationshipTypeOption, TypeOption, StatusOption, TitleOption, SourceOption } from "AllDummyData/ContacsDummyData"

const ContactModal = ({ isOpen, toggle }) => {
    const [formType, setFormType] = useState("Client")
    const [formData, setFormData] = useState({ first_name: "", last_name: "", company_name: "", phone: "", email: "", type: null, status_or_title: null, date_of_birth: null, home_anniversary: null, source: null, tags: [], family_member: null, relation_type: null, agent_name: null })

    // Handle normal input change
    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData({ ...formData, [name]: value })
    }

    // Handle select change
    const handleSelectChange = (name, option) => {
        setFormData({ ...formData, [name]: option })
    }

    // Handle date change
    const handleDateChange = (name, date) => {
        setFormData({ ...formData, [name]: date?.[0] || null })
    }

    // Submit function
    const handleSubmit = () => {
        console.log("Selected Form Type:", formType);
        const payload = {
            formType, first_name: formData.first_name, last_name: formData.last_name, company_name: formData.company_name, phone: formData.phone, email: formData.email,
            type: formData.type?.value || null, status_or_title: formData.status_or_title?.value || null,
            date_of_birth: formData.date_of_birth ? formData.date_of_birth.toISOString().split("T")[0] : null,
            home_anniversary: formData.home_anniversary ? formData.home_anniversary.toISOString().split("T")[0] : null, source: formData.source?.value || null,
            tags: formData.tags?.map((tag) => tag.value) || [], family_member: formData.family_member?.value || null, relation_type: formData.relation_type?.value || null,
            agent_name: formData.agent_name?.value || null,
        }

        console.log("✅ Backend Payload:", payload);
    }

    return (
        <Modal isOpen={isOpen} toggle={toggle} scrollable={true} style={{ maxWidth: "650px" }} >
            <div className="modal-header d-block">
                <h3 className="modal-title fw-bold mb-1">Add New Contact</h3>
                <h6 className="modal-subtitle text-muted">Fill in the details below to add a new contact.</h6>
                <button type="button" onClick={toggle} className="close" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>

            <div className="modal-body">
                {/* Switch buttons */}
                <div className="mb-4">
                    <button className={`btn me-3 w-25 ${formType === "Client" ? "btn-primary" : "btn-outline-primary"}`}
                        onClick={() => setFormType("Client")}>Client</button>
                    <button className={`btn w-25 ${formType === "Collaborator" ? "btn-primary" : "btn-outline-primary"}`}
                        onClick={() => setFormType("Collaborator")}>Collaborator</button>
                </div>

                <Row>
                    <Col>
                        <div className="mb-2">
                            <label>First Name</label>
                            <input type="text" name="first_name" className="form-control" placeholder="Enter First Name" value={formData.first_name} onChange={handleChange} />
                        </div>
                    </Col>
                    <Col>
                        <div className="mb-2">
                            <label>Last Name</label>
                            <input type="text" name="last_name" className="form-control" placeholder="Enter Last Name" value={formData.last_name} onChange={handleChange} />
                        </div>
                    </Col>
                </Row>

                <Row className="mt-2">
                    <Col>
                        <div className="mb-2">
                            <label>Company Name</label>
                            <input type="text" name="company_name" className="form-control" placeholder="Enter Company Name" value={formData.company_name} onChange={handleChange} />
                        </div>
                    </Col>
                </Row>

                <Row className="mt-2">
                    <Col>
                        <div className="mb-2">
                            <label>Phone Number</label>
                            <input type="text" name="phone" className="form-control" placeholder="Enter Phone Number" value={formData.phone} onChange={handleChange} />
                        </div>
                    </Col>
                    <Col>
                        <div className="mb-2">
                            <label>Email Address</label>
                            <input type="text" name="email" className="form-control" placeholder="Enter Email Address" value={formData.email} onChange={handleChange} />
                        </div>
                    </Col>
                </Row>

                <Row className="mt-2">
                    <Col>
                        <div className="mb-2 ajax-select mt-3 mt-lg-0 select2-container">
                            <label>Type</label>
                            <Select isClearable={true} isDisabled={formType === "Collaborator"} options={TypeOption} value={formData.type} onChange={(opt) => handleSelectChange("type", opt)} />
                        </div>
                    </Col>
                </Row>

                <Row className="mt-2">
                    <Col>
                        <div className="mb-2 ajax-select mt-3 mt-lg-0 select2-container">
                            <label>{formType === "Collaborator" ? "Title" : "Status"}</label>
                            <Select isClearable={true} options={formType === "Collaborator" ? TitleOption : StatusOption} value={formData.status_or_title}
                                onChange={(opt) => handleSelectChange("status_or_title", opt)} />
                        </div>
                    </Col>
                </Row>

                {formType === "Client" && (
                    <>
                        <Row className="mt-2">
                            <Col>
                                <div className="mb-2">
                                    <label>Date Of Birth</label>
                                    <Flatpickr className="form-control" options={{ altInput: true, altFormat: "F j, Y" }} value={formData.date_of_birth}
                                        onChange={(date) => handleDateChange("date_of_birth", date)} placeholder="MM, DD, YYYY" />
                                </div>
                            </Col>
                            <Col>
                                <div className="mb-2">
                                    <label>Home Anniversary Date</label>
                                    <Flatpickr className="form-control" options={{ altInput: true, altFormat: "F j, Y" }} value={formData.home_anniversary}
                                        onChange={(date) => handleDateChange("home_anniversary", date)} placeholder="MM, DD, YYYY" />
                                </div>
                            </Col>
                        </Row>

                        <Row className="mt-2">
                            <Col>
                                <div className="mb-2 ajax-select mt-3 mt-lg-0 select2-container">
                                    <label>Source</label>
                                    <CreatableSelect isClearable={true} isMulti={true} options={SourceOption} value={formData.source} onChange={(opt) => handleSelectChange("source", opt)} />
                                </div>
                            </Col>
                        </Row>
                    </>
                )}

                <Row className="mt-2">
                    <Col>
                        <div className="mb-2 ajax-select mt-3 mt-lg-0 select2-container">
                            <label>Tags</label>
                            <CreatableSelect isClearable={true} isMulti={true} onChange={(opt) => handleSelectChange("tags", opt)} />
                        </div>
                    </Col>
                </Row>

                <div className="mt-2 p-4 rounded-4 border shadow-sm bg-light">
                    <h5 className="mb-3 text-primary fw-semibold">Add Family Member</h5>
                    <Row>
                        <Col md={6} className="mb-3">
                            <label className="form-label fw-medium">Family Member</label>
                            <Select isClearable={true} options={FamilyMembersOption} value={formData.family_member}
                                onChange={(opt) => handleSelectChange("family_member", opt)}
                            />
                        </Col>
                        <Col md={6} className="mb-3">
                            <label className="form-label fw-medium">Relation Type</label>
                            <Select isClearable={true} options={RelationshipTypeOption} value={formData.relation_type} onChange={(opt) => handleSelectChange("relation_type", opt)} />
                        </Col>
                    </Row>
                </div>

                <Row className="mt-2">
                    <Col>
                        <div className="mb-2 ajax-select mt-3 mt-lg-0 select2-container">
                            <label>Agent Name</label>
                            <Select isClearable={true} options={RelationshipTypeOption} value={formData.agent_name} onChange={(opt) => handleSelectChange("agent_name", opt)} />
                        </div>
                    </Col>
                </Row>

                <Row>
                    <Col>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" onClick={toggle}>Close</button>
                            <button type="button" className="btn btn-primary" onClick={handleSubmit}> <i className="mdi mdi-plus me-1" /> Add Contact
                            </button>
                        </div>
                    </Col>
                </Row>
            </div>
        </Modal>
    )
}

export default ContactModal
